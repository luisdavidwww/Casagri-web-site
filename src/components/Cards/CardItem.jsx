import React, { useState } from 'react';

//components
import StarRanking from "./starRanking";

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
      <li className='cards__item' onMouseLeave={onMouseLeave}>
        <div>
          
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
                          <div className='icon-heart-container-two'>
                            <div className='icon-heart-message'> Eliminar de favoritos </div>
                          </div>
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
                          <div className='icon-heart-container'>
                            <div className='icon-heart-message'> Anadir a favoritos </div>
                          </div> 
                          </>
                        ):null
                      }
                  </div>
                  
                )
              }
              
            </div>

            

        <a className='cards__item__link' href={props.path} >
            {/* Imagen del Producto */}
            <figure className='cards__item__pic-wrap' >

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
                  <h1 className='cards__item__text-title' style={{textDecoration:'none'}}>{props.title}</h1>
                </div>

                <StarRanking className='container__star' ranking={props.ranking} card={true} href=''/>
                
                <div className='cards__item__info'>
                  <h5 className='cards__item__text-presentation'>{props.presentation}</h5>
                </div>
                <div className='cards__item__info'>
                  <h5 className='cards__item__text-price'>{props.price + '$'}</h5>
                </div>
            </div>
        </a>

        </div>
      </li>
    </>
  );
}

export default CardItem;
