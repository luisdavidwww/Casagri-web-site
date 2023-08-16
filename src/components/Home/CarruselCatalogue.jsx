import React, { useRef, useState, useEffect } from 'react'
import Slider from "react-slick";

//componentes
import CardItemCarrusel from "./CardItemCarrusel";

//Estilos y diseño
import './CarruselCatalogue.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css'; 

// Data
import { CATEGORIAS } from '../../routers/index';

//Icons 
import { VscChevronRight } from "react-icons/vsc";
import { VscChevronLeft } from "react-icons/vsc";





export const CarruselCatalogue = ({component}) => {



  //Variables de Carga
  const [loanding, setLoanding] = useState(false);
  const [error, setError] = useState(null); 

  //Variables de Banners
  const [bannerCategory, setBannerCategory] = useState([]);

  //Peticion Para los banners delas categorias
  const getInfo = async () => {

    //Estado del Loanding Verdadero
    setLoanding(true);

    //Banner Publicidad -- Peticion a la api
    const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE__TWO}${CATEGORIAS}`);
    const res = await response.json();
    setBannerCategory(res.data);

    //Estado del Loanding Falso
    setLoanding(false);

  }


  //creating the ref
  const customeSlider = useRef();

  // setting slider configurations Desktop
  const [sliderSettings, setSliderSettings] = useState({
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  })

  //funciones para desktop
  const gotoNext = () => {
    customeSlider.current.slickNext();
  }
  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  }


  useEffect(() => {
    getInfo();
  },[])


  return (
    <>
    <section className='CarruselCatalogue__main'>
      <div className='title-container-two'>
          <h1 className='title-basic-center-two' data-aos="fade-up" data-aos-once="true" >
            Categorias
          </h1>
      </div>

      {/* Carrusel Desktop */}
      <div className="main-Container">
        <div className='container-Slick'>
              <Slider {...sliderSettings} ref={customeSlider}>
                {bannerCategory?.map((item, index) => (
                  <CardItemCarrusel
                    key={`${component}-${index}`}
                    text={item.nombre}
                    src={item.imagen_principal}
                    href={`${"/Category/"}${item.nombre}`}
                  />
                  ))}
              </Slider>
        </div>
      </div>

      {/* Categorias Movil */}
      <div className="main-Container-Movil">
        <div className='container-Slick' >
          {bannerCategory?.map((item, index) => (
                  <CardItemCarrusel
                  key={`${component}-${index}`}
                  text={item.nombre}
                  src={item.imagen_principal}
                  href={`${"/Category/"}${item.nombre}`}
                  />
                  ))}
              
        </div>
      </div>

      {/* Botones Controladores Desktop */}
      <div className='container-Control' data-aos="fade-right" data-aos-once="true" data-aos-duration="1000">
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
    </section>
    </>
    
  )


}
