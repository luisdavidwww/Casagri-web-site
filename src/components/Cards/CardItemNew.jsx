import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import AOS      from 'aos';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

//Diseño
import 'aos/dist/aos.css'; 


//importacion temporal de imagenes
const imgL = require.context('../../static/images/news', true);



function CardItemNew(props) {

//UseState para las imagenes
const [image, setImge] = useState([]);
const [btn, setBtn] = useState(false);

//Peticion de la imagen del producto
const getProductImage = async () => {

  //Petición a la api
  const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${"productos/codigo/"}${props.CodigoProd}`);
  const res = await response.json();

  //en caso que no tenga imagen el producto
  if ( res.data == null)
  {
    setImge([]);
  }
  setImge(res.data);
}

useEffect(() => {
  //getProductImage();
}, [])



  return (
    <>
        <li className='cards__item'>
        <div>
          
        <Link className='cards__item__link' to={props.path}  
              state={ [props.Nombre, props.Imagen, props.Marca] }>
                
            {/* Imagen del Producto */}
            <figure className='cards__item__pic-wrap' >
              {
                props.Imagen == null ?  (
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
                ):(
                    <>
                      {
                        props.Imagen == "Cargando" ? (
                          <div>Cargando..</div>
                        ):(
                          <img
                            className='cards__item__img'
                            alt={props.Nombre}
                            src={`data:image/jpeg;base64,${props.Imagen}`}
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
                    </>
                )
              }
            </figure>
            

            <div className='cards__item__info-container'>
                <div className='cards__item__info-title'>
                  <h1 className='cards__item__text-title'>{props.Nombre}</h1>
                </div>
                <div className='cards__item__info'>
                  <h5 className='cards__item__text-presentation'>{props.Marca}</h5>
                </div>
            </div>
        </Link>

        </div>
        </li>

    </>
  );
}

export default CardItemNew;
