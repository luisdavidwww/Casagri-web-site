import React, {useEffect, useState} from 'react';
//componentes
import CardItemApi from '../Cards/CardItemApi';

//Metodos de Filtrados
import { getProductRecomend } from "../../selectors/getInfoCasagriApi";
import  Error  from '../../pages/Error404';
import  Loader from "components/Loader/Loader";

//Estilos y diseño
import 'aos/dist/aos.css'; 

//Datos para el Carousel
import  data  from '../../data/daticos/ProducRecomendados.json';




const Cards = ( {nombreProducto} ) =>  {

  const [products, setProducts] = useState([]);

  //Variables de Carga
  const [loanding, setLoanding] = useState(true);
  const [error, setError] = useState(null);



  const BuscarProducto = async () => {

    try {
      setLoanding(true);
      const response = await getProductRecomend(nombreProducto);
      // Procesa la respuesta o realiza otras operaciones necesarias
      setProducts(response.productos);
      setError(null);
      setLoanding(false);
  
    } catch (error) {
      console.log('Error fetching data:', error);
      setLoanding(false);
      setError('Ocurrió un error al obtener los datos. Por favor, inténtalo de nuevo.');
    }
  };

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
  
  
    useEffect(() => {
      BuscarProducto();
    }, [])
  
  return (

    <>
      {
        loanding ?( <Loader/>):(
          <>
          { error ? ( <Error/> ):
              (
                <>
                <div className='cards' >
                    { /*Titulo de Sección*/ }
                    <div className='title-container'>
                      <div className='title-container-main'>
                        <h1 className='title-basic-center' style={{marginTop:'2rem'}} >
                          Productos Relacionados
                          </h1>
                      </div>
                    </div>

                    { /*Lista de Productos */ }
                    <div className='cards__container'>
                    <div className='cards__wrapper'>
                      <ul className='cards__items' >
                      {products?.map((item, index) => {
                            return (
                              <CardItemApi
                                key={`${"RecommendedProducts"}-${index}`}
                                
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

                </div>
                </>
              )
          }
          </>)
      }
    </>



    
  );
}

export default Cards;
