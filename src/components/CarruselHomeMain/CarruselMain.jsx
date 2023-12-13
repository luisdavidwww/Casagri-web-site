import React from 'react';
import { Link, Redirect } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Skeleton from 'react-loading-skeleton';

const CarruselMain = ({banner, component}) => {
  return (
    <>
    {/* Banner Desktop */}
    <section className='Carrousel__Banner__Desktop'>
      <Carousel fade indicators={false}>
          {banner?.map((banner, index) => (
            <Carousel.Item interval={1500}  key={`${component}-${'desktop'}-${index}`} >
                { banner.banner__desktop ? (
                    <Link to={ banner.nombre == "Casagri" ? `` : `/marcas/${banner.nombre}` }>
                        <img
                        className="d-block w-100 img__Banner-Main"
                        src={banner.banner__desktop}
                        alt={banner.nombre}
                        />
                        
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Link>
                )
                :(<Skeleton variant="rectangular" width={'100%'} height={"25vh"} />)
                }
            
          </Carousel.Item>

            ))}
      
      </Carousel>
    </section>

    {/* Banner Movil */}
    <section className='Carrousel__Banner__Movil'>
      <Carousel fade indicators={false} >
          {banner?.map((banner, index) => (
            <Carousel.Item interval={4000} key={`${component}-${'movil'}-${index}`}>
              <Link to={ banner.nombre == "Casagri" ? `` : `/marcas/${banner.nombre}` }>
                      <img
                      key={`${'BannerCarrousel'}-${index}`}
                      className="d-block w-100"
                      src={banner.banner__movil}
                      alt={banner.nombre}
                    />    
                    <Carousel.Caption>
                    </Carousel.Caption>
              </Link>
          </Carousel.Item>
            ))}
      </Carousel>
    </section>
    </>
  )
}

export default CarruselMain