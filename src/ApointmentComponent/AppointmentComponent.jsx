import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AppointmentComponent = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    let navi = useNavigate()
    let [pName, setPName] = useState("")
    let [pPhone, setPPhone] = useState("")
    let [pAppointTime, setPAppointTime] = useState("")
    let [mode, setMode] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false);
    let [error, setError] = useState(false)
    let [error1, setError1] = useState(false)

    let [error2, setError2] = useState(false)
    let [error3, setError3] = useState(false)

    let [error4, setError4] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        if (pName === "") {
            // alert("please")
            console.log("if")
            setError(true)
        }
        else {
            // alert('confirm')
            console.log("else")
            setError(false)

        }
        if (pPhone === "") {
            // alert("please")
            console.log("if")
            setError1(true)
        }
        else {
            // alert('confirm')
            console.log("else")
            setError1(false)

        }
        if (pAppointTime === "") {
            // alert("please")
            console.log("if")
            setError2(true)
        }
        else {
            // alert('confirm')
            console.log("else")
            setError2(false)

        }
        if (mode.trim() === "") {
            // alert("please")
            console.log("if")
            setError3(true)
        }
        else {
            // alert('confirm')
            console.log("else")
            setError3(false)

        }
        const selectedTime = new Date(pAppointTime).getTime();
        const currentTime = new Date().getTime();
        if (selectedTime <= currentTime) {
            setError4(true)
        }
        else {
            setError4(false)
        }
        if (pName.length > 0 && pPhone.length > 0 && pAppointTime !== "" && mode.length > 0 && selectedTime > currentTime) {
            toast.success("Your appointment has been sheduled we will be contect later", {
                position: "top-center",

            });
            // setPName(" ")
            setTimeout(() => {
                navi("/")

            }, 6000)

        }


    }


    return (
        <div className=' bg-light'>



            <div class="row  p-4 bg-light">
                <div class="col-sm-12 col-lg-12 "data-aos="flip-left">
                    <div class="card shadow-lg border-0 w-50 m-auto p-3">
                        <h1 class="card-title fs-1 ms-3 text-danger text-start">Book Appointment Online</h1>
                        <h1 class="border-bottom-3 ms-3 mt-2 border border-3 w-50  border-warning "></h1>

                        <div class="card-body text-start">
                            <form action='www.google.com' onSubmit={handleSubmit}>
                                <label for="exampleFormControlInput1" class="form-label">Patient Name</label>
                                <input type="text" class="form-control border-2 p-3 fs-6" onChange={e=> setPName(e.target.value)} id="exampleFormControlInput1" />
                                {error ? <p className='text-danger'>Please Fill The Name</p> : null}


                                <label for="exampleFormControlInput1" class="form-label">Patient Phone Number</label>
                                <input type="number" class="form-control border-3 p-3" onChange={(e) => setPPhone(e.target.value)} id="exampleFormControlInput1" />
                                {error1 ? <p className='text-danger'>Please Fill  The Number</p> : null}



                                <label for="exampleFormControlInput1" class="form-label">Preferred Appointment Time</label>
                                <input type="date" class="form-control border-3 p-3" onChange={(e) => setPAppointTime(e.target.value)} id="exampleFormControlInput1" />
                                {error2 ? <p className='text-danger'>Please Fill The Date</p> : null}
                                {error4 ? <p className='text-danger'>Please Fill The Future Appointment</p> : null}


                                <label for="exampleFormControlInput1" class="form-label">Preferred Mode</label>
                                <select name="" id="" className='form-control p-3 border-3' onChange={(e) => setMode(e.target.value)}>
                                    <option value="Mode" ></option>
                                    <option value="video call">Video Call</option>
                                    <option value=" audio">Audio Call</option>

                                </select>
                                {/* <input type="text" class="form-control border-3 p-3" onChange={(e) => setMode(e.target.value)} id="exampleFormControlInput1"  /> */}
                                {error3 ? <p className='text-danger'>Please Fill The Mode</p> : null}


                                <button type="submit" value="Confirm Appointment" className="btn btn-success btn-lg mt-3">Submit</button>

                                <ToastContainer />

                            </form>

                        </div>



                    </div>
                </div>
            </div>

        </div >
    );
};

export default AppointmentComponent;