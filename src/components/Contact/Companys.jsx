import React, { useRef, useState } from 'react';
import Slider from "react-slick";

//imagenes barinasWeb-Final
import barquisimeto from 'static/images/company/barquisimetoWeb-Final.jpg';
import barinas from 'static/images/company/barinasWeb-Final.jpg';

//Estilos y diseño
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';
import './Companys.css'; 
//Icons 
import { VscChevronRight } from "react-icons/vsc";
import { VscChevronLeft } from "react-icons/vsc";




const Companys = () => {


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





  return (
    <>
      <div className=''>

      {/* -----------   Casagri de Lara  ----------------*/}
      <div className='body-container'  data-aos="fade-right" data-aos-once="true" data-aos-duration="1500">
        <div className='us-container' >

            {/* Info */}
            <div className='us-wrap-Info'
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-once="true" 
                data-aos-duration="800"
            >

                  <h1 className='title-basic-start'> 
                    Casagri de  
                    <span style={{color:'#489B1E'}}> Lara </span> 
                  </h1>
                  
                <div className='us-text'>
                    <p className='text-basic'>
                        Ubicada en la capital del estado Lara, configurando un punto estratégico comercial, 
                        en tanto geográficamente se localiza en el centro occidente del país, donde confluye una 
                        cantidad importante de productores agropecuarios.
                    </p>
                </div>
            </div>

            {/* Imagen Principal */}
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-once="true" 
              data-aos-duration="800"
            >
              <a className='us-wrap' >
                  <img
                    className='us-img'
                    alt='Sede AgroMax'
                    src={ barquisimeto }
                  />
              </a>

            </div>
        </div>
      </div>
      {/* ----------- Casagri Barinas ----------------*/}   
      <div className='body-container'  data-aos="fade-right" data-aos-once="true" data-aos-duration="1500">
        <div className='us-container' >

            {/* Info */}
            <div className='us-wrap-Info'
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-once="true" 
                data-aos-duration="800"
            >

                  <h1 className='title-basic-start'> 
                    Casagri  
                    <span style={{color:'#489B1E'}}> Barinas </span> 
                  </h1>
                  
                <div className='us-text'>
                    <p className='text-basic'>
                    Renovamos y ampliamos los productos y servicios constantemente
                                  para adaptarnos a  las necesidades emergentes del Sector 
                                  Agropecuario y Agroindustrial. 
                    </p>
                </div>
            </div>

            {/* Imagen Principal */}
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-once="true" 
              data-aos-duration="800"
            >
              <a className='us-wrap' >
                  <img
                    className='us-img'
                    alt='Sede AgroMax'
                    src={ barinas }
                  />
              </a>

            </div>
        </div>
      </div>

      <div className='body-work-container'>
        {/* Casagri de Lara Movil */}
        <div className='us-container__trayectory-movil'  data-aos="zoom-in-up" data-aos-once="true" data-aos-duration="1000" >
              <div>
                <h1 className='title-basic-trayectory' style={{ marginTop:"1rem", marginBottom:"1rem" }}> 
                  Casagri de 
                  <span style={{color:'#489B1E'}}> Lara </span>
                </h1>
                <a className='us-wrap__trayectory' >
                      <img
                        className='us-img__trayectory'
                        alt='Sede AgroMax'
                        src={ barquisimeto }
                        
                      />
                </a>
                  
                <div className='us-wrap-Info-Movil'>
                      

                    <div className='us-text__trayectory'>
                        <p className='text-basic__company'>
                          Ubicada en la capital del estado Lara, configurando un punto estratégico comercial, 
                          en tanto geográficamente se localiza en el centro occidente del país, donde confluye una 
                          cantidad importante de productores agropecuarios.
                        </p>
                    </div>
                </div>
              </div>
        </div>
        {/* ----------- Casagri Barinas Movil ----------------*/}
        <div className='us-container__trayectory-movil' data-aos="zoom-in-up" data-aos-once="true" data-aos-duration="1000" >
                <div className='us-container__trayectory' >

                  <h1 className='title-basic-trayectory' style={{ marginTop:"1rem", marginBottom:"1rem"}}> 
                    Casagri <span style={{color:'#489B1E'}}> Barinas </span> 
                  </h1>
                  {/* Imagen Principal */}
                  <a className='us-wrap__trayectory'>
                      <img
                        className='us-img__trayectory'
                        alt='Sede AgroMax'
                        src={ barinas }
                      />
                  </a>


                  {/* Info */}
                  <div className='us-wrap-Info__trayectory'>

                        
                        
                      <div className='us-text__trayectory'>
                          <p className='text-basic__company'>
                          Renovamos y ampliamos los productos y servicios constantemente
                                    para adaptarnos a  las necesidades emergentes del Sector 
                                    Agropecuario y Agroindustrial. 
                          </p>
                      </div>
                  </div>  

                </div>
        </div>
      </div>
      

      

      </div>
    </>
  )
}

export default Companys;

