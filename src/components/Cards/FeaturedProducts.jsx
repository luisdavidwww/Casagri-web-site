import React, {useEffect} from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import CardItem from './CardItem';
import AOS      from 'aos';

//Estilos y diseño
import './Cards.css'; 
import 'aos/dist/aos.css'; 

//Datos para el Carousel
import { featuredProducts } from '../../data/featuredProducts';




const Cards = () =>  {

  
  return (
    <div className='cards'>

        { /*Titulo de Sección*/ }

        <div className='title-container'>
          <div className='title-container-main'>
            <h1 className='title-basic-center' >Destacados</h1>
          </div>
        </div>


      { /*Lista de Productos*/ }
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          {featuredProducts?.map((item) => (

            
              item.imgUrl ?(
              <CardItem
              key={item.id}
              src={item.imgUrl}
              title={item.title}
              label=''
              path={`/Details/${ item.id }`}
              price={item.price}
              presentation={item.presentation}
              ranking={item.ranking}
              />
              ):
              (
                <Skeleton width={140} height={140} /> 
              )
            
              
          ))}
          </ul>
        </div>
      </div>

      { /*Btn de Funciones */ }
      <div className='btn-featuredProducts' data-aos="zoom-in" data-aos-once="true" data-aos-duration="1000">
        <a href={`/Category/All`} style={{textDecoration:'none'}}>
          <button className='btn-outline-featuredProducts btn-text'
            >Ver todos
          </button>
        </a>
      </div>

    </div>
  );
}

export default Cards;
