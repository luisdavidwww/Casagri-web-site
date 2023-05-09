import React, { useRef, useState, useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";
import Slider from "react-slick";
import AOS      from 'aos';

//imagenes
import nosotros from 'static/images/home/aboutUsHome.jpg';
import Tecnología from 'static/images/Trayectory/InnovasionTecnologica.jpg';
import Trayectoria from 'static/images/Trayectory/Trayectoria.jpg';
import nosotrosMini from '../../static/images/home/aboutUsHomeMini.jpg';
//Diseño y estilos
import './BrandsCarrousel.css';
//Estilos y diseño
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css'; 
//Icons 
import { VscChevronRight } from "react-icons/vsc";
import { VscChevronLeft } from "react-icons/vsc";

// Data
import { ACERCA_DE_CASAGRI, INSTALACIONES } from '../../routers/index';



//importacion temporal de imagenes
const imgL = require.context('../../static/images/brands', true);

const BrandsCarrousel = () => {

  const [data, setData] = useState([]);

  //creating the ref
  const customeSlider = useRef();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
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
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
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

  const getInfo = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${ACERCA_DE_CASAGRI}`);
    const res = await response.json();

    setData(res.data);
  }

  useEffect(() => {
    getInfo();
  },[])



  return (
    <>

      <div className='AboutUs__title__Container BrandsCarrousel'>
          <h1 className='AboutUs__title'>Distribuidores <span style={{color:'#489B1E'}}> Autorizados </span> </h1>
      </div>

      {/* Desktop */}
     <div className="mainContainer-brand">
      <div className='main-Container-brand'>
        <div className='container-Slick-brand'>
          <Slider {...settings} ref={customeSlider}>
              <div className="container">
                <Link to="/marcas/BAYER - AGROQUIMICOS">
                 <img src={imgL(`./${"bayer.png"}`)} style={{height:'100px', marginTop:'20px'}} />
                </Link>
              </div>
              <div className="container">
                <Link to="/marcas/BAYER - DEKALB">
                  <img src={imgL(`./${"dekalb.png"}`)} style={{height:'130px'}} />
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
            <Slider {...settingsMovil}>
                <div className="container-movil" style={{paddingLeft:'4rem'}}>
                  <Link to="/marcas/BAYER - AGROQUIMICOS">
                  <img className='center__Movil' src={imgL(`./${"bayer.png"}`)} style={{height:'100px', marginTop:'20px'}} />
                  </Link>
                </div>
                <div className="container-movil">
                  <Link to="/marcas/BAYER - DEKALB">
                    <img className='center__Movil' src={imgL(`./${"dekalb.png"}`)} style={{height:'130px'}} />
                  </Link>
                </div>
                <div className="container-movil">
                  <img className='center__Movil' src={imgL(`./${"icl.png"}`)} style={{height:'150px'}} />
                </div>
                <div className="container-movil">
                  <Link to="/marcas/CALBOS">
                    <img className='center__Movil' src={imgL(`./${"calbos.png"}`)} style={{height:'105px', marginTop:'20px'}} />
                  </Link>
                </div>
                <div className="container-movil">
                  <Link to="/marcas/WOLF">
                    <img className='center__Movil' src={imgL(`./${"wolf.png"}`)} style={{height:'100px', marginTop:'25px'}} />
                  </Link>
                </div>
                <div className="container-movil">
                  <Link to="/marcas/WESTAR">
                    <img className='center__Movil' src={imgL(`./${"westar.png"}`)} style={{height:'150px', marginTop:'5px'}} />
                  </Link>
                </div>
            </Slider>
          </div>
        </div>
      
      </div>

      

    </>
  )
}

export default BrandsCarrousel;