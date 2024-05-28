import React, { useState } from 'react';
import axios from 'axios';
import '../../style1.css'; // Ensure this file contains any additional custom styles you might need

function DashboardHome() {
    const [formData, setFormData] = useState({
        fullName: '',
        jobTitle: '',
        address: '',
        email: '',
        webLink: '',
        phone: '',
        bio: '',
        education: [],
        experience: [],
        skills: [],
        socials: [],
        hobbies: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to handle adding skills
    const handleAddSkill = () => {
        setFormData({
            ...formData,
            skills: [...formData.skills, { name: '', proficiency: '' }]
        });
    };

    // Function to handle removing skills
    const handleRemoveSkill = (index) => {
        const updatedSkills = formData.skills.filter((_, i) => i !== index);
        setFormData({
            ...formData,
            skills: updatedSkills
        });
    };

    // Function to handle changing skills
    const handleSkillChange = (index, e) => {
        const { name, value } = e.target;
        const updatedSkills = [...formData.skills];
        updatedSkills[index][name] = value;
        setFormData({
            ...formData,
            skills: updatedSkills
        });
    };

    // Function to handle adding education
    const handleAddEducation = () => {
        setFormData({
            ...formData,
            education: [...formData.education, { field: '', degree: '', school: '', from: '', to: '' }]
        });
    };

    // Function to handle removing education
    const handleRemoveEducation = (index) => {
        const updatedEducation = formData.education.filter((_, i) => i !== index);
        setFormData({
            ...formData,
            education: updatedEducation
        });
    };

    // Function to handle changing education
    const handleEducationChange = (index, e) => {
        const { name, value } = e.target;
        const updatedEducation = [...formData.education];
        updatedEducation[index][name] = value;
        setFormData({
            ...formData,
            education: updatedEducation
        });
    };

    // Function to handle adding experience
const handleAddExperience = () => {
    setFormData({
        ...formData,
        experience: [...formData.experience, { title: '', company: '', from: '', to: '', description: '' }]
    });
};

// Function to handle removing experience
const handleRemoveExperience = (index) => {
    const updatedExperience = formData.experience.filter((_, i) => i !== index);
    setFormData({
        ...formData,
        experience: updatedExperience
    });
};

// Function to handle changing experience
const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperience = [...formData.experience];
    updatedExperience[index][name] = value;
    setFormData({
        ...formData,
        experience: updatedExperience
    });
};


    const Proxy = "https://mycoreproxy-74d7d6780461.herokuapp.com/https://nexapi-2e84832bb07e.herokuapp.com/cv/generate-pdf"

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post("http://localhost:3000/cv/generate-pdf", formData, { responseType: 'blob' });
            const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'modified_template.docx');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error generating DOCX', error);
        }
    };

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mt-5">
                        <div className="block-container shadow-none">
                            <div className="row align-items-center">
                                <div className="col-lg-2 col-md-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                    </svg>
                                </div>
                                <div className="col-lg-5 col-md-8 mt-s">
                                    <h6 className="">Upload your picture</h6>
                                    <p className="text-muted mb-0">For best results, use image 300px by 300px in either .jpg or .png</p>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <a href="#" className="btn btn-primary m-3">Upload</a>
                                    <a href="#" className="btn btn-soft-primary">Remove</a>
                                </div>
                            </div>
                            <div className="mt-30">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label>Full Name:</label>
                                        <input type="text" name="fullName" className="form-control mt-2" placeholder="Enter your name" onChange={handleChange} />
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Job Title:</label>
                                        <input type="text" name="jobTitle" className="form-control mt-2" placeholder="Ex: Web Developer" onChange={handleChange} />
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Your Address:</label>
                                        <input type="text" name="address" className="form-control mt-2" placeholder="Enter your address" onChange={handleChange} />
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Your Email:</label>
                                        <input type="email" name="email" className="form-control mt-2" placeholder="Enter your email" onChange={handleChange} />
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Website Link:</label>
                                        <input type="url" name="webLink" className="form-control mt-2" placeholder="Enter your website link" onChange={handleChange} />
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Phone No:</label>
                                        <input type="tel" name="phone" className="form-control mt-2" placeholder="Enter your phone number" onChange={handleChange} />
                                    </div>
                                    <div className="col-lg-12">
                                        <label>Your Bio Here</label>
                                        <textarea name="bio" rows="4" className="form-control mt-2" placeholder="About Me:" onChange={handleChange}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group add-edu mt-4">
                        <h2>Add Educations</h2>
                        <div className="block-container shadow-none">
                            <div className="all-education">
                                {formData.education.map((edu, index) => (
                                    <div key={index} className="new-education mb-3">
                                        <div className="form-group">
                                            <label>Field of study:</label>
                                            <input type="text" name="field" className="form-control mt-2" value={edu.field} onChange={(e) => handleEducationChange(index, e)} />
                                        </div>
                                        <div className="form-group">
                                            <label>Degree:</label>
                                            <input type="text" name="degree" className="form-control mt-2" value={edu.degree} onChange={(e) => handleEducationChange(index, e)} />
                                        </div>
                                        <div className="form-group">
                                            <label>School:</label>
                                            <input type="text" name="school" className="form-control mt-2" value={edu.school} onChange={(e) => handleEducationChange(index, e)} />
                                        </div>
                                        <div className="form-row">
                                            <div className="col">
                                                <label>From year:</label>
                                                <input type="month" name="from" className="form-control mt-2" value={edu.from} onChange={(e) => handleEducationChange(index, e)} />
                                            </div>
                                            <div className="col">
                                                <label>To year (optional=present):</label>
                                                <input type="month" name="to" className="form-control mt-2" value={edu.to} onChange={(e) => handleEducationChange(index, e)} />
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <button type="button" className="btn btn-soft-primary me-2 mr-2" onClick={() => handleRemoveEducation(index)}>Remove Education</button>
                                            {index === formData.education.length - 1 && (
                                                <button type="button" className="btn btn-primary" onClick={handleAddEducation}>Add Education</button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {formData.education.length === 0 && (
                                    <button type="button" className="btn btn-primary mt-3" onClick={handleAddEducation}>Add Education</button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="form-group add-exp mt-4">
    <h2>Add Experiences</h2>
    <div className="block-container shadow-none">
        <div className="all-experiences">
            {formData.experience.map((exp, index) => (
                <div key={index} className="new-experience mb-3">
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text" name="title" className="form-control mt-2" value={exp.title} onChange={(e) => handleExperienceChange(index, e)} />
                    </div>
                    <div className="form-group">
                        <label>Company:</label>
                        <input type="text" name="company" className="form-control mt-2" value={exp.company} onChange={(e) => handleExperienceChange(index, e)} />
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <label>From year:</label>
                            <input type="month" name="from" className="form-control mt-2" value={exp.from} onChange={(e) => handleExperienceChange(index, e)} />
                        </div>
                        <div className="col">
                            <label>To year (optional=present):</label>
                            <input type="month" name="to" className="form-control mt-2" value={exp.to} onChange={(e) => handleExperienceChange(index, e)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Description (optional):</label>
                        <textarea name="description" className="form-control mt-2" value={exp.description} onChange={(e) => handleExperienceChange(index, e)}></textarea>
                    </div>
                    <div className="d-flex mt-2">
                        <button type="button" className="btn btn-soft-primary me-2" onClick={() => handleRemoveExperience(index)}>Remove Experience</button>
                        {index === formData.experience.length - 1 && (
                            <button type="button" className="btn btn-primary" onClick={handleAddExperience}>Add Experience</button>
                        )}
                    </div>
                </div>
            ))}
            {formData.experience.length === 0 && (
                <button type="button" className="btn btn-primary mt-3" onClick={handleAddExperience}>Add Experience</button>
            )}
        </div>
    </div>
</div>

                    <div className="form-group add-skill mt-4">
                        <h2>Add Skills</h2>
                        <div className="block-container shadow-none">
                            <div className="all-skills">
                                {formData.skills.map((skill, index) => (
                                    <div key={index} className="new-skills mb-3">
                                        <div className="form-group">
                                            <label>Skill</label>
                                            <input type="text" name="name" className="form-control mt-2" value={skill.name} onChange={(e) => handleSkillChange(index, e)} />
                                        </div>
                                        <div className="form-group">
                                            <label>Proficiency</label>
                                            <input type="text" name="proficiency" className="form-control mt-2" value={skill.proficiency} onChange={(e) => handleSkillChange(index, e)} />
                                        </div>
                                        <div className="d-flex mt-2">
                                            <button type="button" className="btn btn-soft-primary me-2 mr-2" onClick={() => handleRemoveSkill(index)}>Remove Skill</button>
                                            {index === formData.skills.length - 1 && (
                                                <button type="button" className="btn btn-primary" onClick={handleAddSkill}>Add Skill</button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {formData.skills.length === 0 && (
                                    <button type="button" className="btn btn-primary mt-3" onClick={handleAddSkill}>Add Skill</button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="form-group add-social mt-4">
                        <h2>Add Social Links</h2>
                        <div className="block-container shadow-none">
                            <div className="all-socials">
                                <div className="new-skills">
                                    <label>Social Name</label>
                                    <input type="text" name="socialName" className="form-control mt-2" onChange={handleChange} />
                                    <label>Social Link</label>
                                    <input type="url" name="socialLink" className="form-control mt-2" onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group add-hobby mt-4">
                        <h2>Add Hobbies</h2>
                        <div className="block-container shadow-none">
                            <div className="all-hobbies">
                                <div className="new-skills">
                                    <input type="text" name="hobbyIcon" className="form-control mt-2" onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-5" />
                    <input type="submit" name="submit" value="Create Resume" className="btn btn-primary btn-lg col-12" />
                </form>
            </div>
        </>
    );
}

export default DashboardHome;
