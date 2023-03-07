import React from 'react'
import { Link, Redirect } from "react-router-dom";

//Componentes
import CardItem from '../Cards/CardItem';
//Diseño y estilos
import './CorporatePolicy.css';
//Datos para el Carousel
import { CorporatePolicyData } from '../../data/CorporatePolicy';


//importacion temporal de imagenes
const imgL = require.context('../../static/images/corporatePolicy', true);

const CorporatePolicy = ({component}) => {
  return (
    <>
    <div className='CorporatePolicy__container'>
      
        <div className='AboutUs__title__Container'>
                <h1 className='AboutUs__title'>Nosotros</h1>
        </div>


    <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items-container'>
          {CorporatePolicyData?.map((item, index) => (
            <li className='cards__item-pc'>
                <Link className='cards__item__link-pc' to="">
                    <img 
                      className='cards__item__img-pc'
                      key={`${component}-${index}`}
                      alt={item.title}
                      src={imgL(`./${item.imgUrl}`)}
                      objectFit="cover"
                        />
                    <div className='cards__item__info-pc'>
                        <h5 className='cards__item__text-pc'>{item.title}</h5>
                        <p className='cards__item__p-two'>{item.text}</p>  
                    </div> 
                </Link>
            </li>
          ))}
          </ul>
        </div>
    </div>




        
    </div>
    </>
  )
}

export default CorporatePolicy