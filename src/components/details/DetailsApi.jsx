import React, { useEffect, useState } from "react"
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";

//componentes
import  RecommendedProductsDetails  from './RecommendedProductsDetails';
import  Description  from './Description';
import SearchForm from "../Search/SearchForm";
import SearchFormMovil from "../Search/SearchFormMovil";

//Manejo de Carga y Error
import Loader from "components/Loader/Loader";
import  ErrorPage  from 'components/ErrorPage/ErrorPage';

//Variable para Imagen
import  img  from '../../static/images/news/news011.jpg';

//Metodos de Filtrados
import { getProductDetails,
          } from "../../selectors/getInfoCasagriApi";

//Estilos
import './Details.css';

//icons
import { AiOutlineRight } from "react-icons/ai";
import { BsFillTagFill } from "react-icons/bs";


//importacion temporal de imagenes
const imgL = require.context('../../static/images/news', true);


export const DetailsApi = () => {

  
const { nombreProducto } = useParams();
const location = useLocation()


//Variables de Carga
const [loanding, setLoanding] = useState(true);
const [error, setError] = useState(null);

//Variables de Productos
const [products, setProducts] = useState([]);

//FormatoParatitulo de Página
function formatTitle(title) {
  let productoNombre = title.toLocaleLowerCase()
  const words = productoNombre.split('-').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return words.join('-');
}


  useEffect(() => {

    document.title=`${ formatTitle(nombreProducto) }  |  ${"Casagri"}`
    
    const BuscarProducto = async () => {
      try {
        setLoanding(true);
        const response = await getProductDetails(nombreProducto);
        setProducts(response.productos);
        setError(null);
        setLoanding(false);
      } catch (error) {
        console.log('Error fetching data:', error);
        setLoanding(false);
        setError('Ocurrió un error al obtener los datos. Por favor, inténtalo de nuevo.');
      }
    };
  
    BuscarProducto();

  }, [nombreProducto])
  

  return (
    <>
      {
        loanding ?( <Loader/>):(
          <>
          { error ? ( <ErrorPage/> ):
              (
                <>
                {/* ----------- DESKTOP ----------------*/}

                <div className='formSearch__Container__Main' >

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
                                {products.Nombre} 
                              </span>
                          </div>
                    </div>
                    {/*Barra de Busqueda */}
                    <div className='formSearch__Container'>
                      <SearchForm/>
                    </div>
                    {/* Informacion del Producto */}
                    <article style={{marginTop:'3rem'}}>
                          <section className="Details__main" >
                              <div className='Details__container'  key={`${"ImagenProducts"}`} >
                                <div className='Details__container__Img'>
                                  {/* Imagen del Producto */}
                                  {
                                    products.Imagen == "" ? (
                                      <img src={img} alt={products.Nombre} style={{width:'500px'}}/>
                                    ):(
                                      <img src={`data:image/jpeg;base64,${products.Imagen}`} alt={products.Nombre} style={{width:'500px'}}/>
                                    )
                                  }
                                  
                                </div>
                                <div className='information__Details'> 
                                  {/*Nombre del Producto*/}
                                  <h1 className="text__Details__Title" >{products.Nombre}</h1>
                                  {/*Marca*/}    
                                  <h1 className="text__Details__Price" ><BsFillTagFill style={{marginRight:"1rem"}}/>Marca: {products.Marca}</h1>   


                                  { products.StockActual == 0 ? (
                                    <div className='no__Disponible__Container--Details' >
                                      <div className='no__Disponible--Details'>
                                        Agotado
                                      </div>
                                    </div>):(
                                      <div className='Disponible__Container--Details' >
                                        <div className='Disponible--Details'>
                                          Disponible
                                        </div>
                                      </div>
                                    ) 
                                    }        
                                </div>
                              </div>
                          </section>
                    </article>

                    

                </div>  

                {/* ----------- MOVIL ----------------*/}
                <div className='us-container__Details-movil'  >
                      <div>
                        {/* Paginacion */}
                        <div className='Pages' style={{marginTop:'100px'}}> 
                              <Link to={`/`} style={{textDecoration:'none', color:'#494949'}}> 
                                  <>Inicio</>
                              </Link>
                              <div 
                                className={'pagesText__active'}
                                style={{textDecoration:'none', color:'#494949'}}> 
                                  <span className='pagesText__Categoria' >
                                    <AiOutlineRight style={{marginLeft:'0.5rem', marginRight:'0.5rem'}}/>
                                    {products.Nombre} 
                                  </span>
                              </div>
                        </div>
                        {/*Barra de Busqueda */}
                        <div className='formSearch__Container'>
                          <SearchFormMovil/>
                        </div>

                        <a className='us-wrap__trayectory' >
                            {/* Imagen del Producto */}
                            {
                             products.Imagen == "" ? (
                              <img src={img} alt={products.Nombre} />
                              ):(
                              <img src={`data:image/jpeg;base64,${products.Imagen}`} alt={products.Nombre}/>
                              )
                            }
                        </a>
                          
                        <div className='us-wrap-Info-Movil' >
                          <h1 className="text__Details__Title" style={{marginTop:'1rem'}} >{products.Nombre}</h1>    
                          <h1 className="text__Details__Price" style={{marginTop:'1rem'}} >
                            <BsFillTagFill style={{marginRight:"0.2rem"}}/>
                            {products.Marca}</h1> 
                          { products.StockActual == 0 ? (
                                    <div className='no__Disponible__Container--Details' >
                                      <div className='no__Disponible--Details'>
                                        Agotado
                                      </div>
                                    </div>):(
                                      <div className='Disponible__Container--Details' >
                                        <div className='Disponible--Details'>
                                          Disponible
                                        </div>
                                      </div>
                                    ) 
                              }   
                        </div>
                      </div>
                </div>

                <Description Descripcion={products.Descripcion} cat2={products.cat2} ComponenteActivo={products.cat4} />

                <div style={{backgroundColor:'#F9F9F9'}} >
                  <RecommendedProductsDetails nombreProducto={nombreProducto}/>
                </div>                         
                </>
              )
          }
          </>
              )
      }
    </>
  )
}

















