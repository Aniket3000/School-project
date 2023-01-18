import React from 'react'
import Homeside from './Homeside';
import Sidenav from './Sidenav';
import './static/studash.css'

function StuDashboard() {
  return (
    <>
      <div className="ro">   
        <Sidenav />
        <Homeside />
      </div>
    </>
  )
}

export default StuDashboard