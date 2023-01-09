import React from 'react'
import "../static/footer.css"

export default function Footer() {
    return (
        <>
            <div className="footer_block_mob" id="loc_mob">
                <div className="footer_block_head_mob">
                    Reach us at
                </div>
                <div className="mob_address">
                    <div className="mob_address_info">
                        <ul className="footer_contact_list">
                            <li className="footer_contact_list_item">
                                <i className="bi bi-geo-alt-fill"> Sri Guru Harkrishan Model School 38-D, Chandigarh INDIA-160036</i>
                            </li>
                            <li className="footer_contact_list_item">
                                <i className="bi bi-telephone"> 0172-2691673,  4625673</i>
                            </li>
                            <li className="footer_contact_list_item">
                                <i className="bi bi-envelope-at"> sghms38@gmail.com</i>
                            </li>
                            <li className="footer_contact_list_item">
                                <i className="bi bi-globe2"> www.sghms.com</i>
                            </li>
                        </ul>
                    </div>
                    <div className="mob_map">
                        {/* <iframe className="footer_iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14716.508833950513!2d85.83274499999999!3d22.76065995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f591e1664d7ec1%3A0xe9da7c4651f36f7f!2sGandpur%2C%20Jharkhand%20833101!5e0!3m2!1sen!2sin!4v1672939417118!5m2!1sen!2sin" width="100%" height="100%"></iframe> */}
                        {/* <iframe className="footer_iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13719.048058977454!2d76.72209695!3d30.725090149999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee6e18caee97%3A0x5cd8fce962cbea90!2sGlades%20Hotel!5e0!3m2!1sen!2sin!4v1672939758799!5m2!1sen!2sin" width="100%" height="230" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    </div>
                </div>
            </div>
            <div className="footer_body">
                <div className="footer_block">
                    <div className="footer_block_head">
                        About us
                    </div>
                    <div className="footer_block_content">
                        <p>
                            Sri Guru Harkrishan Model School was founded in 1974 by the great visionary and philanthropist, Late Mrs. Harbans Kaur to provide a sound education in a well disciplined yet happy atmosphere where moral values and ideals are considered to be important.
                        </p>
                    </div>
                </div>
                <div className="footer_block">
                    <div className="footer_block_head">
                        Quick Links
                    </div>
                    <ul className="footer_link_list">
                        <li className="footer_link_list_li"><i className="bi bi-arrow-return-right"></i><a href="" className="footer_list_item">Home</a></li>
                        <li className="footer_link_list_li"><i className="bi bi-arrow-return-right"></i><a href="" className="footer_list_item">About Us</a></li>
                        <li className="footer_link_list_li"><i className="bi bi-arrow-return-right"></i><a href="" className="footer_list_item">Infrastructure</a></li>
                        <li className="footer_link_list_li"><i className="bi bi-arrow-return-right"></i><a href="" className="footer_list_item">Academics</a></li>
                        <li className="footer_link_list_li"><i className="bi bi-arrow-return-right"></i><a href="" className="footer_list_item">Academics Calender</a></li>
                        <li className="footer_link_list_li"><i className="bi bi-arrow-return-right"></i><a href="" className="footer_list_item">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer_block mob_transparent">
                    <div className="footer_block_head">
                        Our Location
                    </div>
                    <div>
                        {/* <iframe className="footer_iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14716.508833950513!2d85.83274499999999!3d22.76065995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f591e1664d7ec1%3A0xe9da7c4651f36f7f!2sGandpur%2C%20Jharkhand%20833101!5e0!3m2!1sen!2sin!4v1672939417118!5m2!1sen!2sin" width="100%" height="100%"></iframe> */}
                        {/* <iframe className="footer_iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13719.048058977454!2d76.72209695!3d30.725090149999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee6e18caee97%3A0x5cd8fce962cbea90!2sGlades%20Hotel!5e0!3m2!1sen!2sin!4v1672939758799!5m2!1sen!2sin" width="100%" height="230" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    </div>
                </div>
                <div className="footer_block mob_transparent">
                    <div className="footer_block_head">
                        Address
                    </div>
                    <div>
                        <ul className="footer_contact_list">
                            <li className="footer_contact_list_item">
                                <i className="bi bi-geo-alt-fill"> Sri Guru Harkrishan Model School 38-D, Chandigarh INDIA-160036</i>
                            </li>
                            <li className="footer_contact_list_item">
                                <i className="bi bi-telephone"> 0172-2691673,  4625673</i>
                            </li>
                            <li className="footer_contact_list_item">
                                <i className="bi bi-envelope-at"> sghms38@gmail.com</i>
                            </li>
                            <li className="footer_contact_list_item">
                                <i className="bi bi-globe2"> www.sghms.com</i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer_border">
            </div>
        </>
    )
}
