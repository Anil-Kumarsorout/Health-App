import React from 'react';
import { FaCalendarCheck, FaCamera, FaFacebook, FaGlobe, FaHeart, FaHome, FaLightbulb, FaMobile, FaPhotoVideo, FaUser } from 'react-icons/fa';
// import './Home.css';
import { Link } from 'react-router-dom';



const AboutSection1component = () => {
    return (
        <div class="row w-100  m-auto bg-light">
            <div class=" col-sm-12 col-lg-6 M-1 p-4 "data-aos="flip-left">
                <div class=" m-1 border-0 card rounded   ">
                    <div class="card-body bg-light text-start" >
                        <h3 class="card-title m-2"><FaHeart />   Health comes first</h3>
                        <h1 class="card-title mt-3 lh-base">Find your Doctor and make an Appointments</h1>

                        <p class="card-text   lh-base"><big>Talk to online doctors and get medical advice, online prescriptions, refills and medical notes within minutes. On-demand healthcare services at your fingertips.</big></p>
                        <Link to={"/appointment"} className='btn btn-info btn-lg mt-3'><FaCalendarCheck className='mb-1' />Book Appointement</Link>
                    </div>

                </div>
                <div class=" mt-3 d-flex flex-wrap my-ro">
                    <div class="row  ">
                        <div class="col-sm-4">
                            <div class="card border-0 bg-light">
                                <div class="card-body">
                                    <h2 class="card-title text-primary">145k+</h2>
                                    <h5 class="card-text">Receive Patients</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card border-0 bg-light">
                                <div class="card-body">
                                    <h2 class="card-title text-primary">50+</h2>
                                    <h5 class="card-text">Expert Doctors</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card border-0 bg-light">
                                <div class="card-body">
                                    <h2 class="card-title text-primary">10+</h2>
                                    <h5 class="card-text">Years of Experience</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
            <div class="col-sm-12 col-lg-6 f-div p-5">
                <div class="border-0  bg-light w-100  card">
                    <div class="card-body" data-aos="zoom-in">
                        <img src="https://alkaison.github.io/Health-Plus/static/media/doctor-picture.0261bb4efe7a9075c56a.png" class="card-img-top bg-ligh h-75 c-img bg-light" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection1component;