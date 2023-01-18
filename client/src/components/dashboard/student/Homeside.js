import React from 'react'
import Navbar from './Navbar'
import './static/homeside.css'

function Homeside() {
  return (
    <>
      <div className="components">
        <div className="nav-container">
          <Navbar />        
        </div>
        <div className="content-container">
          <div className="content-here">
            <br /><p>Content Here</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homeside