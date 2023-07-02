import React from 'react';
import { Link } from "react-router-dom";
//Variable para Imagen
import  img  from '../../static/images/news/news02.jpg';
//Diseño
import 'aos/dist/aos.css'; 


function CardItemApi(props) {

  return (
    <>
      <li className='cards__item' 
        data-aos={ props.Index == null ? null : "zoom-in" }
        data-aos-once={ props.Index == null ? null : "true" }
        data-aos-duration={ props.Index == null ? null : props.Index }>
        <div>     
          <Link className='cards__item__link' to={props.path}  
                /*state={ [props.Nombre, props.Imagen, props.Marca] }*/ > 
              <figure className='cards__item__pic-wrap' >
                {/* Si no hay Imagen del Producto, se carga una imagen de no Disponbile */}
                { 
                  props.Imagen == "" ?  (
                            <img
                            className='cards__item__img'
                            alt={props.Nombre}
                            src={img}
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
                  {/* Si existe una imagen del producto */}
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

export default CardItemApi;
