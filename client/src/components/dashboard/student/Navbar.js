import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="navbar nav-homeside-css navbar-expand-lg navbar-dark bg-dark" style={{margin: '0px'}}>
            <div className="container-fluid" style={{margin: '0px'}}>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className= "collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                  </li>
                </ul> 
              </div>
              <div className="avatar-place" style={{paddingRight:'4%',paddingLeft:'10%',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <span style={{ color: 'white',paddingRight:'25px',fontSize:'30px'}} className="material-symbols-sharp">notifications</span>
                <img src="https://images.yen.com.gh/images/a4ff1a3509ffbe51.jpg" alt="avatar" className='avatar' />
              </div>
            </div>
          </nav>
    </div>
  )
}

export default Navbar
