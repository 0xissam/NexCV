const express = require('express');
const router = express.Router();
const fs = require('fs');
const fsp = require('fs').promises;
const path = require('path');
const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');
const bodyParser = require('body-parser');

// Middleware to parse JSON bodies
router.use(bodyParser.json());

const OUTPUT_DOCX_PATH = path.join(__dirname, '../uploads/modified_template.docx');

router.post('/generate-pdf', async (req, res) => {
    const formData = req.body;

    const TEMPLATE_PATH = path.join(__dirname, `../uploads/${formData.template}.docx`);

    try {
        // Load the existing .docx template file
        await fsp.access(TEMPLATE_PATH);

        // Read the template file
        const content = await fsp.readFile(TEMPLATE_PATH, 'binary');

        // Load the DOCX file as a binary
        const zip = new PizZip(content);
        const doc = new Docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
        });

        // Replace placeholders with form data
        const skills = formData.skills || [];
        const skillData = skills.map(skill => ({ name: skill.name || '', proficiency: skill.proficiency || '' }));

        const education = formData.education || [];
        const educationData = education.map(edu => ({
            field: edu.field || '',
            degree: edu.degree || '',
            school: edu.school || '',
            from: edu.from || '',
            to: edu.to || '',
        }));

        const experience = formData.experience || [];
        const experienceData = experience.map(exp => ({
            title: exp.title || '',
            company: exp.company || '',
            from: exp.from || '',
            to: exp.to || '',
            description: exp.description || '',
        }));

        const languages = formData.languages || [];
        const languageData = languages.map(lang => ({
            name: lang.name || '',
            proficiency: lang.proficiency || '',
        }));

        doc.setData({
            fullName: formData.fullName || '',
            jobTitle: formData.jobTitle || '',
            address: formData.address || '',
            email: formData.email || '',
            webLink: formData.webLink || '',
            phone: formData.phone || '',
            bio: formData.bio || '',
            education: educationData,
            skills: skillData,
            experience: experienceData,
            languages: languageData,
            socialName: formData.socialName || '',
            socialLink: formData.socialLink || '',
        });

        // Render the document (replace all occurrences of {placeholders})
        doc.render();

        // Generate the modified DOCX file
        const buffer = doc.getZip().generate({ type: 'nodebuffer' });

        // Save the modified content to a new DOCX file
        await fsp.writeFile(OUTPUT_DOCX_PATH, buffer);

        // Stream the modified DOCX file as a response
        const readStream = fs.createReadStream(OUTPUT_DOCX_PATH);
        res.setHeader('Content-Disposition', 'attachment; filename="modified_template.docx"');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
        await readStream.pipe(res);

        // Clean up: remove the generated DOCX file
        // await fsp.unlink(OUTPUT_DOCX_PATH);

    } catch (error) {
        console.error('Error generating DOCX:', error);
        res.status(500).send('Internal Server Error: ' + error.message);
    }
});

module.exports = router;
