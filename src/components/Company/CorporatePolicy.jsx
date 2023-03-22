import React, { useState, useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';

//Componentes
import CardItem from '../Cards/CardItem';
//Diseño y estilos
import './CorporatePolicy.css';
//Data
import { CorporatePolicyData } from '../../data/CorporatePolicy';
import { NOSOTROS } from '../../routers/index'


//importacion temporal de imagenes
const imgL = require.context('../../static/images/corporatePolicy', true);


const CorporatePolicy = ({component}) => {

  const [nosotros, setNosotros] = useState([])

  const getInfo = async () => {
    //const response = await fetch(`${process.env.REACT_APP_API_URL}${ACERCA_DE_CASAGRI}`);
    const response = await fetch(`${'http://localhost:8080/api/'}${NOSOTROS}`);
    
    const res = await response.json();
    setNosotros(res.data);
  }


 

  useEffect(() => {
    getInfo();
  },[])


  return (
    <>
    <div className='CorporatePolicy__container'>
      
        <div className='AboutUs__title__Container'>
                <h1 className='AboutUs__title'>Nosotros</h1>
        </div>


    <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items-container'>
          {nosotros?.map((item, index) => (
            <li className='cards__item-pc' key={`${component}-${index}`}>
                <a className='cards__item__link-pc' data-aos="fade-up" data-aos-once="true" data-aos-duration="1500">
                  {  item ?
                      <img 
                      className='cards__item__img-pc'
                      alt={item.titulo}
                      //src={imgL(`./${item.imgUrl}`)}
                      src={item.img}
                      />
                    :
                    <Skeleton variant="rectangular"  height={190} />
                  }
                    
                    <div className='cards__item__info-pc'>
                        <h5 className='cards__item__text-pc'>{item.titulo || <Skeleton />}</h5>
                        <p className='cards__item__p-two'>{item.texto || <Skeleton />}</p>  
                    </div> 
                </a>
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