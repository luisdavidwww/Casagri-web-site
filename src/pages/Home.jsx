import React, { useState, useEffect, Suspense } from 'react';

//componentes 
import  FeaturedProducts  from 'components/Cards/FeaturedProducts';
import  RecommendedProducts  from 'components/Cards/RecommendedProducts';
import  AboutUsHome  from 'components/Home/AboutUsHome';
import { CarruselCatalogue } from 'components/Home/CarruselCatalogue';
import  NewSection  from 'components/NewsCards/NewSection';
import  BannerCarrousel  from 'components/BannerMain/BannerCarrousel';
import  CarruselMain  from 'components/CarruselDiscover/CarruselMain';
import Loader from "components/Loader/Loader";
import ContactSection from 'components/Home/Contact/ContactSection';

// Data
import { BANNERSPUBLICIDAD, BANNERSHOME } from '../routers/index';


{/* 
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
*/}




export const Home = () => {

  const [loanding, setLoanding] = useState(false);
  const [banner, setBanner] = useState([]);
  const [bannerHome, setBannerHome] = useState([]);

  //Peticion principal
  const getInfo = async () => {

    //Estado del Loanding Verdadero
    setLoanding(true);

    //Banner Publicidad -- Peticion a la api
    const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${BANNERSPUBLICIDAD}`);
    const res = await response.json();
    setBanner(res.data);

    //Banner Home -- Petición a la api 
    const respon = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${BANNERSHOME}`);
    const resp = await respon.json();
    setBannerHome(resp.data);

    //Estado del Loanding Falso
    setLoanding(false);

  }

  useEffect(() => {
    getInfo();
  },[])


  return (
    <div style={{backgroundColor:'#F9F9F9'}} >
      {
          loanding ?( <Loader/>):(
            <>
            <CarruselMain banner={bannerHome} component={"CarruselMain"} />
            <AboutUsHome/>
            <CarruselCatalogue component="CarruselCatalogue"/>
            <FeaturedProducts component="FeaturedProducts"/>
            <BannerCarrousel banner={banner} component={"BannerCarrousel"} />
            <RecommendedProducts component="RecommendedProducts"/>
            <NewSection component="NewSection"/>
            <ContactSection/>
            </>
      )
    }
    </div>
  )
}
