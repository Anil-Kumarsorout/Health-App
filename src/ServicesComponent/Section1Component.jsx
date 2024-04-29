import React from 'react';
import { Link, NavLink, Outlet, Route, Routes, useParams } from 'react-router-dom';

const Section1Component = () => {
    return (
        <div className=''>

        </div>
    );
};
export const ROUTINEMEDICALCARE = () => {
    return (
        <div class="col-sm-12 col-lg-8">
            <div class="card w-100 border-0  text-start"data-aos="zoom-in">
                <h2 class="card-title text-start text-warning">ROUTINE MEDICAL CARE</h2>
                <h1 class="border-bottom-3 mt-4 border border-3 w-25  border-primary "></h1>
                <img src="https://livedemo00.template-help.com/wt_59090_v1/images/pages/services-03-870x440.jpg" alt="" className=' mt-4 card-image w-100' />
                <div class="card-body w-100">

                    <p class="card-text mt-2">We perform minor procedures, under local anaesthesia if necessary at the HEALTH-CARE HOSPITAL.</p>
                    <p class="card-text">These include removal of skin lesions, freezing of warts and verrucae, joint and soft tissue injections, removal of ingrowing toenails.
                    </p>
                    <button className='btn btn-danger btn-lg'><Link to={"/appointment"} className='text-decoration-none text-white pt-2 pb-2'>MAKE AN APPOINTEMENT</Link></button>
                </div>
            </div>
        </div>
    )
}
export const PHYSIOTHERAPY = () => {
    return (
        <div class="col-sm-12 col-lg-8">
            <div class="card border-0 h-100 text-start">

                <div class="card-body"data-aos="zoom-in">
                    <h2 class="card-title text-start text-warning">PHYSIOTHERAPY</h2>
                    <h1 class="border-bottom-3 mt-4 border border-3 w-25  border-primary "></h1>
                    <img src="https://livedemo00.template-help.com/wt_59090_v1/images/pages/services-02-870x440.jpg" alt="" className=' mt-4 card-image w-100' />

                    <p class="card-text">Physiotherapy helps restore movement and function when someone is affected by injury, illness or disability.</p>
                    <p class="card-text">Physiotherapists help people affected by injury, illness or disability through movement and exercise, manual therapy, education and advice.</p>
                    <p class="card-text">The profession helps to encourage development and facilitate recovery, enabling people to stay in work while helping them to remain independent for as long as possible.</p>
                    <button className='btn btn-danger btn-lg'><Link to={"/appointment"} className='text-decoration-none text-white pt-2 pb-2'>MAKE AN APPOINTEMENT</Link></button>

                </div>
            </div>
        </div>
    )
}
export const MINORSURGERY = () => {
    return (
        <div class="col-sm-12 col-lg-8 col-md-12">
            <div class="card border-0 h-100 text-start">

                <div class="card-body"data-aos="zoom-in">
                    <h2 class="card-title text-start text-warning">MINOR SURGERY</h2>
                    <h1 class="border-bottom-3 mt-4 border border-3 w-25  border-primary "></h1>
                    <img src="https://livedemo00.template-help.com/wt_59090_v1/images/pages/services-01-870x440.jpg" alt="" className=' mt-4 card-image w-100' />

                    <p class="card-text">Regular checkups are an important part of maintaining good health—in children and adolescents and adults. Our medical center can provide you with any routine medical services you may require.</p>
                    <p class="card-text">In order to decide what set of medical care services is better for you, please book an appointment online. and consult with one of our doctors. We are always ready to help you improve your health.</p>
                    <button className='btn btn-danger btn-lg'><Link to={"/appointment"} className='text-decoration-none text-white pt-2 pb-2'>MAKE AN APPOINTEMENT</Link></button>

                </div>
            </div>
        </div>
    )
}
export const NURSINGSERVICES = () => {
    return (
        <div class="col-sm-12 col-lg-8">
            <div class="card border-0 h-100 text-start">

                <div class="card-body"data-aos="zoom-in">
                    <h2 class="card-title text-start text-warning">NURSING SERVICES</h2>
                    <h1 class="border-bottom-3 mt-4 border border-3 w-25  border-primary "></h1>
                    <img src="https://livedemo00.template-help.com/wt_59090_v1/images/pages/services-04-870x440.jpg" alt="" className=' mt-4 card-image w-100' />
                    <p className='card-text mt-2'>The nurses hold their own surgeries and specialise in:
                        <ul>
                            <li>Common Illnesses</li>
                            <li>Dressings & First Aid</li>
                            <li>Blood Tests and Injections</li>
                            <li>Contraception</li>
                            <li>Cervical Screening</li>
                            <li>Travel Advice & Vaccinations</li>
                            <li>Stress Management & Counselling</li>

                        </ul>
                    </p>
                    <button className='btn btn-danger btn-lg'><Link to={"/appointment"} className='text-decoration-none text-white pt-2 pb-2'>MAKE AN APPOINTEMENT</Link></button>

                </div>
            </div>
        </div>
    )
}
export const FLUVACCINATION = () => {
    return (
        <div class="col-sm-12 col-lg-8">
            <div class="card border-0 h-100 text-start">

                <div class="card-body"data-aos="zoom-in">
                    <h2 class="card-title text-start text-warning"> FLU  VACCINATION </h2>
                    <h1 class="border-bottom-3 mt-4 border border-3 w-25  border-primary "></h1>
                    <img src="https://livedemo00.template-help.com/wt_59090_v1/images/pages/services-05-870x440.jpg" alt="" className=' mt-4 card-image w-100' />

                    <p class="card-text">Flu vaccination is available every year at SANA to help protect adults and children at risk of flu and its complications. Flu can be unpleasant, but if you are otherwise healthy it will usually clear up on its own within a week.</p>
                    <p class="card-text">Influenza vaccination, in general, is safe and effective and used annually worldwide. Soreness at the immunization site can occur and rarely there is a feverish illness in the 48 hours after vaccination..</p>
                    <p class="card-text">It’s important to know about side effects, even though they happen very rarely. Don’t put off your vaccination because of them - benefits of vaccination at SANA far outweigh remote risks. We will take care of elimination of any side effects.</p>
                    <button className='btn btn-danger btn-lg'><Link to={"/appointment"} className='text-decoration-none text-white pt-2 pb-2'>MAKE AN APPOINTEMENT</Link></button>

                </div>
            </div>
        </div>
    )
}
export const DIAGONSTICIMAGING = () => {
    return (
        <div class="col-sm-12 col-lg-8">
            <div class="card border-0 h-100 text-start">

                <div class="card-body"data-aos="zoom-in">
                    <h2 class="card-title text-start text-warning">DIAGONSTIC IMAGING</h2>
                    <h1 class="border-bottom-3 mt-4 border border-3 w-25  border-primary "></h1>
                    <img src="https://livedemo00.template-help.com/wt_59090_v1/images/pages/services-06-870x440.jpg" alt="" className=' mt-4 card-image w-100' />

                    <p class="card-text">Diagnostic imaging lets doctors look inside your body for clues about a medical condition. A variety of machines and techniques can create pictures of the structures and activities inside your body. The type of imaging your doctor uses depends on your symptoms and the part of your body being examined. They include:
                        <ul>
                            <li>X-rays</li>
                            <li>CT scans</li>
                            <li>Nuclear medicine scans</li>
                            <li>MRI scans</li>
                            <li>Ultrasound</li>
                        </ul>
                    </p>
                    <button className='btn btn-danger btn-lg'><Link to={"/appointment"} className='text-decoration-none text-white pt-2 pb-2'>MAKE AN APPOINTEMENT</Link></button>

                </div>
            </div>
        </div>
    )
}

export default Section1Component;