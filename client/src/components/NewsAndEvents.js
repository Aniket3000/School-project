import React from 'react'
import '../static/newsandevents.css'

export default function NewsAndEvents() {
  return (
    <div className='news-events-container'>
      
        <h2 className='news-events-container-heading my-3'>News And Events</h2>

        <div className="news-events-border">
          <div className="news-event-section">
              <h3 className="news-event-section-heading">59th National Roller Skating Championship 2021</h3>
              <p className="news-event-section-date">Aug 30, 2022</p>
              <p className="news-event-section-description">
                  Ms. Samridhi of Class VI-C bagged Gold medal in the 59th National Roller Skating Championship. She was part of the Haryana team. 
              </p>
          </div>
        </div>

        <div className="news-events-border">
          <div className="news-event-section">
              <h3 className="news-event-section-heading">Inter-school Competitions on Eye Donation Awareness 2022</h3>
              <p className="news-event-section-date">December 30, 2022</p>
              <p className="news-event-section-description">
                Inter-school Competitions on Eye Donation Awareness 2022 were organised by Lions Club Chandigarh Central in association with Eye Bank, PGIMER, Chandigarh on December 30, 2022. 
              </p>
          </div>
        </div>

    </div>
  )
}
