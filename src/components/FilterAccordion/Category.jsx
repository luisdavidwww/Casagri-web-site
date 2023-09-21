import React from 'react';
import { Link } from 'react-router-dom';

import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import Divider from '@mui/material/Divider';


export default function Category( {Accordion, AccordionSummary, AccordionDetails, BsChevronDown} ) {

  //let rediret = Enlace.replace(/\s+/g, '');

  return (
    
    <div className='filter__container__Main'>
      <ul style={{paddingLeft:'0rem'}}>
          
          <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}} >
            <div 
            className='subtitle__Filter'
            to={`/Category/${'Agroindustrial'}`}
            >
              Agroindustrial
            </div>
            <Accordion >
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <div className='title__Filter' >Agroindustrial</div><BsChevronDown className='iconOptionFilters'/>
              </AccordionSummary>
              <AccordionDetails>
                <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <div className='title__Filter' >Agroquìmicos</div><BsChevronDown className='iconOptionFilters'/>
                </AccordionSummary>
                <AccordionDetails>
                <ul style={{paddingLeft:'0rem'}}>
                  <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
                    <Link 
                    className='subtitle__Filter'
                    to={`/Category/${'Maquinarias'}`}
                    >
                      Insecticidas
                    </Link>
                    <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                  </li>
                  <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
                    <Link 
                    className='subtitle__Filter'
                    to={`/Category/${'Maquinarias'}`}
                    >
                      Herbicidas
                    </Link>
                    <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                  </li>
                  <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
                    <Link 
                    className='subtitle__Filter'
                    to={`/Category/${'Maquinarias'}`}
                    >
                      Fungicidas
                    </Link>
                    <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                  </li>
                  <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
                    <Link 
                    className='subtitle__Filter'
                    to={`/Category/${'Maquinarias'}`}
                    >
                      Otros
                    </Link>
                    <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                  </li>
                </ul>
                </AccordionDetails>
              </Accordion>
              </AccordionDetails>
            </Accordion>
            <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
          </li>

          <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
            <Link 
            className='subtitle__Filter'
            to={`/Category/${'Maquinarias'}`}
            >
              Maquinarias
            </Link>
            <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
          </li>
          <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
            <Link 
            className='subtitle__Filter'
            to={`/Category/${'Salud Animal'}`}
            >
              Salud Animal
            </Link>
            <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/>  
          </li>
          <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
            <Link 
            className='subtitle__Filter'
            to={`/Category/${'Ferretería'}`}
            >
              Ferretería
            </Link>
            <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/>  
          </li>
          <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
            <Link 
            className='subtitle__Filter'
            to={`/Category/${'Salud Pública'}`}
            >
              Salud Pública
            </Link>
            <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/>  
          </li>
      </ul>
    </div>
  );
}


