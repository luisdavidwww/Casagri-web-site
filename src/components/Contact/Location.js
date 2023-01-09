import React from 'react';
import AOS from 'aos';
import 'components/Contact/Location.css';
import 'aos/dist/aos.css'; 

export default function Location() {

  const Sede01 = "images/Locacion/sede01.jpg";
  const Sede02 = "images/Locacion/sede02.jpg";

  React.useEffect(() => { 
    AOS.init({duration:1500});
    },[]);

  return (
    <>
      <div className='contact-container'>

        {/*-------------------------Sede Calabozo-------------------------*/}
        <div className='sede-container' >
          <div data-aos="fade-right" className='sede-wrap'>
            <figure className='sede-pic-wrap'>
            </figure>   
          </div>
          <div data-aos="fade-left" className='sede-wrap-Info'>
            <h1 className='sede-title'> 
                AgroMax Calabozo 
            </h1>
            <div className='sede-text'>
                <p>
                  Calabozo Estado Guárico
                </p>
            </div>
          </div>
        </div>

        {/*-------------------------Sede Yaritagua-------------------------*/}
        <div className='sede-container' >
          <div data-aos="fade-right"  className='sede-wrap'>
            <figure className='sede-pic-wrap'>
            </figure>   
          </div>
          <div data-aos="fade-left" className='sede-wrap-Info'>
            <h1 className='sede-title'> 
                AgroMax Yaritagua
            </h1>
            <div className='sede-text'>
                <p>
                    Yaritagua Estado Yaracuy
                </p>
            </div> 
          </div>
        </div>

      </div>
    </>
  );
}