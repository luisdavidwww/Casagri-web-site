import React, { useState, useEffect } from 'react';
import AOS      from 'aos';
import Skeleton from 'react-loading-skeleton';

//componentes
import ErrorMessage from 'components/Loader/ErrorMessage'

// Estilos y diseño
import './AboutUs.css';
import 'aos/dist/aos.css';

// Data
import { ACERCA_DE_CASAGRI, PRODUCTOS_MAESTROS, PRODUCTOS_DISPONIBLES, PRODUCTOS_IMAGENES } from '../../routers/index'

const AboutUs = () => {

  const [data, setDataCasagri] = useState([]);
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);
  const [img, setImagen] = useState([]);


  //Cargamos los datos de la Compañía
  const getInfo = async () => {
    const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${ACERCA_DE_CASAGRI}`);
    const res = await response.json();
    setDataCasagri(res.data);
  }


  //Obtenemos elmaestro de los Productos Casagri
  const getProductosProxyCasagri = async () => {

    await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE__TWO}${PRODUCTOS_MAESTROS}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la petición');
      }
      return response.json();
    })
    .then(data => {
      // Procesar los datos si la petición fue exitosa
      console.log( data.myQueryResults.Table)
    })
    .catch(error => {
      // Manejar el error de la petición
      console.error('Error:', error.message);
    })

  
  }

  //Obtenemos los Productos Disponibles
  const getProductosProxyCasagriDisponibles = async () => {

    await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE__TWO}${PRODUCTOS_DISPONIBLES}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la petición de productos Disponibles');
      }
      return response.json();
    })
    .then(data => {
      // Procesar los datos si la petición fue exitosa
      setError(false);
      setProductos(data.myQueryResults.Table)
      console.log( data.myQueryResults.Table);
    })
    .catch(error => {
      // Manejar el error de la petición
      setError(true);
      console.error('Error:', error.message);
    })

  
  }

  //Obtenemos los Productos Disponibles
  const getImagenProductos = async () => {

    await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE__TWO}${PRODUCTOS_IMAGENES}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la petición');
      }
      return response.json();
    })
    .then(data => {
      // Procesar los datos si la petición fue exitosa
      setError(false);
      setImagen(data.myQueryResults.Table)
    })
    .catch(error => {
      // Manejar el error de la petición
      setError(true);
      console.error('Error:', error.message);
    })

  
  }





  useEffect(() => {


    getInfo();
    //getProductosProxyCasagri();
    //getProductosProxyCasagriDisponibles();
    getImagenProductos();


    

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
                error ? (
                  <ErrorMessage/>
                ):(
                  <div>
                    {/* 
                    {productos?.map((item, index) => (
                    <div className='cards__item-pc' key={`${'luis'}-${index}`} >
                        <a className='cards__item__link-pc' >
                            <div className='cards__item__info-pc'>
                                <h5 className='cards__item__text-pc'>{item.Imagen}</h5>
                                <img key={index} src={url} alt={`Imagen ${index}`} />
                            </div> 
                        </a>
                    </div>
                   
                  ))}
                  */}
                  </div>
                )
              }
            
            </div>
            <div>

            {img.filter((element, idx) => idx < 5).map((item, index) => (
              <div>
                <img src={`data:image/jpeg;base64,${item.Imagen}`} alt="Imagen" />  
              </div>
              
            ))}

            </div>
        </section>
    </>
  )
}

export default AboutUs