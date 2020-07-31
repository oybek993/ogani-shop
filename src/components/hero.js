import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faPhone} from "@fortawesome/free-solid-svg-icons";
import banner from './img/hero/banner.jpg';
//import Product from './product';
const bg = {
    backgroundImage: `url(${banner})`
}
//var rows = [];
//var numrows = 5;
//for (var i = 0; i < numrows; i++) {
//    rows.push(<Product key={i} name="meat" img={require('./img/product/product-1.jpg')} cost="$30"/>);
//}
//<div>{rows}</div>
function Hero() {
    return(
        <section className="hero">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="hero__categories">
                        <div className="hero__categories__all">
                            <FontAwesomeIcon icon={faBars} size="lg"/>
                            <span>All departments</span>
                        </div>
                        <ul>
                            <li><a href={'hi'}>Fresh Meat</a></li>
                            <li><a href={'hi'}>Vegetables</a></li>
                            <li><a href={'hi'}>Fruit &amp; Nut Gifts</a></li>
                            <li><a href={'hi'}>Fresh Berries</a></li>
                            <li><a href={'hi'}>Ocean Foods</a></li>
                            <li><a href={'hi'}>Butter &amp; Eggs</a></li>
                            <li><a href={'hi'}>Fastfood</a></li>
                            <li><a href={'hi'}>Fresh Onion</a></li>
                            <li><a href={'hi'}>Papayaya &amp; Crisps</a></li>
                            <li><a href={'hi'}>Oatmeal</a></li>
                            <li><a href={'hi'}>Fresh Bananas</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="hero__search">
                        <div className="hero__search__form">
                            <form action="#">
                                <div className="hero__search__categories">
                                    All Categories
                                    <span className="arrow_carrot-down"></span>
                                </div>
                                <input type="text" placeholder="What do yo u need?"/>
                                <button type="submit" className="site-btn">SEARCH</button>
                            </form>
                        </div>
                        <div className="hero__search__phone">
                            <div className="hero__search__phone__icon">
                                <FontAwesomeIcon icon={faPhone} size="lg"/>
                            </div>
                            <div className="hero__search__phone__text">
                                <h5>+65 11.188.888</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero__item set-bg" style={bg}>
                        <div className="hero__text">
                            <span>FRUIT FRESH</span>
                            <h2>Vegetable <br />100% Organic</h2>
                            <p>Free Pickup and Delivery Available</p>
                            <a href={'hi'} className="primary-btn">SHOP NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    
    )
};

export default Hero;