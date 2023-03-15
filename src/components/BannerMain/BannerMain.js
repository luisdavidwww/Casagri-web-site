import React from 'react';
import Skeleton from 'react-loading-skeleton';

//Estilos
import '../BannerMain/BannerMain.css';
import '../../Styles/GlobalStyles.css';


export const BannerMain = (props) => {

  //props que darán valor tanto a la imagen del banner comoal titulo interno
  const { image, imageMini, title } = props;

  return (
    <>
     {/*------------------------------Banner Escritorio------------------------------------*/}

     <section className='Banner-Main-Desktop'>
      {
        image ? (
          <div className='container-Banner-Main'>
            <img className='banner-img' 
              src={image}
              alt="Compañia">
            </img>
            <div className='container-Banner-Main-Content'>
              <h1 className='container-Banner-Main-Content-title Gothan-Font w500'>{title}</h1>
            </div>
          </div>
        ):(
          <Skeleton variant="rectangular" className='container-Banner-Main' />
        )
      }
     </section>
 

    {/*------------------------------Banner Movil------------------------------------*/}
    <section className='Banner-Main-Movil'>
      {
        imageMini ? (
          <div className='container-Banner-Main-Movil'>
              <img className='banner-img-Movil' 
                src={imageMini}
                alt="Compañia"
                >
              </img>
              {
                /*
                <div className='container-Banner-Main-Content-Movil'>
                <h1 className='container-Banner-Main-Content-title-Movil Montserrat-Font w600'>{title}</h1>
                </div>
                */
              }
          </div>
        ):
        (
          <Skeleton variant="rectangular" className='container-Banner-Main-Movil' />
        )
      }
      {
        title ? (
          <div className='container-Banner-Main-Content-Movil'>
              <h1 className='container-Banner-Main-Content-title-Movil'>{title}</h1>
          </div>
        ):null
      }
    </section>
  </>
     
  )
}
