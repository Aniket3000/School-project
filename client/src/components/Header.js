import React from 'react'
import "../static/header.css"

function Header() {
  return (
    <div className='header'>
      <div className="header_school_info">
        <div className="header_img_logo">
          <img className="header_img"src="https://www.sghms.com/images/logo.png" alt="School" />
        </div>
        <div className="header_contact">
          <div className="header_contact_1">
            <div className="header_contact_line1">Mail Us</div>
            <div className="header_contact_line2">
              <i className="bi bi-envelope"></i>
              <p className='header_contacts'>schoolmail32@gmail.com</p>
            </div>
          </div>
          <div className="header_contact_2">
            <div className="header_contact_line1">Call Us</div>
            <div className="header_contact_line2">
              <i className="bi bi-telephone-forward"></i>
              <p className='header_contacts'>0172-2691673,4625673</p>
            </div>
          </div>
        </div>
      </div>
      <nav className="header_links navbar navbar-expand-md">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span style={{fontSize: "11px"}}className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <div className='header_links_cont'>HOME</div>
          <div className='header_links_cont'>ABOUT US</div>
          <div className='header_links_cont'>INFRASTRUCTURE</div>
          <div className='header_links_cont'>ACADEMIC</div>
          <div className='header_links_cont'>ADMISSION 2023</div>
          <div className='header_links_cont'>PHOTO GALLERY</div>
          <div className='header_links_cont'>CAREERS</div>
          <div className='header_links_cont'>CONTACT US</div>
        </div>
      </nav>
    </div>
  )
}

export default Header