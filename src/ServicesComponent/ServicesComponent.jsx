import React, { useEffect } from 'react';
import Section1Component from './Section1Component';
import { FaCrosshairs } from 'react-icons/fa';
import './Services.css'
import { NavLink, Outlet } from 'react-router-dom';
const ServicesComponent = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    return (
        <div className=''>

            <div class="row m-auto  bg-success   ">
                <div class="col-sm-6 col-lg-6">
                    <div class="card bg-success border-0  my-ron d-flex justify-content-center align-item-center">

                        <h5 class="card-title mylogo fs-1 text-white">SERVICES</h5>


                    </div>
                </div>
                <div class="col-sm-6 col-lg-6">
                    <div class="card border-0 bg-success my-ron d-flex justify-content-center align-item-center">
                        <h1 className='card-title'><FaCrosshairs className=' fs-2 mylogo  opacity-25' />  </h1>

                    </div>
                </div>
            </div>
            <div className='container p-2 mt-5'>
                <div class="row  w-100">
                    <div class="col-sm-12  col-lg-4 ">
                        <div class="card w-100 border-0 my-colu  "data-aos="fade-left">
                            <div class="card-body text-end d-flex flex-column   d-grid gap-3">
                                <NavLink to="/Services" className="fs-5 my-styl fw-lighter text-decoration-none">ROUTINE MEDICAL CARE<span className="border-end ms-2"></span></NavLink>
                                <NavLink to="/Services/PHYSIOTHERAPY" className="fs-5 my-styl fw-lighter text-decoration-none">PHYSIOTHERAPY<span className="border-end ms-2"></span></NavLink>
                                <NavLink to={"/Services/MINORSURGERY"} className="fs-5 my-styl fw-lighter text-decoration-none">MINOR SURGERY<span className="border-end ms-2"></span></NavLink>
                                <NavLink to={"/Services/NURSINGSERVICES"} className="fs-5 my-styl fw-lighter text-decoration-none">NURSING SERVICES<span className="border-end ms-2"></span></NavLink>
                                <NavLink to={"/Services/FLUVACCINATION"} className="fs-5 my-styl fw-lighter text-decoration-none">FLU VACCINATION<span className="border-end ms-2"></span></NavLink>
                                <NavLink to={"/Services/DIAGONSTICIMAGING "} className="fs-5 my-styl fw-lighter text-decoration-none">DIAGONSTIC IMAGING<span className="border-end ms-2"></span></NavLink>

                            </div>
                        </div>
                    </div>
                    
                    <Outlet/>
                </div>
            </div> 
        </div>
    );
};

export default ServicesComponent;