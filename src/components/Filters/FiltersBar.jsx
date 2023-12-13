import React, { useState, useEffect, useRef  } from 'react';
import { useParams, Link, useLocation, useNavigate} from "react-router-dom";
import { styled } from '@mui/material/styles';
//import Accordion from '@mui/material/Accordion';
//import AccordionSummary from '@mui/material/AccordionSummary';
//import AccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
//import Accordion from 'react-bootstrap/Accordion';
import Typography from '@mui/material/Typography';


import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';




//componets
import CheckboxList from './CheckboxList';
import CategoryAccordion from './CategoryAccordion';
import FormTextFields from './FormNumber';
import StarRanking from '../Cards/starRanking';
import SearchFormBrands from '../Search/SearchFormBrands';
import SearchFormComposition from '../Search/SearchFormComposition';
import FilterFilter from './FilterTilter';
import Brands from '../FilterAccordion/Brands';
import Clasification from '../FilterAccordion/Clasification';
import Category from '../FilterAccordion/Category';
import ComponentsProducts from '../FilterAccordion/Components';

//Estilos
import './FiltersBar.css'

//icons  
import {  BsFilter, BsDashLg, BsPlusLg, BsChevronDown, BsChevronRight,} from "react-icons/bs";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";

//click

export default function FiltersBar({Marcas, Path, Consulta, Componentes, Search, fetchDataAndHandleResponse }) {


    const [clickClasificacion, setClickClasificacion] = useState(false);
    const [clickPrice, setClickPrice] = useState(false);
    const [clickCategory, setClickCategory] = useState(false);
    const [clickBrands, setClickBrands] = useState(false);
    const [clickComposition, setClickComposition] = useState(false);
    const [clickRanking, setClickRanking] = useState(false);


    const [clickCategoryNew, setClickCategoryNew] = useState(false);


    useEffect(() => {
    },[])





    const Accordion = styled((props) => (
      <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
      border: `0px solid ${theme.palette.divider}`,
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
    }));
    
    const AccordionSummary = styled((props) => (
      <MuiAccordionSummary
        /*expandIcon={<AiOutlineDown sx={{ fontSize: '0.5rem' }} />}*/
        {...props}
      />
    ))(({ theme }) => ({
      backgroundColor:
        theme.palette.mode === 'dark'
          ? 'rgba(255, 255, 255, .05)'
          : 'rgba(255, 255, 255, .05)',
      flexDirection: 'row-reverse',
      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
      },
      '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
      },
    }));
    
    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
      padding: theme.spacing(2),
      borderTop: '1px solid rgba(0, 0, 0, .125)',
    }));




  return (
    <>
      {/* Filtro Desktop */}
      <div className='filter__container__Main'>
        <div className='boxFilters'>

        {/*Filtro Titulo*/}
        <FilterFilter/>
        
        {/*Clasificacion*/}
        <Accordion >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
            <div className='title__Filter' > Ordenar </div> 
            <BsChevronDown className='iconOptionFilters'/>
          </AccordionSummary>
          <AccordionDetails >
            <Clasification
            Path={ Path } 
            Consulta ={ Consulta } 
            fetchDataAndHandleResponse={ fetchDataAndHandleResponse } 
            Search ={ Search }
            />
          </AccordionDetails>
        </Accordion>
        

        {/*Categorias*/}
        <Accordion >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <div className='title__Filter' >Categorias</div> <BsChevronDown className='iconOptionFilters'/>
          </AccordionSummary>
          <AccordionDetails>
            <Category
            //Componentes
            Accordion={ Accordion }
            AccordionSummary={ AccordionSummary }
            AccordionDetails={ AccordionDetails }
            //ICONS
            BsChevronDown={ BsChevronDown }
            />
            {/*<CategoryAccordion/>*/}
          </AccordionDetails>
        </Accordion>

        {/*Precios
        <Accordion>
          <AccordionSummary 
            aria-controls="panel1d-content" 
            id="panel1d-header" 
            //onClick={() => { setClickPrice(!clickPrice)}}
            >
            <div className='title__Filter' >  
                Precio 
            </div> <BsChevronDown className='iconOptionFilters'/>
          </AccordionSummary>
          <AccordionDetails>
            <FormTextFields/>
          </AccordionDetails>
        </Accordion>
      */}

        {/*Marcas*/}
        <Accordion>
          <AccordionSummary 
            aria-controls="panel1d-content" 
            id="panel1d-header" 
            //onClick={() => { setClickPrice(!clickPrice)}}
            /*expandIcon={clickClasificacion ? <AiOutlineDown />:<AiOutlineDown />}*/>
            <div className='title__Filter' >  
                Marcas 
            </div> <BsChevronDown className='iconOptionFilters'/>
          </AccordionSummary>
          <AccordionDetails>
            <SearchFormBrands 
              MarcasProductos={Marcas} 
              Enlace={Consulta}
              SearchCondition ={ Search }
            />
            {/*<Brands MarcasProductos={Marcas} Enlace={Consulta} />*/}
          </AccordionDetails>
        </Accordion>

        {/*Componentes*/}
        {
          Consulta === "Agroquímicos" || Consulta === "Insecticidas" || Consulta === "Herbicidas"
          || Consulta === "Fungicidas" || Consulta === "Otros"  || Consulta === "Salud Animal Veterinaria" || Consulta === "Medicina Veterinaria"
          || Consulta === "Analgésicos y Antiinflamatorios" || Consulta === "Antisepticos y Desinfectantes" || Consulta === "Antibióticos" 
          || Consulta === "Antimastiticos" || Consulta === "Antitimpánico"  || Consulta === "Antidiarreicos"  || Consulta === "Desinfectante"
          || Consulta === "Baños, Ectoparasitarios y Matagusanos" || Consulta === "Biológicos" || Consulta === "Desparasitantes"
          || Consulta === "Endectocidas" || Consulta === "Hemoparasiticidas" || Consulta === "Vitaminas y Suplementos" || Consulta === "Control De Plaga"   ? 
          (
            <Accordion>
              <AccordionSummary 
                aria-controls="panel1d-content" 
                id="panel1d-header" 
                //onClick={() => { setClickPrice(!clickPrice)}}
                /*expandIcon={clickClasificacion ? <AiOutlineDown />:<AiOutlineDown />}*/>
                <div className='title__Filter' >  
                    Componentes 
                </div> <BsChevronDown className='iconOptionFilters'/>
              </AccordionSummary>
              <AccordionDetails>
                <SearchFormComposition ComponentesProductos={Componentes} Enlace={Consulta} />
                {/*<ComponentsProducts ComponentesProductos={Componentes} Enlace={Consulta} />*/}
              </AccordionDetails>
            </Accordion>
          ):null
        }

        </div>
        
      </div>
    </>
    
  );


  const old = () => {
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
  };


}