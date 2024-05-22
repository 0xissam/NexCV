import React from 'react'
import PagesStyle from '../components/PagesStyle'
import Adv from '../components/Adv'

function Contact() {
    return (
        <>
            <PagesStyle title="Contact" main="Home"/>
            <section className="section-padding-100 contact_us_area" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading text-center">
                                <div className="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.2s">
                                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                                </div>
                                <h2 className="wow fadeInUp" data-wow-delay="0.3s">Contact With Us</h2>
                                <p className="wow fadeInUp" style={{
                                    color: 'black'
                                }} data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <div className="contact_form">
                                <form action="#" method="post" id="main_contact_form" novalidate>
                                    <div className="row">
                                        <div className="col-12">
                                            <div id="success_fail_info"></div>
                                        </div>

                                        <div className="col-12 col-md-6">
                                            <div className="group wow fadeInUp" data-wow-delay="0.2s">
                                                <input type="text" className='form-control' name="name" id="name" placeholder='Name' required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="group wow fadeInUp" data-wow-delay="0.3s">
                                                <input type="text" className='form-control' name="email" id="email" placeholder='Email' required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="group wow fadeInUp" data-wow-delay="0.4s">
                                                <input type="text" className='form-control' name="subject" id="subject" placeholder='Subject' required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="group wow fadeInUp" data-wow-delay="0.5s">
                                                <textarea name="message" className='form-control' id="message" required placeholder='Your Message'></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.6s">
                                            <button type="submit" className="btn dream-btn">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Adv/>
        </>
    )
}

export default Contact