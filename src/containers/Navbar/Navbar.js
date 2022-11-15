import React, { useState, useEffect  } from 'react';
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './Navbar.css';


const Navbar = () => {

  useEffect(() => { 
    AOS.init({duration:1500});
    },[]);

  
  //estados para el dropdown
  const [heading, setHeading] = useState("");
  const [hover, setHover] = useState(false);
  const [dropdown, setDropdown] = useState(false);


  
  //cursor activo sobre el elemento
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  //cursor desactivado al salir del elemento
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };


  return (
    <>
      <nav className='navbar'>
        <div className='navigation__container--navs'>
          <section id="desktopNav__container" >
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
        </div>
      </nav>
    </>
  );
}

export default Navbar;
