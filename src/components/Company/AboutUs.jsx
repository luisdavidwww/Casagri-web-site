import React, { useState, useEffect } from 'react';
import AOS      from 'aos';
import Skeleton from 'react-loading-skeleton';

// Estilos y diseño
import './AboutUs.css';
import 'aos/dist/aos.css';

// Data
import { ACERCA_DE_CASAGRI } from '../../routers/index'

const AboutUs = () => {

  const [data, setData] = useState([]);
  const [productos, setProductos] = useState([]);


//Peticion productos casagri
{/* 
  const getInfoProducts = async () => {

    const datos = await fetch(`http://csgbqto.dyndns.org:6001/ctDynamicsSL/api/quickQuery/VW_VENTTU_PROD`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json", 
        'Authorization': 'Basic REVWRUxPUEVSOkJCRjk5OTM5NDhFMw==',
        'CpnyID': '0010',
        'SiteID': 'LIVE'
      }),
    });

    const dat = await datos.json();
    console.log(datos);
    setInfo(dat);
   
  }


  fetch('http://csgbqto.dyndns.org:6001/ctDynamicsSL/api/quickQuery/VW_VENTTU_PROD', {
  method: 'GET',
  headers: {
            "Accept": "application/json", 
            "Authorization": "Basic REVWRUxPUEVSOkJCRjk5OTM5NDhFMw==",
            "CpnyID": "0010",
            "SiteID": "LIVE"
  }
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });



  fetch('http://localhost:8080/api/productos/azulito', {
  method: 'GET',
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

*/}

  const getInfo = async () => {
    const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${ACERCA_DE_CASAGRI}`);
    const res = await response.json();
    setData(res.data);
  }

  const getInfoProducts = async () => {
    const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE__TWO}${"productos/proxy"}`);
    const res = await response.json();
    console.log("que paso mi bro");
    console.log(res.myQueryResults.Table);
    setProductos(res.myQueryResults.Table);
  }



  useEffect(() => {
    getInfo();
    getInfoProducts();
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
            {productos?.map((item, index) => (
            <div className='cards__item-pc' key={`${'luis'}-${index}`} >
                <a className='cards__item__link-pc' >
                    <div className='cards__item__info-pc'>
                        <h5 className='cards__item__text-pc'>{item.Nombre}</h5>
                    </div> 
                </a>
            </div>
          ))}
            </div>
        </section>
    </>
  )
}

export default AboutUs