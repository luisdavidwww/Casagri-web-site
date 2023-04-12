import React, {useEffect, Suspense} from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useLocation, Link } from 'react-router-dom';
//componentes
import CardItem from './CardItem';
import CardItemNew from './CardItemNew';
import Loader from "components/Loader/Loader";
import AOS      from 'aos';

//Estilos y diseño
import './Cards.css'; 
import 'aos/dist/aos.css'; 

//Datos para el Carousel
import { featuredProducts } from '../../data/featuredProducts';
import  data  from '../../data/daticos/FeaturedProducts.json';
import { imgCasagriLoad } from '../../data/newsData';




const Cards = ({component}) =>  {

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
  // Try to read user info, although it might not have loaded yet
  return (
    <>
    { /*Lista de Productos */ }
    <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          {data && data.filter((element, idx) => idx < 5).map((item, index) => {
                return (
                  <CardItemNew
                    key={`${"FeaturedProducts"}-${index}`}
                    src={imgCasagriLoad.imgUrl}
                    Nombre={item.Nombre}
                    Peso={item.PesoKG}
                    path={`/DetailsNew/${ item.Nombre }`}
                    price={""}
                    CodigoProd={item.CodigoProd}
                    Marca={item.Marca}
                    ranking={""}
                    component={"FeaturedProducts"}
                    categoria={""}
                    subCategoria={""}
                    Linea={""}
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
