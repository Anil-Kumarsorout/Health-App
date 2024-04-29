import React from 'react';
import { FaMale } from 'react-icons/fa';
import { Link } from 'react-router-dom'
const Section2Component = () => {
    let data = [
        {
            id: 1,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-05-384x410.jpg",
            name: "Dr. Scott Riley",
            designation: "Chief Medical Officer"
        }, {
            id: 2,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-06-384x410.jpg",
            name: "Dr. Johnny Fowler",
            designation: "Surgeon"
        },
        {
            id: 3,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-07-384x410.jpg",
            name: "Dr. Eric Snyder",
            designation: "Ophthalmologist"
        },
        {
            id: 4,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-08-384x410.jpg",
            name: "Dr. Martha Schmidt",
            designation: "Therapist"
        },
        {
            id: 5,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-01-270x270.jpg",
            name: "Dr. Katherine Wong",
            designation: "Nurse"
        },
        {
            id: 6,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-02-270x270.jpg",
            name: "Dr. Nicholas Bryant",
            designation: "Endocrinologist"
        },
        {
            id: 7,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-03-270x270.jpg",
            name: "Dr. Victoria Morgan",
            designation: "Therapist"
        }
        ,
        {
            id: 8,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-04-270x270.jpg",
            name: "Dr. Walter Jenkins",
            designation: "Cardiologist"
        }


    ]
    return (
        <div className='w-100'>
            <div className=' container postion-relative'>
                <h1 className='text-warning'data-aos="fade-left">OUR TEAM</h1>
                <h1 class="border-bottom-3  border border-3 w-10 m-auto border-primary"></h1>
                <div class="row p-2 g-2">
                    {data.map(val =>
                        <div class="col-lg-3 my-bt  col-sm-6" data-aos="flip-left">
                            <div class="card ">
                                <img src={val.img} class="card-img-top" alt="..." />
                                <div class="card-body bg-success text-white p-3">
                                    <h5 class="card-title">{val.name}</h5>
                                    <p class="card-text"><i>{val.designation}</i></p>
                                    <button className='btn btn-info btn-lg w-100 rounded-0 d-none my-btc'><Link to={val.id} className='text-white  text-decoration-none'>View Full Profile</Link></button>
                                </div>
                            </div>
                        </div>
                    )}
                    <Link to={"/Ourteam"} className='w-25 m-auto mt-2 btn btn-primary btn-lg'>View All Team</Link>
                </div>
            </div>
            <div className='container p-3'>
                <div class=" bg-white w-75 m-auto" data-aos="fade-up">
                    <h1 className='card-text'>TESTIMONIALS</h1>
                    <h1 className='card-text mt-2 border-info  border border-5 border-top-0 border-end-0 border-start-0 w-25 m-auto'></h1>
                </div>
                <div class="row mt-3 g-2">



                    <div class="col-sm-12 col-lg-3 col-md-6">
                        <div class="card bg-light p-2 h-100 border-0"data-aos="zoom-in">

                            <div class="card-body text-start">
                                <h5 class="card-title text-secondary "><i>The costs of treatments are very reasonable at Health-care and I have always been impressed with the results. The fully medically qualified team at the clinic are professional, friendly and trustworthy.</i></h5>
                            </div>
                            <div class="row g-0">
                                <div class="col-sm-4 col-lg-4">
                                    <img src="https://www.apollohospitals.com/apollo-hospitals-reviews/img/generic.png" className='card-image' alt="" />
                                </div>
                                <div class="col-sm-8 col-lg-8">
                                    <div class="card-body text-start">
                                        <h6 class="card-title"> CHANDRASEKHAR</h6>
                                        <p class="card-text">India</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-3 col-md-6">
                        <div class="card bg-light p-2 h-100 border-0"data-aos="zoom-in">
                            <div class="card-body text-start">
                                <h5 class="card-title text-secondary"><i>Dr. Snyder is a wonderful Doctor, who makes you feel important and who takes time to listen, which most doctors don’t do. Loved him from the first visit! Very professional assistance.</i></h5>
                            </div>
                            <div class="row g-0">
                                <div class="col-sm-4 col-lg-4">
                                    <img src="https://www.apollohospitals.com/apollo-hospitals-reviews/img/generic.png" alt="" className='card-image' />
                                </div>
                                <div class="col-sm-8 col-lg-8">
                                    <div class="card-body text-start">
                                        <h6 class="card-title">NAGARJUN CHARI</h6>
                                        <p class="card-text">India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-3 col-md-6">
                        <div class="card bg-light p-2 h-100 border-0"data-aos="zoom-in">
                            <div class="card-body text-start">
                                <h5 class="card-title text-secondary "><i>Wonderful people here! They listen to you, and are genuinely concerned about providing you the best care possible! I would recommend them to everyone!</i></h5>
                            </div>
                            <div class="row g-0">
                                <div class="col-sm-4 col-lg-4">
                                    <img src="https://www.apollohospitals.com/apollo-hospitals-reviews/img/generic.png" alt="" className='card-image' />
                                </div>
                                <div class="col-sm-8 col-lg-8">
                                    <div class="card-body text-start">
                                        <h6 class="card-title">SURYA ROYAL</h6>
                                        <p class="card-text">India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-3 col-md-6">
                        <div class="card bg-light p-2 h-100 border-0"data-aos="zoom-in">
                            <div class="card-body text-start">
                                <h5 class="card-title text-secondary"><i>“Dr. Jane has the best team at Indigo Hospital. Thank you so much for the wonderful experience of post-operation care even during the weekend hours by the Doctor and compassionate nurses.”</i></h5>
                            </div>
                            <div class="row g-0">
                                <div class="col-sm-4 col-lg-4">
                                    <img src="https://www.apollohospitals.com/apollo-hospitals-reviews/img/generic.png" className='car-image' alt="" />
                                </div>
                                <div class="col-sm-8 col-lg-8">
                                    <div class="card-body text-start">
                                        <h6 class="card-title">NISHIKANT P SAWANE</h6>
                                        <p class="card-text"> India</p>
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

export default Section2Component;