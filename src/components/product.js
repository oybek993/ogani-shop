import React from 'react';
import {faHeart, faRetweet, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Product({name, cost, img, category}) {
    return (
        <div className="product">
        <div className="featured__item d-inline-block">
            <div className="featured__item__pic d-inline-block">
                <img src={img} alt="product"/> 
                <ul className="featured__item__pic__hover">
                    <li><a href={'hi'} className="fontaw"><FontAwesomeIcon icon={faHeart} size="lg"/></a></li>
                    <li><a href={'hi'} className="fontaw"><FontAwesomeIcon icon={faRetweet} size="lg"/></a></li>
                    <li><a href={'hi'} className="fontaw"><FontAwesomeIcon icon={faShoppingCart} size="lg"/></a></li>
                </ul>
            </div>
            <div className="featured__item__text">
                <h6><a href={'hi'}>{name}</a></h6>  
                <h5>{cost}</h5>
                <h2 className="category">{category}</h2>
            </div>
            </div>
            </div>
            
    );
}

export default Product;