import React from 'react'
import "./static/courses.css"
import Navbar from "./Navbar.js"


let subjects = [{ "name": "Punjabi" }, { "name": "Hindi" }, { "name": "English" }, { "name": "S.S.T" }, { "name": "Science" }, { "name": "Mathematics" }]
let num = 0;
function HomesideCourses() {
  let colorr = ["cadetblue", "antiquewhite", "chocolate", "lavenderblush", "CornflowerBlue", "Salmon", "DarkOrchid ", "rebeccapurple"];
  let count = 0;  
  return (
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
                <div className='sub_card_content_div'>
                  <p className="sub_card_text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomesideCourses