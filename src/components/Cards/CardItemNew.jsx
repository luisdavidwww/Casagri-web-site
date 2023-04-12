import React, { useState, useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";
import AOS      from 'aos';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

//components
import StarRanking from "./starRanking";

//diseño
import 'aos/dist/aos.css'; 


//icons 
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { BsCart3, BsCartCheckFill } from "react-icons/bs";


//importacion temporal de imagenes
const imgL = require.context('../../static/images/news', true);



function CardItemNew(props) {

//UseState para las imagenes
const [image, setImge] = useState([]);

//Peticion de la imagen del producto
const getProductImage = async () => {

  //Petición a la api
  const response = await fetch(`${'http://localhost:8080/api/'}${"productos/nombre/"}${props.CodigoProd}`);
  const res = await response.json();

  //en caso que no tenga imagen el producto
  if ( res.data == null)
  {
    setImge([]);
  }
  setImge(res.data);
}

useEffect(() => {
  getProductImage();
}, [])



  return (
    <>
        <li className='cards__item'
        /*
        data-aos="fade-up" 
        data-aos-once="true" 
        data-aos-duration="1500"*/
        >
        <div>
          
        <Link className='cards__item__link' to={props.path}  
              state={ [props.categoria, props.subCategoria, props.Linea, props.CodigoProd] } >
            {/* Imagen del Producto */}
            <figure className='cards__item__pic-wrap' >
              {
                image !== null ?  (
                  <img
                className='cards__item__img'
                alt={props.Nombre}
                src={image.imagen_principal }
                layout="fill"
                        style={{
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "100%",
                            height: "5rem"
                          }}
                        />

                ):(
                  <img
                  className='cards__item__img'
                  alt={props.Nombre}
                  src={imgL(`./${props.src}`) }
                  layout="fill"
                          style={{
                              marginLeft: "auto",
                              marginRight: "auto",
                              width: "100%",
                              height: "5rem"
                            }}
                          />
                )
              }
            </figure>

            {/* Datos del Productos */}
            <div className='cards__item__info-container'>

                <div className='cards__item__info-title'>
                  <h1 className='cards__item__text-title'>{props.Nombre}</h1>
                </div>

                <div className='cards__item__info'>
                  <h5 className='cards__item__text-presentation'>{props.Marca}</h5>
                </div>
                <div className='cards__item__info'>
                  <h5 className='cards__item__text-price'>{props.Peso} kg</h5>
                </div>
                <StarRanking className='container__star' ranking={""} card={true} href=''/> 
            </div>
        </Link>

        </div>
        </li>

    </>
  );
}

export default CardItemNew;
