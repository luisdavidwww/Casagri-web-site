import React from 'react'
import Slider from "react-slick";

//Estilos y diseño
import './CarruselDiscover.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Datos para el Carousel
import { CarouselData } from '../../data/CarouselData';


//Funciones para los botones NEXT y PREVIUS del Carousel

//Btn Next
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

//Btn Previus
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

export const CarruselDiscover = () => {

  //Constantes para el carrousel
  const settings = {
    /*dots: true,*/
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 7000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <>
      <div className="mainContainer">
        <Slider {...settings}>
        {CarouselData.map((item) => (
            <div className="container">
              <img className='container-img' src={item.img} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}
