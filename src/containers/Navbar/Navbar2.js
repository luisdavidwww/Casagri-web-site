import React, { useState, useEffect  } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { links } from "./Mylinks";
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
      setHeading("");
   };



  return (
    <>
      <nav className='navbar'>
        <div className='navigation__container--navs'>
          <section id="desktopNav__container" >
              <div className='desktopNav__lower'>
                
      {links.map((link) => (
        <div className=''>
          <h1
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className='desktopNav__container-title '
              onMouseOver={() => {
                setHeading(link.name);
              }}
              onMouseOut={() => {
                setSubHeading(link.name);
                setHeading("");
              }}
          >
              {link.name}
    
          </h1>
        
          {heading == link.name || subHeading == link.name ? (
            <div className='desktopNav__container--navbar'>
              {link.submenu && (
                      <div
                        onMouseEnter={() => {setSubHeading(link.name)}}  
                        onMouseLeave={() => {setSubHeading("")}}  
                        className={subHeading == link.name ? 'desktopNav__container--active' : 'desktopNav__container'}
                        
                      >
                        <div className="desktopNav__container-Drowbox">
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
