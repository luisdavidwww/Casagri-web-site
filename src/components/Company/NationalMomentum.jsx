import React from 'react';
import { Link, Redirect } from "react-router-dom";

//Componentes
import CardItem from '../Cards/CardItem';
//Diseño y estilos
import './CorporatePolicy.css';
import './NationalMomentum.css';
//Datos para el Carousel NationalMomentum
import { NationalMomentumData } from '../../data/NationalMomentum';


//importacion temporal de imagenes
const imgL = require.context('../../static/images/nationalMomentum', true);


const NationalMomentum = ( { component } ) => {
    return (
        <>
        <div className='CorporatePolicy__container'>
          
            <div className='AboutUs__title__Container'>
                    <h1 className='AboutUs__title'>Impulso <span style={{color:'#489B1E'}}> Nacional </span> </h1>
            </div>
    
    
        <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items-container'>
              {NationalMomentumData?.map((item, index) => (
                <li className='cards__item-pc'>
                    <Link className='cards__item__link-pc' to="">
                        <div className='cards__item__info-in'>
                            <img 
                                className='cards__item__img-in'
                                key={`${component}-${index}`}
                                alt={item.title}
                                src={imgL(`./${item.imgUrl}`)}
                                objectFit="cover"
                            />
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

export default NationalMomentum