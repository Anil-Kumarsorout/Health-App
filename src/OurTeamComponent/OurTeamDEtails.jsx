import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const OurTeamDEtails = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    let one = [
        {
            id: 1,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-01-270x270.jpg",
            name: "Dr. Katherine Wong",
            destination: "Nurse",
            summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dolorem porro qui reprehenderit illum eaque sapiente dolores! Asperiores nisi perferendis ad culpa, fugiat tempore, nobis excepturi blanditiis consectetur a dolorem!Veritatis dolorum quibusdam velit distinctio animi dolorem, laboriosam vitae consequatur mollitia earum adipisci magnam harum voluptates fuga asperiores eius id assumenda accusamus laborum quam deleniti aperiam. Quidem laudantium incidunt nobis."
        },
        {
            id: 2,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-02-270x270.jpg",
            name: "Dr. Nicholas Bryant",
            destination: "Endocrinologist",
            summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dolorem porro qui reprehenderit illum eaque sapiente dolores! Asperiores nisi perferendis ad culpa, fugiat tempore, nobis excepturi blanditiis consectetur a dolorem!Veritatis dolorum quibusdam velit distinctio animi dolorem, laboriosam vitae consequatur mollitia earum adipisci magnam harum voluptates fuga asperiores eius id assumenda accusamus laborum quam deleniti aperiam. Quidem laudantium incidunt nobis."
        },
        {
            id: 3,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-03-270x270.jpg",
            name: "Dr. Victoria Morgan",
            destination: "Therapist",
            summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dolorem porro qui reprehenderit illum eaque sapiente dolores! Asperiores nisi perferendis ad culpa, fugiat tempore, nobis excepturi blanditiis consectetur a dolorem!Veritatis dolorum quibusdam velit distinctio animi dolorem, laboriosam vitae consequatur mollitia earum adipisci magnam harum voluptates fuga asperiores eius id assumenda accusamus laborum quam deleniti aperiam. Quidem laudantium incidunt nobis."
        },
        {
            id: 4,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-04-270x270.jpg",
            name: "Dr. Walter Jenkins",
            destination: "Cardiologist",
            summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dolorem porro qui reprehenderit illum eaque sapiente dolores! Asperiores nisi perferendis ad culpa, fugiat tempore, nobis excepturi blanditiis consectetur a dolorem!Veritatis dolorum quibusdam velit distinctio animi dolorem, laboriosam vitae consequatur mollitia earum adipisci magnam harum voluptates fuga asperiores eius id assumenda accusamus laborum quam deleniti aperiam. Quidem laudantium incidunt nobis."
           
        },
        {
            id: 5,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-05-384x410.jpg",
            name: "Dr. Walter Jenkins",
            destination: "Cardiologist",
            summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dolorem porro qui reprehenderit illum eaque sapiente dolores! Asperiores nisi perferendis ad culpa, fugiat tempore, nobis excepturi blanditiis consectetur a dolorem!Veritatis dolorum quibusdam velit distinctio animi dolorem, laboriosam vitae consequatur mollitia earum adipisci magnam harum voluptates fuga asperiores eius id assumenda accusamus laborum quam deleniti aperiam. Quidem laudantium incidunt nobis."
        },
        {
            id: 6,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-06-384x410.jpg",
            name: "Dr. Johnny Fowler",
            destination: "Surgeon",
            summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dolorem porro qui reprehenderit illum eaque sapiente dolores! Asperiores nisi perferendis ad culpa, fugiat tempore, nobis excepturi blanditiis consectetur a dolorem!Veritatis dolorum quibusdam velit distinctio animi dolorem, laboriosam vitae consequatur mollitia earum adipisci magnam harum voluptates fuga asperiores eius id assumenda accusamus laborum quam deleniti aperiam. Quidem laudantium incidunt nobis."
        },
        {
            id: 7,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-07-384x410.jpg",
            name: "Dr. Eric Snyder",
            destination: "Ophthalmologist",
            summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dolorem porro qui reprehenderit illum eaque sapiente dolores! Asperiores nisi perferendis ad culpa, fugiat tempore, nobis excepturi blanditiis consectetur a dolorem!Veritatis dolorum quibusdam velit distinctio animi dolorem, laboriosam vitae consequatur mollitia earum adipisci magnam harum voluptates fuga asperiores eius id assumenda accusamus laborum quam deleniti aperiam. Quidem laudantium incidunt nobis."
        },
        {
            id: 8,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-08-384x410.jpg",
            name: "Dr. Martha Schmidt",
            destination: "Therapist",
            summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dolorem porro qui reprehenderit illum eaque sapiente dolores! Asperiores nisi perferendis ad culpa, fugiat tempore, nobis excepturi blanditiis consectetur a dolorem!Veritatis dolorum quibusdam velit distinctio animi dolorem, laboriosam vitae consequatur mollitia earum adipisci magnam harum voluptates fuga asperiores eius id assumenda accusamus laborum quam deleniti aperiam. Quidem laudantium incidunt nobis."
        },
        {
            id: 9,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/home-03-320x320.jpg",
            name: "Dr. Walter Sorout",
            destination: "Cardiologist",
            summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dolorem porro qui reprehenderit illum eaque sapiente dolores! Asperiores nisi perferendis ad culpa, fugiat tempore, nobis excepturi blanditiis consectetur a dolorem!Veritatis dolorum quibusdam velit distinctio animi dolorem, laboriosam vitae consequatur mollitia earum adipisci magnam harum voluptates fuga asperiores eius id assumenda accusamus laborum quam deleniti aperiam. Quidem laudantium incidunt nobis."
        },
        {
            id: 10,
            img: "https://livedemo00.template-help.com/wt_59090_v1/images/pages/our-team-01-270x270.jpg",
            name: "Dr.Alter Jenkins",
            destination: "PEDIATRICSt",
            summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dolorem porro qui reprehenderit illum eaque sapiente dolores! Asperiores nisi perferendis ad culpa, fugiat tempore, nobis excepturi blanditiis consectetur a dolorem!Veritatis dolorum quibusdam velit distinctio animi dolorem, laboriosam vitae consequatur mollitia earum adipisci magnam harum voluptates fuga asperiores eius id assumenda accusamus laborum quam deleniti aperiam. Quidem laudantium incidunt nobis."
        }
    ]
    let id=useParams().id;
    return (
        <div className=''>
            <div class="card border-0 mb-3" >
                <div class="row p-5 g-0">
                    <div class=" col-sm-12 col-md-12 col-lg-6">
                        <img src={one.find(e=>e.id==id).img} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-12 col-lg-6 col-sm-12">
                        <div class="card-body text-start">
                            <h5 class="card-title text-primary">{one.find(e=>e.id==id).name}</h5>
                            <p class="card-text text-secondary">{one.find(e=>e.id==id).destination}</p>
                            <p class="card-text">{one.find(e=>e.id==id).summary}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default OurTeamDEtails;