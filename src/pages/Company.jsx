import React from 'react'
import { BannerMain } from 'components/BannerMain/BannerMain';

//componentes 
import AboutUs from 'components/Company/AboutUs';
import CorporatePolicy from 'components/Company/CorporatePolicy';
import Trayectory from 'components/Company/Trayectory';
import NationalMomentum from 'components/Company/NationalMomentum';

//Datos para los banners
import { BannerData } from '../data/BannerData';



export const Company = () => {
  

  // Valor del Banner Principal
  const listaDatos = BannerData.filter(element => element.id === 1);

  //Img del banner principal  
  const bannerImg =  listaDatos.map(item => item.img);
  const bannerImgMini =  listaDatos.map(item => item.miniimg);

  //Titulo del banner principal  
  const bannerTitle =  listaDatos.map(item => item.title);

  //Convertimos a strings para las props
  const img =  bannerImg.toString();
  const imgMini =  bannerImgMini.toString();
  const tit =  bannerTitle.toString();

  return (
    <>
      <div style={{backgroundColor:'#F9F9F9'}}>
        <BannerMain image={img} imageMini={imgMini} />
        <AboutUs component="AboutUs"/>
        <CorporatePolicy component="CorporatePolicy"/>
        <Trayectory component="Trayectory"/>
        <NationalMomentum component="NationalMomentum"/>
      </div>
    </>
  )
}
