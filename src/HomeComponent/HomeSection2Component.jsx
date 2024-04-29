import React from 'react';
import { FaBriefcase, FaCalendar, FaClock, FaPhone, FaRegTimesCircle, FaSquare, FaTimes, FaTimesCircle } from 'react-icons/fa';
import './Home.css';
import { FaBusinessTime } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const HomeSection2Component = () => {
    return (
        <div className='mt-1 w-100' >
            <div className='container   '>
                <div class="row mh-2 g-2  row-cols-1  g-0">
                    <div class="col col-sm-12 col-md-6 col-lg-3 position-relative ">
                        <div class="card mh-1 p-4  rounded-0 my-card1 bg-white border-0 h-100" data-aos="fade-up">
                            <div class="card-header bg-white my-card4 fs-5"><FaClock /> OPENING HOURS</div>
                            <div class="card-body">
                                <div class="row ">
                                    <div class="col-sm-12 col-md-12 col-lg-12">
                                        <div class="card my-card1 border-0 ">
                                            <div class="card-body text-start d-flex justify-content-between">
                                                <p class="card-text">Mon–Fri</p>
                                                <p class="card-text">8:00am–7:00pm</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-12 col-lg-12">
                                        <div class="card my-card1 border-0">
                                            <div class="card-body text-start d-flex justify-content-between">
                                                <p class="card-text">Saturday</p>
                                                <p class="card-text">9:00am–5:00pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-12 col-lg-12">
                                        <div class="card my-card1 border-0 ">
                                            <div class="card-body text-start d-flex justify-content-between">
                                                <p class="card-text">Sunday </p>
                                                <p class="card-text">9:00am–3:00pm</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <button className='btn btn-info rounded-0  btn-lg my-btn w-100 '>View Time</button> */}



                        </div>
                    </div>
                    <div class="col col-sm-12 col-md-6 col-lg-3 position-relative" data-aos="fade-up">
                        <div class="card p-4 mh-1  rounded-0 my-card2 bg-white border-0 h-100">
                            <div class="card-header bg-white my-card5 fs-5"><FaBusinessTime />  DOCTORS’ TIMETABLE</div>
                            <div class="card-body">
                                <p class="card-text text-start">The following is for guidance only to help you plan your appointment with a preferred doctor or nurse. It does not guarantee availability as the doctors or nurses may sometimes be attending to other duties.</p>
                            </div>




                        </div>
                    </div>
                    <div class="col col-sm-12 col-md-6 col-lg-3 position-relative" data-aos="fade-up">
                        <div class="card p-4 mh-1 rounded-0 my-card1 bg-white border-0 h-100">
                            <div class="card-header bg-white my-card4 fs-5"><FaPhone />  APPOINTMENTS</div>
                            <div class="card-body">
                                <p class="card-text text-start">The first step towards a healthy life is to schedule an appointment. Please contact our office by phone or complete the appointment request form.</p>
                            </div>




                        </div>
                    </div>
                    <div class="col col-sm-12 col-md-6 col-lg-3 position-relative" data-aos="fade-up">
                        <div class="card p-4 mh-1 rounded-0 my-card2 bg-white border-0 h-100">
                            <div class="card-header bg-white my-card5 fs-5"><FaBriefcase />  EMERGENCY CASES</div>
                            <div class="card-body text-start">
                                <h4 className='card-text'>1-800-1234-567</h4>
                                <p class="card-textt">Call us!</p>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <div className='container'>
                    <div class="card text-center p-5 border-0">
                        <div class=" bg-white w-75 m-auto"data-aos="fade-up" >
                            <h1 className='card-text'>WHAT MAKES US DIFFERENT</h1>
                            <h1 className='card-text mt-2 border-info  border border-5 border-top-0 border-end-0 border-start-0 w-25 m-auto'></h1>
                        </div>
                        <div class="card-body mt-4">
                            <div class="row row-cols-1 row-cols-md-3 g-4">
                                <div class="col col-sm-12 col-lg-4"data-aos="fade-right">
                                    <div class="card border-0">
                                        <div className='my-img m-auto mt-3 shadow-lg rounded-circle'>

                                        </div>
                                        <div class="card-body text-center">
                                            <h4 class="card-title text-success">Modern Medicines</h4>
                                            <p class="card-text">We use a combination of traditional and modern medicines to heal patients.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col col-sm-12 col-md-4 col-lg-4"data-aos="fade-right">
                                    <div class="card border-0">
                                        <div className='my-img1 mt-3 shadow-lg m-auto rounded-circle'>

                                        </div>
                                        <div class="card-body">
                                            <h4 class="card-title text-center text-success">Qualified Doctors and Staff</h4>
                                            <p class="card-text">Our team of more than 20 professionals are highly trained to serve our patients’ needs.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class=" col-sm-12 col-md-4 col-lg-4" data-aos="fade-right">
                                    <div class="card border-0">
                                        <div className='my-img2 mt-3 shadow-lg m-auto rounded-circle'>

                                        </div>
                                        <div class="card-body">
                                            <h4 class="card-title text-success">Ambulance Services</h4>
                                            <p class="card-text">We provide reliable & efficient ambulance services to patients who need help getting to Health Medical Center.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSection2Component;