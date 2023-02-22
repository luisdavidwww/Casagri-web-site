import React, { useState } from 'react';

//components
import StarRanking from "./starRanking";

//icons 
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { BsCart3, BsCartCheckFill } from "react-icons/bs";


//importacion temporal de imagenes
const imgL = require.context('../../static/images/product', true);



function CardItem(props) {


  const [dropdown, setDropdown] = useState(false);
  const [click, setClick] = useState(false);
  const [infoHeart, setInfoHeart] = useState(false);

  const [clickCart, setClickCart] = useState(false);
  const [infoCart, setInfoCart] = useState(false);


  //acciones btn favoritos
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setInfoHeart(false);
    } else {
      setInfoHeart(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setInfoHeart(false);
    } else {
      setInfoHeart(false);
    }
  };
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


  //acciones btn carts
  const onMouseEnterCart = () => {
    if (window.innerWidth < 960) {
      setInfoCart(false);
    } else {
      setInfoCart(true);
    }
  };
  const onMouseLeaveCart = () => {
    if (window.innerWidth < 960) {
      setInfoCart(false);
    } else {
      setInfoCart(false);
    }
  };
  const clickStateCart = () => {
    if ( clickCart )
    {
      setClickCart(false);
      setInfoCart(false);
    }
    else{
      setClickCart(true);
      setInfoCart(false);
    }
  }







  return (
    <>
      <li className='cards__item' onMouseLeave={onMouseLeave}>
        <div>
          
            <div className='icon-heart'>

              {/* Icono Favorito*/}
              <div onClick={() => { clickState()}}>
              {
                click ?
                (
                  <div className='icon-container_heart-clickNull' onMouseEnter={() => {onMouseEnter()}} onMouseLeave={onMouseLeave} > 
                    <IoMdHeart className='icon-heart-click' />
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
                  <div className='icon-container_heart-clickNull' onMouseEnter={() => {onMouseEnter()}} onMouseLeave={onMouseLeave}>
                    <IoMdHeartEmpty className='icon-heart-clickNull' />
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

              {/* Icono Carrito*/}
              <div onClick={() => { clickStateCart()}}>
              {
                clickCart ?
                (
                  <div className='icon-container_heart-clickNull' onMouseEnter={() => {onMouseEnterCart()}} onMouseLeave={onMouseLeaveCart} > 
                    <BsCartCheckFill className='icon-heart-click' />
                     {
                        infoCart ?
                        (
                          <>
                          <div className='icon-heart-container-two'>
                            <div className='icon-cart-message'> Eliminar del carrito </div>
                          </div>
                          </>
                        ):null
                      }
                  </div>
                ):
                (
                  <div className='icon-container_heart-clickNull' onMouseEnter={() => {onMouseEnterCart()}} onMouseLeave={onMouseLeaveCart} >
                    <BsCart3 className='icon-heart-clickNull' />
                    {
                        infoCart ?
                        (
                          <>
                          <div className='icon-heart-container'>
                            <div className='icon-cart-message'> Anadir al carrito </div>
                          </div> 
                          </>
                        ):null
                      }
                  </div>
                  
                )
              }
              </div>
 
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

                <div className='cards__item__info'>
                  <h5 className='cards__item__text-presentation'>{props.presentation}</h5>
                </div>
                <div className='cards__item__info'>
                  <h5 className='cards__item__text-price'>{props.price + '$'}</h5>
                </div>
                <StarRanking className='container__star' ranking={props.ranking} card={true} href=''/> 
            </div>
        </a>

        </div>
      </li>
    </>
  );
}

export default CardItem;
