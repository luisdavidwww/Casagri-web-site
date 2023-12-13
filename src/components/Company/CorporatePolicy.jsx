import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
// Diseño y estilos
import './CorporatePolicy.css';
// Data
import { NOSOTROS } from '../../routers/index'


const CorporatePolicy = ({component}) => {

  const [nosotros, setNosotros] = useState([])

  const getInfo = async () => {
    const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${NOSOTROS}`);

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


    <div className='news_container-main'>
        <div className='news_wrapper'>
          <ul className='news__items'>
          {nosotros?.map((item, index) => (
            <li className='news__item' key={`${component}-${index}`} data-aos="fade-up" data-aos-once="true" data-aos-duration="1500">
                <a className='news__item__link' >
                  {  item ?
                      <img 
                      className='cards__item__img-pc'
                      alt={item.titulo}
                      src={item.imagen_principal}
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