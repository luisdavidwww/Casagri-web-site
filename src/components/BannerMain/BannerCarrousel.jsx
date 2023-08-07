import React, { useState, useEffect } from 'react';

//Manejo de Carga y Error
import Loader     from "components/Loader/Loader";

// Peticiones
import { BANNERSPUBLICIDAD } from '../../routers/index';

//Componente Bootstrap
import Carousel from 'react-bootstrap/Carousel';

//Estilos
import '../BannerMain/BannerCategory.css';
import '../../Styles/GlobalStyles.css';


const BannerCarrousel = ({component}) => {

  //Variables de Carga
  const [loanding, setLoanding] = useState(false);
  const [error, setError] = useState(null); 
  //Variables de Banners
  const [banner, setBanner] = useState([]);


  //Peticion principal Banners Publicidad
  const getBannerPublicidad = async () => {
    try {
      
      //Se inicializa elcomponente "Cargando"
      setLoanding(true);

      // Banner Publicidad -- Peticion a la api
      const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE__TWO}${BANNERSPUBLICIDAD}`);
      const data = await response.json();
      // Verificar si la respuesta contiene un error
      if (data.error) {
        throw new Error(data.error);
      }
      //Se carga el Banner de Publicidad
      setBanner(data.data);

      //Desactiva el componente "Cargando" y no se carga ningún error 
      setLoanding(false);
      setError(null);

    } catch (error) {
      setLoanding(false);
      if (error.message) {
        setError(`Error del servidor: ${error.message}`);
      } else if (error.request) {
        setError('No se pudo conectar con el servidor');
      } else {
        setError('Error desconocido');
      }
    }
  };
  

  useEffect(() => {
    getBannerPublicidad();
  },[])



  return (
    <>
      {loanding ? (
        <Loader />
      ) : error ? (
        null
      ) : (
        <>
            {/* Banner Desktop */}
          <section className='Carrousel__Banner__Desktop'>
            <Carousel fade indicators={false} >
                { banner?.map((banner, index) => (
                  <Carousel.Item interval={4000}  key={`${component}-${'desktop'}-${index}`} >
                  <img
                    className="d-block w-100"
                    src={banner.banner__desktop}
                    alt="First slide"
                  />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>

                  ))}
            
            </Carousel>
          </section>
          {/* Banner Movil */}
          <section className='Carrousel__Banner__Movil'>
            <Carousel fade indicators={false} >
                {banner?.map((banner, index) => (
                  <Carousel.Item interval={4000} key={`${component}-${'movil'}-${index}`}>
                  <img
                    key={`${'BannerCarrousel'}-${index}`}
                    className="d-block w-100"
                    src={banner.banner__movil}
                    alt="First slide"
                  />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                  ))}
            </Carousel>
          </section>
       </>
      )}

    </>
    
  );
}

export default BannerCarrousel;