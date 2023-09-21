import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Divider from '@mui/material/Divider';

//icons
import { FaCheckCircle } from "react-icons/fa";


export default function Clasification({ Path, Consulta, fetchDataAndHandleResponse, Search }) {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [activeIcon, setActiveIcon] = useState("");

      
  const activeIconResponse = () => {

  //Existe el parametro de Numero de Pagina: "?page=0"
  if (Search !== "" ){
    //No tiene definido parametro de Orden: "&orderBy"
    if ( searchParams.get('orderBy') === null || searchParams.get('orderBy') === "null"){
      setActiveIcon("ASC");
    }
    //Si tiene definido parametro de Orden: "&orderBy"
    if ( searchParams.get('orderBy') === "desc" ){
      setActiveIcon("DESC");
    }
    //Si tiene definido parametro de Marca: "&marca"
    if ( searchParams.get('marca') === "si" ){
      setActiveIcon("MARCA");
    }
  }
  //No existe el parametro de Numero de Pagina: "?page="
  else{
    setActiveIcon("ASC");
  }

  
  }

  useEffect(() => {
    activeIconResponse();
  }, []);

  return (
    
    <div className='filter__container__Main'>
      <ul style={{paddingLeft:'0rem'}}>

          {/* ORDENAR ASCENDENTE */}
          <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
            <Link 
            className='subtitle__Filter'
            to={`/${Path}/${Consulta}`}
            >
              { activeIcon === "ASC" ? 
              (
              <div style={{color:'#000000', marginLeft:'0.35rem', fontWeight:'bold'}}> 
                ASCENDENTE (A - Z) 
                <FaCheckCircle style={{ marginLeft:'0.7rem', fontSize:'15px'}}/> 
              </div>)
              :(<div style={{ marginLeft:'0.35rem' }} >ASCENDENTE (A - Z)</div>)}
            </Link> 
            <div></div>
            <></>
            <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
          </li>

          {/* ORDENAR DESCENDENTE */}
          <li style={{textDecoration:'none', paddingLeft:'0.5rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
            <Link 
            className='subtitle__Filter'
            to={`/${Path}/${Consulta}${"?page=1"}&orderBy=${"desc"}`}
            >
              { activeIcon === "DESC" ? 
              (
              <div style={{color:'#000000', fontWeight:'bold', marginLeft:'0rem'}}> 
                DESCENDENTE (Z - A) 
                <FaCheckCircle style={{ marginLeft:'0.9rem', fontSize:'15px'}}/> 
              </div>)
              :(<>DESCENDENTE (Z - A)</>)}
            </Link> 
            <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
          </li>

          {/* ORDENAR POR MARCA */}
          <li style={{textDecoration:'none', paddingLeft:'0.5rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
            <Link 
            className='subtitle__Filter'
            to={`/${Path}/${Consulta}${"?page=1"}&marca=si`}
            >
              { activeIcon === "MARCA" ? 
              (
              <div style={{color:'#000000', fontWeight:'bold', marginLeft:'0rem'}}> 
                Marca
                <FaCheckCircle style={{ marginLeft:'0.9rem', fontSize:'15px'}}/> 
              </div>)
              :(<>Marca</>)}
            </Link> 
            <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
          </li>
      </ul>
    </div>
  );
}


