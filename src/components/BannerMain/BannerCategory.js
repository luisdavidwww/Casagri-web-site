import React from 'react'

//Estilos
import '../BannerMain/BannerCategory.css';
import '../../Styles/GlobalStyles.css';


export const BannerCategory = (props) => {

  //props que darán valor tanto a la imagen del banner comoal titulo interno
  const { image, imageMini, title } = props;

  return (
    <>
    
     {/*------------------------------Banner Escritorio------------------------------------*/}

     <section className='Banner-Category-Desktop'>
      
      <div className='container-Category-Main'>
          <img className='banner-img' 
            src={image}
            alt="Compañia">
          </img>
          <div className='container-Category-Main-Content'>
            <h1 className='container-Banner-Category-Content-title Gothan-Font w500'>{title}</h1>
          </div>
      </div>
     </section>
 

    {/*------------------------------Banner Movil------------------------------------*/}
    <section className='Banner-Category-Movil'>
        <div className='container-Category-Main-Movil'>
              <img className='banner-img-Movil' 
                src={imageMini}
                alt="Compañia"
                >
              </img>
              
        </div>

        <div className='container-Banner-Category-Content-Movil'>
            <h1 className='container-Banner-Category-Content-title-Movil'>{title}</h1>
        </div>

    </section>

  </>
     
  )
}
