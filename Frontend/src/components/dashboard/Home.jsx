import React, { useState } from 'react';
import axios from 'axios';
import '../../style1.css';

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
        hobbies: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const Proxy = "https://mycoreproxy-74d7d6780461.herokuapp.com/https://nexapi-2e84832bb07e.herokuapp.com/cv/generate-pdf"

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(Proxy, formData, { responseType: 'blob' });
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
                                        <input type="text" name="fullName" className="form-control" placeholder="Enter your name" onChange={handleChange} />
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Job Title:</label>
                                        <input type="text" name="jobTitle" className="form-control" placeholder="Ex: Web Developer" onChange={handleChange} />
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Your Address:</label>
                                        <input type="text" name="address" className="form-control" placeholder="Enter your address" onChange={handleChange} />
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Your Email:</label>
                                        <input type="email" name="email" className="form-control" placeholder="Enter your email" onChange={handleChange} />
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Website Link:</label>
                                        <input type="url" name="webLink" className="form-control" placeholder="Enter your website link" onChange={handleChange} />
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Phone No:</label>
                                        <input type="tel" name="phone" className="form-control" placeholder="Enter your phone number" onChange={handleChange} />
                                    </div>
                                    <div className="col-lg-12">
                                        <label>Your Bio Here</label>
                                        <textarea name="bio" rows="4" className="form-control" placeholder="About Me:" onChange={handleChange}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group add-edu">
                        <h2>Add Educations</h2>
                        <div className="all-edus shadow-none">
                            <div className="new-edu">
                                <label>Field of study:</label>
                                <input type="text" name="educationField" className="form-control" placeholder="Ex: Computer Science" onChange={handleChange} />
                                <label>Degree:</label>
                                <input type="text" name="educationDegree" className="form-control" placeholder="Ex: Bachelor's" onChange={handleChange} />
                                <label>School:</label>
                                <input type="text" name="educationSchool" className="form-control" placeholder="Ex: al-albayt university" onChange={handleChange} />
                                <div className="form-row">
                                    <div className="col">
                                        <label>From year:</label>
                                        <input type="month" name="educationFrom" className="form-control" onChange={handleChange} />
                                    </div>
                                    <div className="col">
                                        <label>To year (optional=present):</label>
                                        <input type="month" name="educationTo" className="form-control" onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <button className='btn btn-primary btn-md mr-2'>Add Education</button><button className='btn btn-primary btn-md'>Remove Education</button> */}
                    </div>
                    <div className="form-group add-exp mt-s">
                        <h2>Add Experiences</h2>
                        <div className="all-exps shadow-none">
                            <div className="new-exp">
                                <label>Title:</label>
                                <input type="text" name="experienceTitle" className="form-control" placeholder="Ex: Web Developer" onChange={handleChange} />
                                <label>Company:</label>
                                <input type="text" name="experienceCompany" className="form-control" placeholder="Ex: ProgressSoft" onChange={handleChange} />
                                <div className="form-row">
                                    <div className="col">
                                        <label>From year:</label>
                                        <input type="month" name="experienceFrom" className="form-control" onChange={handleChange} />
                                    </div>
                                    <div className="col">
                                        <label>To year (optional=present):</label>
                                        <input type="month" name="experienceTo" className="form-control" onChange={handleChange} />
                                    </div>
                                </div>
                                <label>Description (optional):</label>
                                <textarea name="experienceDescription" className="form-control" onChange={handleChange}></textarea>
                            </div>
                        </div>
                        {/* <button className='btn btn-primary btn-md mr-2' >Add Experience</button><button className='btn btn-primary btn-md'>Remove Experience</button> */}
                    </div>
                    <div className="form-group add-skill mt-s">
                        <h2>Add Skills</h2>
                        <div className="block-container shadow-none">
                            <div className="all-skills">
                                <div className="new-skills">
                                    <label>Skill</label>
                                    <input type="text" name="skillName" className="form-control" onChange={handleChange} />
                                    <label>Proficiency</label>
                                    <input type="text" name="skillProficiency" className="form-control" onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group add-social mt-s">
                        <h2>Add Social Links</h2>
                        <div className="block-container shadow-none">
                            <div className="all-socials">
                                <div className="new-skills">
                                    <label>Social Name</label>
                                    <input type="text" name="socialName" className="form-control" onChange={handleChange} />
                                    <label>Social Link</label>
                                    <input type="url" name="socialLink" className="form-control" onChange={handleChange} />
                                    {/* <label>Social icon image (16px*16px)</label>
                                    <input type="file" name="socialIcon" className="form-control" onChange={handleChange} /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group add-hobby mt-s">
                        <h2>Add Hobbies</h2>
                        <div className="block-container shadow-none">
                            <div className="all-hobbies">
                                <div className="new-skills">
                                    {/* <label>Hobby icon image (32px*32px)</label> */}
                                    <input type="text" name="hobbyIcon" className="form-control" onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-100" />
                    <input type="submit" name="submit" value="Create Resume" className="btn btn-primary btn-lg col-12" />
                </form>
            </div>
        </>
    );
}

export default DashboardHome;
