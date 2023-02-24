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
                    De la mano del productor  
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
            <a className='us-wrap' 
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
            >
                <img
                  className='us-img'
                  alt='Sede AgroMax'
                  src={ nosotros }
                />
            </a>

        </div>

        {/* ----------- Movil ----------------*/}
{/*
        <div className='us-container-Movil' >
              
            <div className='us-wrap-Info-Movil'>
                  <h1 className='title-basic-start-Movil'> 
                  De la mano del productor  
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
        */}

      </div>
    </>
  )
}

export default AboutUsHome;

