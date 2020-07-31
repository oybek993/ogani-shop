import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/product';

function Shop() {
    var rows = [];
    let products = [
        <Product name="Meat"  img={require('./components/img/product/product-1.jpg')} cost="$50"/>,
        <Product name="Banana"  img={require('./components/img/product/product-2.jpg')} cost="$6"/>,
        <Product name="Fruit"  img={require('./components/img/product/product-3.jpg')} cost="$12"/>,
        <Product name="Watermelon"  img={require('./components/img/product/product-7.jpg')} cost="$50"/>,
        <Product name="Apple"  img={require('./components/img/product/product-8.jpg')} cost="$190"/>,
        <Product name="Grapes"  img={require('./components/img/product/product-4.jpg')} cost="$43"/>
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
                        <h2>All Products</h2>
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
export default Shop;