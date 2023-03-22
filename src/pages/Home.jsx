import React from 'react';

//componentes
import  FeaturedProducts  from 'components/Cards/FeaturedProducts';
import  RecommendedProducts  from 'components/Cards/RecommendedProducts';
import  AboutUsHome  from 'components/Home/AboutUsHome';
import { CarruselDiscover } from 'components/CarruselDiscover/CarruselDiscover';
import { CarruselCatalogue } from 'components/Home/CarruselCatalogue';
import  NewSection  from 'components/NewsCards/NewSection';
import { BannerCommercial } from 'components/BannerMain/BannerCommercial';

//Datos para los banners
import { BannerData } from '../data/BannerData';



// Valor del Banner Principal
const listaDatos = BannerData.filter(element => element.id === 'SaludAnimalF');
//Img del banner principal  
const bannerImg =  listaDatos.map(item => item.img);
//Img del banner principal  
const bannerMiniImg =  listaDatos.map(item => item.miniimg);
//Titulo del banner principal  
const bannerTitle =  listaDatos.map(item => item.title);
//Titulo del banner principal  
const href =  listaDatos.map(item => item.href);
//Convertimos a strings para las props
const img =  bannerImg.toString();
const imageMini =  bannerMiniImg.toString();
const tit =  bannerTitle.toString();


export const Home = () => {
  return (
    /* style={{backgroundColor:'#F0F5F9'}} */
    <div style={{backgroundColor:'#F9F9F9'}} >
      <CarruselDiscover component="CarruselDiscover"/>
      <AboutUsHome/>
      <CarruselCatalogue component="CarruselCatalogue"/>
      <FeaturedProducts component="FeaturedProducts"/>
      <BannerCommercial image={img} href={href} imageMini={imageMini}/>
      <RecommendedProducts component="RecommendedProducts"/>
      <NewSection component="NewSection"/>
    </div>
  )
}
