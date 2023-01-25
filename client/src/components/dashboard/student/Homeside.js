import React from 'react'
import Navbar from './Navbar'
import './static/homeside.css'
import {Link} from 'react-router-dom'
import Messages from './Messages'



let subjects = [{ "name": "Punjabi" }, { "name": "Hindi" }]
let num = 0;

let msgs = ["Tomorrow is a holiday on account of something something",
"Tomorrow is annual function day","Do something"];

function Homeside() {
  let colorr = ["cadetblue", "antiquewhite", "chocolate", "lavenderblush", "CornflowerBlue", "Salmon", "DarkOrchid ", "rebeccapurple"];
  let count = 0;
  return (
    <>
      <div className="components">
        <div className="nav-container">
          <Navbar />
        </div>
        <div className="content-container">
          <div className="content-here">
            <h2 style={{padding:'10px',paddingTop:'20px'}}>Courses</h2>
            <div className='row'>
              {subjects.map(sub => <>
                {console.log(colorr[count])}
                <div className="sub_cards" >
                  <div className="sub_card_title_div" style={{ backgroundColor: colorr[count] }}>
                    <h5 className="sub_card_title"  >{sub.name}</h5>
                  </div>
                  {console.log(count = (count + 1) % colorr.length)}
                  {/* <h6 className="card-subtitle text-muted">Card subtitle</h6> */}
                  <div className='sub_card_content_div'>
                    <p className="sub_card_text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </>)}
              <Link to="/students/courses" className="see_more_courses">
                <span style={{color:'red'}}>See more...</span> </Link>
            </div>
            <div className="messages-part">
              <h2 style={{padding:'10px',paddingTop:'20px'}}>Messages</h2>
              {msgs.map((msg)=>{
                return (
                  <>
                <div className="msgsCard" style={{width:"50%",marginLeft:"20px"}}>
                  <p style={{color:'#202124',fontSize:'90%',margin:0,fontWeight:500}}>{msg}</p>
                  <br />
                </div>
                </>
                )
              })}
              <br />
              <Link to="/students/messages" className="see_more_courses">
                <span style={{color:'red'}}>See more...</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homeside