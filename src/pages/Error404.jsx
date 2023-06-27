import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

//componentes 
import { BannerCategory } from 'components/BannerMain/BannerCategory';

//Variables de Entorno
import { BANNERS } from '../routers/index';

//icons
import { AiOutlineArrowLeft } from "react-icons/ai";




const Error = () => {
    const [banner, setBanner] = useState([]);
    const [loandingBanner, setLoandingBanner] = useState(true);

    //Peticion el Banner Principal
    //Peticion el Banner Principal
    const getInfo = async () => {

        //Petición a la api
        setLoandingBanner(true)
        const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${BANNERS}${"Buscar"}`);
        const res = await response.json();
        setBanner(res.data);
        setLoandingBanner(false)

        try {
          //Petición a la api
          setLoandingBanner(true)
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${BANNERS}${"Buscar"}`);
          const res = await response.json();

          setBanner(res.data);
          setLoandingBanner(false)

        } catch (error) {
          console.log('Error fetching data:', error);
          setLoandingBanner(false);
        }

  }

    useEffect(() => {
      getInfo();
     }, [])



  return (
    <div style={{backgroundColor:'#F9F9F9'}}>
        <>
                {/*Banner de la Categoria */}
                <div className='categoryBanner__Container'>
                  <BannerCategory image={banner.banner__desktop} imageMini={banner.banner__movil} 
                                    consulta={"Buscar"} loandingBanner={loandingBanner} />
                </div>

                {/*Titulo de Resultado Desktop */}
                <div className='result__Search__Container' >
                    <div className='result__Search text__Result__Category'> 
                        <span style={{fontWeight:'700', fontSize:'29px'}}>Página no encontrada.</span>  
                    </div> 
                </div>

                {/*Titulo de Resultado Movil */}
                <div className='result__Category__Container__Movil' >
                  <div className='result__Category__Movil text__Result__Category__Movil'> 
                    <>
                      <p style={{fontWeight:'700', fontSize:'25px', marginBottom:'0rem', textAlign:'center'}}>Página no encontrada.</p> 
                    </>
                  </div>
                </div>

                {/*Contenido de Sección */}
                <div className='category__Container'>
                  {/* Resultado de Busqueda */}
                  <>
                      <div style={{ display:'inline-block', height:'10vh', justifyContent:'center', textAlign:'center', marginTop:'3rem' }}>
                        No encontramos la página que estás buscando.
                        Por favor, inténtalo de nuevo.
                      </div>
                      <div style={{ display:'block', height:'10vh', justifyContent:'center', textAlign:'center', marginTop:'3rem' }}>
                        <Link to={`/`} style={{textDecoration:'none', color:'#494949'}}> 
                          <AiOutlineArrowLeft/> <>Volver al Inicio</>
                        </Link>
                      </div>
                  </>
                </div>
              </>
    </div>
  )
}

export default Error;






