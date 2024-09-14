import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer_container">
                <div className="container">
                    <div className="footer">
                        <div className="top">
                            <div className="left">
                                <h3>BE THE FIRST TO KNOW</h3>
                                <p>Sign up for updates from metta muse.</p>
                                <div className="input_div">
                                    <input type="email" name="email" id="email" placeholder='Enter your e-mail...' />
                                    <button>SUBSCRIBE</button>
                                </div>
                            </div>
                            <div className="right">
                                <h3>CONTACT US</h3>
                                <p>+44 221 133 5360</p>
                                <p>customercare@mettamuse.com</p>
                                <h3>CURRENCY</h3>
                                <h3><img src={'/USA.png'} alt="country(USA)" /> <span></span> USD</h3>
                                <small>Transactions will be completed in Euros and a currency reference is available on hover.</small>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="left">
                                <div className="metta">
                                    <h3>mettā muse</h3>
                                    <ul>
                                        <li>About Us</li>
                                        <li>Stories</li>
                                        <li>Artisans</li>
                                        <li>Boutiques</li>
                                        <li>Contact Us</li>
                                        <li>EU Compliances Docs</li>
                                    </ul>
                                </div>
                                <div className="quick">
                                    <h3>QUICK LINKS</h3>
                                    <ul>
                                        <li>Orders & Shipping</li>
                                        <li>Join/Login as a Seller</li>
                                        <li>Payment & Pricing</li>
                                        <li>Return & Refunds</li>
                                        <li>Return & Refunds</li>
                                        <li>Privacy Policy</li>
                                        <li>Terms & Conditions</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="right">
                                <h3>FOLLOW US</h3>
                                <div className="social_icons">
                                    <a href='#' className="icon">
                                        <img src={'/insta.png'} alt="social_icon" />
                                    </a>
                                    <a href='#' className="icon">
                                        <img src={'/linkdin.png'} alt="social_icon" />
                                    </a>
                                </div>

                                <div className="payments">
                                    <h3>mettā muse Accepts</h3>
                                    <div className="payment_icons">
                                        <img src={'/p1.png'} alt="payment accept card icon" />
                                        <img src={'/p2.png'} alt="payment accept card icon" />
                                        <img src={'/p3.png'} alt="payment accept card icon" />
                                        <img src={'/p4.png'} alt="payment accept card icon" />
                                        <img src={'/p5.png'} alt="payment accept card icon" />
                                        <img src={'/p6.png'} alt="payment accept card icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>Copyright © 2024 mettamuse. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer