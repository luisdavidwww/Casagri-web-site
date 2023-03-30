import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Skeleton from 'react-loading-skeleton';

const CarruselMain = ({banner, component}) => {
  return (
    <>
    {/* Banner Desktop */}
    <section className='Carrousel__Banner__Desktop'>
      <Carousel fade indicators={false}>
          {banner?.map((banner, index) => (
            <Carousel.Item interval={4000}  key={`${component}-${'desktop'}-${index}`} >
                { banner.banner__desktop ? (
                    <>
                        <img
                        className="d-block w-100 img__Banner"
                        src={banner.banner__desktop}
                        alt="First slide"
                        />
                        
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </>
                )
                :(<Skeleton variant="rectangular" width={'100%'} height={400} />)
                }
            
          </Carousel.Item>

            ))}
      
      </Carousel>
    </section>
    {/* Banner Desktop */}
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
  )
}

export default CarruselMain