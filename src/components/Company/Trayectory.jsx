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
      <div className='body-container'>

        {/* ----------- Desktop ----------------*/}
        <div className='us-container' >

            {/* Info */}
            <div className='us-wrap-Info'
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
            >

                  <h1 className='title-basic-trayectory' style={{ textAlign:"end"}}> 
                    Trayectoria, Trabajo <br /> y Compromiso
                    <span style={{color:'#489B1E'}}> desde 1948 </span> 
                  </h1>
                  
                <div className='us-text'>
                    <p className='text-basic'>
                    Desde el año 1948 se ha mantenido lealmente 
                    acompañando y mejorando al sector agrícola y 
                    pecuario del país.
                    </p>
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
                  
                <div className='us-text'>
                    <p className='text-basic'>
                    Renovamos y ampliamos los productos y servicios constantemente
                    para adaptarnos a  las necesidades emergentes del Sector 
                    Agropecuario y Agroindustrial. 
                    </p>
                </div>
            </div>  

        </div>

        

        {/* ----------- Movil ----------------*/}
        <div className='us-container-Movil' >

          {/* Imagen Principal  */}
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

export default Trayectory