import React from 'react';
import './Head.css';
import Logo from "../ImageComponent/logo.png";
import { Link, NavLink } from 'react-router-dom'
const HeaderComponent = () => {
    return (
        <div className='bg-primary position-sticky top-0 z-3 '>

        
        <div className='my-div container  bg-secondary'>
            <nav class="navbar   navbar-expand-lg my-size navbar-light ">
                <div class="container-fluid ">
                    <h2 className='bg-white p-1 ms-3 mt-1'>HEALTH-<img src="https://th.bing.com/th/id/OIP.GYLzBjK3NdklHwbDpSzM3AAAAA?rs=1&pid=ImgDetMain" className="my-image" alt="logo" />
                    </h2>
                    <button class="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon justify-content-center "></span>
                    </button>
                    <div class="collapse bg-secondary   position-relative h-100 navbar-collapse justify-content-right" id="navbarSupportedContent">
                        <ul class=" text-white nav position-absolute bg-secondary mynav  end-0 display-grid gap-4   ">
                            <li class="nav-item d-flex justify-content-center align-item-center">
                                <Link to={"/"} className='My-lnk text-light'>HOME</Link>
                            </li>
                            <li class="nav-item">
                                <NavLink to={"/About"} className='My-lnk  '>ABOUT</NavLink>
                            </li>
                            <li class="nav-item">
                                <Link to={"/Services"} className='My-lnk text-light'>SERVICES</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/Department"} className='My-lnk text-light'>DEPARTMENT</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/Ourteam"} className='My-lnk text-light'>OUR TEAM</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/Contact"} className='My-lnk text-light'>CONTACT</Link>
                            </li>
                            {/* <button className='btn btn-primary'>Live Chat</button> */}
                        </ul>
                        
                    </div>
                    
                </div>
            </nav>
        </div>
        </div>
    );
};

export default HeaderComponent;