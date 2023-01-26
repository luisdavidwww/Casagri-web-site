import React, { useState } from 'react';

//icons 
import { IoIosHeart } from "react-icons/io";


//importacion temporal de imagenes
const imgL = require.context('../../static/images/product', true);



function CardItem(props) {


  const [dropdown, setDropdown] = useState(false);
  const [click, setClick] = useState(false);
  const [infoHeart, setInfoHeart] = useState(false);

  //cursor activo sobre el elemento Navbar
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setInfoHeart(false);
    } else {
      setInfoHeart(true);
    }
  };
  //cursor desactivado al salir del elemento Navbar
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setInfoHeart(false);
    } else {
      setInfoHeart(false);
    }
  };

  //like products
  const clickState = () => {
    if ( click )
    {
      setClick(false);
      setInfoHeart(false);
    }
    else{
      setClick(true);
      setInfoHeart(false);
    }
  }





  return (
    <>
      <li className='cards__item'
      
      onMouseLeave={onMouseLeave}
      >
        <a className='cards__item__link' to={props.path}>
          
            <div className='icon-heart' onClick={() => { clickState()}}>
              {
                click ?
                (
                  <div className='icon-container_heart-clickNull' onMouseEnter={() => {onMouseEnter()}} onMouseLeave={onMouseLeave} > 
                    <IoIosHeart className='icon-heart-click' />
                     {
                        infoHeart ?
                        (
                          <>
                            <div className='icon-heart-message'> Eliminar de favoritos </div>
                          </>
                        ):null
                      }
                  </div>
                ):
                (
                  <div className='icon-container_heart-clickNull' onMouseEnter={() => {onMouseEnter()}} onMouseLeave={onMouseLeave} >
                    <IoIosHeart className='icon-heart-clickNull' />
                    {
                        infoHeart ?
                        (
                          <>
                            <div className='icon-heart-message'> Anadir a favoritos </div>
                          </>
                        ):null
                      }
                  </div>
                  
                )
              }
              
            </div>

          {/* Imagen del Producto */}
          <figure className='cards__item__pic-wrap'>

              <img
              className='cards__item__img'
              alt='Travel Image'
              src={imgL(`./${props.src}`)}
              //src={image}
              layout="fill"
                      objectFit="cover"
                      style={{
                          marginLeft: "auto",
                          marginRight: "auto",
                          width: "100%",
                          height: "5rem"
                        }}
                      />
          </figure>

          {/* Datos del Productos */}
          <div className='cards__item__info-container'>
              <div className='cards__item__info-title'>
                <h5 className='cards__item__text-title'>{props.title}</h5>
              </div>
              <div className='cards__item__info'>
                <h5 className='cards__item__text-presentation'>{props.presentation}</h5>
              </div>
              <div className='cards__item__info'>
                <h5 className='cards__item__text-price'>{props.price}</h5>
              </div>
          </div>
          
        </a>
      </li>
    </>
  );
}

export default CardItem;
