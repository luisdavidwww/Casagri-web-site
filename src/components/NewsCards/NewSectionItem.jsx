import React from 'react';


//importacion temporal de imagenes
const imgL = require.context('../../static/images/news', true);


function NewItem(props) {
  

  return (
    <>
      <li className='news__item'>
        <a className='news__item__link' href={props.url}>

          {/* Imagen del Producto */}
          <figure className='news__item__pic-wrap'>
              <img
              className='news__item__img'
              alt=''
              src={imgL(`./${props.src}`)}
              layout="fill"
                      objectFit="cover"
                      style={{
                          marginLeft: "auto",
                          marginRight: "auto",
                          width: "100%",
                          height: "100%"
                        }}
                      />
          </figure>

          {/* Datos del Productos */}
          <div className='news__item__info'>
            <div className='news__item__info-date'>
              <h2 className='news__item__text-sender'>{props.sender}</h2>
              <h2 className='news__item__text-date'>{props.date}</h2>
            </div>

            <h3 className='news__item__text-title'>{props.title}</h3>

            <div className='news__item__text-description'>
              <p className='news__item__text-description'>{ props.description }</p>
            </div>
          </div>
          
        </a>
      </li>
    </>
  );
}

export default NewItem;
