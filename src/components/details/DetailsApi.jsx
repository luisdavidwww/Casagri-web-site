import React, { useEffect, useState } from "react"
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";

//componentes de Error y Carga 
import  RecommendedProductsDetails  from './RecommendedProductsDetails';
import  Error  from '../../pages/Error404';
import  Loader from "components/Loader/Loader";

//Variable para Imagen
import  img  from '../../static/images/news/news011.jpg';

//Metodos de Filtrados
import { getProductDetails,
          } from "../../selectors/getInfoCasagriApi";

//Estilos
import './Details.css';

//icons
import { AiOutlineRight } from "react-icons/ai";


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


  useEffect(() => {

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
          { error ? ( <Error/> ):
              (
                <>
                {/* ----------- DESKTOP ----------------*/}

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
                                {products.Nombre} 
                              </span>
                          </div>
                    </div>
                    {/* Informacion del Producto */}
                    <article >
                          <section className="Details__main">
                              <div className='Details__container' key={`${"ImagenProducts"}`} >
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
                                  <h1 className="text__Details__Title" >{products.Nombre}</h1>    
                                  <h1 className="text__Details__Price" >{products.Marca}</h1>            
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
                          <h1 className="text__Details__Price" style={{marginTop:'1rem'}} >{products.Marca}</h1> 
                        </div>
                      </div>
                </div>

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
















