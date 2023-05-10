import React, { useState, useEffect } from 'react';

//componentes  
import { BannerMain } from 'components/BannerMain/BannerMain';
import AboutUs from 'components/Company/AboutUs';
import CorporatePolicy from 'components/Company/CorporatePolicy';
import Trayectory from 'components/Company/Trayectory';
import NationalMomentum from 'components/Company/NationalMomentum';
import BrandsCarrousel from "components/Company/BrandsCarrousel";
import Loader from "components/Loader/Loader";

// Data
import { BANNERS } from '../routers/index';



export const Company = () => {

  const [loanding, setLoanding] = useState(false);
  const [banner, setBanner] = useState([]);


  //Peticion del Banner Principal
  const getInfo = async () => {
    //Estado del Loanding Verdadero
    setLoanding(true);

    //Petición a la api
    const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${BANNERS}${'Empresa'}`);
    const res = await response.json();
    
    setBanner(res.data);

    //Estado del Loanding Falso
    setLoanding(false);
  }


  useEffect(() => {
    getInfo();
  },[])

  
  return (
    <>
      <div style={{backgroundColor:'#F9F9F9'}}>
        {
          loanding ?( <Loader/>):(
            <>
              <BannerMain image={ banner.banner__desktop } imageMini={ banner.banner__movil } /> 
              <AboutUs component="AboutUs"/>
              <CorporatePolicy component="CorporatePolicy"/>
              <Trayectory component="Trayectory"/>
              <NationalMomentum component="NationalMomentum"/>
              <BrandsCarrousel/>
            </>
          )
        }
        
      </div>
    </>
  )
}
