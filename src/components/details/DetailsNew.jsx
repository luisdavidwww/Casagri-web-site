import React, { useEffect, useState } from "react"
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
//Componentes
import {getProductDataByName,getProductDataByCodigo} from '../../selectors/getInfoCasagri';
import { imgCasagriLoad } from '../../data/newsData';
import Loader from "components/Loader/Loader";
//Estilos
import './Details.css'
//icons
import { AiOutlineRight } from "react-icons/ai";
import { MdDriveFileMove } from "react-icons/md";

//importacion temporal de imagenes
const imgL = require.context('../../static/images/news', true);

export const DetailsNew = (props) => {

  const [data, setData] = useState([]);
  const [img, setImge] = useState([]);
  const [loanding, setLoanding] = useState(false);
  const [prueba, setPrueba] = useState([]);
  
  // Nombre del Producto por Parametro
  const { nombre } = useParams();
  //const navigate = useNavigate();

  // Parametros de que vienen de cardItem 
  // Categoria, Subcategoria, Linea y Cod de Producto
  const location = useLocation()
  const  from  = location.state 

  //Peticion del Banner Principal
  const obtenerImagenProducto = async () => {

      //Estado del Loanding Verdadero
      setLoanding(true);

      //Codigo del producto que viene por parámetro
      //let CodigoProd = from[3];

      //Petición a la api
      let nombre__Real = nombre.replace(/-/g, " ")
      const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${"productos/nombreProducto/"}${nombre__Real}`);
      const res = await response.json();

      console.log(nombre__Real)

      
      if ( res.data !== null)
      {
        setImge(res.data);
      }
      else{
        setImge([]);
      }

      

      //Estado del Loanding Falso
      setLoanding(false);

}


//Obtener Info de productos de los datos estaticos Casagri
  const obtenerInfoProducto = () => {

      let nombreProducto__Estatico = nombre.replace(/-/g, " ");

      let InfoProducto = getProductDataByName(nombreProducto__Estatico);
      setData(InfoProducto);
      
  }



  useEffect(() => {
    obtenerImagenProducto();
    //obtenerInfoProducto();
    //console.log(nombre)
  }, [nombre])

  useEffect(() => {
    //console.log(from[3]);
    obtenerInfoProducto();
  }, [nombre])

  

  return (
    <>
    <div className='formSearch__Container__Main'>
      {
         loanding ?( <Loader/>):(
          <>
          {/* Paginacion */}
          <div className='Pages'> 
            <Link to={`/`} style={{textDecoration:'none', color:'#494949'}}> 
                <>Inicio</>
            </Link>
            {/*
            {from.map((item, index) => 
              <Link
                key={`${"DEtailsProducts"}-${index}`}
                className={'pagesText'}
                style={{textDecoration:'none', color:'#494949'}}
                to={`/Category/${item}`} 
              > 
                {item != "" ? (
                <span className='pagesText__Categoria' >
                  <AiOutlineRight style={{marginLeft:'0.5rem', marginRight:'0.5rem'}}/>
                  {item} 
                </span>
                ):null  
              }</Link>  
            )}*/}
            <div 
              className={'pagesText__active'}
              style={{textDecoration:'none', color:'#494949'}}> 
                <span className='pagesText__Categoria' >
                  <AiOutlineRight style={{marginLeft:'0.5rem', marginRight:'0.5rem'}}/>
                  {nombre.replace(/-/g, " ")} 
                </span>
            </div>
          </div>
          {/* Informacion del Producto */}
          <article >
            <section className="Details__main">

              {data.map((item, index) => (
                <div className='Details__container' key={`${"ImagenProducts"}-${index}`} >
                  <div className=''>
                    {/* Imagen del Producto */}
                    {
                      img.imagen_principal  ? 
                      (<img src={img.imagen_principal} alt='' style={{width:'500px'}}/> )
                      :
                      (<img src={imgL(`./${imgCasagriLoad.imgUrl}`) }  style={{width:'500px'}}/>)
                    }
                  </div>
                  
                  <div className='information__Details'> 
                  
                    <h1 className="text__Details__Title" >{item.Nombre}</h1>
                    
                  </div>

                </div>
              ))}

              
            </section>
          </article>
          </>
         )
      }
    </div>
    </>
  )
}
