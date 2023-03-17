import React, { useState, useEffect } from 'react';
import AOS      from 'aos';
import Skeleton from 'react-loading-skeleton';

//estilos y diseño
import './AboutUs.css';
import 'aos/dist/aos.css';

// Data
import { ACERCA_DE_CASAGRI, INSTALACIONES } from '../../routers/index'

const AboutUs = ({component}) => {

  const [data, setData] = useState([]);
  const [instalaciones, setInstalaciones] = useState([]);


  const getInfo = async () => {
    //const datos = await fetch(`${process.env.REACT_APP_API_URL__OTRO}${INSTALACIONES}`);
    const datos = await fetch(`${process.env.REACT_APP_API_URL}${INSTALACIONES}`);
    const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${ACERCA_DE_CASAGRI}`);

    const res = await response.json();
    const resp = await datos.json();

    setData(res.data);
    setInstalaciones(resp.data);
    console.log(resp.data)
  }

  useEffect(() => {
    getInfo();
  },[])


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
        </section>
    </>
  )
}

export default AboutUs