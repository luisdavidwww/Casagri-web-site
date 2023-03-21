import React, { useState, useEffect, useRef  } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

//componets
import CheckboxList from './CheckboxList';
import CategoryAccordion from './CategoryAccordion';
import FormTextFields from './FormNumber';
import StarRanking from '../Cards/starRanking';

//Estilos
import './FiltersBar.css'

//icons clickCategory
import {  BsFilter, BsDashLg, BsPlusLg } from "react-icons/bs";

export default function SimpleAccordion() {

    const [clickPrice, setClickPrice] = useState(false);
    const [clickCategory, setClickCategory] = useState(false);
    const [clickBrands, setClickBrands] = useState(false);
    const [clickRanking, setClickRanking] = useState(false);

    
  return (
    <div className='filter__container__Main'>

      {/*Filtros*/}
      <div className='containerFilter'>
          <BsFilter/>
          <div className='title__Filter-Main'>Filtros</div>
      </div>

      {/*Precio*/}
      <Accordion >
          <AccordionSummary
            onClick={() => { setClickPrice(!clickPrice)}}
            expandIcon={clickPrice ? <BsDashLg />:<BsPlusLg />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
              <div className='title__Filter' >Precio</div>
          </AccordionSummary>
          <AccordionDetails>
              <FormTextFields/>
          </AccordionDetails>
      </Accordion>

      {/*Marca*/}
      <Accordion>
          <AccordionSummary
            onClick={() => { setClickBrands(!clickBrands)}}
            expandIcon={clickBrands ? <BsDashLg />:<BsPlusLg />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <div className='title__Filter' >Marcas</div>
          </AccordionSummary>
          <AccordionDetails>
            <CheckboxList/>
          </AccordionDetails>
      </Accordion>
        
      {/*Categorias*/}
      <Accordion>
          <AccordionSummary
              onClick={() => { setClickCategory(!clickCategory)}}
              expandIcon={clickCategory ? <BsDashLg />:<BsPlusLg />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              >
              <div className='title__Filter' >Categorias</div>
          </AccordionSummary>
          <CategoryAccordion/>
      </Accordion>

      {/*Ranking*/}
      <Accordion>
          <AccordionSummary
              onClick={() => { setClickRanking(!clickRanking)}}
              expandIcon={clickRanking ? <BsDashLg />:<BsPlusLg />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              >
              <div className='title__Filter' >Ranking</div>
          </AccordionSummary>
          <AccordionDetails>
              <StarRanking component={"Accordion"}/>
          </AccordionDetails>
      </Accordion>
    </div>
  );
}