import React, { useState, useEffect  } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { links } from "./Mylinks";
import './Navbar.css';
import './Navbar2.css';



const Navbar = () => {

  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  //use state de el navbar
  const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };

   const handleMouseLeave = () => {
      setIsHover(false);
      setHeading("true");
   };



  return (
    <>
      <nav className='navbar'>
        <div className='navigation__container--navs'>
          <section id="desktopNav__container" >
            <div className="desktopNav">
              <div className='desktopNav__lower'>
                
      {links.map((link) => (
        <div className='luis'>
          <h1
              onMouseEnter={handleMouseEnter}
              className={isHover ? 'desktopNav__container-prueba ' : 'desktopNav__container-prueba'}
              onMouseOver={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading(link.name);
              }}
          >
              {link.name}
    
          </h1>
        
          {isHover ? (
            <div className='luis2'>
              {link.submenu && (
                      <div
                        onMouseEnter={handleMouseEnter}  
                        onMouseLeave={handleMouseLeave}  
                        className={heading == link.name ? 'desktopNav__container--active' : 'desktopNav__container'}
                        
                      >
                        {link.sublinks.map((mysublinks) => (
                          <div className="desktopNav__col" >
                            <h1 className="">
                              {mysublinks.Head}
                            </h1>
                            {mysublinks.sublink.map((slink) => (
                              <li className="">
                                <Link
                                  to={slink.link}
                                  className=""
                                >
                                  {slink.name}
                                </Link>
                              </li>
                            ))}
                          </div>
                        ))}
                      </div>
                      )}
            </div>
          ):null}

        </div>
      ))}











              </div>
            </div>
          </section>
        </div>
      </nav>
    </>
    
  );
}

export default Navbar;
