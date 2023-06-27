import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';

//componentes
import SearchFormBrands from '../Search/SearchFormBrands';


export default function CategoryAccordion({ MarcaLista, Enlace }) {

  //let rediret = Enlace.replace(/\s+/g, '');
  //MarcasProductos.filter((idx) => idx > 20);
  const [marcas, setMarcas] = useState();

  useEffect(() => {
    console.log("muestra final"+ MarcaLista.length )
    console.log("muestrica"+ MarcaLista )
  }, [MarcaLista])



  return (
    <>

    {/*<SearchFormBrands MarcasProductos={MarcasProductos} />*/}
    <div className={ MarcaLista?.length > 23 ? 'filter__container__Main__Arcodion': 'filter__container__Main'}>
      <ul style={{paddingLeft:'0rem'}}>
        {
          MarcaLista?.map((item, index) => ( 
          <li key={`${"Marcascasagri"}${Enlace}-${index}`} style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}} >
            <div>
              <Link 
              className='subtitle__Filter'
              to={`${"/marcas/"}${item.Marca}`} 
              style={{textDecoration:'none'}}
              state={[Enlace]}
              
              >
                {item.Marca}
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


