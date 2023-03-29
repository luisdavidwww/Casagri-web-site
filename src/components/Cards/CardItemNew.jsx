import React, { useState } from 'react';
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
        <li className='cards__item' >
        <div>
          
        <Link className='cards__item__link' to={props.path}  state={ [props.categoria, props.subCategoria, props.Linea] } >
            {/* Imagen del Producto */}
            <figure className='cards__item__pic-wrap' >
            
              <img
                className='cards__item__img'
                alt='Travel Image'
                src={imgL(`./${props.src}`)}
                layout="fill"
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
                  <h1 className='cards__item__text-title'>{props.Nombre}</h1>
                </div>

                <div className='cards__item__info'>
                  <h5 className='cards__item__text-presentation'>{props.Marca}</h5>
                </div>
                <div className='cards__item__info'>
                  <h5 className='cards__item__text-price'>{props.Peso}kg</h5>
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
