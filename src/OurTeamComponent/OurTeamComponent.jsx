import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
const OurTeamComponent = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    let one = [
        {
            id: 1,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-01-270x270.jpg",
            name: "Dr. Katherine Wong",
            destination: "Nurse",

        },
        {
            id: 2,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-02-270x270.jpg",
            name: "Dr. Nicholas Bryant",
            destination: "Endocrinologist"
        },
        {
            id: 3,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-03-270x270.jpg",
            name: "Dr. Victoria Morgan",
            destination: "Therapist"
        },
        {
            id: 4,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-04-270x270.jpg",
            name: "Dr. Walter Jenkins",
            destination: "Cardiologist"
        }
    ]
    let two = [
        {
            id: 5,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-05-384x410.jpg",
            name: "Dr. Walter Jenkins",
            destination: "Cardiologist"
        },
        {
            id: 6,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-06-384x410.jpg",
            name: "Dr. Johnny Fowler",
            destination: "Surgeon"
        },
        {
            id: 7,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-07-384x410.jpg",
            name: "Dr. Eric Snyder",
            destination: "Ophthalmologist"
        },
        {
            id: 8,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-08-384x410.jpg",
            name: "Dr. Martha Schmidt",
            destination: "Therapist"
        },
        {
            id: 9,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/home-03-320x320.jpg",
            name: "Dr. Walter Sorout",
            destination: "Cardiologist"
        },
        {
            id: 10,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-01-270x270.jpg",
            name: "Dr.Alter Jenkins",
            destination: "PEDIATRICSt"
        }
    ]
    let three = [
        {
            id: 1,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/users/user-scott-riley-110x110.jpg",
            name: "Scott Riley",
            destination: "Chief Medical Officer, Founder",
            number: "1-800-1234-567",
            summary: "With over 30 years of healthcare industry experience, Dr. Scott Riley serves as the Chief Medical Officer at SANA Medical Center."
        },
        {
            id: 2,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/users/user-johnny-fowler-110x110.jpg",
            name: "Johnny Fowler",
            destination: "Surgeon",
            number: "1-800-1234-567",
            summary: "Johnny Fowler is the leading surgeon at SANA Medical Center and boasts a 24 year-long career as a healthcare professional."
        },
        {
            id: 3,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/users/user-scott-riley-110x110.jpg",
            name: "Eric Snyder",
            destination: "Ophthalmologist            ",
            number: "1-800-1234-567",
            summary: "Eric Snyder is a professional ophthalmologist at SANA Medical Center, but his journey with SMC began over 12 years ago"
        },
    ]
    return (
        <div>


            <div className='container mt-5'>
                <div className='card-header w-50 m-auto d-flex justify-content-center flex-column'data-aos="fade-right">
                    <h1 class="card-title fs-1 ">4 COLUMN LAYOUT</h1>
                    <h1 class="border-bottom-3   m-auto mt-1 border border-3 w-25  border-primary "></h1>
                </div>
                <div class="row p-5 mt-4">
                    {one.map(val =>
                        <div class="col-sm-12 col-md-6 col-lg-3" data-aos="zoom-in">
                            <div class="card border-0">
                                <img src={val.img} alt="" className='card-image h-100' />

                                <div class="card-body">
                                    <h5 class="card-title">{val.name}</h5>
                                    <p class="card-text">{val.destination}.</p>
                                    <Link to={"/Ourteam/" + val.id} className="text-decoration-none btn btn-warning btn-lg">View More</Link>
                                </div>
                            </div>
                        </div>)}

                </div>

            </div>
            <div className='card-header w-50  m-auto d-flex justify-content-center flex-column'data-aos="fade-left">
                <h1 class="card-title fs-1 w-75 m-auto  ">6 COLUMN LAYOUT</h1>
                <h1 class="border-bottom-3   m-auto mt-1 border border-3 w-25  border-primary "></h1>
            </div>
            <div class="row  m-auto p-5 ">
                {two.map(val =>
                    <div class="col-sm-12 col-md-6  col-lg-2" data-aos="flip-left">
                        <div class="card border-0  h-100">
                            <img src={val.img} alt="" className='card-image' />

                            <div class="card-body">
                                <h5 class="card-title">{val.name}</h5>
                                <p class="card-text">{val.destination}.</p>
                                <Link to={"/Ourteam/" + val.id} className="text-decoration-none btn btn-warning btn-lg">View More</Link>
                            </div>
                        </div>
                    </div>)}

            </div>
            <div className='container'>
                <div className='card-header w-50 m-auto d-flex justify-content-center flex-column'data-aos="fade-right">
                    <h1 class="card-title fs-1 ">3 COLUMN LAYOUT</h1>
                    <h1 class="border-bottom-3   m-auto mt-1 border border-3 w-25  border-primary "></h1>
                </div>
                <div class="row p-5">
                    {three.map(val => <div class="col-sm-12 col-lg-4 col-md-4" data-aos="flip-right">
                        <div class="card border-0">
                            <div class="card-body">
                                <div class="card border-0 " >
                                    <div class="row g-0">
                                        <div class="col-md-4 col-sm-6">
                                            <img src={val.img} class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div class="col-md-8 col-sm-6 text-start">
                                            <div class="card-body">
                                                <h5 class="card-title text-success">{val.name}</h5>
                                                <p class="card-text text-secondary">{val.destination}</p>
                                                <h5 class="card-title">{val.number}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='card-text text-start'>{val.summary}</p>

                                </div>
                            </div>


                        </div>
                    </div>)}
                </div>
                {/* <div class="row p-5 mt-4">

                    <div class="col-sm-12 col-md-4 col-lg-4">
                        <div class="card h-100">
                            <img src={val.img} alt="" className='card-image' />

                            <div class="card-body">
                                <h5 class="card-title">{val.name}</h5>
                                <p class="card-text">{val.destination}.</p>
                            </div>
                        </div>
                        <div class="card" >
                            <div class="card-body">
                                <h5 className='card-text'>{val.number}</h5>
                                <p class="card-text">{val.summary}</p>
                            </div>
                        </div>
                    </div>

                </div> */}
            </div>
        </div>


    );
};

export default OurTeamComponent;