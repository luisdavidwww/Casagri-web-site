import React, { useEffect } from 'react';





const PrivacyPolicy = () => {

  useEffect(() => {
    document.title= `Casagri - Politica de Privacidad`
  },[])


  return (
    <div>
      <section className='AboutUs__main' data-aos="fade-up" data-aos-once="true" data-aos-duration="1500">
            {/* Ttitulo Principal */}
            <div className='AboutUs__title__Container'>
                {/*<span style={{color:'#489B1E'}}></span> */}
                  <h1 className='AboutUs__title'>Política de Privacidad de <span style={{color:'#489B1E'}}> CasagriApp & Cstore </span> </h1>
            </div>
            <div className='AboutUs__text__Container'>
                  <p className='text__PrivacyPolicy'>
                  <strong style={{color:'#225e04'}} > 1. Introducción </strong>
               
                  En Casagri, respetamos su información personal y nos comprometemos a protegerla. Esta política de privacidad 
                  cubre la recopilación, uso y divulgación de información personal que recibimos cuando se utiliza nuestra aplicación. <br /><br />

                  <strong style={{color:'#225e04'}} > 2. Recopilación de Información </strong>
                  
                  Recopilamos la siguiente información: nombre, apellido, documento de identidad, correo electrónico, teléfonos, datos 
                  fiscales de su empresa o entidad comercial como Rif, razón social, dirección exacta, geolocalización. En caso de ser 
                  productor, solicitamos también el rubro al que se dedica y la cantidad de materia prima producida por ciclo. <br /><br />
                  
                  <strong style={{color:'#225e04'}} >  3. Uso de la Información </strong>
                  
                  Usamos la información recopilada para ofrecer productos adecuados a cada cliente según sus necesidades específicas.
                  No compartimos su información con terceros. <br /><br />

                  <strong style={{color:'#225e04'}} >  4. Seguridad </strong>
                  Estamos comprometidos a proteger su información. Aunque ninguna transmisión de datos por Internet es 100% segura, tomamos 
                  medidas para proteger su información contra el acceso no autorizado, pérdida, mal uso o alteración. <br /><br />

                  <strong style={{color:'#225e04'}} > 5. Cambios en la Política de Privacidad </strong>
                  Podemos actualizar nuestra política de privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva 
                  política de privacidad en nuestra aplicación.<br /><br />

                  <strong style={{color:'#225e04'}} > 6. Contacto </strong>
                  Si tiene alguna pregunta sobre esta política de privacidad, póngase en contacto con nosotros a través de 
                  gestionmovil@casagri-group.com o visite nuestra página web. <br /><br />
                  </p>
            </div>
            <div>

                  
            </div>
        </section>
    </div>
  )
}

export default PrivacyPolicy;