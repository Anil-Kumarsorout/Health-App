import React from 'react';
import { FaCalendarCheck, FaCheckCircle, FaSquare } from 'react-icons/fa';
import './Home.css';
import { Link } from 'react-router-dom';
const HomeSEction3component = () => {
    return (
        <div className=' w-100 '>
            <div className='container'>
                <div class="row  d-flex flex-wrap">
                    <div class="col-sm-12 col-lg-6" data-aos="fade-left">
                        <div class="card border-0 h-75">
                            <img src="https://alkaison.github.io/Health-Plus/static/media/doctor-book-appointment.edb3f4ac282ff3fefaec.png" class="card-img-top  my-images" alt="..." />

                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-6">
                        <div class="card  border-0  mt-5" data-aos="fade-right">
                            <div class="card-body text-start">
                                <h1 className='card-text'>Why Choose Health</h1>
                                <h1 className='card-text mt-2 text-start border-danger   border border-5 border-top-0 border-end-0 border-start-0 w-50 '></h1>
                                <p class="card-text text-secondary mt-3"><big>Discover the reasons to choose Health Plus for your healthcare needs. Experience expert care, convenience, and personalized solutions, making your well-being our top priority. Join us on a journey to better health and a happier life.</big></p>
                                <div className='card-text lh-lg mt-4'>
                                    <h4 className='card-text mt-3'><FaCheckCircle /> Best Professional Doctors</h4>
                                    <h4 className='card-text mt-3'><FaCheckCircle /> Emergency Care</h4>
                                    <h4 className='card-text mt-3'><FaCheckCircle /> 24/7 Support Live Chat</h4>
                                    <h4 className='card-text mt-3'><FaCheckCircle /> Enrollment Easy and Quick</h4>
                                    <button className='btn btn-info btn-lg mt-5'><FaCalendarCheck className='mb-1' /><Link to={"/appointment"} className='text-decoration-none text-white'>Book Appointement</Link> </button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' '>
                <div class="card border-0  bg-dark position-relative  text-white">
                    <img src="https://hvm.catapult.org.uk/wp-content/uploads/2020/03/AdobeStock_226315220-1024x684.jpeg" class="card-img opacity-50" height={"550px"} alt="..." />
                    <div class="card-img-overlay p-5 mt-5 text-white text-start container col-sm-12 col-lg-6 col-md-12 jsutify-content-start " data-aos="fade-up">
                        <h1 class="card-title  ">ALL KINDS OF DIAGNOSTICS</h1>
                        <p class="card-text   mb-5  "><b  >All the tests you need. One convenient location. SANA Medical Center has the region’s most comprehensive diagnostic and imaging services available.</b></p>
                        <Link to={"/appointment"} className=' w-75 btn btn-success btn-lg ms-3 '><FaCalendarCheck className='mb-1' />Book Appointement</Link>

                    </div>
                </div>
            </div>
            <div className=''>
                <div className='container mt-5'>
                    <div class="row ">
                        <div class=" bg-white w-75 m-auto"data-aos="fade-down">
                            <h1 className='card-text'>TESTIMONIALS</h1>
                            <h1 className='card-text mt-2 border-warning  border border-5 border-top-0 border-end-0 border-start-0 w-25 m-auto'></h1>
                        </div>
                        <div class="col-sm-12 col-lg-6">
                            <div class="card  p-5 border-0">

                                <div class="card-body text-start"data-aos="fade-right">
                                    <h5 class="card-title text-secondary lh-base"><i>The costs of treatments are very reasonable at HEALTH and I have always been impressed with the results. The fully medically qualified team at the clinic are professional, friendly and trustworthy.</i></h5>
                                    <div class="card border-0 mb-3" >
                                        <div class="row g-0">
                                            <div class="col-md-6 col-sm-6 col-lg-2 mt-3">
                                                <img src="https://livedemo00.template-help.com/wt_59090_v1/images/users/user-betty-wade-60x60.jpg" class="img-fluid rounded-circle" alt="..." />
                                            </div>
                                            <div class="col-md-6 col-sm-6 col-lg-4">
                                                <div class="card-body text-start lh-1">
                                                    <h5 class="card-title text-success">Betty Wade</h5>
                                                    <p class="card-text text-secondary">Patient</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-6">
                            <div class="card  p-5  border-0">
                                <div class="card-body  text-start"data-aos="fade-left">
                                    < h5 class="card-title text-secondary lh-base"><i>Dr. Snyder is a wonderful Doctor, who makes you feel important and who takes time to listen, which most doctors don’t do. Loved him from the first visit! Very professional assistance.</i></h5>
                                    <div class="card border-0 mb-3" >
                                        <div class="row g-0">
                                            <div class="col-md-6 col-sm-6 col-lg-2 mt-3">
                                                <img src="https://livedemo00.template-help.com/wt_59090_v1/images/users/user-bryan-green-60x60.jpg" class="img-fluid rounded-circle" alt="..." />
                                            </div>
                                            <div class="col-md-6 col-sm-6 col-lg-4">
                                                <div class="card-body lh-1 brorder-0 text-start">
                                                    <h5 class="card-title text-success">Bryan Green</h5>
                                                    <p class="card-text text-secondary">Patient</p>
                                                </div>
                                            </div>
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

export default HomeSEction3component;