import React from 'react'
import HomesideCourses from "./HomesideCourses.js"
import Sidenav from "./Sidenav.js"

export default function Courses() {
  return (
    <div>
      <div className="ro">
        <Sidenav />
        <HomesideCourses />
      </div>
    </div>
  )
}
