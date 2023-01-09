import React from 'react'
import { BannerMain } from 'components/BannerMain/BannerMain';
import Location  from 'components/Contact/Location';

//Datos para los banners
import { BannerData } from '../data/BannerData';

// Valor del Banner Principal
const listaDatos = BannerData.filter(element => element.id === 2);

//Img del banner principal  
const bannerImg =  listaDatos.map(item => item.img);
//Titulo del banner principal  
const bannerTitle =  listaDatos.map(item => item.title);

//Convertimos a strings para las props
const img =  bannerImg.toString();
const tit =  bannerTitle.toString();

export const Contact = () => {
  return (
    <>
      <div>
        <BannerMain image={img} title={tit}/>
        <Location/>
        <h1>Contacto</h1>
      </div>
    </>
  )
}
