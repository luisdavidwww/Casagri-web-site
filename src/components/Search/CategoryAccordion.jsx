import React, { useState, useEffect, useRef  } from 'react';
import { Link } from 'react-router-dom';
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