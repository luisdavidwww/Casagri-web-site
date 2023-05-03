import React from 'react';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';


export default function CategoryAccordion({ MarcasProductos, Enlace }) {

  //let rediret = Enlace.replace(/\s+/g, '');
  //MarcasProductos.filter((idx) => idx > 20);

  return (
    
    <div className={ MarcasProductos.length > 23 ? 'filter__container__Main__Arcodion': 'filter__container__Main'}>
      <ul style={{paddingLeft:'0rem'}}>
        {
          MarcasProductos?.map((item, index) => ( 
          <li key={`${"Marcascasagri"}${Enlace}-${index}`} style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}} >
            <Link 
            className='subtitle__Filter'
            to={`${"/marcas/"}${item.Marca}`} 
            style={{textDecoration:'none'}}
            state={[Enlace]}
            
            >
              {item.Marca}
            </Link>
            <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
          </li>
      
          ))}
      </ul>
    </div>
  );
}


