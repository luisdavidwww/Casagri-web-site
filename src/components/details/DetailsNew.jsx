import React, { useEffect, useState } from "react"

//importacion de datos de productos
import { featuredProductss } from "../../data/featuredProductss";
import data from "../../data/daticos/productos.json";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { ADD, DELETE, REMOVE_INT } from "../../controller/action";
//Componentes
import  SearchForm  from "../Search/SearchForm";
import {getProductByName} from '../../selectors/getInfoCasagri';
import { imgCasagriLoad } from '../../data/newsData';
//Estilos
import './Details.css'
//icons
import { AiOutlineRight } from "react-icons/ai";
import { MdDriveFileMove } from "react-icons/md";


//importacion temporal de imagenes
const imgL = require.context('../../static/images/product', true);

export const DetailsNew = (props) => {


  const [data, setData] = useState([])
  const [img, setImge] = useState([]);
  const [localProducts, setLocalProducts] = useState([])
  
  // delete item
  const { nombre } = useParams();
  const navigate = useNavigate();

  // parametros de categorias
  const location = useLocation()
  const  from  = location.state

//Peticion del Banner Principal
const getInfo = async () => {

  //Codigo del producto que viene por parámetro
  let CodigoProd = from[3];


  //Petición a la api
  const response = await fetch(`${'http://localhost:8080/api/'}${"productos/nombre/"}${CodigoProd}`);
  const res = await response.json();


  if ( res.data == null)
  {
    setImge([]);
  }


  setImge(res.data);
  console.log("respuesta de busqueda:"+ res.data)

  

}



//Comparacion de datos estaticos con imagenes
const compare = () => {
    let compareData = featuredProductss.filter((e) => {
      return e.title == nombre
    })
    setLocalProducts(from);
    setData(compareData);
  }

//Comparacion de datos estaticos Casagri
  const compare2 = () => {
    //setLocalProducts(from);
    let compareData = getProductByName(nombre);
    console.log(compareData);
    setData(compareData);
  }


  const listItems = Object.keys(from).map((from) =>
  <li>{from}</li>
);


  useEffect(() => {
    //compare();
    getInfo();
    compare2();
    //console.log(from);
    //console.log(localProducts);
  }, [nombre])

  

  return (
    <>
    <div className='formSearch__Container__Main'>
      {/*Paginacion*/}
      <div className='Pages'> 
        <Link to={`/`} style={{textDecoration:'none', color:'#494949'}}> 
            <>Inicio</>
        </Link>
        {from.map(item => 
          <Link
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
        )}
        <div 
          className={'pagesText__active'}
          style={{textDecoration:'none', color:'#494949'}}> 
            <span className='pagesText__Categoria' >
              <AiOutlineRight style={{marginLeft:'0.5rem', marginRight:'0.5rem'}}/>
              {nombre} 
            </span>
        </div>
      </div>
      {/*Barra de Busqueda 
      <div className='formSearch__Container'>
        <SearchForm/>
      </div>
      */}
    </div>
      <article >
        
        <section className="Details__main">
              


          {data.map((item) => (
            <div className='Details__container'>

              <div className=''>
                {/* Imagen del Producto */}
                {
                  img !== null ? 
                  (<img src={img.imagen_principal} alt='' style={{width:'500px'}}/> )
                  :
                  (<img src={imgCasagriLoad.imgUrl}  style={{width:'500px'}}/>)
                }
              </div>
              
              <div className='information__Details'> 
              
                <h1 className="text__Details__Title" >{item.Nombre}</h1>
                <h3 className="text__Details__Price" >{item.PesoKG}</h3>
                <h3 className="text__Details__Brand" ></h3>
              </div>

            </div>
          ))}
        </section>
      </article>
    </>
  )
}
