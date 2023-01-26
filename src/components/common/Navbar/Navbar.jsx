import React, { useState, useEffect, useRef  } from 'react';
import { motion, AnimatePresence } from "framer-motion"


//Estilos
import './Navbar.css'
// Listas de datos 
import { links } from "./Mylinks";
import { op } from "./Options";

// transiciones diseño
import AOS from 'aos';
import 'aos/dist/aos.css';

//componentes
import Top_header from '../Top_Header/Top_header';


//icons
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";



const Navbar = () => {

  const [heading, setHeading] = useState("");
  const [hover, setHover] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdownMovil, setDropdownMovil] = useState(false);
  const [click, setClick] = useState(false);
  const [erclick, setErclick] = useState(false);
  const [line, setline] = useState("");
  const [button, setButton] = useState(true);

  //Acción Click
  const handleClick = () => setClick(!click);

  //cursor activo sobre el elemento Navbar
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      setHeading("");
    } else {
      setDropdown(true);
    }
    console.log("aqui");
  };
  //cursor desactivado al salir del elemento Navbar
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      setHeading("");
    } else {
      setDropdown(false);
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
  const SubLinesOut = () => setHeading("");

  
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

  useEffect(() => { 
    AOS.init({duration:100});
    },[]);
  useEffect(() => {
    showButton();
    }, []);
  useEffect(() => {
    document.addEventListener("click", handleclickOutside, true);
    }, []);


  return (
    <>

        {/* Navbar Superior*/}
        <Top_header/>

       {/* Icon del NavBar */}
       <div className='icon-container'>
            <div className='icon-container-main'>
                <div className=''>
                  <div className='icon-container-main-def' onClick={() => { handleClick(); SubLinesOut();}}>
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

       

      <nav className={click ? 'navbar active' : 'navbar'} ref={refOne}>
        <div className='navigation__container--navs'>

          {/*------------------------------Navbar Escritorio------------------------------------*/}
          <section id="desktopNav__container">
            <div className='desktopNav__lower'>

              {/* Recorrido de la lista: LINEAS DE PRODUCTOS CASAGRI*/}
              {links.map((link) => (
              <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                key={link.id}
                >

                  {/* Lineas de Producto en el Navbar*/}
                  <div className={heading == link.name && hover ? 'desktopNav__container-line-hover' : 'desktopNav__container-line' }>
                    <h1
                        className={ heading == link.name && hover ? 'desktopNav__container-line-title-hover' : 'desktopNav__container-line-title' }
                        onMouseOver={() => {
                          setHeading(link.name);
                          setHover(true);
                        }}
                    >
                        {link.name}
                    </h1>
                  </div>

                  {/* Sublineas de Productos */}

                  <AnimatePresence>

                  {dropdown ? (
                    
                    <div  className='desktopNav__container--navbar'>

                      {/* Validación del nombre la Línea y si posee sublineas activas */}
                        {heading == link.name && link.submenu && (

                            <motion.div                  
                            initial={{opacity:0,y:"-100%",}}
                            animate={{opacity:1,y:"0%", transition:{duration:"0.50"}}}
                            exit={{opacity:0,y:"-50%",transition:{duration:"0.35"}}}
                            >

                              <div 
                                onMouseLeave={() => {
                                  setHover(false);
                                }}
                                className='desktopNav__container--active'
                                
                                
                              >
                                <div className="desktopNav__container-Drowbox-container">
                                  <div 
                                  className="desktopNav__container-Drowbox-"
                                  >


                                    {/* Recorrido de las sublineas */}
                                      {link.sublinks.map((mysublinks) => (
                                          <div className="desktopNav__SubLines" key={link.id}>
                                            <div className="desktopNav__SubLines-Title">
                                              <div>
                                                <a
                                                    href=''
                                                    className=""
                                                    style={{ textDecoration: 'none', }}
                                                  >
                                                  {mysublinks.Head}     
                                                </a>
                                              </div>
                                            </div>
                                            

                                          {/* Validación si las sublineas tienen categorias activas */}
                                            { mysublinks.subitem  ?
                                              (
                                                <div className="desktopNav__Container-Lines-subLines">
                                                  {mysublinks.sublink.map((slink) => (   
                                                      <li className="desktopNav__Container-Lines-subLines-List" key={link.id}>
                                                          <a
                                                            href={slink.link}
                                                            className=""
                                                            style={{  fontFamily:'Gotham', }}
                                                          >
                                                            {slink.name}
                                                          </a>
                                                      </li>            
                                                    ))}
                                                  </div>
                                              ):null
                                            }


                                          </div>
                                        ))}



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
          <section id="movilNav__container">
            
            {/*Opciones de politica de la empresa*/}
            <div className='movilNav-option-main'>
              {op.map((option) => (
                    <div className='movilNav-option-container' key={op.id}>
                      <a href={option.href}  
                      className='movilNav-option-text' 
                      style={{ textDecoration: 'none', textAlign:'center'}}
                      onClick={() => { setClick(false) }}
                      >
                        {option.option} 
                      </a>
                    </div>
              ))}
            </div>

            <div className='movilNav__lower'>
              {/* Recorrido de la lista: LINEAS DE PRODUCTOS CASAGRI*/}

              <div className='movilNav__container-line-top'></div>
              
              {links.map((link) => (
              <div key={link.id} >
                  {/* Condicional para hover de las líneas */}
                  { heading == link.name && line == link.name ? 
                    (
                      <a href='#' className='movilNav__container-line-hover'
                          onClick={() => { dropdownBoxMovil(link.name); }}
                        >
                          {/* Lineas de Producto en el Navbar hover*/}
                              <div>
                                    <h1 className='movilNav__container-line-title'>
                                        {link.name} 
                                          { heading == link.name && line == link.name ? 
                                          (  <FaChevronDown style={{marginLeft:'5px', paddingBottom:'3px', display:'inline-flex'}}/>  )
                                          : 
                                          (  <FaChevronUp style={{marginLeft:'5px', paddingBottom:'3px', display:'inline-flex'}}/>  )
                                          }
                                    </h1>             
                                </div> 
                      </a>
                    )
                    : 
                    (   
                      <a href='#' className='movilNav__container-line'
                          onClick={() => { dropdownBoxMovil(link.name); }}
                        >
                          {/* Lineas de Producto en el Navbar*/}
                              <div>
                                    <h1 className='movilNav__container-line-title'>
                                        {link.name} 
                                          { heading == link.name && line == link.name ? 
                                          (  <FaChevronDown style={{marginLeft:'5px', paddingBottom:'3px', display:'inline-flex'}}/> )
                                          : 
                                          (  <FaChevronUp style={{marginLeft:'5px', paddingBottom:'3px', display:'inline-flex'}}/>  )
                                          }
                                    </h1>             
                                </div>  
                      </a>
                    )
                  }
                      {/* SubLíneas de Productos*/}
                  
                        {dropdownMovil && link.submenu && heading == link.name && erclick && (
                          <div /*data-aos="fade-left"*/ className='movilNav-drop'>
                                {link.sublinks.map((mysublinks) => {
                                  return (
                                    <div key={link.id}>
                                      <a
                                        className='movilNav-SubLines'
                                        href='#'
                                      >
                                        <div className='movilNav-SubLines-title'>
                                            {mysublinks.Head}
                                        </div>
                                      </a>
                                    </div>
                                  );
                                })}
                              </div> 
                          )} 
                </div>
              ))}
            </div>
          </section>

        </div>
      </nav>
    </>
  );
}

export default Navbar;