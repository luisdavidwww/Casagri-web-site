import React, { useState, useEffect, useRef  } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


//Estilos
import './FiltersBar.css';
import './CategoryAccordion.css';

// Listas de datos 
import { links } from "../common/Navbar/Mylinks";
//icons
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import {  BsChevronDown, 
          BsChevronRight,
          BsChevronUp,
          BsSearch,
          BsHouseDoorFill
       } from "react-icons/bs";



export default function CategoryAccordion() {

    const [heading, setHeading] = useState("");
    const [subheading, setSubHeading] = useState("");
    const [hover, setHover] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [subdropdown, setSubDropdown] = useState(false);
    const [dropdownMovil, setDropdownMovil] = useState(false);
    const [click, setClick] = useState(false);
    const [erclick, setErclick] = useState(false);
    const [clickSearch, SetclickSearch] = useState(false);
    const [line, setline] = useState("");

//Metodo para mostrar y ocultar Pestaña de SubLineas Movil
  const dropdownBoxMovil = (props) => {
    
    if (dropdownMovil && props == line ) {
      setDropdownMovil(false);
      setErclick(false);
      setline("");
      setHeading(props);
    } 

    if (dropdownMovil && props != line ) {
      setDropdownMovil(false);
      setErclick(false);
      setDropdownMovil(true);
      setErclick(true);
      setline(props);
      setHeading(props);
    } 
    
    if (!dropdownMovil) {
      setDropdownMovil(true);
      setErclick(true);
      setline(props);
      setHeading(props);
    }
  };

  //Acción Click  
  const handleClick = () => setClick(!click);




  return (
    
    <div className='filter__container__Main'>
        {links.map((link, index) => (
              <div key={`${"Filter"}-${'category-movil'}-${index}`}>
                  {/* Condicional para hover de las líneas */}
                  { heading == link.name && line == link.name ? 
                    (
                      <a className='Container__line__hover'
                          onClick={() => { dropdownBoxMovil(link.name); }}
                        >
                          {/* Lineas de Producto en el Navbar hover*/}
                              <div>
                                    <h1 className='Container__line__hover__title'>
                                        {link.name} 
                                          { heading == link.name && line == link.name ? 
                                          (  <BsChevronDown style={{marginLeft:'10px', paddingTop:'2px', display:'inline-flex'}}/>  )
                                          : 
                                          (  <BsChevronUp style={{marginLeft:'10px', paddingTop:'2px', display:'inline-flex'}}/>  )
                                          }
                                    </h1>             
                                </div> 
                      </a>
                    )
                    : 
                    (   
                      <a className='Container__line'
                          onClick={() => { dropdownBoxMovil(link.name); }}
                          style={{textDecoration:'none'}}
                        >
                          {/* Lineas de Producto en el Navbar*/}
                              <div>
                                    <h1 className='Container__line__title'>
                                        {link.name} 
                                          { heading == link.name && line == link.name ? 
                                          (  <BsChevronDown style={{marginLeft:'10px', paddingTop:'2px', display:'inline-flex'}}/> )
                                          : 
                                          (  <BsChevronUp style={{marginLeft:'10px', paddingTop:'2px', display:'inline-flex'}}/>  )
                                          }
                                    </h1>             
                                </div>  
                      </a>
                    )
                  }
                      {/* SubLíneas de Productos*/}
                      <AnimatePresence>
                      {dropdownMovil && link.submenu && heading == link.name && erclick && (
                          <div className='container__drop'>
                            <motion.div
                            initial={{x: 50, y: 0, scale: 1, rotate: 0,  opacity:0 }}      
                            animate={{x: 0, y: 0, scale: 1, rotate: 0, transition:{duration:"0.40"}, opacity:1 }}  
                            >
                              {link.sublinks.map((mysublinks, index) => {
                                  return (
                                    <div key={`${"subLink"}-${'sub-category-movil'}-${index}`}>
                                      <Link
                                        className='SubLines'
                                        to={`/Category/${mysublinks.Head}`}
                                        style={{textDecoration:'none'}}
                                        onClick={() => { handleClick()}}
                                      >
                                        <div className='SubLines__title'>
                                            {mysublinks.Head}
                                        </div>
                                      </Link>
                                    </div>
                                  );
                                })}

                            </motion.div>                              
                          </div> 
                        )} 
                      </AnimatePresence>
                        
              </div>
              ))}
    </div>
  );
}


 function CategoryAccordionOld() {

    const [aux, setAux] = useState("");
    const [click, setClick] = useState(false);

    const [clickAgro, setClickAgro] = useState(false);
    const [clickMaquinaria, setClickMaquinaria] = useState(false);
    const [clickSaludA, setClickSaludA] = useState(false);
    const [clickFerreteria, setClickFerreteria] = useState(false);
    const [clickSaludPublica, setClickSaludPublica] = useState(false);

    const handleClick = (props) => {
            setClick(!click);
            setAux(props);
            console.log(props);
      }


  return (
    
    <div className='filter__container__Main__Arcodion'>
        {/*Agroindustrial*/}
        <Accordion>
                <AccordionSummary
                    onClick={() => { setClickAgro(!clickAgro)}}
                    expandIcon={clickAgro ? <BsDashLg />:<BsPlusLg />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <div className='subtitle__Filter AccordionSummary' >Agroindustrial</div>
                </AccordionSummary>
                <Accordion>
                    <AccordionDetails className='AccordionDetails'>
                        <Link className='subCategorie__Filter' to={`/Category/Agroquímicos`} >Agroquímicos</Link>
                        <Link className='subCategorie__Filter' >Semillas</Link>
                        <Link className='subCategorie__Filter' >Fertilizantes</Link>
                        <Link className='subCategorie__Filter' >Sacos, Cabuyas y Cordeles</Link>
                        <Link className='subCategorie__Filter' >Cercas de alambres y eléctricas</Link>
                    </AccordionDetails>
                </Accordion>
            </Accordion>
            {/*Maquinarias*/}
            <Accordion>
                <AccordionSummary
                    onClick={() => { setClickMaquinaria(!clickMaquinaria)}}
                    expandIcon={clickMaquinaria ? <BsDashLg />:<BsPlusLg />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <div className='subtitle__Filter AccordionSummary' >Maquinarias</div>
                </AccordionSummary>
                <Accordion>
                    <AccordionDetails className='AccordionDetails'>
                        <div className='subCategorie__Filter' >Equipos Agrícolas</div>
                        <div className='subCategorie__Filter' >Bombas de Agua</div>
                        <div className='subCategorie__Filter' >Generadores</div>
                        <div className='subCategorie__Filter' >Motores</div>

                    </AccordionDetails>
                </Accordion>
            </Accordion>
            {/*Salud Animal*/}
            <Accordion>
                <AccordionSummary
                    onClick={() => { setClickSaludA(!clickSaludA)}}
                    expandIcon={clickSaludA ? <BsDashLg />:<BsPlusLg />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <div className='subtitle__Filter AccordionSummary' >Salud Animal</div>
                </AccordionSummary>
                <Accordion>
                    <AccordionDetails className='AccordionDetails'>
                        <div className='subCategorie__Filter' >Medicina Veterinaria</div>
                        <div className='subCategorie__Filter' >Instrumental Veterinario</div>
                        <div className='subCategorie__Filter' >Manejo e Identificadore</div>
                    </AccordionDetails>
                </Accordion>
            </Accordion>
            {/*Ferreteria*/}
            <Accordion>
                <AccordionSummary
                    onClick={() => { setClickFerreteria(!clickFerreteria)}}
                    expandIcon={clickFerreteria ? <BsDashLg />:<BsPlusLg />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <div className='subtitle__Filter AccordionSummary' >Ferretería</div>
                </AccordionSummary>
                <Accordion>
                    <AccordionDetails className='AccordionDetails'>
                        <div className='subCategorie__Filter' >Ferretería Agrícola</div>
                        <div className='subCategorie__Filter' >Electricidad</div>
                        <div className='subCategorie__Filter' >Otros Productos</div>
                    </AccordionDetails>
                </Accordion>
            </Accordion>
            {/*Salud Publica*/}
            <Accordion>
                <AccordionSummary
                    onClick={() => { setClickSaludPublica(!clickSaludPublica)}}
                    expandIcon={clickSaludPublica ? <BsDashLg />:<BsPlusLg />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <div className='subtitle__Filter AccordionSummary' >Salud Pública</div>
                </AccordionSummary>
                <Accordion>
                    <AccordionDetails className='AccordionDetails'>
                        <div className='subCategorie__Filter' >Control de Plaga</div>
                        <div className='subCategorie__Filter' >Desinfectante</div>
                    </AccordionDetails>
                </Accordion>
            </Accordion>
    </div>
  );
}