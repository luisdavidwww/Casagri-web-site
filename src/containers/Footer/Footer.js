import React from 'react'

//componentes
import Copyright from './Copyright/Copyright'

//Estilos
import '../Footer/Footer.css';
import '../../Styles/GlobalStyles.css';

//imagen del footer
import footer from '../../assets/img/footer.jpg'


export const FooterContainer = () => {


  return (
    <>
     {/*------------------------------Banner Escritorio------------------------------------*/}

     <section className='Banner-Main-Desktop'>
      
      <div className='container-Banner-Main'>
          <img className='banner-img' 
            src={footer}
            alt="Compañia">
          </img>
          <div className='container-Banner-Main-Content'>
            <h1 className='container-Banner-Main-Content-title Gothan-Font w500'></h1>
          </div>
      </div>
     </section>
 

    {/*------------------------------Banner Movil------------------------------------*/}
    <section className='Banner-Main-Movil'>
        <div className='container-Banner-Main-Movil'>
              <img className='banner-img-Movil' 
                src={footer}
                alt="Compañia"
                >
              </img>
        </div>
              <div className='container-Banner-Main-Content-Movil'>
                <h1 className='container-Banner-Main-Content-title-Movil Montserrat-Font w600'></h1>
              </div>
    </section>
    <Copyright/>
  </>
     
  )
}
