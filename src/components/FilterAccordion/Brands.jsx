import React, { useState, useEffect, useRef  } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


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



export default function CategoryAccordion({Brands}) {

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
    
    <div className='filter__container__Main__Arcodion'>
        
    </div>
  );
}


