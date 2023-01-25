import React from 'react'
import HomesideInstructors from './HomesideInstructors.js'
import Sidenav from './Sidenav'

export default function Instructors() {
  return (
    <>
      <div className="ro">
        <Sidenav />
        <HomesideInstructors />
      </div>
    </>
  )
}