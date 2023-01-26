import React, { useState, useEffect } from 'react';
import AOS      from 'aos';

//imagenes
import nosotros from 'static/images/home/aboutUsHome.jpg';
import nosotrosMini from '../../static/images/home/aboutUsHomeMini.jpg';

//Estilos y diseño
import './AboutUsHome.css'
import 'aos/dist/aos.css'; 



const AboutUsHome = () => {

  useEffect(() => { 
    AOS.init({duration:800});
    },[]);


  return (
    <>
      <div className='body-container'>

        {/* ----------- Desktop ----------------*/}
        <div className='us-container' >

            {/* Info */}
            <div className='us-wrap-Info'
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
            >

                  <h1 className='title-basic-start'> 
                    Más de 70 años <br /> de la mano del productor  
                    <span style={{color:'#489B1E'}}> Venezolano</span> 
                  </h1>
                  
                <div className='us-text'>
                    <p className='text-basic'>
                        Somos una compañía sólida con mas de 70 años de trayectoria, 
                        reconocidos por nuestro compromiso, responsabilidad y servicio 
                        brindado colaborando con el sector agroalimentario del país.
                    </p>
                    <a href='/company' className=''>
                      <button className='btn-outline btn-text main-green'
                          >Ver más
                      </button>
                    </a>
                </div>
            </div>

            {/* Imagen Principal */}
            <div className='us-wrap' 
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
            >
                <img
                  className='us-img'
                  alt='Sede AgroMax'
                  src={ nosotros }
                />
            </div>

        </div>

        <div className='us-container-Movil' >

          {/* Imagen Principal */}
          <div className='us-wrap-Movil'  data-aos="fade-left">
                <img
                  className='us-img-Movil'
                  alt='Sede AgroMax'
                  src={ nosotrosMini }
                />
            </div>

            {/* Info */}
            <div className='us-wrap-Info-Movil'>
                  <h1 className='title-basic-start-Movil'> 
                    Más de 70 años de la mano del productor  
                    <span style={{color:'#489B1E'}}> Venezolano</span> 
                  </h1>

                <div className='us-text-Movil'>
                    <p className='text-basic-Movil'>
                        Somos una compañía sólida con mas de 70 años de trayectoria, 
                        reconocidos por nuestro compromiso, responsabilidad y servicio 
                        brindado colaborando con el sector agroalimentario del país.
                    </p>
                    <div className='btn-Container'>
                      <a href='/company' className=''>
                        <button className='btn-outline btn-text main-green'
                            >Ver más
                        </button>
                      </a>
                    </div>    
                </div>
            </div>


        </div>
      </div>
    </>
  )
}

export default AboutUsHome;

