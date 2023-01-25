import React from 'react'
import Navbar from "./Navbar.js"
import './static/homesideinstructors.css'


let instructors = [{ "name": "Patandar","img":"https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600" }, { "name": "Shatandar","img":"https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=600" }, { "name": "English ki maddam" ,"img":"https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600"}, { "name": "S.k","img":"https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=600" }, { "name": "Einstein","img":"https://www.nobelprize.org/images/einstein-12923-portrait-medium.jpg" }, { "name": "Cauchy","img":"https://www.sapaviva.com/wp-content/uploads/2017/06/16S.-Augustin-Louis-Cauchy-1789-1857-440x440.jpg" }]
let num = 0;
function HomesideInstructors() {
  let colorr = ["cadetblue", "antiquewhite", "chocolate", "lavenderblush", "CornflowerBlue", "Salmon", "DarkOrchid ", "rebeccapurple"];
  let count = 0;  
  return (
<div className="components">
        <div className="nav-container">
          <Navbar />
        </div>
        <div className="content-container">
        <div className="content-here">
          <br />
          <div className='row'>
            {instructors.map(inst => <>
              {console.log(colorr[count])}
              <div className="inst_cards" >
                <div className="inst_card_title_div" style={{ backgroundColor: colorr[count] }}>
                <img src={inst.img} className="inst_img" />
                  <h5 className="inst_card_title"  >{inst.name}</h5>
                </div>
                {console.log(count = (count + 1) % colorr.length)}
                <div className='inst_card_content_div'>
                  <p className="inst_card_text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomesideInstructors