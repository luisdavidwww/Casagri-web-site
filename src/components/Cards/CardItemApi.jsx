import React from 'react';
import { Link } from "react-router-dom";
//Hooks
import { getBrandCategoryApi } from "../../selectors/getBrandsCasagri";
//Variable para Imagen
import  img  from '../../static/images/news/news02.jpg';
//Diseño
import 'aos/dist/aos.css'; 
//icons
import { BsFillTagFill } from "react-icons/bs";

function CardItemApi(props) {

  const imgL = require.context('../../static/images/brands/brands-c', true);

  return (
    <>
      <li className='cards__item' 
        data-aos={ props.Index == null ? null : "zoom-in" }
        data-aos-once={ props.Index == null ? null : "true" }
        data-aos-duration={ props.Index == null ? null : props.Index }>
        <div>     
          <Link className='cards__item__link' to={props.path}  
                /*state={ [props.Nombre, props.Imagen, props.Marca] }*/ > 
                { props.StockActual == 0 ? (
                <div className='no__Disponible' >
                  <div className='disponible__box'>
                    Agotado
                  </div>
                </div>):(null) 
                }
                
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
                    {
                      getBrandCategoryApi(props.Marca) == false ? (
                        <h5 className='cards__item__text-presentation'>
                          <BsFillTagFill style={{marginRight:'0.5rem', color:'#939996'}}/>{props.Marca}
                        </h5>)
                      :(<h5 className='cards__item__text-presentation'>
                          <img src={imgL(`./${props.Marca}.webp`)} style={{height:'23px', width:'23px', marginTop:'0px', marginRight:'0.5rem'}} />
                          {props.Marca}
                        </h5>)
                    }

                  </div>
              </div>
          </Link>
        </div>
      </li>

    </>
  );
}

export default CardItemApi;
