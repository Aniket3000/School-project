import React from 'react'
import Navbar from './Navbar'
import './static/homeside.css'
import './static/homesidemessages.css'

let msgs = ["Tomorrow is a holiday on account of something something","Tomorrow is annual function day",
"Tomorrow is something please wear soemthing","Do something","PTM on this date dd.mm.yyyy",
"Tomorrow is something please wear soemthing","Tomorrow is something please wear soemthing",
"Tomorrow is something please wear soemthing","PTM on this date dd.mm.yyyy"];

function Homeside() {
  return (
    <>
      <div className="components">
        <div className="nav-container">
          <Navbar />
        </div>
        <div className="content-container">
          <div className="content-here" style={{padding:0}}>
            <br />
            <h2 style={{paddingLeft:'15px',height:'8vh'}}>Messages</h2>
            <div className="messg-container" style={{overflow:'auto',height:'75vh'}}>
              {msgs.map((msg) => {
                return (<>
                <div className="msgsCard">
                  <p style={{color:'#202124',fontSize:'90%',margin:0,fontWeight:500}}>{msg}</p>
                  <br />
                </div>
                </>)
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homeside