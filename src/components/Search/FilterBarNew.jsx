import React, { useState, useEffect, useRef  } from 'react';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AOS  from 'aos';
// Listas de datos 
import { links } from "../common/Navbar/Mylinks";
import { Ordenar } from "./OrdenarLista";
import { op } from "../common/Navbar/Options";
// Estilos
import 'aos/dist/aos.css'; 
//componentes
//icons 
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import {  BsChevronDown, 
          BsChevronRight,
          BsChevronUp,
          BsSearch,
          BsHouseDoorFill
       } from "react-icons/bs";

const FilterBarNew = () => {

    //Variables de entradas
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
  const [button, setButton] = useState(true);

  //Acción Click  
  const handleClick = () => setClick(!click);
  const actionSearch = () => SetclickSearch(!clickSearch);
  const actionSearchFalse = () => SetclickSearch(false);



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

  //Constante Auxiliar
  const refOne = useRef(undefined);

  const handleclickOutside = (e) => {
    if (!refOne?.current?.contains(e.target)){
      setDropdown(false);
      setErclick(false);
      setHeading("");
    } else{
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleclickOutside, true);
    }, []);

  return (
    <>
            <div className=''>


              {/* Desplegable De Categorias */}
              { Ordenar.map((item, index) => (
                <div key={`${'FilterSidebarNew'}-${'Ordenar'}-${index}`}>
                    <h1 className='movilNav__container-line-title'>
                        {item.name} 
                        { heading == item.name && line == item.name ? 
                        (  <BsChevronDown style={{marginLeft:'10px', paddingTop:'2px', display:'inline-flex'}}/>  )
                            : 
                        (  <BsChevronUp style={{marginLeft:'10px', paddingTop:'2px', display:'inline-flex'}}/>  )
                        }
                    </h1>  
                        { item.subList ? 
                        (
                            <div>
                                { item.subFilter.map((subItem, index) => (
                                    <div 
                                        key={`${'FilterSidebarNew'}-${'OrdenarItem'}-${index}`}
                                        className='movilNav-SubLines-title'> {subItem.title} </div>
                                ))}
                            </div>
                            
                        ):null
                        }
                   
                    
                </div>
                
                ))}
              

            
              {links.map((link, index) => (
              <div key={`${'FilterSidebarNew'}-${'category-movil'}-${index}`}>
                  {/* Condicional para hover de las líneas */}
                  { heading == link.name && line == link.name ? 
                    (
                      <a className='movilNav__container-line-hover'
                          onClick={() => { dropdownBoxMovil(link.name); }}
                        >
                          {/* Lineas de Producto en el Navbar hover*/}
                              <div>
                                    <h1 className='movilNav__container-line-title'>
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
                      <a className='movilNav__container-line'
                          onClick={() => { dropdownBoxMovil(link.name); }}
                          style={{textDecoration:'none'}}
                        >
                          {/* Lineas de Producto en el Navbar*/}
                              <div>
                                    <h1 className='movilNav__container-line-title'>
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
                          <div className='movilNav-drop'>
                            <motion.div
                            initial={{x: 50, y: 0, scale: 1, rotate: 0,  opacity:0 }}      
                            animate={{x: 0, y: 0, scale: 1, rotate: 0, transition:{duration:"0.40"}, opacity:1 }}  
                            >
                              {link.sublinks.map((mysublinks, index) => {
                                  return (
                                    <div key={`${'FilterSidebarNew'}-${'sub-category-movil'}-${index}`}>
                                      <Link
                                        className='movilNav-SubLines'
                                        to={`/Category/${mysublinks.Head}`}
                                        style={{textDecoration:'none'}}
                                        onClick={() => { handleClick()}}
                                      >
                                        <div className='movilNav-SubLines-title'>
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
    </>
  )
}

export default FilterBarNew