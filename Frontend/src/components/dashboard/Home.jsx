import React from 'react'
import '../../style1.css'

function DashboardHome() {
   
    return (
        <>

            <div class="container">
                <form method="post" action="#">
                    <div class="mt-5">
                        {/* <h2>Personal Info</h2> */}
                        <div class="block-container shadow-none">
                            <div class="row align-items-center">
                                <div class="col-lg-2 col-md-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                    </svg>
                                </div>
                                <div class="col-lg-5 col-md-8 mt-s">
                                    <h6 class="">Upload your picture</h6>
                                    <p class="text-muted mb-0">For best results, use image 300px by 300px in either .jpg or .png</p>
                                </div>
                                <div class="col-lg-5 col-md-12">
                                    <a href="#" class="btn btn-primary m-3">Upload</a>
                                    <a href="#" class="btn btn-soft-primary">Remove</a>
                                </div>
                            </div>
                            <div class="mt-30">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <label>Full Name:</label>
                                        <input type="text" name="full-name" class="form-control" placeholder="enter your name" />
                                    </div>

                                    <div class="col-lg-6">
                                        <label>Jop Title:</label>
                                        <input type="text" name="jop-title" class="form-control" placeholder="Ex: Web Developer" />
                                    </div>
                                    <div class="col-lg-6">
                                        <label>Your Address:</label>
                                        <input type="text" name="address" class="form-control" placeholder="enter your address" />
                                    </div>
                                    <div class="col-lg-6">
                                        <label>Your Email:</label>
                                        <input type="text" name="email" class="form-control" placeholder="enter your name" />
                                    </div>
                                    <div class="col-lg-6">
                                        <label>Website Link:</label>
                                        <input type="text" name="web-link" class="form-control" placeholder="enter your website link" />
                                    </div>

                                    <div class="col-lg-6">
                                        <label>Phone No:</label>
                                        <input type="text" name="phone" class="form-control" placeholder="Ex: Web Developer" />
                                    </div>
                                    <div class="col-lg-12">
                                        <label>Your Bio Here</label>
                                        <textarea name="comments" id="comments" rows="4" class="form-control" placeholder="About Me :"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group add-edu">
                        <h2>Add Educations</h2>
                        <div class="all-edus shadow-none">
                            <div class="new-edu">
                                <label>Field of study:</label>
                                <input type="text" name="edu[]" class="form-control" placeholder="Ex: Computer Science" />
                                <label>Degree:</label>
                                <input type="text" name="edu[]" class="form-control" placeholder="Ex: Bachelor's" />
                                <label>School:</label>
                                <input type="text" name="edu[]" class="form-control" placeholder="Ex: al-albayt university" />
                                <div class="form-row">
                                    <div class="col">
                                        <label>From year:</label>
                                        <input type="month" name="edu[]" class="form-control" />
                                    </div>
                                    <div class="col">
                                        <label>To year (optional=present):</label>
                                        <input type="month" name="edu[]" class="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="form-group add-exp mt-s">
                        <h2>Add Experiences</h2>
                        <div class="all-exps shadow-none">
                            <div class="new-exp">
                                <label>Title:</label>
                                <input type="text" name="exp[]" class="form-control" placeholder="Ex: Web Developer" />
                                <label>Company:</label>
                                <input type="text" name="exp[]" class="form-control" placeholder="Ex: ProgressSoft" />
                                <div class="form-row">
                                    <div class="col">
                                        <label>From year:</label>
                                        <input type="month" name="exp[]" class="form-control" />
                                    </div>
                                    <div class="col">
                                        <label>To year (optional=present):</label>
                                        <input type="month" name="exp[]" class="form-control" />
                                    </div>
                                </div>
                                <label>Description (optional):</label>
                                <textarea name="exp[]" class="form-control"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="clearfix"></div>

                    <div class="form-group add-skill mt-s">
                        <h2>Add Skills</h2>
                        <div class="block-container shadow-none">
                            <div class="all-skills">
                                <div class="new-skills">
                                    <label>Skill</label>
                                    <input type="text" name="skills[]" class="form-control" />
                                    <label>Proficiency</label>
                                    <input type="text" name="skills[]" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="clearfix"></div>

                    <div class="form-group add-social mt-s">
                        <h2>Add social Links</h2>
                        <div class="block-container shadow-none">
                            <div class="all-socials">
                                <div class="new-skills">
                                    <label>Social Name</label>
                                    <input type="text" name="socials[]" class="form-control" />
                                    <label>Social Link</label>
                                    <input type="text" name="socials[]" class="form-control" />
                                    <label>Social icon image (16px*16px)</label>
                                    <input type="file" name="socials[]" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="clearfix"></div>

                    <div class="form-group add-social mt-s">
                        <h2>Add Hoppies</h2>
                        <div class="block-container shadow-none">
                            <div class="all-hoppies">
                                <div class="new-skills">
                                    <label>Hoppy icon image (32px*32px)</label>
                                    <input type="file" name="hoppies[]" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr class="mt-100" />
                    <input type="submit" name="submit" value="Create Resume" class="btn btn-primary btn-lg col-12" />

                </form>
            </div>
        </>
    )
}

export default DashboardHome;