import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';
import PackageList from './pacakageList';

const Package =()=>{
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return(
        <div className="container bg-custom p-5 bg-light" style={{fontFamily:"Manjari, Thin"}}>

            <div className="row">
                <div className="col-lg-3 align-middle">

                    <h3 className="align-middle">Package List</h3>
                    <hr/>
                    Jobs fill your pocket, Adventures fill your soul.
                </div>
                <div className="col-lg-9 justify-content-center inline">
                    <Slider {...settings}>
                        <PackageList judul="Sembalun Mandalika" /> 
                        <PackageList judul="Sembalun Only" /> 
                        <PackageList judul="Mandalika Only" /> 
                        <PackageList judul="Sembalun Nanggi" /> 
                        <PackageList judul="Sembalun Anak Dara" /> 
                        <PackageList judul="Sembalun Pergasingan" /> 
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Package;