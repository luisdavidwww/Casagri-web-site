import React, {useEffect} from 'react';
//componentes
import CardItem from './CardItem';
import CardItemNew from './CardItemNew';


//Estilos y diseño
import './Cards.css'; 
import 'aos/dist/aos.css'; 

//Datos para el Carousel
import { featuredProducts } from '../../data/featuredProducts';
import  data  from '../../data/daticos/ProducRecomendados.json';
import { imgCasagriLoad } from '../../data/newsData';




const Cards = ({component}) =>  {


  
  return (
    <div className='cards'>

        { /*Titulo de Sección*/ }

        <div className='title-container'>
          <div className='title-container-main'>
            <h1 className='title-basic-center' >Recomendados</h1>
          </div>
        </div>
        
 
      

      { /*Lista de Productos
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          {featuredProducts?.map((item, index) => (
              <CardItem
              key={`${component}-${index}`}
              src={item.imgUrl}
              title={item.title}
              label=''
              path={`/Details/${ item.title }`}
              price={item.price}
              presentation={item.presentation}
              ranking={item.ranking}
              categoria={""}
              subCategoria={""}
              Linea={""}
              />
          ))}
          </ul>
        </div>
      </div>
      */ }



      { /*Lista de Productos */ }
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          {data && data.filter((element, idx) => idx < 5).map((item, index) => {
                return (
                  <CardItemNew
                    key={`${component}-${index}`}
                    src={imgCasagriLoad.imgUrl}
                    Nombre={item.Nombre}
                    Peso={item.PesoKG}
                    path={`/DetailsNew/${ item.Nombre }`}
                    price={""}
                    CodigoProd={item.CodigoProd}
                    Marca={item.Marca}
                    ranking={""}
                    component={component}
                    categoria={""}
                    subCategoria={""}
                    Linea={""}
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
