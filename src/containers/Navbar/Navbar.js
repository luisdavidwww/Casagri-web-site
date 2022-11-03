import React, { useState, useEffect  } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {

  const AgroMax = "images/icon/agromax2.png";


  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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

            <div className="desktopNav__upper">
              <div className="desktopNav__linkWrapper" >
              </div>
            </div>

            <div className='desktopNav__lower'>

              <ul className='desktopNav__linkContainer mvl-flyout--active'>

                <li className='desktopNav__linkContainer mvl-flyout--active'>

                  <a id="" class="desktopNav__link mvl-flyout-button" href="/articles">News</a>

                  <div className='desktopNav__flyout-container nav-flyout-container-0'>
                    <div id="nav-flyout-0" className='mvl-flyout mobile-hide'>
                    </div>
                  </div>

                </li>
              </ul>
            </div>


          </section>


        </div>
      </nav>
    </>
  );
}

export default Navbar;
