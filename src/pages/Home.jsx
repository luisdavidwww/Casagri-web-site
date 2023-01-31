import React from 'react';

//componentes
import  Cards  from 'components/Cards/Cards';
import  AboutUsHome  from 'components/Home/AboutUsHome';
import { CarruselDiscover } from 'components/CarruselDiscover/CarruselDiscover';
import { CarruselCatalogue } from 'components/Home/CarruselCatalogue';
import  NewSection  from 'components/NewsCards/NewSection';

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
    </div>
  )
}
