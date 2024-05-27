import React from 'react'
import PagesStyle from '../components/PagesStyle'
import Adv from '../components/Adv'
import { Link } from 'react-router-dom'

function Pricing() {
    return (
        <>
            <PagesStyle title="Pricing" main="Home"/>
            <section className="pricing section-padding-100-70 mt-5">

                <div className="container">

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="who-we-contant mt-s">
                                <div className="dream-dots">
                                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                                </div>
                                <h4>Our Pricing</h4>
                                <p style={{
                                    color: 'black',
                                    marginBottom: '30px'
                                }}>We offer competitive pricing plans designed to fit your budget and needs. Whether you're a job seeker looking to create a single standout resume or a recruiter seeking to streamline your hiring process, we have a pricing option for you.
                                </p>

                                <div className="free-7">
                                    <span>Lets Build CV</span>
                                    <p style={{
                                        color: 'black'
                                    }}> with 7days of Free Trial</p>
                                </div>
                                <div className="terms mt-30">
                                    <a href="#">Terms & Conditions </a>
                                    <p style={{
                                        color: 'black'
                                    }}>subject to change with perior notice</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single_price_table_content wow fadeInUp" data-wow-delay="0.2s">
                                <div className="price_table_text">
                                    <h1>$9.99</h1>
                                    <h5 className="gradient-text cyan">/ month</h5>
                                </div>
                                <div className="table_text_details">
                                    <h3>Monthly Pack</h3>
                                    <p style={{
                                        color: 'black'
                                    }}>You will be billed per month, and get unlimited access to all resume Templates and new added ones</p>
                                    
                                    <Link className='button mt-s' to='/contact'>Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single_price_table_content wow fadeInUp" data-wow-delay="0.3s">
                                <div className="price_table_text">
                                    <h1>$7.99</h1>
                                    <h5 className="gradient-text cyan">/ month</h5>
                                </div>
                                <div className="table_text_details">
                                    <h3>Yearly Pack <span> save 20%</span></h3>
                                    <p style={{
                                        color: 'black'
                                    }}>You will be billed per Year, and get unlimited access to all resume Templates and new added ones</p>

                                    <Link className='button mt-s' to='/contact'>Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        <Adv/>

        </>
    )
}

export default Pricing