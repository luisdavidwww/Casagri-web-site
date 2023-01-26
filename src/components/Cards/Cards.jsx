import React, {useEffect} from 'react';
import CardItem from './CardItem';
import AOS      from 'aos';

//Estilos y diseño
import './Cards.css'; 
import 'aos/dist/aos.css'; 

//Datos para el Carousel
import { featuredProducts } from '../../data/featuredProducts';




const Cards = () =>  {


  useEffect(() => { 
    AOS.init({duration:700});
    },[]);


  
  return (
    <div className='cards'>

        { /*Titulo de Sección*/ }

        <div className='title-container'>
          <div className='title-container-main'>
            <h1 className='title-basic-center' >Productos destacados</h1>
          </div>
        </div>
        
 
      

      { /*Lista de Productos*/ }
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          {featuredProducts?.map((item) => (
              <CardItem
              key={item.id}
              src={item.imgUrl}
              title={item.title}
              label=''
              path='/search'
              price={item.price}
              presentation={item.presentation}
              />
          ))}
          </ul>
        </div>
      </div>

      { /*Btn de Funciones */ }
      <div className='btn-featuredProducts'>
        <a href='/search' className=''>
          <button className='btn-outline-featuredProducts btn-text'
            >Ver todos
          </button>
        </a>
      </div>

    </div>
  );
}

export default Cards;
