import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaPlus, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const FooterComponent = () => {
    let [value, setValue] = useState("")
    let [check, setCheck] = useState(false)
    const submit = (e) => {
        e.preventDefault();
        if (value == "") {
            setCheck(true)
        }
        else {
            setCheck(false)
        }
        if (value !== "") {
            toast.success("your subscripation is successfully", {
                position: "top-center"
            })
        }
        else{
            setCheck(true)
        }

    }
    return (
        <div className='w-100'>

            <div className='bg-dark p-5 '>
                <div class="row w-100 p-5 d-flex justify-content-between  ">


                    <div class="col-sm-8 col-lg-4">

                        <div class="card w-100 bg-danger border-0 bg-dark text-white">
                            <div class="card-body text-start lh-lg p-2">
                                <h1 class="card-title"><span className='text-success'>HEALTH</span><FaPlus /><span className='text-danger'>CARE</span></h1>
                                <p class="card-text w-75"><big>Talk to online doctors and get medical advice, online prescriptions, refills and medical notes within minutes. On-demand healthcare services at your fingertips.</big></p>
                                <h3 className='card-text'>Stay Update to our Newsletter</h3>
                                <form action="" onSubmit={submit}>
                                    <div className='d-flex lh-lg mt-4 col-lg-12 col-sm-6'>
                                        <input type="text" onChange={e => setValue(e.target.value)} className='form-control w-50 rounded-pill' placeholder='Enter your Email ' />
                                        <button type='submit' className='btn btn-danger btn-lg rounded-pill ms-2'>Subscribe</button>
                                        {check ? <p className='text-danger'>Please Write Your Email </p> : null}
                                        <ToastContainer />
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-lg-2">
                        <div class="card bg-info  border-0 text-white bg-dark">
                            <div class="card-body text-white text-start">
                                <h3 class="card-title">Services</h3>
                                <h6 className='card-text lh-lg'><Link to={""} className='text-decoration-none text-white'>Emergency</Link></h6>
                                <h6 className='card-text lh-lg'><Link to={""} className='text-decoration-none text-white'>Heart Disease</Link></h6>
                                <h6 className='card-text lh-lg'><Link to={""} className='text-decoration-none text-white'>Dental Care</Link></h6>
                                <h6 className='card-text lh-lg'><Link to={""} className='text-decoration-none text-white'>Prescription</Link></h6>
                                <h6 className='card-text lh-lg'><Link to={""} className='text-decoration-none text-white'>Insights for doctors</Link></h6>


                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-2">
                        <div class="card bg-warning 
                        border-0 bg-dark">
                            <div class="card-body text-white text-start">
                                <h3 class="card-title">Legal</h3>
                                <h6 className='card-text lh-lg'><Link to={""} className='text-decoration-none text-white'>General Info</Link></h6>
                                <h6 className='card-text lh-lg'><Link to={""} className='text-decoration-none text-white'>Privacy Policy</Link></h6>
                                <h6 className='card-text lh-lg'><Link to={""} className='text-decoration-none text-white'>Terms of Services</Link></h6>
                                <h6 className='card-text lh-lg'><Link to={""} className='text-decoration-none text-white'>Consultations</Link></h6>
                                <h6 className='card-text lh-lg'><Link to={""} className='text-decoration-none text-white'>How it Works</Link></h6>


                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="card bg-primary  border-0 bg-dark">
                            <div class="card-body text-white text-center">
                                <h3 class="card-title text-start">Talk To Us</h3>
                                <h6 className='card-text text-start lh-lg'><Link to={""} className='text-decoration-none text-white'>support@healthplus.com</Link></h6>
                                <h6 className='card-text text-start lh-lg'><Link to={""} className='text-decoration-none text-white'>appointment@healthplus.com</Link></h6>
                                <h6 className='card-text text-start lh-lg'><Link to={""} className='text-decoration-none text-white'>+022 5454 5252</Link></h6>
                                <h6 className='card-text text-start lh-lg'><Link to={""} className='text-decoration-none text-white'>+022 2326 6232
                                </Link></h6>


                            </div>
                        </div>
                    </div>
                </div>
                <div class=" w-100 card-footer container d-flex justify-content-between text-white border-secondary  border border-3 border-bottom-0 border-end-0 border-start-0 p-4">
                    <h4 className='crad-text '>© 2013-2023 Health+. All rights reserved.</h4>
                    <h2 className='card-text'><Link to={""}><FaLinkedin className='me-3 text-white' /></Link><Link to={""}><FaFacebook className='me-3 text-white' /></Link><Link to={""}><FaTwitter className='me-3 text-white' /></Link></h2>
                </div>
            </div>

        </div>

    );
};

export default FooterComponent;