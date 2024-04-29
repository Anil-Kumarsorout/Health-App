import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
const Section1Component = () => {
  
  return (

    <div id="carouselExampleSlidesOnly" class="carousel slide container  " data-bs-ride="carousel">
      <div class="carousel-inner   h-100">
        <div class="carousel-item active">
          <div class="card  border-0">
            <div class="row  h-100  g-0">

              <div class="col-md-12 col-lg-6 col-sm-12">
                <div class="card-body text-start mt-5">
                  <h1 class="card-title text-info fs-1 ">MEDICINE THAT TOUCHES THE WORLD</h1>
                  <Link to={"/appointment"} className='btn  btn-success btn-lg mt-3'>Make An Appointment</Link>
                </div>
              </div>
              <div class="col-md-12 col-lg-6 col-sm-12" data-aos="fade-left">
                <img src="https://livedemo00.template-help.com/wt_59090_v1/images/intros/slide-2-713x502.png" class="img-fluid ch-images rounded-start h-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card border-0 ">
            <div class="row   g-0">

              <div class="col-md-12 h-100  col-lg-6 col-sm-12">
                <div class="card-body text-start lh-lg mt-5">
                  <h1 class="card-title text-info">WE STRIVE TO PROVIDEA CARING ATMOSPHERE</h1>
                  <h4 class="card-text text-secondary lh-base mt-3">At our clinic, we guarantee a caring atmosphere for all our patients that are looking for efficient health care.</h4>
                  <Link to={"/appointment"} className='btn  btn-success btn-lg mt-4'>Make An Appointment</Link>
                </div>
              </div>
              <div class="col-md-12 col-lg-6 col-sm-12 ">
                <img src="https://livedemo00.template-help.com/wt_59090_v1/images/intros/slide-01-454x527.png" class="img-fluid ch-image rounded-start h-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
        <div class="card border-0  ">
            <div class="row h-100  g-0">

              <div class="col-md-12 col-lg-6 col-sm-12">
                <div class="card-body text-start mt-5">
                  <h1 class="card-title fs-1 text-info">PROMOTING QUALITY HEALTH CARE</h1>
                  <h4 class="card-text text-secondary lh-base mt-3">At our clinic, we guarantee a caring atmosphere for all our patients that are looking for efficient health care.</h4>
                  <Link to={"/appointment"} className='btn  btn-success btn-lg mt-4'>Make An Appointment</Link>
                </div>
              </div>
              <div class="col-md-12 col-lg-6 col-sm-12">
                <img src="https://livedemo00.template-help.com/wt_59090_v1/images/intros/slide-3-379x524.png" class="img-fluid ch-image rounded-start h-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="..."/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div> */}
    </div>

  );
};

export default Section1Component;