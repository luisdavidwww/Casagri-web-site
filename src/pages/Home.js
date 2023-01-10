import React from 'react';
import { CarruselDiscover } from 'components/CarruselDiscover/CarruselDiscover';

//componentes
import  Cards  from 'components/Cards/Cards';
import  AboutUsHome  from 'components/Home/AboutUsHome'

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


export const Home = () => {
  return (
    <div>
      <CarruselDiscover/>
      <AboutUsHome/>
      <Cards/>
    </div>
  )
}
