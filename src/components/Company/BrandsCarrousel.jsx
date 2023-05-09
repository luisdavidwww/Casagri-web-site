import React, { useRef, useState, useEffect } from 'react';
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
import { ACERCA_DE_CASAGRI, INSTALACIONES } from '../../routers/index'

const BrandsCarrousel = () => {

  const [data, setData] = useState([]);
  const [instalaciones, setInstalaciones] = useState([]);

  //creating the ref
  const customeSlider = useRef();

  // setting slider configurations Desktop
  const [sliderSettings, setSliderSettings] = useState({
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  })

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
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

            <div className='AboutUs__title__Container'>
                    <h1 className='AboutUs__title'>Distribuidores <span style={{color:'#489B1E'}}> Autorizados </span> </h1>
            </div>

     <div className="mainContainer">
        <h2>Auto Play</h2>
        <Slider {...settings}>
          <div className="container">
            <img src="https://logodownload.org/wp-content/uploads/2017/09/bayer-logo-1-1.png" />
          </div>
          <div className="container">
            <img src="https://www.multiagri.com/uploads/productos/a0HP7KVSYo.png" />
          </div>
          <div className="container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Syngenta_Logo.svg/2560px-Syngenta_Logo.svg.png" />
          </div>
          <div className="container">
            <img src="http://recruiters-zone.com/static/media/BRS_Ventures.0722bfe22318cd3f3f5d.jpg" />
          </div>
          <div className="container">
            <img src="http://recruiters-zone.com/static/media/ibexglobal.bbde01ca0d4903ed36b1.png" />
          </div>
          <div className="container">
            <img src="http://recruiters-zone.com/static/media/BRS_Ventures.0722bfe22318cd3f3f5d.jpg" />
          </div>
        </Slider>
      </div>


    </>
  )
}

export default BrandsCarrousel;