import React from 'react'
import { Outlet } from 'react-router-dom';
import "../static/about.css";

export default function About() {
    return (
        <>
            <div className="heading_image_container">
                <img className="heading_image" src="https://www.aakashgroup.com/wp-content/uploads/2019/07/school-2-1-1000x500.jpg" />
                <div className="heading_image_text">About us</div>
            </div>
            <div className="aboutus_main_div">
                <p className="about_info">Sri Guru Harkrishan Model School was founded in 1974 by the great visionary and philanthropist, Late Mrs. Harbans Kaur to provide a sound education in a well disciplined yet happy atmosphere where moral values and ideals are considered to be important.
                    This belief continues to have a strong influence on the life and work of the School.<br />
                    The School is designed to provide a continuous education for boys and girls from the age of 2 to 17+. The School occupies an attractive and spacious 2 acre site and many major developments and improvements have equipped the School to a high standard, providing the range of facilities needed to deliver a broad and balanced curriculum. Recent development includes a new Early Years center for Nursery and Play group children, and the upgrading of sports and other curriculum facilities for the benefit of all pupils.
                </p>
                <img className="aboutus_info_image" src="https://www.ryangroup.org/public/images/front_end/ryan-images/School-Building_1616488298.jpg" />
            </div>
        </>
    )
}