import React, {useEffect, useState} from 'react';
import Skeleton from 'react-loading-skeleton';

//Estilos
import '../BannerMain/BannerCategory.css';
import '../../Styles/GlobalStyles.css';

//Datos para los banners
import { BannerData } from '../../data/BannerData';


export const BannerCategory = (props) => {

  //props que darán valor tanto a la imagen del banner comoal titulo interno
  const { image, imageMini, title, consulta, loandingBanner } = props;



  return (
    <>
      <>
        {/*------------------------------Banner Escritorio------------------------------------*/}
        <section className='Banner-Category-Desktop'>
        {
          loandingBanner ? (
          <div style={{ height:'25vh' }}>
            <Skeleton />   
          </div>
          ):(
            <div className='container-Category-Main'>
                <img className='banner-img' 
                  src={image}
                  alt={consulta}
                  
                  >
                  
                </img>
                <div className='container-Category-Main-Content'>
                  <h1 className='container-Banner-Category-Content-title Gothan-Font w500'>{title}</h1>
                </div>
            </div>
          )
        }
        </section>
      </>
      <>
        {/*------------------------------Banner Movil------------------------------------*/}
        <section className='Banner-Category-Movil'>
        {
          loandingBanner ? (
          <div style={{ height:'22.5vh' }}>
            <Skeleton width="100%" height="100%" />   
          </div>
          ):(
            <>
              <div className='container-Category-Main-Movil'>
                  <img className='banner-img-Movil' 
                    src={imageMini}
                    alt={consulta}
                    >
                  </img>
              </div>
              <div className='container-Banner-Category-Content-Movil'>
                  <h1 className='container-Banner-Category-Content-title-Movil'>{title}</h1>
              </div>
            </>
          )
        }
        </section>
      </>
  </>
     
  )
}
