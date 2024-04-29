import React, { useEffect, useState } from 'react';
import { FaClock, FaLocationDot, FaPhone } from "react-icons/fa6";
import { FaFacebook, FaGoogle, FaLocationArrow, FaMailBulk, FaMap, FaSearchLocation, FaTwitter, FaWifi } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactComponent = () => {
    useEffect(() => {
        window.scrollTo({ top: 12, behavior: "smooth" });
    });
    let [first5, setFirst5] = useState("")
    let [first1, setFirst1] = useState("")
    let [first2, setFirst2] = useState("")
    let [first3, setFirst3] = useState("")
    let [first4, setFirst4] = useState("")


    let [error7, setError7] = useState(false)
    let [error2, setError2] = useState(false)
    let [error3, setError3] = useState(false)
    let [error4, setError4] = useState(false)
    let [error5, setError5] = useState(false)
    let [error6, setError6] = useState(false)
    let navi = useNavigate()
    const handleForm = (e) => {
        e.preventDefault();

        if (first5 == "") {
            setError7(true)
        }
        else {
            setError7(false)
        }
        if (first1 == "") {
            setError2(true)
        }
        else {
            setError2(false)
        }
        if (first2 == "") {
            setError3(true)
        }
        else {
            setError3(false)
        }
        if (first3 == "") {
            setError4(true)
        }
        else {
            setError4(false)
        }
        if (first4 == "") {
            setError6(true)
        }
        else {
            setError6(false)
        }

        if (first5.length > 0 && first1.length > 0 && first2.length > 0 && first3.length > 0 && first4.length > 0) {
            toast.success("your request have been submitted we will connect with in 24 hours", {
                position: "top-center",
                width:"300px",
            });
            setTimeout(() => {
                navi("/")

            }, 5000)
        }

    }
    return (
        <div className='container '>
            <div class="row p-1  ">
                <div class="col-sm-12 col-lg-8"data-aos="fade-right">
                    <div class="card  border-0">
                        <div class="card-body p-3 text-start ">
                            <h1 class="card-title fs-1 ms-3 text-info">GET IN TOUCH</h1>
                            <h1 class="border-bottom-3 ms-3  border border-3 w-25  border-primary "></h1>

                            <p class="card-text w-75 ms-3 ">You can contact us any way that is convenient for you. We are available 24/7 via fax or email. You can also use a quick contact form below or visit our medical center personally.</p>
                            <p class="card-text ms-3">We would be happy to answer your questions.</p>
                            <form action="" onSubmit={handleForm}>
                                <div class="row g-0">
                                    <div class="col-sm-12 col-lg-6">
                                        <div class="card border-0">
                                            <div class="card-body">
                                                <div class=" text-start">
                                                <label for="exampleFormControlInput1" class="form-label text-start">First Name</label>
                                                    <input type="text" class="form-control border-2 p-3" onChange={e => setFirst1(e.target.value)} id="exampleFormControlInput1" />
                                                    {error2 ? <p className='text-danger'>Please Fill The First Name</p> : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-lg-6">
                                        <div class="card border-0">
                                            <div class="card-body">
                                                <div class=" text-start">
                                                <label for="exampleFormControlInput1" class="form-label text-start">Last Name</label>
                                                    <input type="text" class="form-control border-2 p-3" onChange={e => setFirst5(e.target.value)} id="exampleFormControlInput1" />
                                                    {error7 ? <p className='text-danger'>Please Fill The Last Name</p> : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-lg-6">
                                        <div class="card border-0">
                                            <div class="card-body">
                                                <div class=" text-start">
                                                    <label for="exampleFormControlInput1" class="form-label ">Phone Number</label>
                                                    <input type="number" class="form-control border-2 p-3" onChange={e => setFirst2(e.target.value)} id="exampleFormControlInput1" />
                                                    {error3 ? <p className='text-danger'>Please Fill The Phone Number</p> : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-lg-6">
                                        <div class="card border-0">
                                            <div class="card-body">
                                                <div class="mb-3 text-start">
                                                    <label for="exampleFormControlInput1" class="form-label text-start">Email</label>
                                                    <input type="text" class="form-control border-2 p-3" onChange={e => setFirst3(e.target.value)} id="exampleFormControlInput1" />
                                                    {error4 ? <p className='text-danger'>Please Fill The Email</p> : null}
                                                    {error5 ? <p className='text-danger'>Please Fill The Write Email</p> : null}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-lg-12">
                                        <div class="card border-0">
                                            <div class="card-body">
                                                <div class="mb-3 text-start">
                                                    <label for="exampleFormControlTextarea1" class="form-label ">Message</label>
                                                    <textarea class="form-control border-2" onChange={e => setFirst4(e.target.value)} id="exampleFormControlTextarea1"></textarea>
                                                    {error6 ? <p className='text-danger'>Please Write your Feedback</p> : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button type='submit' className='btn btn-primary w-25 btn-lg ms-3 d-flex-justify-content-start'>Send Message</button>
                                    <ToastContainer />



                                </div>
                            </form>

                        </div>

                    </div>

                </div>
                <div class="col-sm-12 h-100 col-lg-4">
                    <div class="card p-1 border-0"data-aos="fade-left">
                        <div class="card-body text-start">
                            <h5 class="card-title">SOCIALS</h5>
                            <h1 class="border-bottom-1   border border-1 w-100  border-primary "></h1>
                            <div className='card-text display-flex  '>
                                <Link to={"https://www.facebook.com/"}><FaFacebook className='fs-2 text-secondary' /></Link>
                                <Link to={"https://twitter.com/"}><FaTwitter className='fs-2 ms-4 text-secondary' /></Link>
                                <Link to={"https://www.google.com/"}><FaGoogle className='fs-2 ms-4 text-secondary' /></Link>
                                <Link to={"https://www.wifi.com/"}><FaWifi className='fs-2 ms-4 text-secondary' /></Link>

                            </div>

                        </div>
                    </div>
                    <div class="card p-1 border-0">
                        <div class="card-body text-start"data-aos="fade-left">
                            <h5 class="card-title">ADDRESS</h5>
                            <h1 class="border-bottom-1   border border-1 w-100  border-primary "></h1>
                            <div className='d-flex'>
                                <Link to={"https://www.googlemap.com/"} className='text-decoration-none text-secondary mt-1'><FaLocationDot className='fs-2' /></Link>
                                <p><Link to={""} className=' text-decoration-none text-secondary'>2130 Fulton Street San Diego,
                                    CA 94117-1080 INDIA</Link></p>
                            </div>
                        </div>
                    </div>
                    <div class="card p-1 border-0">
                        <div class="card-body text-start"data-aos="fade-left">
                            <h5 class="card-title">OPPNING HOURS</h5>
                            <h1 class="border-bottom-1 position-relative  border border-1 w-100  border-primary "></h1>
                            <div className='d-flex'>
                                <div className=''>
                                    <FaClock className='fs-2 text-secondary' />
                                </div>
                                <div className=' '>
                                    <p className='card-text ms-2'>Mon–Fri: 8:00am–6:00pm</p>
                                    <p className='card-text ms-2'>Sat: 9:00am–3:00pm</p>
                                    <p className='card-text ms-2'>Sun: 10:00am–2:00pm</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="card p-1 border-0">
                        <div class="card-body text-start"data-aos="fade-left">
                            <h5 class="card-title">PHONES</h5>
                            <h1 class="border-bottom-1 position-relative  border border-1 w-100  border-primary "></h1>
                            <div className='d-flex'>
                                <div className=''>
                                    <FaPhone className='fs-2 text-secondary' />
                                </div>
                                <div className=' '>
                                    <p className='card-text ms-2'>1-800-1234-567</p>
                                    <p className='card-text ms-2'>1-800-7654-876</p>

                                </div>
                            </div>

                            
                        </div>



                    </div>
                    <div class="card p-1 border-0">
                        <div class="card-body text-start"data-aos="fade-left">
                            <h5 class="card-title">EMAIL</h5>
                            <h1 class="border-bottom-1   border border-1 w-100  border-primary "></h1>
                            <div className='d-flex'>
                                <Link to={"https://www.gmail.com/"} className='text-decoration-none text-secondary'><CiMail className='fs-2' /></Link>
                                <p><Link to={""} className=' text-decoration-none text-secondary'>info@demolink.org</Link></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default ContactComponent;