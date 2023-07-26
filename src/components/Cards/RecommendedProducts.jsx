import React from 'react';
//componentes
import CardItemApi from './CardItemApi';

//Estilos y diseño
import './Cards.css'; 
import 'aos/dist/aos.css'; 

//Datos para el Carousel
import  data  from '../../data/daticos/ProducRecomendados.json';




const Cards = () =>  {


  const animation = ( index ) =>  {
    if( index == 0 ) {
     return "1000"
    }
    if( index == 1 ) {
     return "1200"
    }
    if( index == 2 ) {
     return "1500"
    }
    if( index == 3 ) {
     return "1700"
    }
    if( index == 3 ) {
     return "1900"
    }
    if( index == 4 ) {
     return "2100"
    }
   }
   


  
  return (
    <div className='cards'>

        { /*Titulo de Sección*/ }

        <div className='title-container'>
          <div className='title-container-main'>
            <h1 className='title-basic-center' data-aos="fade-up" data-aos-once="true" >
              Recomendados
              </h1>
          </div>
        </div>
        


      { /*Lista de Productos */ }
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items' data-aos="zoom-in" data-aos-once="true" data-aos-duration="1300" >
          {data && data.filter((element, idx) => idx < 5).map((item, index) => {
                return (
                  <CardItemApi
                    key={`${"RecommendedProducts"}-${index}`}
                    Index={animation(index)}
                    Nombre={item.Nombre}
                    Imagen={ item.Imagen  }
                    src={ "news02.jpg" }
                    Marca={item.Marca}
                    path={`/Details/${ item.Nombre_interno }`}
                    />
                  )
            })}
          </ul>
        </div>
      </div>
     



      { /*Btn de Funciones */ }
      <div className='btn-featuredProducts' data-aos="zoom-in" data-aos-once="true" data-aos-duration="1000">
        <a href={`/Category/Medicina Veterinaria`} style={{textDecoration:'none'}}>
          <button className='btn-outline-featuredProducts btn-text'
            >Ver todos
          </button>
        </a>
      </div>

    </div>
  );
}

export default Cards;
