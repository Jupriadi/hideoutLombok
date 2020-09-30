import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../App.css';

const Banner =()=>{
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div id="banner" className="container bannerBox mt-5 mb-5 pt-5">
            
            <Slider {...settings}>
                <div>
                    <center>
                        <img className="   w-auto text-center" src={require('../img/example/1.jpg')} alt="Credit to Joshua Earle on Unsplash"/>
                    </center>
                </div>
                <div>
                    <center>
                        <img className=" w-auto text-center" src={require('../img/example/2.jpg')} alt="Credit to Joshua Earle on Unsplash"/>
                    </center>
                </div>
                <div>
                    <center>
                        <img className=" w-auto text-center" src={require('../img/example/3.jpg')} alt="Credit to Joshua Earle on Unsplash"/>
                    </center>
                </div>
                <div>
                    <center>
                        <img className=" w-100 text-center" src={require('../img/example/4.jpeg')} alt="Credit to Joshua Earle on Unsplash"/>
                    </center>
                </div>
            </Slider>
        </div>
    );
}

export default Banner