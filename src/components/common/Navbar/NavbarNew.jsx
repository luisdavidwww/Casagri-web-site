import React, { useState, useEffect, useRef  } from 'react';
import { Link, Redirect } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AOS  from 'aos';
// Listas de datos 
import { links } from "./Mylinks";
import { op } from "./Options";
// Estilos
import "./NavbarNew.css"
import 'aos/dist/aos.css'; 
//componentes
import Top_header from '../Top_Header/Top_header';
import  SearchNavbar  from "../../Search/SearchNavbar";
import Dropdown from '../Dropdown/Dropdown';
//icons 
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import {  BsChevronDown, 
          BsChevronRight,
          BsChevronUp,
          BsSearch,
          BsHouseDoorFill
       } from "react-icons/bs";



const Navbar = ({component}) => {

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



  //cursor activo sobre el elemento Navbar
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      setHeading("");
    } else {
      setDropdown(true);
    }
  };

  const onMouseEnterSub = () => {
    if (window.innerWidth < 960) {
      setSubDropdown(false);
      setSubHeading("");
    } else {
      setSubDropdown(true);
    }
  };

  //cursor desactivado al salir del elemento Navbar
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      setSubDropdown(false);
      setHeading("");
    } else {
      setDropdown(false);
      setSubDropdown(false);
      setHeading("");
    }
  };

   //metodo pra que aparezca el boton de opciones superior Responsive
   const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //Metodo para ocultar  
  const SubLinesOut = () => {setHeading("")};

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

  //Metodo para mostrar y ocultar Pestaña de SubLineas Desktop
  const dropdownBoxDesktop = (props) => {
    
    if (dropdown && props == heading ) {
      setDropdown(false);
      setErclick(false);
      setHeading("");
    } 

    if (dropdown && props != heading ) {
      setDropdown(false);
      setErclick(false);
      setDropdown(true);
      setErclick(true);
      setHeading(props);
    } 
    
    if (!dropdown) {
      setDropdown(true);
      setErclick(true);
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


   //constante para parametros de redirección
   const Category = {
    from:"Category",
    message:"Enlace de las categorias",
    timestamp: Date.now(),
   };
   const [subCategory, setSubCategory] = useState("SubCategory");

  useEffect(() => {
    showButton();
    }, []);
  useEffect(() => {
    document.addEventListener("click", handleclickOutside, true);
    }, []);
  useEffect(() => { 
    AOS.init({duration:800});
    },[]);
  


  return (
    <>

        {/* Navbar Superior*/}
        <Top_header/>

       {/* Icon del NavBar */}
       <div className='icon-container'>
            <div className='icon-container-main'>
                <div className=''>
                  <div className='icon-container-main-def' onClick={() => { handleClick(); SubLinesOut(); actionSearchFalse();}}>
                    {click ?
                    (<IoCloseOutline/>)
                    :
                    (<IoMenuOutline/>)
                    }
                    {/*<i className={click ? 'fas fa-times' : 'fas fa-bars'} />*/}
                  </div>
                </div>
            </div>    
       </div>

      <nav className={click ? 'navbar__main active' : 'navbar__main'} ref={refOne}>
                            
        <div className='navigation__container--navs'>

          {/*------------------------------Navbar Escritorio------------------------------------*/}
          <section id="desktopNav__container">
            <div className='desktopNav__lower'>

              {/* Recorrido de la lista: LINEAS DE PRODUCTOS CASAGRI*/}
              {links.map((link, index) => ( 
              <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} key={`${component}-${index}`} >

                  {/* Lineas de Producto en el Navbar */}
                  <div className={heading == link.name && hover ? 'desktopNav__container-line' : 'desktopNav__container-line' }>
                    <a /* href={`/Category/${link.name}`} */ style={{textDecoration:'none'}}>
                      <div
                          className={ 'desktopNav__container-line-title' }
                          onMouseOver={() => {
                            setHeading(link.name);
                            setHover(true);
                          }}
                      >
                          {link.name}
                      </div>
                    </a>    
                  </div>

                  {/* Sublineas de Productos */}
                  

                  <AnimatePresence>

                  {dropdown ? (    
                    <div  className='desktopNav__container--navbar-two'>
                      {/* Validación del nombre la Línea y si posee sublineas activas */}
                      
                        {heading == link.name && link.submenu && (

                           <motion.div                  
                            initial={{x: 0, y: -10, scale: 1, rotate:0,  opacity:0}}      
                            animate={{x: 0, y: 0, scale: 1, rotate: 0, transition:{duration:"0.40"}, opacity:1 }} 
                            exit={{x: 0, y: -10, scale: 1, rotate: 0, transition:{duration:"0.20"},  opacity:0 }}  
                            >
                              <div  onMouseLeave={() => {setHover(false)}} className='desktopNav__container--active-two'>
                                {/* Recorrido de las sublineas */}
                                {link.sublinks.map((mysublinks, index) => (
                                          <div className="desktopNav__SubLines-two" key={`${component}-${'Sub-category'}-${index}`} >
                                            <div onMouseEnter={onMouseEnterSub} >
                                                <div className="desktopNav__Container__titleSubCategory" onMouseOver={() => { setSubHeading(mysublinks.Head); }}  style={{textDecoration:'none'}}>
                                                  <Link className='desktopNav__titleSubCategory' to={`/Category/${mysublinks.Head}`}>
                                                    {mysublinks.Head} { mysublinks.subitem ? (<BsChevronRight className='iconSubLinea'/>):null }
                                                  </Link >
                                                  <div className='aux'>
                                                    {/* Sub Lineas */}
                                                    { subdropdown ? (
                                                      <div  onMouseLeave={() => {setSubDropdown(false)}}   >
                                                        {  subheading == mysublinks.Head && mysublinks.subitem ? 
                                                          (
                                                            <motion.div                  
                                                              initial={{x: 0, y: 0, scale: 1, rotate:0,  opacity:0}}      
                                                              animate={{x: 0, y: 0, scale: 1, rotate: 0, transition:{duration:"0.3"}, opacity:1 }} 
                                                              exit={{x: 0, y: 0, scale: 1, rotate: 0, transition:{duration:"0.20"},  opacity:0 }}  
                                                              >
                                                            <div className="desktopNav__Container-Lines-subLines-two" onMouseLeave={() => {setSubHeading(false);}} >
                                                              {mysublinks.sublink.map((slink, index) => (   
                                                                  <div className='desktopNav__Container-Lines-subLines-tol-two' key={`${component}-${'category-Act'}-${index}`}>
                                                                      <Link className="desktopNav__Container-Lines-subLines-List-two" to={`/Category/${slink.name}`}>
                                                                        {slink.name}
                                                                      </Link>   
                                                                  </div>            
                                                                ))}
                                                            </div>
                                                            </motion.div>
                                                          ):null
                                                        }
                                                      </div> ):null }
                                                  </div>
                                                   
                                                </div>
                                                                                                  
                                            </div>
                                                

                                          </div>
                                        ))}
                                <div className="desktopNav__container-Drowbox-container-two">
                                  <div className="desktopNav__container-Drowbox-two">

                                    



                                  </div>
                                </div>
                              </div>

                              </motion.div>
                            
                        )}
                    </div>
                  ):null}

                  </AnimatePresence>


              </div>

              

              ))}


            </div>
          </section>

          {/*---------------------------------Navbar Movil--------------------------------------*/}

{
  clickSearch ?
  ( /* Sección de busqueda */
    <section>
              {/* Barra de Busqueda */}
              <AnimatePresence>
              <div className='content-Top-search' >
                <motion.div
                  initial={{x: 0, y: 43, scale: 1, rotate: 0,  opacity:1 }}      
                  animate={{x: 0, y: 0, scale: 1, rotate: 0, transition:{duration:"0.40"}, opacity:1 }} 
                  exit={{x: 0, y: -50, scale: 1, rotate: 0,  opacity:1 }}    
                  >
                  <div className='content-top-search-div' >
                      <SearchNavbar clickSearch={ clickSearch }/>
                      <div className='content-top-search-cancel' onClick={ actionSearch } > 
                          <div data-aos="fade-left" className='content-top-search-cancela' > Cancel</div>
                      </div>
                  </div> 
                                
                </motion.div>
              </div>
              </AnimatePresence>
              
    </section>
  ):
  ( /*Sección del Navbar con categorias */
    <section id="movilNav__container">
            
            {/*Opciones de politica de la empresa*/}
            <div className='movilNav-option-main'>
              {op.map((option, index) => (
                    <div className='movilNav-option-container' key={`${component}-${'option'}-${index}`}>
                      <Link 
                      to={option.href}  
                      className='movilNav-option-text' 
                      style={{ textDecoration: 'none', textAlign:'center'}}
                      onClick={() => { setClick(false) }}
                      >
                        {option.option} 
                      </Link>
                    </div>
              ))}
            </div>

                

            <div className='movilNav__lower'>
              {/* Recorrido de la lista: LINEAS DE PRODUCTOS CASAGRI*/}

              <div className='movilNav__container-line-top'></div>

              {/* Barra de Busqueda */}
              <div className='content-Top-search' >
                    <div className='content-top-search-div' onClick={ actionSearch } >
                        <SearchNavbar clickSearch={ clickSearch }  />
                    </div>
                    <div className='content-top-search-icon'onClick={ actionSearch } >
                      <BsSearch className='search__icon' />
                    </div> 
              </div>

              <div className='movilNav__container-line-top'></div>
              
              {/* Desplegable De Categorias */}
              {links.map((link, index) => (
              <div key={`${component}-${'category-movil'}-${index}`}>
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
                                    <div key={`${component}-${'sub-category-movil'}-${index}`}>
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
    </section>
  )
}
          
        </div>
      
      </nav>
    </>
  );
}

export default Navbar;
