import React, { useState, useEffect } from 'react';
import AOS      from 'aos';

//estilos y diseño
import './AboutUs.css';
import 'aos/dist/aos.css'; 

const AboutUs = () => {

  useEffect(() => { 
    AOS.init({duration:1200});
    },[]);


  return (
    <>
        <section className='AboutUs__main'>
            {/* Ttitulo Principal */}
            <div className='AboutUs__title__Container' data-aos="fade-up">
                <h1 className='AboutUs__title'>Acerca de <span style={{color:'#489B1E'}}> Casagri</span> </h1>
            </div>
            <div className='AboutUs__text__Container' data-aos="fade-up">
                    <p className='text__aboutUs'>
                      Somos una empresa con más de 70 años caminando de la mano del Productor Venezolano, 
                      para ofrecer Soluciones Integrales a las necesidades específicas del sector Agrícola y 
                      Pecuario del País. <br /><br />
                      Nos dedicada a la fabricación, distribución, comercialización de insumos, maquinarias e 
                      implementos agrícolas y medicamentos e insumos veterinarios, ofreciendo a nivel nacional 
                      diversos productos de alta calidad, logrando de esta forma satisfacer las necesidades 
                      del sector Agropecuario e Agroindustrial.
                    </p>
            </div>
        </section>
    </>
  )
}

export default AboutUs