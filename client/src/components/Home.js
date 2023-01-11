import React from 'react'
import "../static/home.css"
import Features from './Features'

function Home() {
  return (
    <div className='home'>
      {/* //////////////////////////----------CAROUSEL------------- ///////////////////////////// */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src="https://www.sghms.com/images/slider-01.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://www.sghms.com/images/banner-1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://www.sghms.com/images/banner-4.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          {/* <span className="visually-hidden">Previous</span> */}
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          {/* <span className="visually-hidden">Next</span> */}
        </button>
      </div>
      {/* ////////////////////////////----------SCHOOL CONTENT--------------/////////////////////////////////////// */}
      <div className="home_content">
        <div className="home_content_speech">
          <h2>Welcome to Best of best of best'm best'm School</h2>
          <p>Sri Guru Harkrishan Model School was founded in 1974 by the great visionary and philanthropist,<br />Late Mrs.
            Harbans Kaur to provide a sound education in a well disciplined yet happy atmosphere<br />where moral values and
            ideals are considered to be important.<br /><br />
            This belief continues to have a strong influence on the life and work of the School. The School is<br />designed
            to provide a continuous education for boys and girls from the age of 2 to 17+. The<br />School occupies an
            attractive and spacious 2 acre site and many major developments.<br /><br />
            The majestic triple storied building of the school is a fine piece of architectural design with<br />spacious,
            airy, well lighted class rooms & separate wings for different schools.<br /><br />
            Our school strives to provide integral and holistic education by incorporating modern tools of<br />teaching
            with traditional methods of learning.</p>
          <button type="button" className="btn btn-success">Read More</button>
        </div>
        <div className="home_content_login">
          <img src="https://www.sghms.com/images/little_heart_logo.png" alt="..." />
          <img src="https://www.sghms.com/images/payment.gif" alt="..." />
          <div className="home_content_login_link">
            <h3>LOGIN</h3>
            <img src="https://www.sghms.com/images/school_pad.png" alt="..." />
          </div>
        </div>
      </div>
      {/* ///////////////////////----------SCHOOL FACILITIES--------------/////////////////////////////// */}
      <div className="school_facilities">
        <h2>SCHOOL FACILITIES</h2>
        <div className="general_facilities">
          <div className="image_general_fac">
            <img className="image_home" src="https://img1.wsimg.com/isteam/ip/222b5c40-cbe4-414e-b671-4cae8b60a0b0/4J4A2606%20copy.jpg/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300" alt="..." />
          </div>
          <div className="gen_fac_content">
            <h5 style={{ paddingBottom: "20px", fontWeight: "bold" }}>General Facilities</h5>
            <p>This building is not just about concrete and steel. Every single part of<br />this huge structure is alive
              to the needs of your child. The NOT-SO-<br />COMMON FACILITIES offered here will not only answer to the needs of <br />
              your child to your entire satisfaction but will also make education<br />highly exciting. </p>
            <div className="gen_fac_cont_list">
              <ul style={{ textAlign: "left", marginLeft: "20px" }}>
                <li>Recently refurbished and renovated building (2020)</li>
                <li>R.O Drinking Water Plant</li>
                <li>Mobile-equipped Transport Facility</li>
                <li>Uninterrupted Power Supply</li>
                <li>Transport with Cameras and Vehicle Tracking System</li>
                <li>Parent School Online Alliance App</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="academic_facilities">
          <div className="acad_fac_content">
            <h5 style={{ paddingBottom: "20px", fontWeight: "bold" }}>Academic Facilities</h5>
            <div className="acad_fac_cont_list">
              <ul style={{ textAlign: "left", marginLeft: "20px" }}>
                <li>3 dimensional Smart Learning lab</li>
                <li>Each class multimedia ready with LCD TV/Interactive Touch<br /> Screen Board & Computer</li>
                <li>Smart Assessment Labs</li>
                <li>Updated Computer Science Labs</li>
                <li>Online access to Smart Learning Content at home</li>
              </ul>
            </div>
          </div>
          <div className="image_general_fac">
            <img className="image_home" src="https://img1.wsimg.com/isteam/ip/222b5c40-cbe4-414e-b671-4cae8b60a0b0/pic%2001-0001.jpg/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300" alt="..." />
          </div>
        </div>
      </div>
      {/* ///////////////////////----------FEATURES--------------/////////////////////////////// */}
      <Features/>
      {/* ///////////////////////----------FEEL SCHOOL--------------/////////////////////////////// */}
      <div className="feel_school_for_you">
        <div className="feelsch_content">
          <h1>Feel like we are the right school for<br />you?</h1>
          <a href="/" style={{textDecoration:"none"}} className='feel_btn'>
            <div className="feel_school_button">
              <i className="bi bi-dash-lg bi-left"></i>
              <button>APPLY NOW</button>
              <i className="bi bi-dash-lg bi-right"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home