import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './HomeComponent/HomeComponent';
import AppointmentComponent from './ApointmentComponent/AppointmentComponent';
import AboutComponent from './AboutComponent/AboutComponent';
import ServicesComponent from './ServicesComponent/ServicesComponent';
import { DIAGONSTICIMAGING, FLUVACCINATION, MINORSURGERY, NURSINGSERVICES, PHYSIOTHERAPY, ROUTINEMEDICALCARE } from './ServicesComponent/Section1Component';
import DepartmentComponent from './DepartmentComponent/DepartmentComponent';
import ContactComponent from './ContactComponent/ContactComponent';
import OurTeamComponent from './OurTeamComponent/OurTeamComponent';
import OurTeamDEtails from './OurTeamComponent/OurTeamDEtails';
import FooterComponent from './FooterComponent/HomeSection5Component';
import { useEffect } from 'react';
import AllBlogComponent from './HomeComponent/AllBlogComponent';
import Aos from 'aos';
import 'aos/dist/aos.css'
function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    Aos.init({duration:1000});
  },[]);
  let data = useParams().data
  return (
    <div className="App  m-auto  ">
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<HomeComponent />}></Route>
          <Route path="/blog/" element={<AllBlogComponent />} />

          <Route path='/About' element={<AboutComponent />} />
          <Route path='/Services' element={<ServicesComponent />}>
            <Route index element={<ROUTINEMEDICALCARE />} />
            <Route path="PHYSIOTHERAPY" element={<PHYSIOTHERAPY />} />
            <Route path="MINORSURGERY" element={<MINORSURGERY />} />
            <Route path="NURSINGSERVICES" element={<NURSINGSERVICES />} />
            <Route path="FLUVACCINATION" element={<FLUVACCINATION />} />
            <Route path="DIAGONSTICIMAGING" element={<DIAGONSTICIMAGING />} />
          </Route>
          <Route path='/Department' element={<DepartmentComponent />} />
          <Route path='/Contact' element={<ContactComponent />} />
          <Route path='/Ourteam' element={<OurTeamComponent />}>

          </Route>
          <Route path="/Ourteam/:id" element={<OurTeamDEtails />} />

          <Route path='/appointment' element={<AppointmentComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
