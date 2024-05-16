import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Divider from '@mui/material/Divider';
//icons
import { FaCheckCircle } from "react-icons/fa";


export default function Components({ Path, ComponentesProductos, Enlace, SearchCondition }) {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const componente = searchParams.get('componente');
  const marca = searchParams.get('marca');

  const [activeIcon, setActiveIcon] = useState("");

      
  const activeIconResponse = () => {

  //Existe el parametro de Numero de Pagina: "?page=0"
  if (SearchCondition !== "" ){

    //Si tiene definido parametro de Marca: "&marca"
    if ( componente !== "" ){
      setActiveIcon(componente);
    }
  }
  //No existe el parametro de Numero de Pagina: "?page="
  else{
    setActiveIcon("");
  }

  
  }


  
  useEffect(() => {
    activeIconResponse();
  }, []);



  return (

    
    <div className={ ComponentesProductos?.length > 23 ? 'filter__container__Main__Arcodion': 'filter__container__Main'}>
      <ul style={{paddingLeft:'0rem'}}>
        {
          ComponentesProductos?.map((item, index) => ( 
          <li key={`${"Component__Casagri"}${Enlace}-${index}`} style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}} >
            <Link 
            className='subtitle__Filter'
            //to={`${"/component/"}${item.cat4}`} 
            to={`/${Path}/${Enlace}${"?page=1"}&marca=${marca}&componente=${item.cat4}`}
            style={{textDecoration:'none'}}
            state={[Enlace]}
            >
              {item.cat4}
              {activeIcon == item.cat4 ? (<FaCheckCircle style={{ marginLeft:'0.7rem', fontSize:'15px'}}/>):null}
            </Link> 
            <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/>
          </li>
          
      
          ))}
      </ul>
    </div>
  );
}


