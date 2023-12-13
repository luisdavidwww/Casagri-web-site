import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import AOS      from 'aos';

//diseño
import 'aos/dist/aos.css'; 


//importacion temporal de imagenes
const imgL = require.context('../../static/images/home', true);


function CardItemCategory(props) {

  const [dropdown, setDropdown] = useState(false);
  const [titleCategory, SetTitleCategory] = useState(false);

  //cursor activo sobre el elemento Navbar
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      SetTitleCategory(false);
    } else {
      SetTitleCategory(true);
    }
  };
  //cursor desactivado al salir del elemento Navbar
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      SetTitleCategory(false);
    } else {
      SetTitleCategory(false);
    }
  };




  return (
        <li className='cards__item__category' data-aos="fade-right" data-aos-once="true" data-aos-duration="1700"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
          <Link className='cards__item__category__link' to={props.href}>
            <figure className='cards__item__category__wrap'>
                <img 
                className='cards__item__img__category'
                alt={props.text}
                src={props.src}
                />
            </figure>
              <div>
                <h5 className='cards__item__text__category'>{props.text}</h5> 
              </div> 
          </Link>
        </li>
  );
}

export default CardItemCategory;
