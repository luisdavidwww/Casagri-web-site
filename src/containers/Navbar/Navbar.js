import React, { useState, useEffect  } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {

  const AgroMax = "images/icon/agromax2.png";

  //Estado del click que inicia en falso
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);


  //use state de el navbar
  const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };

   const handleMouseLeave = () => {
      setIsHover(false);
   };



  //hook que utilizo para llevar el scroll a la parte superior en cada Router
  let location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);


  //metodo pra que aparezca el boton de opciones superior Responsive
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //activación de metodos
  useEffect(() => {
    showButton();
  }, []);


  return (
    <>
      <nav className='navbar'>
        <div className='navigation__container--navs'>

          <section id="mobile-nav" >
          </section>

          <section id="desktopNav__container" >
            <div className="desktopNav">
              <div className="desktopNav__upper">
                <div className="desktopNav__linkWrapper" >
                </div>
              </div>

              <div className='desktopNav__lower'>
                <ul className='desktopNav__linkContainer'>
                  <li 
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className={isHover ? 'desktopNav__linkWrapper-mvl-flyout--active ' : 'desktopNav__linkWrapper'
                    }>
                    
                      <a id="" className="desktopNav__link desktopNav__link-title" href="/">Articulo 2</a>

                    <div 
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={isHover ? 'desktopNav__flyout-container-active' : 'desktopNav__flyout-container'}>
                          
                              <h1>hola</h1>
                              <h1>hola</h1>
                              <h1>hola</h1>
                              <h1>hola</h1>
                        
                    </div>
                  </li> 
                  <li className='desktopNav__linkWrapper mvl-flyout'>
                    <a id="" className="desktopNav__link mvl-flyout-button" href="/">Articulo 3</a>
                  </li> 
                  <li className='desktopNav__linkWrapper mvl-flyout'>
                    <a id="" className="desktopNav__link mvl-flyout-button" href="/">Articulo 4</a>
                  </li> 
                  <li className='desktopNav__linkWrapper mvl-flyout'>
                    <a id="" className="desktopNav__link mvl-flyout-button" href="/">Articulo 5</a>
                  </li>        
                </ul>
              </div>
            </div>
          </section>


        </div>
      </nav>
    </>
  );
}

export default Navbar;
