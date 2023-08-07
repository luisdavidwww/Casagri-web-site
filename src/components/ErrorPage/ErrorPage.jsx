

import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

//componentes 
import { BannerCategory } from 'components/BannerMain/BannerCategory';

//Imagenes
import  Movil  from '../../static/images/404/Not Found 404 Movil.webp';
import  Desktop  from '../../static/images/404/Not Found 404.webp';

const ErrorPage = ({message}) => {



    return (
        <div style={{backgroundColor:'#F9F9F9'}}>
            <>
                    {/*Banner de la Categoria */}
                    <div className='categoryBanner__Container'>
                      <BannerCategory image={Desktop} imageMini={Movil} 
                                        consulta={"Buscar"} />
                    </div>
    
                    {/*Titulo de Resultado Desktop */}
                    <div className='result__Search__Container' >
                        <div className='result__Search text__Result__Category'> 
                            <span style={{fontWeight:'700', fontSize:'29px'}}>Error de Conexión</span>  
                        </div> 
                    </div>
    
                    {/*Titulo de Resultado Movil */}
                    <div className='result__Category__Container__Movil' >
                      <div className='result__Category__Movil text__Result__Category__Movil'> 
                        <>
                          <p style={{fontWeight:'700', fontSize:'25px', marginBottom:'0rem', textAlign:'center'}}>Error de Conexión</p> 
                        </>
                      </div>
                    </div>

                    {/*Contenido de Sección */}
                    <div className='category__Container'>
                    {/* Resultado de Busqueda */}
                    <>
                        <div style={{ display:'inline-block', height:'10vh', justifyContent:'center', textAlign:'center', marginTop:'3rem' }}>
                            No pudimos acceder a la página. Por favor, inténtalo de nuevo.
                        </div>
                        
                    </>
                    </div>

                  </>
        </div>
      )
    }

export default ErrorPage;