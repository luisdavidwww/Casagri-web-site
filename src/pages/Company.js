import React from 'react'
import { BannerMain } from 'components/BannerMain/BannerMain';

//Datos para los banners
import { BannerData } from '../data/BannerData';



export const Company = () => {
  

  // Valor del Banner Principal
  const listaDatos = BannerData.filter(element => element.id === 1);

  //Img del banner principal  
  const bannerImg =  listaDatos.map(item => item.img);
  //Titulo del banner principal  
  const bannerTitle =  listaDatos.map(item => item.title);

  //Convertimos a strings para las props
  const img =  bannerImg.toString();
  const tit =  bannerTitle.toString();

  return (
    <>
      <BannerMain image={img} title={tit}/>
      <div>Company</div>
      <div>Company</div>
      <div>Company</div>
      <div>Company</div>
      <div>Company</div>
      <div>Company</div>
      <div>Company</div>
      <div>Company</div>
      <div>Company</div>
      <div>Company</div>
      <div>Company</div>
      <div>Company</div>
      <div>Company</div>
      <div>Company</div>
      <div>Company</div>
      <div>Company</div>
      <div>Company</div>
      <div>Company</div>
      <div>Company</div>
      <div>Company</div>
      <div>Company</div>
      <div>Company</div>
      <div>Company</div>
      <div>Company</div>
      <div>Company</div>
      <div>Company</div>
      <div>Company</div>
    </>
  )
}
