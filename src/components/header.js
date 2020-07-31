import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {faEnvelope, faUser, faHeart, faShoppingBag, faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faLinkedin, faPinterest} from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom';

const h = "hi";
function Header(){

 return (
        
         <div className="header">
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__left">
                            <ul>
                            
                                <li><FontAwesomeIcon icon={faEnvelope} size="lg"/> hello@colorlib.com</li>
                                <li>Free Shipping for all Order of $99</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__right">
                            <div className="header__top__right__social">
                                <a target="_blank" rel="noopener noreferrer" href={'https://facebook.com'}><FontAwesomeIcon icon={faFacebook}size="lg"/></a>
                                <a target="_blank" rel="noopener noreferrer" href={'https://twitter.com'}><FontAwesomeIcon icon={faTwitter}size="lg"/></a>
                                <a target="_blank" rel="noopener noreferrer" href={'htpps://linkedin.com'}><FontAwesomeIcon icon={faLinkedin}size="lg"/></a>
                                <a target="_blank" rel="noopener noreferrer" href={'htpps://pinterest.com'}><FontAwesomeIcon icon={faPinterest}size="lg"/></a>
                            </div>
                            <div className="header__top__right__language">
                                <img src={require('./img/language.png')} alt="" />
                                <div>English</div>
                                <span className="arrow_carrot-down"></span>
                                <ul>
                                    <li><a href={h}>Spanis</a></li>
                                    <li><a href={h}>English</a></li>
                                </ul>
                            </div>
                            <div className="header__top__right__auth">
                                <a href={h}><FontAwesomeIcon icon={faUser}size="lg"/> Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="header__logo">
                        <a href={h}><img src={require('./img/logo.png')} alt=""/></a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <nav className="header__menu">
                        <ul>
                            <li className="active"><a href={'/home'}>Home</a></li>
                            <li><Link to='/shop-grid'>Shop</Link></li>
                            <li><a href={h}>Pages</a>
                                <ul className="header__menu__dropdown">
                                    <li><a href={h}>Shop Details</a></li>
                                    <li><a href={h}>Shoping Cart</a></li>
                                    <li><a href={h}>Check Out</a></li>
                                    <li><a href={h}>Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href={h}>Blog</a></li>
                            <li><Link to="/featured">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3">
                    <div className="header__cart">
                        <ul>
                            <li><a href={h}><FontAwesomeIcon icon={faHeart} size="lg"/> <span>1</span></a></li>
                            <li><a href={h}><FontAwesomeIcon icon={faShoppingBag} size="lg"/> <span>3</span></a></li>
                        </ul>
                        <div className="header__cart__price">item: <span>$150.00</span></div>
                    </div>
                </div>
            </div>
            <div className="humberger__open">
            <FontAwesomeIcon icon={faBars} size="3x"/>
            </div>
        </div>
    </div>
    
 );
}
export default Header;