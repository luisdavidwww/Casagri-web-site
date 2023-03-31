import React, { useRef, useState, useEffect } from 'react';
import Slider from "react-slick";
import AOS      from 'aos';

//imagenes
import nosotros from 'static/images/home/aboutUsHome.jpg';
import Tecnología from 'static/images/Trayectory/InnovasionTecnologica.jpg';
import Trayectoria from 'static/images/Trayectory/Trayectoria.jpg';
import nosotrosMini from '../../static/images/home/aboutUsHomeMini.jpg';
//Diseño y estilos
import './Trayectory.css';
//Estilos y diseño
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css'; 
//Icons 
import { VscChevronRight } from "react-icons/vsc";
import { VscChevronLeft } from "react-icons/vsc";

// Data
import { ACERCA_DE_CASAGRI, INSTALACIONES } from '../../routers/index'

const Trayectory = ({Trayectory}) => {

  const [data, setData] = useState([]);
  const [instalaciones, setInstalaciones] = useState([]);

  //creating the ref
  const customeSlider = useRef();

  // setting slider configurations Desktop
  const [sliderSettings, setSliderSettings] = useState({
    infinite: true,
    speed: 600,
    slidesToShow: 1,
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
      <div className='body-work-container'>

        {/* ----------- DESKTOP ----------------*/}

        {/* Carrusel Desktop */}
        <div className="main-Container" data-aos="fade-right" data-aos-once="true" data-aos-duration="1500">
          <div className='container-Slick'>
                <Slider {...sliderSettings} ref={customeSlider}>
                    <div className='aux'>
                      {/* ----------- Trayectoria y compromiso ----------------*/}
                        <div className='work-container' >
                          {/* Info */}
                            <div className='us-wrap-Info-work'>

                                  <h1 className='title-basic-trayectory' style={{ textAlign:"end"}}> 
                                    Trayectoria, Trabajo y <br /> Compromiso
                                    <span style={{color:'#489B1E'}}> desde 1948 </span> 
                                  </h1>

                                  <h1 className='title-basic-trayectory' style={{ textAlign:"end"}}> 
                                    
                                  </h1>
                                  
                                <div className='us-text-work'>
                                    <p className='text-basic-work'>
                                    Desde el año 1948 se ha mantenido lealmente 
                                    acompañando y mejorando al sector agrícola y 
                                    pecuario del país.
                                    </p>
                                </div>
                            </div>

                          {/* Imagen Principal */}
                            <a className='us-wrap-work'>
                                <img
                                  className='us-img-w'
                                  alt='Sede AgroMax'
                                  src={ Trayectoria }
                                />
                            </a>
                        </div>
                    </div>

                    <div className='auxA'>
                      {/* ----------- Innovación  y  Tecnológica ----------------*/}
                        <div className='us-container__trayectory' >
                          {/* Imagen Principal */}
                          <a className='us-wrap__trayectory'>
                              <img
                                className='us-img__trayectory'
                                alt='Sede AgroMax'
                                src={ Tecnología }
                              />
                          </a>
                          {/* Info */}
                          <div className='us-wrap-Info__trayectory'>

                                <h1 className='title-basic-trayectory' style={{ textAlign:"start"}}> 
                                  Innovación <span style={{color:'#489B1E'}}> Tecnológica</span> 
                                </h1>
                                
                              <div className='us-text__trayectory'>
                                  <p className='text-basic__trayectory'>
                                  Renovamos y ampliamos los productos y servicios constantemente
                                  para adaptarnos a  las necesidades emergentes del Sector 
                                  Agropecuario y Agroindustrial. 
                                  </p>
                              </div>
                          </div>  
                        </div>
                    </div>
                </Slider>
          </div>
        </div>

        {/* Botones Controladores Desktop */}
        <div className='btn_trayectory__container' data-aos="zoom-in-up" data-aos-once="true" data-aos-duration="2000">
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
      
      {/* ----------- MOVIL ----------------*/}

        {/* Trayectoria y compromiso */}
        <div className='us-container__trayectory-movil'  >
            <div>
              <a className='us-wrap__trayectory' >
                    <img
                      className='us-img__trayectory'
                      alt='Sede AgroMax'
                      src={ Trayectoria }
                      data-aos="zoom-in-up" data-aos-once="true" data-aos-duration="1000"
                    />
              </a>
                
              <div className='us-wrap-Info-Movil' data-aos="zoom-in-up" data-aos-once="true" data-aos-duration="1000">
                    <h1 className='title-basic-trayectory'> 
                      Trayectoria, Trabajo y <br /> Compromiso
                      <span style={{color:'#489B1E'}}> desde 1948 </span>
                    </h1>

                  <div className='us-text__trayectory'>
                      <p className='text-basic__trayectory'>
                      Desde el año 1948 se ha mantenido lealmente 
                      acompañando y mejorando al sector agrícola y 
                      pecuario del país.
                      </p>
                  </div>
              </div>
            </div>
        </div>
        {/* ----------- Innovación  y  Tecnológica ----------------*/}
        <div className='us-container__trayectory-movil'  >
              <div className='us-container__trayectory' >

                {/* Imagen Principal */}
                <a className='us-wrap__trayectory'>
                    <img
                      className='us-img__trayectory'
                      alt='Sede AgroMax'
                      src={ Tecnología }
                      data-aos="zoom-in-up" data-aos-once="true" data-aos-duration="1000"
                    />
                </a>


                {/* Info */}
                <div className='us-wrap-Info__trayectory' data-aos="zoom-in-up" data-aos-once="true" data-aos-duration="1000">

                      <h1 className='title-basic-trayectory' style={{ textAlign:"start"}}> 
                        Innovación <span style={{color:'#489B1E'}}> Tecnológica</span> 
                      </h1>
                      
                    <div className='us-text__trayectory'>
                        <p className='text-basic__trayectory'>
                        Renovamos y ampliamos los productos y servicios constantemente
                        para adaptarnos a  las necesidades emergentes del Sector 
                        Agropecuario y Agroindustrial. 
                        </p>
                    </div>
                </div>  

              </div>
        </div>

    

      </div>
    </>
  )
}

export default Trayectory