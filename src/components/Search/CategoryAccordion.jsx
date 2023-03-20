import React, { useState, useEffect, useRef  } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

//componets
import CheckboxList from './CheckboxList';

//icons
import { BsDashLg, BsPlusLg } from "react-icons/bs";

export default function CategoryAccordion() {

    const [clickAgro, setClickAgro] = useState(false);
    const [clickMaquinaria, setClickMaquinaria] = useState(false);
    const [clickSaludA, setClickSaludA] = useState(false);
    const [clickFerreteria, setClickFerreteria] = useState(false);
    const [clickSaludPublica, setClickSaludPublica] = useState(false);


  return (
    <div style={{width:"300px"}}>
            {/*ASgroindustrial*/}
            <Accordion>
                <AccordionSummary
                    onClick={() => { setClickAgro(!clickAgro)}}
                    expandIcon={clickAgro ? <BsDashLg />:<BsPlusLg />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Agroindustrial</Typography>
                </AccordionSummary>
                <Accordion>
                    <AccordionDetails>
                        <Typography>Agroquímicos</Typography>
                        <Typography>Semillas</Typography>
                        <Typography>Fertilizantes</Typography>
                        <Typography>Sacos, Cabuyas y Cordeles</Typography>
                        <Typography>Cercas de alambres y eléctricas</Typography>
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
                    <Typography>Maquinarias</Typography>
                </AccordionSummary>
                <Accordion>
                    <AccordionDetails>
                        <Typography>Equipos Agrícolas</Typography>
                        <Typography>Bombas de Agua</Typography>
                        <Typography>Generadores</Typography>
                        <Typography>Motores</Typography>
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
                    <Typography>Salud Animal</Typography>
                </AccordionSummary>
                <Accordion>
                    <AccordionDetails>
                        <Typography>Medicina Veterinaria</Typography>
                        <Typography>Instrumental Veterinario</Typography>
                        <Typography>Manejo e Identificadores</Typography>
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
                    <Typography>Ferretería</Typography>
                </AccordionSummary>
                <Accordion>
                    <AccordionDetails>
                        <Typography>Ferretería Agrícola</Typography>
                        <Typography>Electricidad</Typography>
                        <Typography>Otros Productos</Typography>
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
                    <Typography>Salud Pública</Typography>
                </AccordionSummary>
                <Accordion>
                    <AccordionDetails>
                        <Typography>Control de Plaga</Typography>
                        <Typography>Desinfectante</Typography>
                    </AccordionDetails>
                </Accordion>
            </Accordion>

    </div>
  );
}