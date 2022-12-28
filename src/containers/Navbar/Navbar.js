import React, { useState, useEffect, useRef  } from 'react';
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import Top_header from 'containers/Top_Header/Top_header';
import AOS from 'aos';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'*/
import 'aos/dist/aos.css'; 
import './Navbar.css';



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
    } else {
      setDropdown(true);
    }
  };
  //cursor desactivado al salir del elemento Navbar
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
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
  const refOne = useRef(null);

  const handleclickOutside = (e) => {
    if (!refOne.current.contains(e.target)){
      setDropdown(false);
      console.log("/////////////////////////");
      console.log("cerrar");
      setErclick(false);
      setHeading("");
      console.log(heading);
    } else{
      console.log("////////////////////////");
      console.log("abrir");
      console.log(heading);
    }
  }

  useEffect(() => { 
    AOS.init({duration:500});
    },[]);
  useEffect(() => {
    showButton();
    }, []);
  useEffect(() => {
    document.addEventListener("click", handleclickOutside, true);
    }, []);


  return (
    <>

      <div>
        {/* Navbar Superior*/}
        <Top_header/>
        <div className='menu-icon' onClick={() => { handleClick(); SubLinesOut();}}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
      </div>

      <nav className={click ? 'navbar active' : 'navbar'} ref={refOne}>
        <div className='navigation__container--navs'>

          {/*------------------------------Navbar Escritorio------------------------------------*/}
          <section id="desktopNav__container">
            <div className='desktopNav__lower'>

              {/* Recorrido de la lista: LINEAS DE PRODUCTOS CASAGRI*/}
              {links.map((link) => (
              <div onClick={() => { dropdownBoxDesktop(link.name);}}>

                  {/* Condicional Título de Lineas de Producto en el Navbar */}
                  { heading == link.name ? 
                    (
                      <div className='desktopNav__container-line-hover' >
                        <h1 className='desktopNav__container-line-title-hover'>
                            {link.name}
                        </h1>
                      </div>
                    ):
                    (
                      <div className='desktopNav__container-line'>
                        <h1 className='desktopNav__container-line-title'>
                            {link.name}
                        </h1>
                      </div>
                    )
                  }
                  {/* Sublineas de Productos */}
                  {dropdown && link.submenu && heading == link.name && erclick ? (
                    <div  className='desktopNav__container--navbar'
                          onMouseLeave={() => { setHeading(link.name);}}
                    >
                      {/* Validación del nombre la Línea y si posee sublineas activas */}
                        {heading == link.name && link.submenu && (
                              <div className='desktopNav__container--active'>
                                <div className="desktopNav__container-Drowbox-container">
                                  <div className="desktopNav__container-Drowbox-">

                                    {/* Recorrido de las sublineas */}
                                      {link.sublinks.map((mysublinks) => (
                                          <div className="desktopNav__SubLines" >
                                            <div className="desktopNav__SubLines-Title">
                                                <Link
                                                    to=""
                                                    className="desktopNav__SubLines-Title-link"
                                                    style={{ textDecoration: 'none' }}
                                                  >
                                                  {mysublinks.Head}     
                                                </Link>
                                            </div>
                                            

                                          {/* Validación si las sublineas tienen categorias activas */}
                                            { mysublinks.subitem  ?
                                              (
                                                <div className="desktopNav__Container-Lines-subLines">
                                                  {mysublinks.sublink.map((slink) => (   
                                                      <li className="desktopNav__Container-Lines-subLines-List">
                                                          <div
                                                            className="desktopNav__Container-Lines-subLines-List-Products" 
                                                          >
                                                            {slink.name}
                                                          </div>
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

                        )}
                      </div>

                  ):null}
                </div>

              ))}

            </div>
          </section>
      

          {/*---------------------------------Navbar Movil--------------------------------------*/}
          <section id="movilNav__container">
            <div className='movilNav__lower'>

              {/* Recorrido de la lista: LINEAS DE PRODUCTOS CASAGRI*/}
              {links.map((link) => (
              <div>
                  {/* Condicional para hover de las líneas */}
                  { heading == link.name && line == link.name ? 
                    (
                      <Link to='' className='movilNav__container-line-hover'
                          onClick={() => { dropdownBoxMovil(link.name); }}
                        >
                          {/* Lineas de Producto en el Navbar*/}
                              <div>
                                    <h1 className='movilNav__container-line-title'>
                                        {link.name} 
                                          { heading == link.name && line == link.name ? 
                                          (<i className='fas fa-caret-up' style={{marginLeft:'5px'}}/> )
                                          : 
                                          (  <i className='fas fa-caret-down' style={{marginLeft:'5px'}}/> )
                                          }
                                    </h1>             
                                </div> 
                      </Link>
                    )
                    : 
                    (   
                      <Link to='' className='movilNav__container-line'
                          onClick={() => { dropdownBoxMovil(link.name); }}
                        >
                          {/* Lineas de Producto en el Navbar*/}
                              <div>
                                    <h1 className='movilNav__container-line-title'>
                                        {link.name} 
                                          { heading == link.name && line == link.name ? 
                                          ( <i className='fas fa-caret-up' style={{marginLeft:'5px'}}/> )
                                          : 
                                          (  <i className='fas fa-caret-down' style={{marginLeft:'5px'}}/> )
                                          }
                                    </h1>             
                                </div>  
                      </Link>
                    )
                  }
                      {/* SubLíneas de Productos*/}
                        {dropdownMovil && link.submenu && heading == link.name && erclick && (
                          <div data-aos="fade-left" className='luis'>
                                {link.sublinks.map((mysublinks) => {
                                  return (
                                    <div>
                                      <Link
                                        className='movilNav-SubLines'
                                        to='#'
                                      >
                                        <div className='movilNav-SubLines-title'>
                                            {mysublinks.Head}
                                        </div>
                                      </Link>
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
