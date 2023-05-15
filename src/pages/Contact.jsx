import React, { useState, useEffect } from 'react'
import { BannerMain } from 'components/BannerMain/BannerMain';
import Location  from 'components/Contact/Location';
import Loader from "components/Loader/Loader";
import ContactSection from 'components/Home/Contact/ContactSection';
import Companys from 'components/Contact/Companys';


//Datos para los banners
import { BANNERS } from '../routers/index';


export const Contact = () => {


  const [error, setError] = useState(null);
  const [loanding, setLoanding] = useState(false);
  const [banner, setBanner] = useState([]);


    //Peticion del Banner Principal
    const getInfo = async () => {

    //Estado del Loanding Verdadero
    setLoanding(true);

    //Petición a la api
    const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${BANNERS}${'Contácto'}`);
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
              {/*<Location/>*/}
              <Companys/>
              <ContactSection/>
            </>
          )
        }
      </div>
    </>
  )
}
