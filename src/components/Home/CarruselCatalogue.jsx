import React, { useRef, useState } from 'react'
import Slider from "react-slick";

//componentes
import CardItemCarrusel from "./CardItemCarrusel";

//Estilos y diseño
import './CarruselCatalogue.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Icons 

import { VscChevronRight } from "react-icons/vsc";
import { VscChevronLeft } from "react-icons/vsc";




export const CarruselCatalogue = () => {

  //creating the ref
  const customeSlider = useRef();
  const customeSliderMovil = useRef();

  // setting slider configurations Desktop
  const [sliderSettings, setSliderSettings] = useState({
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  })
  // setting slider configurations Movil
  const [sliderSettingsMovil, setSliderSettingsMovil] = useState({
    infinite: false,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    arrows: false,
  })


  //funciones para desktop
  const gotoNext = () => {
    customeSlider.current.slickNext();
  }
  const gotoPrev = () => {
    customeSlider.current.slickPrev();
    console.log("funcion activa")
  }

  //funciones para Movil
  const gotoNextMovil = () => {
    customeSliderMovil.current.slickNext();
  }
  const gotoPrevMovil = () => {
    customeSliderMovil.current.slickPrev();
  }


  const imageLoader = ({ src }) => {
    return `/images/carrusel/${src}`
  }


 

  return (
    <>
      <div className='title-container-two'>
        <h1 className='title-basic-center-two'>Nuestros Productos</h1>
      </div>

    {/* Carrusel Desktop */}
    <div className="main-Container">
      <div className='container-Slick'>
            <Slider {...sliderSettings} ref={customeSlider}>
                <CardItemCarrusel
                  src='agroindustrial.jpg'
                  text='Agroindustrial'
                  label=''
                  path='/store'
                />
                <CardItemCarrusel
                  src='maquinarias.jpg'
                  text='Maquinarias'
                  path='/store'
                />
                <CardItemCarrusel
                  src='saludAnimal.jpg'
                  text='Salud Animal'
                  label=''
                  path='/Store'
                />
                <CardItemCarrusel
                  src='ferreteria.jpg'
                  text='Ferretería'
                  label=''
                  path='/store'
                />
                <CardItemCarrusel
                  src='salud-publica.jpg'
                  text='Salud Pública'
                  label=''
                  path='/store'
                />
            </Slider>
      </div>
    </div>

    {/* Carrusel Movil */}
    <div className="main-Container-Movil">
      <div className='container-Slick'>
            <Slider {...sliderSettingsMovil} ref={customeSliderMovil}>
                <CardItemCarrusel
                  src='agroindustrial.jpg'
                  text='Agroindustrial'
                  label=''
                  path='/store'
                />
                <CardItemCarrusel
                  src='maquinarias.jpg'
                  text='Maquinarias'
                  path='/store'
                />
                <CardItemCarrusel
                  src='saludAnimal.jpg'
                  text='Salud Animal'
                  label=''
                  path='/Store'
                />
                <CardItemCarrusel
                  src='ferreteria.jpg'
                  text='Ferretería'
                  label=''
                  path='/store'
                />
                <CardItemCarrusel
                  src='salud-publica.jpg'
                  text='Salud Pública'
                  label=''
                  path='/store'
                />
            </Slider>
      </div>
    </div>

    {/* Botones Controladores Desktop */}
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

    {/* Botones Controladores Movil */}
    <div className='container-Control-Movil'>
      <div className='container-Control-Block-Movil'>
      <div className='container-tbn-Movil'>
        <div className='container-btn-deg' >
          <button className='btn-deg' onClick={()=>gotoPrevMovil()} >
            <VscChevronLeft className='btnPrevios'/>
          </button>
        </div>
        <div className='container-btn-deg' >
          <button className='btn-deg' onClick={()=>gotoNextMovil()}>
            <VscChevronRight className='btnNext'/>
          </button>
        </div>
      </div>
        
      </div>
    </div>
    </>
    
  )


}
