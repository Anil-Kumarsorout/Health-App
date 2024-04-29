import React from 'react';
import './About.css';
import { FaAward, FaCalendarCheck, FaCamera, FaCapsules, FaFacebook, FaGlobe, FaHeart, FaHome, FaLightbulb, FaMobile, FaPhotoVideo, FaStar, FaTrophy, FaUser } from 'react-icons/fa';

const Section1Component = () => {
    return (
        <div className=''>
            <div className='container w-100'>
                <div class="row c-3 ">
                    <div class="col-sm-12 col-lg-8">
                        <div class="card c-1 border-0"data-aos="fade-left">
                            <div class="card-body  text-start ">
                                <h1 class="card-title">A FEW WORDS ABOUT US</h1>
                                <h1 class="border-bottom-3 mt-4 border border-3 w-25  border-success"></h1>
                                <p class="card-text text-secondary mt-5">At SANA Medical Center of San Diego, our healthcare team has a slogan: Caring for Life. It symbolizes the variety of capabilities and services we bring to you. In essence, it represents a spirit and a passion for delivering the best medical care — in partnership with you with a focus on improving your health and your life. In practice, it has become the touchstone for a well-coordinated and systematic approach that teams physicians, nurses and support personnel in the pursuit of wellness.</p>
                                <p className='card-text text-secondary'>Our mission is to be recognized as the foremost healthcare facility in South California – providing high-quality, cost-effective and state-of-the-art medical services in a compassionate, caring manner.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-3">
                        <div class="card  border-0"data-aos="fade-right">
                            <div class="card-body">
                                <h5 class="card-title text-start">THE HEART OF MEDICAL CENTER</h5>
                                <div class="card border-0 lh-base">
                                    <div class="row w-100  g-0">
                                        <div class="col-sm-4 col-lg-6">
                                            <img src="https://livedemo00.template-help.com/wt_59090_v1/images/users/user-scott-riley-110x110.jpg" class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="card-body">
                                                <h5 class="card-title">Scott Riley</h5>
                                                <p class="card-text text-secondary"><small class="text-muted">Chief Medical Officer, Founder</small></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-body text-start '>
                                        <p className='card-text  '>With over 30 years of healthcare industry experience, Dr. Scott Riley serves as the Chief Medical Officer at SANA Medical Center.</p>
                                        <button className='btn btn-primary'>Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div class=" w-100  row bg-light">
                    <div class="col-sm-12 col-lg-5">
                        <div class="card bg-light border-0">
                            <div class="card-body"data-aos="zoom-in"data-aos-easing="linear"
     data-aos-duration="2000">
                                <img src="https://livedemo00.template-help.com/wt_59090_v1/images/backgrounds/background-02-676x545.jpg" class="card-img-top" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-7 bg-light">
                        <div class="card border-0 bg-light  p-5"data-aos="fade-right">
                            <div class="card-body">
                              <h2 class="card-title text-start text-primary">OUR ACHIEVEMENTS</h2>
                                <h1 class="border-bottom-3 mt-4 border border-3 w-25  border-primary"></h1>
                                <div class="row">
                                    <div class="col-sm-6 col-lg-6 t">
                                        <div class="card border-0 bg-light">
                                            <div class="card-body text-start">
                                                <h5 class="card-title text-primary"><FaTrophy className='text-success i-1'/> The Best Medical Center 2015</h5>                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-6">
                                        <div class="card border-0 bg-light">
                                            <div class="card-body d-flex ">
                                                <h5 class="card-title text-primary text-start"> <FaCapsules className='text-success i-1 '/> Certified by the International <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Association</h5>                                               
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-6">
                                        <div class="card border-0 bg-light">
                                            <div class="card-body text-start">
                                                <h5 class="card-title text-primary"><FaAward className='text-success i-1'/>The Best Doctors Award</h5>                                              
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-6 ">
                                        <div class="card border-0 bg-light">
                                            <div class="card-body text-start">
                                                <h5 class="card-title text-primary"><FaStar className='text-success i-1'/>The Five Star Award</h5>
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

export default Section1Component;