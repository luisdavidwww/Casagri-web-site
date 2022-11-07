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
   };



  return (
    <>
      <nav className='navbar'>
        <div className='navigation__container--navs'>
          <section id="desktopNav__container" >
            <div className="desktopNav">
              <div className='desktopNav__lower'>

      {links.map((link) => (
        <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={isHover ? 'desktopNav__container-prueba ' : 'desktopNav__container-prueba'
              }>
          <h1
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={isHover ? 'desktopNav__container-prueba ' : 'desktopNav__container-prueba'
              }
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
            </h1>

          <div 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={isHover ? 'desktopNav__container--active ' : 'desktopNav__container'
            }>
            {link.submenu && (
              <div  onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={isHover ? 'desktopNav__container--active ' : 'desktopNav__container'
              }>
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
