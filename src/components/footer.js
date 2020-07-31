import React from 'react';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faLinkedinIn, faPinterestP} from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return(
        <div>
        <footer className="footer spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="footer__about">
                        <div className="footer__about__logo">
                            <a href={'ogani'}><img src={require('./img/logo.png')} alt=""/></a>
                        </div>
                        <ul>
                            <li>Address: 60-49 Road 11378 New York</li>
                            <li>Phone: +65 11.188.888</li>
                            <li>Email: hello@colorlib.com</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                    <div className="footer__widget">
                        <h6>Useful Links</h6>
                        <ul>
                            <li><a href={'link'}>About Us</a></li>
                            <li><a href={'link'}>About Our Shop</a></li>
                            <li><a href={'link'}>Secure Shopping</a></li>
                            <li><a href={'link'}>Delivery infomation</a></li>
                            <li><a href={'link'}>Privacy Policy</a></li>
                            <li><a href={'link'}>Our Sitemap</a></li>
                        </ul>
                        <ul>
                            <li><a href={'link'}>Who We Are</a></li>
                            <li><a href={'link'}>Our Services</a></li>
                            <li><a href={'link'}>Projects</a></li>
                            <li><a href={'link'}>Contact</a></li>
                            <li><a href={'link'}>Innovation</a></li>
                            <li><a href={'link'}>Testimonials</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="footer__widget">
                        <h6>Join Our Newsletter Now</h6>
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                        <form action={'form'}>
                            <input type="text" placeholder="Enter your mail"/>
                            <button type="submit" className="site-btn">Subscribe</button>
                        </form>
                        <div className="footer__widget__social">
                            <a href={'link'}><FontAwesomeIcon icon={faFacebookF} size="lg"/></a>
                            <a href={'link'}><FontAwesomeIcon icon={faLinkedinIn} size="lg"/></a>
                            <a href={'link'}><FontAwesomeIcon icon={faTwitter} size="lg"/></a>
                            <a href={'link'}><FontAwesomeIcon icon={faPinterestP} size="lg"/></a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="footer__copyright container">
                        <div className="footer__copyright__text"><p>
                        Copyright &copy;{new Date().getFullYear()} All rights reserved | This website is made with <FontAwesomeIcon icon={faHeart}/>
                        </p></div>
                        <div className="footer__copyright__payment"><img src={require('./img/payment-item.png')} alt=""/></div>
                    </div>
                </div>
            </div>
    </footer>
    </div>
    )
    
}
export default Footer;