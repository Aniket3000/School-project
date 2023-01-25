import React from 'react'
import HomesideMessages from './HomesideMessages'
import Sidenav from './Sidenav'

function Messages() {
  return (
    <>
      <div className="ro">
        <Sidenav />
        <HomesideMessages />
      </div>
    </>
  )
}

export default Messages