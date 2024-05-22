import React from 'react'
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
    const date = new Date();
    return (
        <div>
            <div className="crm_body_bg">
                <nav className="sidebar bg-white">
                    <div className="logo d-flex justify-content-between">
                        <a href="/">
                            <h3>Nex<span className='text-primary'>CV</span></h3>
                        </a>
                        <div className="sidebar_close_icon d-lg-none">
                            <i className="ti-close"></i>
                        </div>
                    </div>
                    <ul id="sidebar_menu">
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                </svg>
                                <span>Create Forms</span>
                            </a>
                        </li>
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                </svg>
                                <span>Profile</span>
                            </a>
                        </li>
                    </ul>
                </nav>


                <section className="main_content dashboard_part" style={{
                    marginTop: '0',
                }}>

                    <div className="container">
                        <Outlet />
                    </div>

                    <div className="footer_part">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12 col-sm-12">
                                    <div className="footer_iner text-center">
                                        <p>{date.getFullYear()} © Influence - Designed by<a href="#"> Dashboard</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div >
    )
}
export default DashboardLayout;