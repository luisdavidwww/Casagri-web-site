import React from 'react';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';


export default function Components({ ComponentesProductos, Enlace }) {

  //let rediret = Enlace.replace(/\s+/g, '');

  return (

    //overflow-y: scroll !important;
    
    <div className={ ComponentesProductos?.length > 23 ? 'filter__container__Main__Arcodion': 'filter__container__Main'}>
      <ul style={{paddingLeft:'0rem'}}>
        {
          ComponentesProductos?.map((item, index) => ( 
          <li key={`${"Component__Casagri"}${Enlace}-${index}`} /*className='filter__container__List'*/  style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}} >
            <Link 
            className='subtitle__Filter'
            to={`${"/component/"}${item.cat4}`} 
            style={{textDecoration:'none'}}
            state={[Enlace]}
            >
              {item.cat4}
            </Link> 
            <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/>
          </li>
          
      
          ))}
      </ul>
    </div>
  );
}


