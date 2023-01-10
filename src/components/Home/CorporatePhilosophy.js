import React from 'react';
import { Link } from 'react-router-dom';
import AOS      from 'aos';
import '../Home/CorporatePhilosophy.css';
import '../Finance/ProjectFinance.css';
import 'aos/dist/aos.css'; 


const CorporatePhilosophy = () => {

  const Mision = "images/filosofiaCorporativa/mision-1.jpg"
  const Vision = "images/filosofiaCorporativa/vision-1.jpg";
  const PolíticaCorporativa = "images/filosofiaCorporativa/politicacorporativa-1.jpg";

  React.useEffect(() => { 
    AOS.init({duration:1200});
    },[])


  return (
    <>
      <div className='cards-home'>
        <h1 data-aos="zoom-in-up"  className='titulo-home' > Filosofía Corporativa </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            {/*-------------------------Mision-------------------------*/}

            <li data-aos="fade-up" className='cards__item-home'>
              <Link className='cards__item__link' to="">
                <figure className='cards__item__pic-wrap'>
                  <img
                    className='cards__item__img-home'
                     alt='Misión'
                     src={ Mision }
                  />
                </figure>
                <div className='cards__item__info'>
                  <h5 className='cards__item__text-home'>Misión</h5>
                  <p className='cards__item__p' > 
                      Proveer productos agroindustriales que cubran las necesidades 
                      de nuestros clientes nacionales, mediante procesos sostenibles que 
                      contribuyan al desarrollo integral de la organización.
                  </p>
                </div>
              </Link>
            </li>

            {/*-------------------------Vision-------------------------*/}
            <li data-aos="fade-up" className='cards__item-home'>
              <Link className='cards__item__link' to="">
                <figure className='cards__item__pic-wrap'>
                  <img
                    className='cards__item__img-home'
                     alt='Visión'
                     src={ Vision }
                  />
                </figure>
                <div className='cards__item__info'>
                  <h5 className='cards__item__text-home'>Visión</h5>
                  <p className='cards__item__p' > 
                    Ser reconocidos como una empresa dedicada a la comercialización 
                    de productos agrícolas de alta calidad y
                    por su orientación hacia el desarrollo integral del ser humano.
                  </p>
                </div>
              </Link>
            </li>

            {/*---------------------Política Corporativa----------------------*/}

            <li data-aos="fade-up" className='cards__item-home'>
              <Link className='cards__item__link' to="">
                <figure className='cards__item__pic-wrap'>
                  <img
                    className='cards__item__img-home'
                     alt='Politica Corporativa'
                     src={ PolíticaCorporativa }
                  />
                </figure>
                <div className='cards__item__info'>
                  <h5 className='cards__item__text-home'>Política Corporativa</h5>
                  <p className='cards__item__p' > 
                    Compromiso de cumplir las necesidades de nuestros clientes, haciendo 
                    incapié continuo en la excelencia de nuestras actividades.
                  </p>
                </div>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default CorporatePhilosophy;
