import React, { useState } from 'react';

//importacion temporal de imagenes
const imgL = require.context('../../static/images/home', true);


function CardItemCarrusel(props) {

  const [dropdown, setDropdown] = useState(false);

  //cursor activo sobre el elemento Navbar
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  //cursor desactivado al salir del elemento Navbar
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };




  return (
    <>

      <li className='cards__item-two'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      >
        <a className='cards__item__link-two' href={props.href}>
          <figure className='cards__item__pic-wrap-two'>
              <img 
              className='cards__item__img-two'
              alt={props.text}
              src={imgL(`./${props.src}`)}
              objectFit="cover"
                      
                      />
          </figure>
          <div className='cards__item__info-two'>
            <h5 className='cards__item__text-two'>{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItemCarrusel;
