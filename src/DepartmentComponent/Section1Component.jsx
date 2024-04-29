import React from 'react';
import { Link } from 'react-router-dom';
import './Department.css';
const Section1Component = () => {
    return (
        <div className=''>
            <div class="row g-0">
                <div class="col-sm-12 col-lg-6 ">
                    <div class="card border-0 h-100 p-5">

                        <div class="card-body lh-lg w-75 m-auto text-start"data-aos="fade-right">
                            <h1 class="card-title fs-1 ">PEDIATRICS</h1>
                            <h1 class="border-bottom-3 mt-4 border border-3 w-25  border-primary "></h1>
                            <p class="card-text">Our researchers lead the way in research of pediatric diseases including cancer, genetics, AIDS/HIV, and obesity.</p>
                            <p class="card-text ">We are a leading school of medicine for a broad spectrum of pediatric specialties. Our residents perform rotations in emergency medicine, cardiology, critical care, hematology and oncology, neonatology, infectious diseases and more.</p>

                            <button className='btn btn-info btn-lg'><Link to={"/more"} className="text-decoration-none">Learn More</Link></button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-6">
                    <div class="card border-0 h-100"data-aos="flip-left">
                        <img src="https://livedemo00.template-help.com/wt_59090_v1/images/pages/departments-01-960-611.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div class="row g-0 orders-change">
                <div class="col-sm-12 col-lg-6">
                    <div class="card border-0"data-aos="flip-right">
                        <img src="https://livedemo00.template-help.com/wt_59090_v1/images/pages/departments-02-960-611.jpg" alt="" />
                    </div>
                </div>
                <div class="col-sm-12 col-lg-6">
                    <div class="card p-5 border-0 h-100">
                    <div class="card-body lh-lg w-75 m-auto text-start"data-aos="fade-right">
                            <h1 class="card-title fs-1 ">DENTISTRY</h1>
                            <h1 class="border-bottom-3 mt-4 border border-3 w-25  border-primary "></h1>
                            <p class="card-text mt-3">At HEALTH Medical Hospitals, you’ll have access to a full range of dental services, ranging from preventive care, cosmetic dentistry and gum disease treatment to special care for patients with medical needs, such as head and neck cancers or bleeding disorders.</p>
                            <button className='btn btn-info btn-lg'><Link to={"/more"} className="text-decoration-none">Learn More</Link></button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row g-0">
                <div class="col-sm-12 col-lg-6">
                    <div class="card border-0 h-100 p-5">
                    <div class="card-body lh-lg w-75 m-auto text-start"data-aos="fade-right">
                            <h1 class="card-title fs-1 ">SURGERY  AND PHYSICIANS</h1>
                            <h1 class="border-bottom-3 mt-4 border border-3 w-25  border-primary "></h1>
                            <p class="card-text mt-3">Physicians and surgeons diagnose and treat injuries or illnesses. Physicians examine patients; take medical histories; prescribe medications; and order, perform, and interpret diagnostic tests.</p>
                            <button className='btn btn-info btn-lg'><Link to={"/more"} className="text-decoration-none">Learn More</Link></button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-6"data-aos="flip-left">
                    <div class="card border-0">
                        <img src="https://livedemo00.template-help.com/wt_59090_v1/images/pages/departments-03-960-611.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1Component;