import React, { useState, useEffect } from 'react';
import AOS      from 'aos';
import Skeleton from 'react-loading-skeleton';

//componentes
import ErrorMessage from 'components/Loader/ErrorMessage';
import Loader from 'components/Loader/Loader'

// Estilos y diseño
import './AboutUs.css';
import 'aos/dist/aos.css';

// Data
import { ACERCA_DE_CASAGRI } from '../../routers/index'
import { MdHeight } from 'react-icons/md';

const AboutUs = () => {

  const [data, setDataCasagri] = useState([]);
  const [img, setImagen] = useState([]);

  const [expandido, setExpandido] = useState(false);



  const toggleExpandido = () => {
    setExpandido(!expandido);
  };

  const mostrarBoton = () => {
    const elemento = document.getElementById("texto");
    if (elemento && elemento.scrollHeight > elemento.clientHeight) {
      return (
        <button onClick={toggleExpandido}>
          {expandido ? "Mostrar menos" : "Mostrar más"}
        </button>
      );
    }
  };

  //Cargamos los datos de la Compañía
  const getInfo = async () => {
    const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${ACERCA_DE_CASAGRI}`);
    const res = await response.json();
    setDataCasagri(res.data);
  }




  useEffect(() => {
    getInfo();
  },[])

  AOS.init({
    once: true,
    });

  return (
    <>
    
        <section className='AboutUs__main' data-aos="fade-up" data-aos-once="true" data-aos-duration="1500">
            {/* Ttitulo Principal */}
            <div className='AboutUs__title__Container'>
                {/*<span style={{color:'#489B1E'}}></span> */}
                  <h1 className='AboutUs__title'>{data.titulo || <Skeleton variant="rectangular" width={210} />}</h1>
            </div>
            <div className='AboutUs__text__Container'>
                  <p className='text__aboutUs'>{data.texto || <Skeleton className='AboutUs__text__Container'/>}</p>
            </div>
            <div>
            {
                img ? (
                  <div>
                    {img.filter((element, idx) => idx < 5).map((item, index) => (
                      <div>
                        <img src={`data:image/jpeg;base64,${item.Imagen}`} alt="Imagen" />  
                      </div>  
                    ))}
                  </div>
                  
                ):(
                  <Loader/>
                )
              }
            </div>

           <div>
      <div
        id="texto"
        className={ expandido ? 'david': 'luis'}
      >
        luis david autoprefixer: start value has mixed support, consider using flex-start insteadautoprefixer: start value has mixed support, luis david autoprefixer: start value has mixed support, consider using flex-start insteadautoprefixer: start value has mixed support, luis david autoprefixer: start value has mixed support, consider using flex-start insteadautoprefixer: start value has mixed support, luis david autoprefixer: start value has mixed support, consider using flex-start insteadautoprefixer: start value has mixed support, luis david autoprefixer: start value has mixed support, consider using flex-start insteadautoprefixer: start value has mixed support, s
      </div>
      {mostrarBoton()}
    </div>

        </section>
    </>
  )
}

export default AboutUs