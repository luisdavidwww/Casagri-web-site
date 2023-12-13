import React from 'react';
import { Link } from 'react-router-dom';

import Divider from '@mui/material/Divider';


export default function Category( {Accordion, AccordionSummary, AccordionDetails, BsChevronDown} ) {


  return (
    <div className='filter__container__Main'>
      <ul style={{paddingLeft:'0rem'}}>

          {/* Agroindustrial */}
          <li style={{textDecoration:'none', paddingLeft:'0rem', paddingRight:'1.7rem', paddingTop:'0rem'}} >
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header"  >
                  <div className='title__Filter' >Agroindustrial</div><BsChevronDown className='iconOptionFilters'/>
                </AccordionSummary>
                <AccordionDetails >
                  {/* Agroquímicos */}
                  <Accordion >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header"> 
                      <div className='title__Filter' >Agroquìmicos</div><BsChevronDown className='iconOptionFilters'/>
                    </AccordionSummary>
                    <AccordionDetails >
                    <ul style={{paddingLeft:'0rem'}}>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'0rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Insecticidas'}`}
                        >
                          Insecticidas
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'0rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Herbicidas'}`}
                        >
                          Herbicidas
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Fungicidas'}`}
                        >
                          Fungicidas
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Otros'}`}
                        >
                          Otros
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                    </ul>
                    </AccordionDetails>
                  </Accordion>
                  {/* Semillas */}
                  <Accordion >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                      <div className='title__Filter' >Semillas</div><BsChevronDown className='iconOptionFilters'/>
                    </AccordionSummary>
                    <AccordionDetails>
                    <ul style={{paddingLeft:'0rem'}}>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'0rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Maíz'}`}
                        >
                          Maíz
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'0rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Pasto'}`}
                        >
                          Pasto
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Hortalizas'}`}
                        >
                          Hortalizas
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Bandejas de Germinación'}`}
                        >
                          Bandejas de Germinación
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Bolsas de Vivero'}`}
                        >
                          Bolsas de Vivero
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                    </ul>
                    </AccordionDetails>
                  </Accordion>
                  {/* Fertilizantes */}
                  <Accordion >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Link className='title__Filter' to={`/Category/${'Fertilizantes'}`}>
                        Fertilizantes
                      </Link>
                    </AccordionSummary>
                  </Accordion>
                  {/* Sacos, Cabullas y Cordeles */}
                  <Accordion >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Link className='title__Filter' to={`/Category/${'Sacos, Cabullas y Cordeles'}`}>
                        Sacos, Cabullas y Cordeles
                      </Link>
                    </AccordionSummary>
                  </Accordion>
                  {/* Cercas de Alambre y Eléctricas */}
                  <Accordion >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Link className='title__Filter' to={`/Category/${'Cercas de Alambre y Eléctricas'}`}>
                      Cercas de Alambre y Eléctricas
                      </Link>
                    </AccordionSummary>
                  </Accordion>
                </AccordionDetails>
              </Accordion>
              <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
          </li>

          {/* Maquinarias */}
          <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{}}>
                  <div className='title__Filter' > Maquinarias </div><BsChevronDown className='iconOptionFilters'/>
                </AccordionSummary>
                <AccordionDetails>
                  {/* Maquinaria Agrícola */}
                  <Accordion >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                      <div className='title__Filter' >Maquinaria Agrícola</div><BsChevronDown className='iconOptionFilters'/>
                    </AccordionSummary>
                    <AccordionDetails>
                    <ul style={{paddingLeft:'0rem'}}>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'0rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Motocultores'}`}
                        >
                          Motocultores
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'0rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Siembra'}`}
                        >
                          Siembra
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Recolección'}`}
                        >
                          Recolección
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Abono y Fertilización'}`}
                        >
                          Abono y Fertilización
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Procesamiento de Materiales'}`}
                        >
                          Procesamiento de Materiales
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Procesamiento de Materiales'}`}
                        >
                          Procesamiento de Materiales
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Fumigación'}`}
                        >
                          Fumigación
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                    </ul>
                    </AccordionDetails>
                  </Accordion>
                  {/* Desmalezadoras */}
                  <Accordion >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Link className='title__Filter' to={`/Category/${'Desmalezadoras'}`}>
                      Desmalezadoras
                      </Link>
                    </AccordionSummary>
                  </Accordion>
                  {/* Motosierras */}
                  <Accordion >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Link className='title__Filter' to={`/Category/${'Motosierras'}`}>
                      Motosierras
                      </Link>
                    </AccordionSummary>
                  </Accordion>
                  {/* Bombas de Agua */}
                  <Accordion >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                      <div className='title__Filter' >Bombas de Agua</div><BsChevronDown className='iconOptionFilters'/>
                    </AccordionSummary>
                    <AccordionDetails>
                    <ul style={{paddingLeft:'0rem'}}>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'0rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Bombas de Agua Domésticas'}`}
                        >
                          Bombas de Agua Domésticas
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'0rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Bombas de Agua Portátiles'}`}
                        >
                          Bombas de Agua Portátiles
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                    </ul>
                    </AccordionDetails>
                  </Accordion>
                  {/* Motores */}
                  <Accordion >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Link className='title__Filter' to={`/Category/${'Motores'}`}>
                        Motores
                      </Link>
                    </AccordionSummary>
                  </Accordion>
                  {/* Generadores */}
                  <Accordion >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Link className='title__Filter' to={`/Category/${'Generadores'}`}>
                      Generadores
                      </Link>
                    </AccordionSummary>
                  </Accordion>
                </AccordionDetails>
              </Accordion>
              <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
          </li>

          {/* Salud Animal */}
          <li style={{textDecoration:'none', paddingLeft:'0rem', paddingRight:'1.7rem', paddingTop:'0rem'}} >
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{}}>
                  <div className='title__Filter' >Salud Animal</div><BsChevronDown className='iconOptionFilters'/>
                </AccordionSummary>
                <AccordionDetails>
                  {/* Medicina Veterinaria */}
                  <Accordion >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                      <div className='title__Filter' >Medicina Veterinaria</div><BsChevronDown className='iconOptionFilters'/>
                    </AccordionSummary>
                    <AccordionDetails>
                    <ul style={{paddingLeft:'0rem'}}>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'0rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Analgésicos y Antiinflamatorios'}`}
                        >
                          Analgésicos y Antiinflamatorios
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'0rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Antisepticos y Desinfectantes'}`}
                        >
                          Antisepticos y Desinfectantes
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Antibióticos'}`}
                        >
                          Antibióticos
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Antidiarreicos'}`}
                        >
                          Antidiarreicos
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'0rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Baños, Ectoparasitarios y Matagusanos'}`}
                        >
                          Baños, Ectoparasitarios y Matagusanos
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'0rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Biológicos'}`}
                        >
                          Biológicos
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Desparasitantes'}`}
                        >
                          Desparasitantes
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Hemoparasiticidas'}`}
                        >
                          Hemoparasiticidas
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Hormonales'}`}
                        >
                          Hormonales
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                      <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
                        <Link 
                        className='subtitle__Filter'
                        to={`/Category/${'Vitaminas y Minerales'}`}
                        >
                          Vitaminas y Minerales
                        </Link>
                        <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
                      </li>
                    </ul>
                    </AccordionDetails>
                  </Accordion>
                  {/* Implementos Veterinarios */}
                  <Accordion >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Link className='title__Filter' to={`/Category/${'Implementos Veterinarios'}`}>
                        Implementos Veterinarios
                      </Link>
                    </AccordionSummary>
                  </Accordion>
                  {/* Manejo e Identificadores */}
                  <Accordion >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Link className='title__Filter' to={`/Category/${'Manejo e Identificadores'}`}>
                        Manejo e Identificadores
                      </Link>
                    </AccordionSummary>
                  </Accordion>
                  {/* Mascotas */}
                  <Accordion >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Link className='title__Filter' to={`/Category/${'Mascotas'}`}>
                        Mascotas
                      </Link>
                    </AccordionSummary>
                  </Accordion>
                </AccordionDetails>
              </Accordion>
              <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
          </li>

          {/* Ferretería */}
          <li style={{textDecoration:'none', paddingLeft:'0rem', paddingRight:'1.7rem', paddingTop:'0rem'}} >
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{}}>
                  <div className='title__Filter' >Ferretería</div><BsChevronDown className='iconOptionFilters'/>
                </AccordionSummary>
                <AccordionDetails>
                  {/* Ferretería Agrícola */}
                  <Accordion >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Link className='title__Filter' to={`/Category/${'Ferretería Agrícola'}`}>
                        Ferretería Agrícola
                      </Link>
                    </AccordionSummary>
                  </Accordion>
                  {/* Electricidad */}
                  <Accordion >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Link className='title__Filter' to={`/Category/${'Electricidad'}`}>
                        Electricidad
                      </Link>
                    </AccordionSummary>
                  </Accordion>
                  {/* Otros Productos */}
                  <Accordion >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Link className='title__Filter' to={`/Category/${'Otros Productos'}`}>
                        Otros Productos
                      </Link>
                    </AccordionSummary>
                  </Accordion>
                </AccordionDetails>
              </Accordion>
              <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
          </li>

          {/* Salud Pública */}
          <li style={{textDecoration:'none', paddingLeft:'0rem', paddingRight:'1.7rem', paddingTop:'0rem'}} >
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{}}>
                  <div className='title__Filter' >Salud Pública</div><BsChevronDown className='iconOptionFilters'/>
                </AccordionSummary>
                <AccordionDetails>
                  {/* Ferretería Agrícola */}
                  <Accordion >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Link className='title__Filter' to={`/Category/${'Control De Plagas'}`}>
                        Control De Plagas
                      </Link>
                    </AccordionSummary>
                  </Accordion>
                  {/* Electricidad */}
                  <Accordion >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Link className='title__Filter' to={`/Category/${'Desinfectante'}`}>
                        Desinfectante
                      </Link>
                    </AccordionSummary>
                  </Accordion>
                </AccordionDetails>
              </Accordion>
              <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
          </li>

      </ul>
    </div>
  );
}


