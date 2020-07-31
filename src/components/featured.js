import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './product';

function Featured() {
    var rows = [ 
    <Product name="Watermelon"  img={require('./img/product/product-7.jpg')} cost="$50"/>,
    <Product name="Apple"  img={require('./img/product/product-8.jpg')} cost="$190"/>,
    <Product name="Grapes"  img={require('./img/product/product-4.jpg')} cost="$43"/>
];
    let products = [
        <Product name="Meat"  img={require('./img/product/product-1.jpg')} cost="$50"/>,
        <Product name="Banana"  img={require('./img/product/product-2.jpg')} cost="$6"/>,
        <Product name="Fruit"  img={require('./img/product/product-3.jpg')} cost="$12"/>,
    ]

var numrows = 2;

   for (var i = 0; i < numrows; i++) {
       rows.push(products)
    }

    return(
        <section className="featured spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>Featured Product</h2>
                    </div>
                    <div className="featured__controls">
                        <ul>
                            <li className="active" data-filter="*">All</li>
                            <li>Oranges</li>
                            <li>Fresh Meat</li>
                            <li>Vegetables</li>
                            <li>Fastfood</li>
                        </ul>
                    </div>
                    <div>{rows}</div>
                </div>
            </div>
      
        </div>
    </section>
   
    )
}
export default Featured;