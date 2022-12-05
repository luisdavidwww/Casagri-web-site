import React, { useState, useEffect  } from 'react';
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import Top_header from 'containers/Top_Header/Top_header'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './Navbar.css';


const Navbar = () => {

  
  //estados para el dropdown
  const [heading, setHeading] = useState("");
  const [hover, setHover] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdownMovil, setDropdownMovil] = useState(false);
  const [click, setClick] = useState(false);
  const [erclick, setErclick] = useState(false);
  const [button, setButton] = useState(true);

  //Acción Click
  const handleClick = () => setClick(!click);
  const handleClick2 = () => setErclick(!erclick);
  const handleClick3 = () => setErclick(false);
  
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

  //Dropdown SubLineas Activas
  const SubLinesOn = ( props ) => setHeading(props);
  
  //Dropdown SubLineas Desactiva
  const SubLinesOut = () => setHeading("");



  useEffect(() => { 
    AOS.init({duration:300});
    },[]);
  useEffect(() => {
    showButton();
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
      <nav className={click ? 'navbar active' : 'navbar'}>
        <div className='navigation__container--navs'>

          {/* Navbar Escritorio*/}
          <section id="desktopNav__container">
            <div className='desktopNav__lower'>

              {/* Recorrido de la lista: LINEAS DE PRODUCTOS CASAGRI*/}
              {links.map((link) => (
              <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                >

                  {/* Lineas de Producto en el Navbar*/}
                  <div className={heading == link.name && hover ? 'desktopNav__container-line-hover' : 'desktopNav__container-line' }>
                    <h1
                        className='desktopNav__container-line-title'
                        onMouseOver={() => {
                          setHeading(link.name);
                          setHover(true);
                        }}
                    >
                        {link.name}
                    </h1>
                  </div>

                  {/* Sublineas de Productos */}
                  {dropdown ? (
                    <div className='desktopNav__container--navbar'>

                      {/* Validación del nombre la Línea y si posee sublineas activas */}
                        {heading == link.name && link.submenu && (
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
                                          <div className="desktopNav__SubLines" >
                                            <div className="desktopNav__SubLines-Title">
                                              <div>
                                                <Link
                                                    to=""
                                                    className=""
                                                    style={{ textDecoration: 'none', color:'rgb(55, 55, 55)', }}
                                                  >
                                                  {mysublinks.Head}     
                                                </Link>
                                              </div>
                                            </div>
                                            

                                          {/* Validación si las sublineas tienen categorias activas */}
                                            { mysublinks.subitem  ?
                                              (
                                                <div className="desktopNav__Container-Lines-subLines">
                                                  {mysublinks.sublink.map((slink) => (   
                                                      <li className="desktopNav__Container-Lines-subLines-List">
                                                          <div
                                                            className=""
                                                            style={{  fontFamily:'Gotham', color:'rgb(70, 70, 70)'  }}
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

          {/* Navbar Movil*/}
          <section id="movilNav__container">
            <div className='movilNav__lower'>

              {/* Recorrido de la lista: LINEAS DE PRODUCTOS CASAGRI*/}
              {links.map((link) => (
              <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                >

                        <Link to='#' className='movilNav__container-line'
                          onClick={() => {
                            setDropdownMovil(true);
                            handleClick2();
                            SubLinesOn(link.name);
                          }}
                        >
                          {/* Lineas de Producto en el Navbar*/}
                            <div>
                                    <h1
                                        className='movilNav__container-line-title'
                                        onMouseOver={() => {
                                          setHeading(link.name);
                                        }}
                                        
                                    >
                                        {link.name}  
                                    </h1>             
                            </div> 
                        </Link>

                        {dropdownMovil && link.submenu && heading == link.name &&  erclick && (
                        
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
                        

                  {/* Sublineas de Productos */}
                  {dropdown ? (
                    <div className='desktopNav__container--navbar'>

                      {/* Validación del nombre la Línea y si posee sublineas activas */}
                        {heading == link.name && link.submenu && (
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
                                          <div className="desktopNav__SubLines" >
                                            <div className="desktopNav__SubLines-Title">
                                              <div>
                                                <Link
                                                    to=""
                                                    className=""
                                                    style={{ textDecoration: 'none', color:'rgb(55, 55, 55)', }}
                                                  >
                                                  {mysublinks.Head}     
                                                </Link>
                                              </div>
                                            </div>
                                            

                                          {/* Validación si las sublineas tienen categorias activas */}
                                            { mysublinks.subitem  ?
                                              (
                                                <div className="desktopNav__Container-Lines-subLines">
                                                  {mysublinks.sublink.map((slink) => (   
                                                      <li className="desktopNav__Container-Lines-subLines-List">
                                                          <div
                                                            className=""
                                                            style={{  fontFamily:'Gotham', color:'rgb(70, 70, 70)'  }}
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


        </div>
      </nav>
    </>
  );
}

export default Navbar;
