import React, { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";

//Estilos y diseño
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css'; 
import './BrandsCarrousel.css';
//Icons 
import { VscChevronRight } from "react-icons/vsc";
import { VscChevronLeft } from "react-icons/vsc";



//importacion temporal de imagenes
const imgL = require.context('../../static/images/brands', true);

const BrandsCarrousel = () => {


  //creating the ref
  const customeSlider = useRef();
  const customeSliderMovil = useRef();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  const settingsMovil = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 700,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };


  //funciones para desktop
  const gotoNext = () => {
    customeSlider.current.slickNext();
  }
  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  }

  //funciones para Movil
  const gotoNextMovil = () => {
    customeSliderMovil.current.slickNext();
  }
  const gotoPrevMovil = () => {
    customeSliderMovil.current.slickPrev();
  }



  useEffect(() => {
  },[])



  return (
    <>
      <div className='AboutUs__title__Container BrandsCarrousel'>
          <h1 className='AboutUs__title'>Somos Distribuidores <span style={{color:'#489B1E'}}> Autorizados </span> </h1>
      </div>

      {/* Desktop */}
     <div className="mainContainer-brand">
      <div className='main-Container-brand'>
        <div className='container-Slick-brand'>
          <Slider {...settings} ref={customeSlider}>
              <div className="container">
                <Link to="/marcas/BAYER - AGROQUIMICOS">
                 <img src={imgL(`./${"BAYER - AGROQUIMICOS.png"}`)} style={{height:'100px', marginTop:'20px'}} />
                </Link>
              </div>
              <div className="container">
                <Link to="/marcas/BAYER - DEKALB">
                  <img src={imgL(`./${"BAYER - DEKALB.png"}`)} style={{height:'130px'}} />
                </Link>
              </div>
              <div className="container">
                <img src={imgL(`./${"icl.png"}`)} style={{height:'150px'}} />
              </div>
              <div className="container">
                <Link to="/marcas/CALBOS">
                  <img src={imgL(`./${"calbos.png"}`)} style={{height:'105px', marginTop:'20px'}} />
                </Link>
              </div>
              <div className="container">
                <Link to="/marcas/WOLF">
                  <img src={imgL(`./${"wolf.png"}`)} style={{height:'100px', marginTop:'25px'}} />
                </Link>
              </div>
              <div className="container">
                <Link to="/marcas/WESTAR">
                  <img src={imgL(`./${"westar.png"}`)} style={{height:'150px', marginTop:'5px'}} />
                </Link>
              </div>
              <div className="container">
                <Link to="/marcas/ALPINA">
                  <img src={imgL(`./${"ALPINA.png"}`)} style={{height:'150px', marginTop:'5px'}} />
                </Link>
              </div>
              <div className="container">
                <Link to="/marcas/STIGA">
                  <img src={imgL(`./${"STIGA.png"}`)} style={{height:'150px', marginTop:'5px'}} />
                </Link>
              </div>
              <div className="container">
                <Link to="/marcas/DAL DEGAN">
                  <img src={imgL(`./${"DAL DEGAN.png"}`)} style={{height:'150px', marginTop:'0px'}} />
                </Link>
              </div>
          </Slider>
        </div>
      </div>
      
        

        {/* Botones Controladores Desktop */}
        <div className='btn_trayectory__containerBrands' data-aos="zoom-in-up" data-aos-once="true" data-aos-duration="2000">
            <div className='container-Control'>
              <div className='container-Control-Block'>
                <div className='container-tbn'>
                  <div className='container-btn-deg' onClick={()=>gotoPrev()}>
                    <button className='btn-deg'>
                      <VscChevronLeft className='btnPrevios'/>
                    </button>
                  </div>
                  <div className='container-btn-deg' onClick={()=>gotoNext()}>
                    <button className='btn-deg'>
                      <VscChevronRight className='btnNext'/>
                    </button>
                  </div>
                </div>  
              </div>
            </div>
        </div>
      </div>

      {/* Movil */}
      <div className="mainContainer-brand-movil">
        <div className='main-Container-brand'>
          <div className='container-Slick-brand'>
            <Slider {...settingsMovil} ref={customeSliderMovil}>
                <div className="container-movil" >
                  <Link to="/marcas/BAYER - AGROQUIMICOS">
                      <img className='center__Movil' src={imgL(`./${"BAYER - AGROQUIMICOS.png"}`)} style={{height:'80px', marginTop:'20px', paddingLeft:'10px'}} />
                  </Link>
                </div>
                <div className="container-movil">
                  <Link to="/marcas/BAYER - DEKALB">
                    <img className='center__Movil' src={imgL(`./${"BAYER - DEKALB.png"}`)} style={{height:'100px', paddingLeft:'0px', marginTop:'7px'}} />
                  </Link>
                </div>
                <div className="container-movil">
                  <img className='center__Movil' src={imgL(`./${"icl.png"}`)} style={{height:'105px', paddingLeft:'7px', marginTop:'5px'}} />
                </div>
                <div className="container-movil">
                  <Link to="/marcas/CALBOS">
                    <img className='center__Movil' src={imgL(`./${"calbos.png"}`)} style={{height:'80px', paddingLeft:'15px', marginTop:'20px'}} />
                  </Link>
                </div>
                <div className="container-movil">
                  <Link to="/marcas/WOLF">
                    <img className='center__Movil' src={imgL(`./${"wolf.png"}`)} style={{height:'80px', paddingLeft:'10px', marginTop:'20px'}} />
                  </Link>
                </div>
                <div className="container-movil">
                  <Link to="/marcas/WESTAR">
                    <img className='center__Movil' src={imgL(`./${"westar.png"}`)} style={{height:'110px', marginTop:'15px', paddingRight:'5px'}} />
                  </Link>
                </div>
            </Slider>
          </div>
        </div>
        {/* Botones Controladores Desktop */}
        <div className='container-movil-btn'>

        <div className='container-btn-deg' onClick={()=>gotoPrevMovil()}>
          <button className='btn-deg'>
            <VscChevronLeft className='btnPrevios'/>
          </button>
        </div>
        <div className='container-btn-deg' onClick={()=>gotoNextMovil()}>
          <button className='btn-deg'>
            <VscChevronRight className='btnNext'/>
          </button>
        </div>

      </div>
      </div>
    </>
  )
}

export default BrandsCarrousel;