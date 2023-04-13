import React from 'react';
import { Link } from 'react-router-dom';




export default function CategoryAccordion({ MarcasProductos, Enlace }) {

  //let rediret = Enlace.replace(/\s+/g, '');

  return (
    
    <div className='filter__container__Main__Arcodion'>
      <ul>
        {
          MarcasProductos?.map((item, index) => ( 
          <li>
            <Link 
            to={`${"/marcas/"}${item.Marca}`} 
            state={[Enlace]}
            key={`${"Marcascasagri"}${Enlace}-${index}`}
            >
              {item.Marca}
            </Link> 
          </li>
      
          ))}
      </ul>
    </div>
  );
}


