import React, {useEffect, Suspense} from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';
//componentes
import CardItemApi from './CardItemApi';
import Loader from "components/Loader/Loader";

//Estilos y diseño
import './Cards.css'; 
import 'aos/dist/aos.css'; 

//Datos para el Carousel
import  data  from '../../data/daticos/FeaturedProducts.json';




const Cards = () =>  {

  useEffect(() => {
  }, [])

  return (
    <>
    <div className='cards'>

        { /*Titulo de Sección*/ }

        <div className='title-container'>
          <div className='title-container-main'>
            <h1 className='title-basic-center' >Destacados</h1>
          </div>
        </div>


        <Suspense fallback={<Loader/>}>
          <ProfileDetails  />
        </Suspense>
        
      



      { /*Btn de Funciones */ }
      <div className='btn-featuredProducts' data-aos="zoom-in" data-aos-once="true" data-aos-duration="1000">
        <Link to={`/Category/Buscar`} style={{textDecoration:'none'}}>
          <button className='btn-outline-featuredProducts btn-text'
            >Ver todos
          </button>
        </Link>
      </div>

    </div>
    </>
  );
}

function ProfileDetails() {
  return (
    <>
    { /*Lista de Productos */ }
    <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          {data && data.filter((element, idx) => idx < 5).map((item, index) => {
                return (
                    <CardItemApi
                    key={`${"FeaturedProducts"}-${index}`}
                    Nombre={item.Nombre}
                    Imagen={ item.Imagen }
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
    </>
      
  );
}

export default Cards;
