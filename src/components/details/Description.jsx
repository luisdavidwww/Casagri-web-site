import React from 'react'

const Description = ({ ComponenteActivo, Descripcion, cat2 }) => {
  return (
    <>
    <section className='AboutUs__main' style={{marginBottom:"5rem"}}>
            {/* Ttitulo Principal */}
            <div className='AboutUs__title__Container'style={{paddingLeft:"2rem", paddingRight:"2rem", display:"flex", justifyContent:"center"}} >
                {/*<span style={{color:'#489B1E'}}></span> */}
                  <h1 className='AboutUs__title' style={{textAlign:"center"}} >Descripción del Producto</h1>
            </div>
            <div className='AboutUs__text__Container' style={{marginTop:"2rem"}}>
              {
                ComponenteActivo != ""  && cat2 === "AGROQUIMICOS" || cat2 === "MEDICINA"? (
                  <>
                    <p className='text__aboutUs'>{Descripcion}</p>
                    <br />
                    <p className='text__aboutUs'>Componente Activo: <span style={{color:'black', fontWeight:"bold"}}> {ComponenteActivo} </span></p>
                  </>
                  
                ):(
                  <p className='text__aboutUs'>Sin Descripción...</p>
                )
              }
                  
            </div>


        </section>
    </>
  )
}

export default Description