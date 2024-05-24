import React from 'react'
import '../../style1.css'
import { useSelector } from 'react-redux';

function Profile() {
    const user = useSelector((state) => state.user.value.user)

    return (
        <>

            <div class="container">
                <div className='block-container mt-5 shadow-none'>
                    <div className="row justify-content-around align-item-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 text-center">
                            <h3>User Profile</h3>
                            <div className='my-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                </svg>
                            </div>
                            <div>
                                <h5>{user.name}</h5>
                                <p className="lead">{user.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;