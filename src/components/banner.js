import React from 'react';
function Banner() {
    return(
        <div class="banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="banner__pic">
                        <img src={require('./img/banner/banner-1.jpg')} alt="Banner1"/>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="banner__pic">
                        <img src={require('./img/banner/banner-2.jpg')} alt="Banner2"/>
                    </div>
                </div>
            </div>
        </div>
    </div>   
    )
}
export default Banner;