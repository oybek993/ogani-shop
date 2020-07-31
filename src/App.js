import React from 'react';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Footer from './components/footer';
import Featured from './components/featured';
import Banner from './components/banner';
import Blog from './components/blog';
import {Route} from 'react-router-dom';
import Shop from './shop-grid'
function App() {
    return (
        <div>
            <Header/>
            <Hero/>
      <Route exact path="/featured" component={Featured}/>
      <Route exact path="/shop-grid" component={Shop}/>
      <Banner/>
      <section className="from-blog spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title from-blog__title">
                        <h2>From The Blog</h2>
                    </div>
                </div>
            </div>
            <div className="row">
            <Blog img={require('./components/img/blog/blog-1.jpg')} title="Cooking tips make cooking simple" about="Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"/>
            <Blog img={require('./components/img/blog/blog-2.jpg')} title="6 ways to prepare breakfast for 30" about="Qui aute aliquip non veniam et laboris ea ipsum consectetur ut anim nostrud laborum irure."/>
            <Blog img={require('./components/img/blog/blog-3.jpg')} title="Visit the clean farm in the US" about="Irure commodo nisi ipsum qui Lorem non commodo tempor officia mollit veniam labore tempor."/>        
            </div>
          </div>
        </section>
        <Footer/>
    </div>
    )
}
export default App;