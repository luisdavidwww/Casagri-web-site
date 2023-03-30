import Carousel from 'react-bootstrap/Carousel';

//Estilos
import '../BannerMain/BannerCategory.css';
import '../../Styles/GlobalStyles.css';


const BannerCarrousel = ({banner, component}) => {
  return (
    <>
    {/* Banner Desktop */}
    <section className='Carrousel__Banner__Desktop'>
      <Carousel fade indicators={false}>
          {banner?.map((banner, index) => (
            <Carousel.Item interval={4000} key={`${component}-${'desktop'}-${index}`} >
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
    
  );
}

export default BannerCarrousel;