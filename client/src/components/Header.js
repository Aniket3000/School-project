import React from 'react'
import { Link, Outlet } from 'react-router-dom'
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
          <div className='header_links_cont'><Link to={'/'} preventScrollReset={true} >HOME</Link></div>
          <div className='header_links_cont'>
            <Link to={'/about'} preventScrollReset={true} >
              ABOUT US
            </Link>
          </div>
          <div className='header_links_cont'><Link to={'/infrastructure'} preventScrollReset={true} >INFRASTRUCTURE</Link></div>
          <div className='header_links_cont'>
            <Link to={'/academic'} preventScrollReset={true} >ACADEMIC</Link></div>
          <div className='header_links_cont'>ADMISSION 2023</div>
          <div className='header_links_cont'>CAREERS</div>
          <div className='header_links_cont'><Link to={'/contactUs'} preventScrollReset={true} >CONTACT US</Link></div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default Header