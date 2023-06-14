import React, { useEffect, useState } from "react"
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
//Componentes
import { imgCasagriLoad } from '../../data/newsData';
import Loader from "components/Loader/Loader";

//Metodos de Filtrados
import { getProductDataByName, getProductByNombreApi, 
          getProductByCodigoApi, 
          } from "../../selectors/getInfoCasagri";

//Estilos
import './Details.css';

//icons
import { AiOutlineRight } from "react-icons/ai";


//importacion temporal de imagenes
const imgL = require.context('../../static/images/news', true);


export const DetailsNew = () => {

  
const { nombreProducto } = useParams();
const location = useLocation()

const [ productoParametro, setProductoParametro ] = useState([]);


const cargarParametro = () => {

  let nameProducto = nombreProducto.replace(/-/g, " ");
  let arregloProductos = location.state;
  let arrayProducto = getProductByNombreApi( nameProducto, arregloProductos);

  setProductoParametro(arrayProducto);

  return arrayProducto;
}
  
const prueba = () => {

  let nameProducto = location.state[0].replace(/-/g, " ");
  console.log(nameProducto)

}


  useEffect(() => {
    prueba();
  }, [])


  return (
    <>
    <div className='formSearch__Container__Main'>
      {/* Paginacion */}
      <div className='Pages'> 
            <Link to={`/`} style={{textDecoration:'none', color:'#494949'}}> 
                <>Inicio</>
            </Link>
            <div 
              className={'pagesText__active'}
              style={{textDecoration:'none', color:'#494949'}}> 
                <span className='pagesText__Categoria' >
                  <AiOutlineRight style={{marginLeft:'0.5rem', marginRight:'0.5rem'}}/>
                  {nombreProducto.replace(/-/g, " ")} 
                </span>
            </div>
        </div>
        {/* Informacion del Producto */}
        <article >
            <section className="Details__main">
                <div className='Details__container' key={`${"ImagenProducts"}`} >
                  <div className=''>
                    {/* Imagen del Producto */}
                    <img src={`data:image/jpeg;base64,${location.state[1]}`} alt={location.state[1]} style={{width:'500px'}}/>
                  </div>
                  
                  <div className='information__Details'> 
                    <h1 className="text__Details__Title" >{location.state[0]}</h1>    
                    <h3 className="text__Details__Title" >{location.state[2]}</h3>              
                  </div>
                </div>
            </section>
        </article>
    </div>
    </>
  )
}






















