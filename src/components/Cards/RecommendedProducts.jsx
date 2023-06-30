import React from 'react';
//componentes
import CardItemApi from './CardItemApi';

//Estilos y diseño
import './Cards.css'; 
import 'aos/dist/aos.css'; 

//Datos para el Carousel
import  data  from '../../data/daticos/ProducRecomendados.json';




const Cards = () =>  {


  
  return (
    <div className='cards'>

        { /*Titulo de Sección*/ }

        <div className='title-container'>
          <div className='title-container-main'>
            <h1 className='title-basic-center' >Recomendados</h1>
          </div>
        </div>
        


      { /*Lista de Productos */ }
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          {data && data.filter((element, idx) => idx < 5).map((item, index) => {
                return (
                  <CardItemApi
                    key={`${"RecommendedProducts"}-${index}`}
                    Nombre={item.Nombre}
                    Imagen={ item.Imagen  }
                    src={ "news02.jpg" }
                    Marca={item.Marca}
                    path={`/DetailsNew/${ item.Nombre.replace(/\s+/g, '-')
                                                      .replace(/%/g, "%25")
                                                      .replace(/[ / ]/g, "_") }`}
                    />
                  )
            })}
          </ul>
        </div>
      </div>
     



      { /*Btn de Funciones */ }
      <div className='btn-featuredProducts' data-aos="zoom-in" data-aos-once="true" data-aos-duration="1000">
        <a href={`/Category/Buscar`} style={{textDecoration:'none'}}>
          <button className='btn-outline-featuredProducts btn-text'
            >Ver todos
          </button>
        </a>
      </div>

    </div>
  );
}

export default Cards;
