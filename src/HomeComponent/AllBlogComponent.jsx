import React from 'react';
import { useEffect } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { FaDiagramNext } from 'react-icons/fa6';

const AllBlogComponent = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

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
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/blog/post-11-770x480.jpg",
            name: "8 Super-Healthy Summer Foods to Enjoy Right Now",
            title: "June 21, 2023 at 8:12pm",
            subtitle: "Food",
            paragraph: "It’s summer — that amazing time of year when fresh, delicious produce abounds. Many of summer’s fruits and vegetables are brimming with secret health benefits. Here are some of our favorites and why they’re particularly good choices to make in the summer."

        },

    ]
    let data1 = [
        {
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/blog/sidebar-img-01-165x165.jpg"
        },
        {
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/blog/sidebar-img-02-165x165.jpg"
        },
        {
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/blog/sidebar-img-03-165x165.jpg"
        },
        {
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/blog/sidebar-img-04-165x165.jpg"
        },
        {
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/blog/sidebar-img-05-165x165.jpg"
        },
        {
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/blog/sidebar-img-06-165x165.jpg"
        }
    ]
    return (
        <div className='container p-4'>
            <div class="row">
                <div class="col-sm-12 col-lg-8 ">
                    <div class="card border-0">
                        <div class="row">
                            <div className=''>
                                <h1 data-aos="fade-left">All Blogs</h1>
                                <h1 class="border-bottom-1  mt-2 border border-3 w-25 m-auto  border-warning "></h1>
                            </div>


                            {data.map(val => <div class="col-sm-12 col-lg-6 col-md-6 mt-3"data-aos="flip-left">
                                <div class="card   h-100 border-0">
                                    <img src={val.img} class="card-img-top " alt="..." />
                                    <div class="card-body text-start">
                                        <h4 class="card-title text-primary ">{val.name}</h4>
                                        <p class="card-text"> {val.title}  <span className='text-secondary border-info  border border-2 border-top-0 border-end-0 border-bottom-0 ms-1'> </span> <span className='text-success ms-2'>{val.subtitle}</span></p>
                                        <p className='card-text'>{val.paragraph}</p>
                                    </div>
                                </div>
                            </div>)}

                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-4 mt-4">
                    <h5 class="card-title text-start">GALLERY</h5>
                    <h1 class="border-bottom-1  mt-2 border border-1 w-100  border-primary "></h1>
                    <div class="card border-0">
                        <div class="row g-1 ">
                            {data1.map(val => <div class="col-sm-6 col-lg-6 g-1">
                                <div class="card border-0">
                                    <div class="card-body"data-aos="flip-right">
                                        <img src={val.img} class="card-img-top " alt="..." />

                                    </div>
                                </div>
                            </div>)}

                            <div class="col-sm-6 col-lg-6 g-1 w-100">
                                < h5 class="card-title text-start">RECENT POSTS</h5>
                                <h1 class="border-bottom-1  mt-2 border border-1 w-100  border-primary "></h1>
                                <div class="card border-0">
                                    <div class="card-body text-start">
                                        <div className='d-flex jsutify-content-evenly'data-aos="flip-right">
                                            <div className=''>
                                                <FaChevronCircleRight />

                                            </div>
                                            <div className='ms-2'>
                                                <h6 className='text-primary'>Protect the Skin You’re In</h6>
                                                <p className='text-secondary'>June 21, 2022 at 8:12pm</p>
                                            </div>

                                        </div>
                                        <div className='d-flex jsutify-content-evenly'data-aos="flip-right">
                                            <div className=''>
                                                <FaChevronCircleRight />

                                            </div>
                                            <div className='ms-2'>
                                                <h6 className='text-primary'>10 Ways to Stay Healthy on a Road Trip</h6>
                                                <p className='text-secondary'>June 21, 2022 at 8:12pm</p>
                                            </div>

                                        </div>
                                        <div className='d-flex jsutify-content-evenly'data-aos="flip-right">
                                            <div className=''>
                                                <FaChevronCircleRight />

                                            </div>
                                            <div className='ms-2'>
                                                <h6 className='text-primary'>How Scientific Is Modern Medicine Really?</h6>
                                                <p className='text-secondary'>June 21, 2022 at 8:12pm</p>
                                            </div>

                                        </div>
                                        <div className='d-flex jsutify-content-evenly'data-aos="flip-right">
                                            <div className=''>
                                                <FaChevronCircleRight />

                                            </div>
                                            <div className='ms-2'>
                                                <h6 className='text-primary'>8 Super-Healthy Summer Foods to Enjoy Right Now</h6>
                                                <p className='text-secondary'>June 21, 2022 at 8:12pm</p>
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

export default AllBlogComponent;