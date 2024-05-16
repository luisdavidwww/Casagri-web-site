import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Divider from '@mui/material/Divider';
//icons
import { FaCheckCircle } from "react-icons/fa";



export default function CategoryAccordion({ Path, MarcaLista, Consulta, SearchCondition }) {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const marca = searchParams.get('marca');
  const componente = searchParams.get('componente');

  const [activeIcon, setActiveIcon] = useState("");

      
  const activeIconResponse = () => {

  //Existe el parametro de Numero de Pagina: "?page=0"
  if (SearchCondition !== "" ){

    //Si tiene definido parametro de Marca: "&marca"
    if ( marca !== "si" && marca !== "" ){
      setActiveIcon(marca);
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
    <>

    <div className={ MarcaLista?.length > 23 ? 'filter__container__Main__Arcodion': 'filter__container__Main'}>
      <ul style={{paddingLeft:'0rem'}}>
        {
          MarcaLista?.map((item, index) => ( 
          <li key={`${"Marcascasagri"}${Consulta}-${index}`} style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}} >
            <div>
              <Link 
              className='subtitle__Filter'
              /*to={`${"/marcas/"}${item.Marca}`} */
              to={`/${Path}/${Consulta}${"?page=1"}&marca=${item.Marca}&componente=${componente}`}
              style={{textDecoration:'none'}}
              state={[Consulta]}
              
              >
                {item.Marca}
                {activeIcon == item.Marca ? (<FaCheckCircle style={{ marginLeft:'0.7rem', fontSize:'15px'}}/>):null}
                
              </Link>
              <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/>
            </div> 
          </li>
      
          ))}
      </ul>
    </div>

    </>
    
  );
}


