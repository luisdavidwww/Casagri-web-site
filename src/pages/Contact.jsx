import React, { useState, useEffect } from 'react'
import { BannerMain } from 'components/BannerMain/BannerMain';
import Location  from 'components/Contact/Location';
import Loader from "components/Loader/Loader";

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
    const response = await fetch(`${'http://localhost:8080/api/'}${BANNERS}${'/Contacto'}`);
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
      <div>
      {
          loanding ?( <Loader/>):(
            <>
              <BannerMain image={ banner.img } imageMini={ banner.imgMini } /> 
              <Location/>
            </>
          )
        }
      </div>
    </>
  )
}
