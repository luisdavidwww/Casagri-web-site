import React from 'react';
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
                    <li className='cards__item-pc' key={`${component}-${index}`}>
                        <div className='cards__item__link-pc'  >
                            <div className='cards__item__info-in' data-aos="flip-right" data-aos-once="true" data-aos-duration="1200">
                                <img 
                                    className='cards__item__img-in'
                                    alt={item.title}
                                    src={imgL(`./${item.imgUrl}`)}
                                />
                                <p className='cards__item__p-two'>{item.text}</p> 
                                
                            </div>  
                        </div>
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