import React, { useRef, useState } from 'react'
import Slider from "react-slick";

//componentes
import CardItemCarrusel from "./CardItemCarrusel";

//Datos para el Carousel
import { Categorys } from '../../data/Categorys';

//Estilos y diseño
import './CarruselCatalogue.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css'; 

//Icons 
import { VscChevronRight } from "react-icons/vsc";
import { VscChevronLeft } from "react-icons/vsc";




export const CarruselCatalogue = ({component}) => {

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
                {Categorys?.map((item, index) => (
                  <CardItemCarrusel
                    key={`${component}-${index}`}
                    text={item.text}
                    src={item.img}
                    label={item.label}
                    href={item.href}
                  />
                  ))}
              </Slider>
        </div>
      </div>

      {/* Categorias Movil */}
      <div className="main-Container-Movil">
        <div className='container-Slick' >
          {Categorys?.map((item, index) => (
                  <CardItemCarrusel
                    key={`${component}-${index}`}
                    text={item.text}
                    src={item.img}
                    label={item.label}
                    href={item.href}
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
