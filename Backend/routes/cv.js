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

const TEMPLATE_PATH = path.join(__dirname, '../uploads/template2.docx');
const OUTPUT_DOCX_PATH = path.join(__dirname, '../uploads/modified_template.docx');

router.post('/generate-pdf', async (req, res) => {
    const formData = req.body;

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
        doc.setData({
            phone: formData.phone || '',
            email: formData.email || '',
            fullName: formData.fullName || '',
            webLink: formData.webLink || '',
            educationDegree: formData.educationDegree || '',
            educationField: formData.educationField || '',
            educationSchool: formData.educationSchool || '',
            educationFrom: formData.educationFrom || '',
            educationTo: formData.educationTo || '',
            bio: formData.bio || '',
            skillName: formData.skillName || '',
            socialName: formData.socialName || '',
            socialLink: formData.socialLink || '',
            skillProficiency: formData.skillProficiency || '',
            experienceTitle: formData.experienceTitle || '',
            experienceFrom: formData.experienceFrom || '',
            experienceTo: formData.experienceTo || '',
            experienceCompany: formData.experienceCompany || '',
            experienceDescription: formData.experienceDescription || '',
            // Add more replacements as needed
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
        readStream.pipe(res);

        // Clean up: remove the generated DOCX file
        await fsp.unlink(OUTPUT_DOCX_PATH);

    } catch (error) {
        console.error('Error generating DOCX:', error);
        res.status(500).send('Internal Server Error: ' + error.message);
    }
});

module.exports = router;
