import React, { useEffect } from 'react';
import Section1Component from './Section1Component';
import { FaCrosshairs } from 'react-icons/fa';

const DepartmentComponent = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    return (
        <div className=''>
            <div class="row m-auto  bg-primary   ">
                <div class="col-sm-6 col-lg-6">
                    <div class="card bg-primary    border-0  my-ron d-flex justify-content-center align-item-center">

                        <h5 class="card-title mylogo fs-1 text-white">DEPARTMENT</h5>


                    </div>
                </div>
                <div class="col-sm-6 col-lg-6">
                    <div class="card border-0 bg-primary    my-ron d-flex justify-content-center align-item-center">
                        <h1 className='card-title'><FaCrosshairs className=' fs-1 mylogo  opacity-25' />  </h1>

                    </div>
                </div>
            </div>
            <Section1Component/>
        </div>
    );
};

export default DepartmentComponent;