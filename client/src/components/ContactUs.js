import React from 'react'
import "../static/contactus.css";

export default function ContactUs() {
  return (

    <div className="contact-us">

        <div className="contact-us-form">
            
            <h2 className="contact-us-form-heading">Get In Touch</h2>

            <form className="row g-3">

                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder='Name' required/>
                </div>
                <div className="col-md-6">
                    <input type="email" className="form-control" placeholder='Email' required/>
                </div>
                <div className="col-md-6">
                    <input type="number" className="form-control" placeholder='Mobile No' required/> 
                </div>
                <div className="col-md-6">
                    <input type="subject" className="form-control" placeholder='Subject' required/>    
                </div>
                <div>
                    <textarea name="message" id="message" className="form-control" cols="30" rows="5" placeholder="Write Your Message"></textarea>
                </div>
                
                <div className="col-12">
                    <button type="submit" className="btn btn-primary my-2">Send Message</button>
                </div>
        
            </form>

        </div>

        <section className="contact-us-section">
            <h3>Contact Us</h3>
            <p className='my-4'>
                <i className='fa fa-telegram mx-1'></i>
                Sri Guru Harikrishan Model School 38-D, Chandigarh INDIA-160036
            </p>
            <p>
                <i className='fa fa-phone mx-2'></i>
                0172-2691673, 4625673
            </p>
            <p>
                <i className='fa fa-envelope mx-2'></i> 
                sghms38@gmail.com
            </p>
            <p>
                <i className='fa fa-chrome mx-2'></i> 
                www.sghms.com
            </p>
        </section>

    </div>

  )
}
