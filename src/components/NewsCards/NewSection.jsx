import React, {useEffect} from 'react';
import NewSectionItem from './NewSectionItem';
import AOS      from 'aos';

//Estilos y diseño
import './NewSection.css';
import 'aos/dist/aos.css'; 

//Datos para el Carousel
import { newsData } from '../../data/newsData';




const News = () =>  {

  
  return (
    <div className='news-container'>

      { /*Titulo de Sección*/ }
        <div className='news__title-container'>
          <div className='news__title-container-main'>
            <h1 className='news__title-basic-center' >Últimas actualizaciones</h1>
          </div>
        </div>


      { /*Lista de Productos*/ }
      <div className='news_container-main'>
        <div className='news_wrapper'>
          <ul className='news__items'>
          {newsData?.map((item) => (
              <NewSectionItem
              key={item.id}
              src={item.imgUrl}
              sender={item.sender}
              title={item.title}
              date={item.date}
              url={item.url}
              description={item.description}
              
              />
          ))}
          </ul>
        </div>
      </div>

      { /*Btn de Funciones */ }
      <div className='btn-featuredProducts' data-aos="zoom-in" data-aos-once="true" data-aos-duration="1000">
        <a href='/news' style={{textDecoration:'none'}}>
          <button className='btn-outline-featuredProducts btn-text'
            >Leer más
          </button>
        </a>
      </div>

    </div>
  );
}

export default News;