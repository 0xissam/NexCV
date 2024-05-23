import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { logout } from '../../features/User/user';

function DashboardLayout() {
    const user = useSelector((state) => state.user.value.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(logout())
        return navigate("/login")
    }
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
                        <div className="row">
                            <div className="col-12">
                                <div className="container">
                                    <div class="header_iner d-flex justify-content-between align-items-center mb-0" style={{
                                        width: '100%',
                                        marginLeft: '0',
                                    }}>
                                        <div class="sidebar_icon d-lg-none">
                                            <i class="ti-menu"></i>
                                        </div>
                                        <div class="serach_field-area">
                                            <div class="search_inner">
                                                <h3>Welcome, {user.name}</h3>
                                            </div>
                                        </div>
                                        <div class="header_right d-flex justify-content-between align-items-center">
                                            <div class="header_notification_warp d-flex align-items-center">
                                                <li>
                                                    <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                                                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                                                    </svg> </a>
                                                </li>
                                            </div>
                                            <div class="profile_info">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                                </svg>
                                                <div class="profile_info_iner">
                                                    <p>Welcome User!</p>
                                                    <h5>{user.name}</h5>
                                                    <div class="profile_info_details">
                                                        <a href="#">My Profile <i class="ti-user"></i></a>
                                                        <a href="#">Settings <i class="ti-settings"></i></a>
                                                        <button onClick={handleClick} className='btn btn-primary'>Log Out <i class="ti-shift-left"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <Outlet />
                            </div>
                        </div>
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