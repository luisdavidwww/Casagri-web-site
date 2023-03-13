import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import AOS      from 'aos';

//diseño
import 'aos/dist/aos.css'; 


//importacion temporal de imagenes
const imgL = require.context('../../static/images/home', true);


function CardItemCarrusel(props) {

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
    <div data-aos="fade-right" data-aos-once="true" data-aos-duration="1500">
      <li className='cards__item-two'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      >
        <Link className='cards__item__link-two' to={props.href}>
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
          {/*
            titleCategory ?
            (
              <AnimatePresence>
              <div>
                <motion.div
                  initial={{x: 0, y: 43, scale: 1, rotate: 0,  opacity:1 }}      
                  animate={{x: 0, y: 0, scale: 1, rotate: 0, transition:{duration:"0.40"}, opacity:1 }} 
                  exit={{x: 0, y: -50, scale: 1, rotate: 0,  opacity:1 }}    
                  >
                  <div className='cards__item__info-two'>
                    <h5 className='cards__item__text-two'>{props.text}</h5> 
                  </div>             
                </motion.div>
              </div>
              </AnimatePresence>
            ):null    
            */}
          
        </Link>
      </li>
    </div>
  );
}

export default CardItemCarrusel;
