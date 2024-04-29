import React from 'react';
import { Link } from 'react-router-dom';

const HomeSection4Component = () => {
    let data = [
        {
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/blog/post-13-370x250.jpg",
            name: "Protect the Skin You’re In",
            title: "June 21, 2023 at 8:12pm",
            subtitle: " Healthy Lifestyle",
            paragraph: "Many people think that melanoma is synonymous with skin cancer. In actuality, melanoma is just one type of skin cancer."
        }, {
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/blog/post-14-370x250.jpg",
            name: "10 Ways to Stay Healthy on a Road Trip",
            title: "June 21, 2023 at 8:12pm ",
            subtitle: "Healthy Lifestyle",
            paragraph: "Summer is the perfect time to pack up the family, grab some friends, or head out on the open road solo for a long drive."
        },
        {
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/blog/post-15-370x250.jpg",
            name: "How Scientific Is Modern Medicine Really?",
            title: "June 21, 2023 at 8:12pm ",
            subtitle: "Science",
            paragraph: "Doctors today commonly assert that they practice “scientific medicine,” and patients think that the medical treatments they receive are “scientifically proven.”"
        },
        {
            img: "https://www.purdueglobal.edu/blog/student-life/health-blogs-header.jpg",
            name: "Protect you body  You’re In",
            title: "June 21, 2023 at 8:12pm",
            subtitle: "Healthy Lifestyle",
            paragraph: "Many people think that melanoma is synonymous with skin cancer. In actuality, melanoma is just one type of skin cancer."

        }
    ]
    return (
        <div className='w-100 '>
            <div className=' bg-light  p-3'>
                <div className='container shadow-lg bg-white'>
                    <div class="card  text-center  border-0">
                        <div class=" bg-white w-75 m-auto"data-aos="zoom-in">
                            <h1 className='card-text'>LATEST BLOG POSTS</h1>
                            <h1 className='card-text mt-2 border-info  border border-5 border-top-0 border-end-0 border-start-0 w-25 m-auto'></h1>
                        </div>
                        <div class="card-body   mt-2">
                            <div class="row   g-4">
                                {data.map(val => <div class="col-sm-12 col-lg-3 col-md-6 "data-aos="flip-left">
                                    <div class="card  h-100 border-0">
                                        <img src={val.img} class="card-img-top " alt="..." />
                                        <div class="card-body text-start">
                                            <h4 class="card-title text-primary ">{val.name}</h4>
                                            <p class="card-text"> {val.title}  <span className='text-secondary border-info  border border-2 border-top-0 border-end-0 border-bottom-0 ms-1'> </span> <span className='text-success ms-2'>{val.subtitle}</span></p>
                                            <p className='card-text'>{val.paragraph}</p>
                                        </div>
                                    </div>
                                </div>)}

                            </div>
                            <div class="card-footer bg-white mt-3">
                                <Link to={"/blog/"} className='btn btn-secondary btn-lg'>VIEW ALL BLOG POST</Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default HomeSection4Component;