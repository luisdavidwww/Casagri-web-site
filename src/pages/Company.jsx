import React, { useState, useEffect } from 'react'
import { BannerMain } from 'components/BannerMain/BannerMain';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

//componentes 
import AboutUs from 'components/Company/AboutUs';
import CorporatePolicy from 'components/Company/CorporatePolicy';
import Trayectory from 'components/Company/Trayectory';
import NationalMomentum from 'components/Company/NationalMomentum';
import Loader from "components/Loader/Loader";

// Data
import { BannerData } from '../data/BannerData';
import { BANNERS } from '../routers/index'



export const Company = () => {

  const [error, setError] = useState(null);
  const [loanding, setLoanding] = useState(true);
  const [banner, setBanner] = useState([])

  const getInfo = async () => {
    const response = await fetch(`${'http://localhost:8080/api/'}${BANNERS}${'/Empresa'}`);
    const res = await response.json();
    setBanner(res.data);
    console.log(res.data.img);
    console.log(banner.img);
  }
  

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

  useEffect(() => {
    getInfo();
  },[])

  return (
    <>
      <div style={{backgroundColor:'#F9F9F9'}}>
        {
          loanding ?(
            <Box sx={{ display: 'flex' }}>
              <CircularProgress color="success" />
            </Box>
          ): null
        }
        <BannerMain image={/*img*/ banner.img } imageMini={imgMini} />
        <AboutUs component="AboutUs"/>
        <CorporatePolicy component="CorporatePolicy"/>
        <Trayectory component="Trayectory"/>
        <NationalMomentum component="NationalMomentum"/>
      </div>
    </>
  )
}
