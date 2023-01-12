import React from 'react'
import "../static/features.css";
export default function Features() {
    const read_more = () => {
        if (document.getElementById("more_text").style.display == "none") {
            document.getElementById("more_text").style.display = "inline";
            document.getElementById("dots").style.display = "none";
            document.getElementById("read_more_symbol").classList.add('bi-dash');
            document.getElementById("read_more_symbol").classList.remove('bi-plus-lg');
            document.getElementById("read_more_symbol").innerText = " Read less";
        }
        else {
            document.getElementById("more_text").style.display = "none";
            document.getElementById("dots").style.display = "inline";
            document.getElementById("read_more_symbol").classList.remove('bi-dash');
            document.getElementById("read_more_symbol").classList.add('bi-plus-lg');
            document.getElementById("read_more_symbol").innerText = " Read more";
        }
    }
    return (
        <>
            <div className="features_heading">FROM PHYSICAL TO DIGITAL CLASSROOM</div>
            <div className="main_div">
                <div className="feature_div">
                        <img className="images" src="https://www.onmanorama.com/content/dam/mm/en/news/campus-reporter/images/2020/10/26/online-class.jpg.transform/845x440/image.jpg" />
                    <div className="image_info">
                        <h4 className="feature_info_heading">Google Classroom</h4>
                        <p className="feature_info">
                            The school has registered with GOOGLE for GOOGLE CLASSROOM. It is one of the finest online platforms and is secure and user-friendly. To address beforehand the security concerns during online classes, we have created individual email IDs with GOOGLE for our students and teachers.Google Classroom<span id="dots">....</span><span id="more_text"> does not only give us a platform for online classes but is serving as a great medium for Online assessment as well, its success rate being proved by the successful conduct of Unit test and Mid-term examination, both online.</span>
                        </p>
                        <button onClick={read_more} id="read_more_button">
                            <i id="read_more_symbol" className="bi bi-plus-lg"> Read more</i></button>
                    </div>
                </div>
                <div className="feature_div">
                        <img className="images" src="https://www.onmanorama.com/content/dam/mm/en/news/campus-reporter/images/2020/10/26/online-class.jpg.transform/845x440/image.jpg" />
                    <div className="image_info">
                        <h4 className="feature_info_heading">School Mobile App</h4>
                        <p className="feature_info">Manav mangal has launched the School Mobile App for the convenience of the parents. This Mobile App helps parents have online access to Homework, Attendance, Circulars, School Messages, Announcements, Online Fee Payment, Test / Exam Results and Picture Gallery. The parents have round the clock access to all the above.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
