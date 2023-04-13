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
import SearchFormBrands from './SearchFormBrands';
import SearchFormComposition from './SearchFormComposition';
import FilterFilter from './FilterTilter';
import Brands from '../FilterAccordion/Brands';

//Estilos
import './FiltersBar.css'

//icons clickCategory
import {  BsFilter, BsDashLg, BsPlusLg } from "react-icons/bs";

export default function FiltersBar({Marcas, Consulta}) {

    const [clickClasificacion, setClickClasificacion] = useState(false);
    const [clickPrice, setClickPrice] = useState(false);
    const [clickCategory, setClickCategory] = useState(false);
    const [clickBrands, setClickBrands] = useState(false);
    const [clickComposition, setClickComposition] = useState(false);
    const [clickRanking, setClickRanking] = useState(false);

    useEffect(() => {
      //console.log("Las marcas son:"+ JSON.stringify(brands));
    },[])


  return (
    <>
      {/* Filtro Desktop */}
      <div className='filter__container__Main'>

        {/*Filtro Titulo*/}
        <FilterFilter/>

        {/*Clasificacion*/}
        <Accordion>
            <AccordionSummary
                onClick={() => { setClickClasificacion(!clickClasificacion)}}
                expandIcon={clickClasificacion ? <BsDashLg />:<BsPlusLg />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <div className='title__Filter' >Ordenar</div>
            </AccordionSummary>
            <AccordionDetails>
              <CheckboxList component={"Clasificacion"}/>
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
                <div className='title__Filter' >Categorías</div>
            </AccordionSummary>
            <CategoryAccordion/>
        </Accordion>

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
              <SearchFormBrands/>
              <Brands MarcasProductos={Marcas} Enlace={Consulta} />
              {/*<CheckboxList component={"Brand"}/>*/}
            </AccordionDetails>
        </Accordion>

        {/*Composición*/}
        <Accordion>
            <AccordionSummary
                onClick={() => { setClickComposition(!clickComposition)}}
                expandIcon={clickComposition ? <BsDashLg />:<BsPlusLg />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <div className='title__Filter' >Composición</div>
            </AccordionSummary>
            <AccordionDetails>
              <SearchFormComposition/>
            </AccordionDetails>
            
            <AccordionDetails>
              <div className='subtitle__Filter' >A</div>
            </AccordionDetails>
            <AccordionDetails>
              <div className='subtitle__Filter' >B</div>
            </AccordionDetails>
            <AccordionDetails>
              <div className='subtitle__Filter' >C</div>
            </AccordionDetails>
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
    </>
    
  );
}