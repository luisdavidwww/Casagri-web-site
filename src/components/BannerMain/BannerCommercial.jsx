import React from 'react'

//Estilos
import '../BannerMain/BannerCommercial.css';
import '../../Styles/GlobalStyles.css';


export const BannerCommercial = (props) => {

  //props que darán valor tanto a la imagen del banner comoal titulo interno
  const { image, imageMini, title, href } = props;

  return (
    <>

    <section className='Banner__comercial'>
           {/*------------------------------Banner Escritorio------------------------------------*/}
     <section className='Banner-Commercial-Desktop' >   
      <a className='container-Commercial-Main' href={href}>
          <img className='banner-img' 
            src={image}
            alt="Compañia">
          </img>
          <div className='container-Commercial-Main-Content'>
            <h1 className='container-Banner-Commercial-Content-title Gothan-Font w500'></h1>
          </div>
      </a>
     </section>
 

    {/*------------------------------Banner Movil------------------------------------*/}
    <section className='Banner-Commercial-Movil'>
        <a className='container-Commercial-Main-Movil'  href={href}>
              <img className='banner-img-Movil' 
                src={imageMini}
                alt="Compañia"
                >
              </img>  
        </a>

        <div className='container-Banner-Commercial-Content-Movil'>
            <h1 className='container-Banner-Commercial-Content-title-Movil'></h1>
        </div>

    </section>

    </section>

  </>
     
  )
}
