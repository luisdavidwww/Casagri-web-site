import React, { useState, useEffect } from 'react';
import AOS      from 'aos';

//imagenes
import nosotros from 'static/images/home/aboutUsHome.jpg';
import nosotrosMini from '../../static/images/home/aboutUsHomeMini.jpg';
//Diseño y estilos
import './Trayectory.css';
//Estilos y diseño
import 'aos/dist/aos.css'; 

const Trayectory = () => {
  return (
    <>
      <div className='body-work-container'>

        {/* ----------- Trayectoria y compromiso ----------------*/}
        <div className='work-container' >

            {/* Info */}
            <div className='us-wrap-Info-work'
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
            >

                  <h1 className='title-basic-trayectory' style={{ textAlign:"end"}}> 
                    Trayectoria, Trabajo y <br /> Compromiso
                    <span style={{color:'#489B1E'}}> desde 1948 </span> 
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
            <a className='us-wrap-work' 
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
            >
                <img
                  className='us-img-w'
                  alt='Sede AgroMax'
                  src={ nosotros }
                />
            </a>

        </div>

        {/* ----------- Trayectoria y compromiso MOVIL ----------------*/}
        <div className='us-container__trayectory-movil' >

          {/* Imagen Principal */}
          <a className='us-wrap__trayectory'>
                <img
                  className='us-img__trayectory'
                  alt='Sede AgroMax'
                  src={ nosotros }
                />
            </a>
              
            <div className='us-wrap-Info-Movil'>
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

        {/* ----------- Innovación  y  Tecnológica ----------------*/}
        <div className='us-container__trayectory' >

            {/* Imagen Principal */}
            <a className='us-wrap__trayectory'>
                <img
                  className='us-img__trayectory'
                  alt='Sede AgroMax'
                  src={ nosotros }
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
    </>
  )
}

export default Trayectory