import React, { useState, useEffect, useRef  } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
//componets

//Estilos
import './FiltersBar.css';
// Listas de datos 
import { links } from "../common/Navbar/Mylinks";
//icons
import { BsDashLg, BsPlusLg } from "react-icons/bs";

export default function CategoryAccordion() {

    const [aux, setAux] = useState("");
    const [click, setClick] = useState(false);
    //const [clickMaquinaria, setClickMaquinaria] = useState(false);
    // const [clickSaludA, setClickSaludA] = useState(false);
    //const [clickFerreteria, setClickFerreteria] = useState(false);
    //const [clickSaludPublica, setClickSaludPublica] = useState(false);

    const handleClick = (props) => {
            setClick(!click);
            setAux(props);
            console.log(props);
      }


  return (
    <div className='filter__container__Main'>
        <Accordion>
        {links.map((link, index) => ( 
            <>
                {/*Agroindustrial*/}
                    <AccordionSummary
                        onClick={() => { handleClick(link.name)}}
                        expandIcon={ click && aux == link.name ? <BsDashLg />:<BsPlusLg />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        key={`${'FiltroCategoria'}-${index}`}
                        >
                        <div className='subtitle__Filter AccordionSummary' >{link.name}</div>
                    </AccordionSummary>
                    <Accordion>
                        {link.submenu ? (
                            <>
                                {link.sublinks.map((mysublinks, index) => (
                                    <AccordionDetails
                                     className='AccordionDetails'
                                     key={`${'FiltroSubCategoria'}-${index}`}
                                     >
                                        <Link className='subCategorie__Filter' to={`/Category/${mysublinks.Head}`} >{mysublinks.Head}</Link>
                                    </AccordionDetails>
                                ))}
                            </>
                        ):null}
                    </Accordion>
            </>
        ))}
        </Accordion>

        <Accordion>
        <AccordionSummary
                        onClick={() => { setClick(!click)}}
                        expandIcon={ click ? <BsDashLg />:<BsPlusLg />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
        {links.map((link, index) => ( 
            <>
                {/*Agroindustrial*/}
                    
                        <div className='subtitle__Filter AccordionSummary' >{link.name}</div>
                    
            </>
        ))}
        </AccordionSummary>
        </Accordion>
    </div>
  );
}