import React, { useState, useEffect } from 'react';

//componentes 
import { BannerMain } from 'components/BannerMain/BannerMain';
import AboutUs from 'components/Company/AboutUs';
import CorporatePolicy from 'components/Company/CorporatePolicy';
import Trayectory from 'components/Company/Trayectory';
import NationalMomentum from 'components/Company/NationalMomentum';
import Loader from "components/Loader/Loader";

//Selectors getCategory

import  { getProductByName,
          getCategory, 
          getProductByCategory,
          getProductByCat3,
          getBrandsByName, 
          getProductByBrands 
         
        }  from '../selectors/getInfoCasagri';

// Data
import { BannerData } from '../data/BannerData';
import  data  from '../data/daticos/productos.json';
import { BANNERS } from '../routers/index';



export const Company = () => {

  const [error, setError] = useState(null);
  const [loanding, setLoanding] = useState(false);
  const [banner, setBanner] = useState([]);
  const [brand, setBrand] = useState([]);
  const [brando, setBrando] = useState([]);


  //Peticion del Banner Principal
  const getInfo = async () => {

    //Estado del Loanding Verdadero
    setLoanding(true);

    //Petición a la api
    const response = await fetch(`${'http://localhost:8080/api/'}${BANNERS}${'Empresa'}`);
    const res = await response.json();
    
    setBanner(res.data);

    //Estado del Loanding Falso
    setLoanding(false);

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
    //console.log(JSON.stringify(getProductByBrands("PUPPY PETS"))); 
    //console.log(getBrandsByName());

    console.log(getProductByCat3("INSECTICIDAS"))
    //console.log(getProductByName("Cipermetrina Calbos"));

    setBrando(getProductByCat3("INSECTICIDAS"));

    //setBrand(getBrandsByName());

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
              <div>
                {/* {brando?.map((item, index) => (
                <div key={`${"Marcascasagri"}-${index}`}>
                  {item.Marca}
                </div>
                      
                ))}*/}
              
              </div>
            </>
          )
        }
        
      </div>
    </>
  )
}
