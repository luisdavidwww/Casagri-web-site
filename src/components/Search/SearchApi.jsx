import React, {  useMemo, useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import queryString from 'query-string';

//componentes
import  SearchForm  from "./SearchForm";
import  FiltersBar  from "../Filters/FiltersBar";
import  FilterSidebar  from "../Filters/FilterSidebar-Movil";
import CardItemApi from '../Cards/CardItemApi';
import SearchFormMovil from "./SearchFormMovil";
import  PaginationList  from '../category/PaginationApi';

//Hooks
import { useForm } from '../../hooks/useForm';
import { getProductDataByName } from "../../selectors/getInfoCasagriApi";

//Manejo de Carga y Error
import Loader from "components/Loader/Loader";
import  ErrorPage  from 'components/ErrorPage/ErrorPage';


//Datos para los banners 
import { BannerSearch } from '../../data/BannerData';

//Estilos
import './Search.css';

//icons
import { AiOutlineRight } from "react-icons/ai";



// Valor del Banner Principal
const listaDatos = BannerSearch.filter(element => element.id === "01Search");

//Img del banner principal  
const bannerImg =  listaDatos.map(item => item.img);
const bannerImgMini =  listaDatos.map(item => item.miniimg);

//Titulo del banner principal  
const bannerTitle =  listaDatos.map(item => item.title);

//Convertimos a strings para las props
const img =  bannerImg.toString();
const imgMini = bannerImgMini.toString()
const tit =  bannerTitle.toString();

//constante para pedir img de Banner
const imgCategory = require.context('../../static/images/category', true);


const Search = () => {


    //constantes
    const { query } = useParams();
    let { search } = useLocation();
    const navigate = useNavigate();

    //Variables del Banner
    const [banner, setBanner] = useState([]);

    //variables de estados
    const [loanding, setLoanding] = useState(false);
    const [error, setError] = useState(null);


    //Variables para los Productos
    const [products, setProducts] = useState([]);
    const [totalPagina, setTotalPagina] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);




    //constantes
    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );


    //usamos el hook del formulario 
    const [ formValues, handleInputChange ] = useForm({
            searchText: q
    });

    const { searchText } = formValues;



    useEffect(() => {

        document.title=`${query} | ${"Casagri"}`
      
        const fetchDataAndHandleResponse = async () => {

          try {
            setLoanding(true);
            const response = await getProductDataByName(query, search);
            // Procesa la respuesta o realiza otras operaciones necesarias
            setTotalPagina(response.totalPages);
            setTotalProducts(response.total);
            setProducts(response.productos);
            setLoanding(false);
  
          } catch (error) {
            setLoanding(false);
            setError('Ocurrió un error al obtener los datos. Por favor, inténtalo de nuevo.');
          }
        };
      
        fetchDataAndHandleResponse();


      },[ query, search])

  return (
    <div style={{backgroundColor:'#F9F9F9', paddingTop:'2rem', paddingBottom:'2rem'}}>

    {
      loanding ?( <Loader/>):(
        <>
        {
          error ? (<ErrorPage />):(
            <>
              {/*<BannerCategory image={banner.banner__desktop} imageMini={banner.banner__movil}  consulta={tit}/>*/}

              {/*Seccion Superiror */}
              <div className='formSearch__Container__Main'>
                    {/*Paginacion*/}
                    <div className='Pages__Search'> 
                      <Link to={`/`} style={{textDecoration:'none', color:'#494949'}}> 
                          <>Inicio</>
                      </Link>
                      <>
                        <AiOutlineRight style={{marginTop:'0.6rem', marginLeft:'0.5rem', marginRight:'0.5rem'}}/>
                          <span className='pagesText__Search pagesText__active' >
                          Resultado de búsqueda:
                            '{query}'
                          </span>
                      </>
                    </div>
                    {/*Barra de Busqueda */}
                    <div className='formSearch__Container'>
                      <SearchForm/>
                    
                    </div>
              </div>

              {/*Titulo de Resultado Desktop */}
              <div className='result__Search__Container' >
                      <div className='result__Search text__Result__Category'> 
                          <span style={{fontWeight:'700', fontSize:'29px'}}> Resultado de Búsqueda: <>&nbsp;</> '{query}'</span>  
                      </div>
              </div>
              {/*Titulo de Resultado Movil */}
              <div className='result__Category__Container__Movil' style={{marginTop:'80px'}} >
                      <div className='result__Category__Movil text__Result__Category__Movil'> 
                        <>
                            <p style={{fontWeight:'700', fontSize:'25px', marginBottom:'0rem', textAlign:'center'}}>Resultado de Búsqueda: <>&nbsp;</>
                            <span style={{fontWeight:'700', fontSize:'25px', marginBottom:'0rem', textAlign:'center', color:'#47A01A'}}>'{query}'</span> 
                            </p> 
                            
                              {/*<BsXLg className='iconResult__Category'/>*/}
                        </>
                      </div>
              </div>

              {/*Barra de Busqueda Movil*/}
              <div className='us-container__Details-movil'  >
                <div className='formSearch__Container'>
                  <SearchFormMovil/>
                </div>
              </div>

              {/*Contenido de Sección */}
              <div className='category__Container'>

                    {/* Filtro */}
                    <div className='category__filter'>
                      <FiltersBar/>
                    </div>
                    {/* Filtro Movil */}
                    <div className='category__filter__Movil'>
                      <div className='category__Display'>
                        Display 
                      </div>
                        <FilterSidebar/>
                    </div>
              

                  {/*Resultado de Busqueda*/}
                  <>
                              { 
                                      products.length == 0 && !loanding ? 
                                      ( 
                                        <div className='category__products'>
                                            <div className='container__error'>
                                              <div className="alert alert-danger" style={{textAlign:'center', width:'300px'}}>
                                                  La búsqueda: '{query}' no ha devuelto ningún resultado
                                                </div>
                                            </div>
                                          </div>
                                      ):
                                      (
                                        <div className='category__products'>
                                        {/*--------------------- Busqueda Exitosa -------------------------*/}
                                          <div className='cards'>
                                              <div className='cards__container'>
                                                <div className='cards__wrapper'> 
                                                  <ul className='cards__items__Container'>
                                                    {products?.map((item, index) => (
                                                                  <CardItemApi
                                                                  key={`${"search"}-${index}`}
                                                                  src={"news02.jpg" }
                                                                  Nombre={item.Nombre}
                                                                  Imagen={  item.Imagen }
                                                                  CargandoImg={ img.length  == 0 ? "Cargando" : " Cargada" }
                                                                  Peso={item.PesoKG}
                                                                  path={`/Details/${ item.Nombre_interno }`}
                                                                  price={""}
                                                                  StockActual={item.StockActual}
                                                                  CodigoProd={item.CodigoProd}
                                                                  Marca={item.Marca}
                                                                  ranking={""}
                                                                  component={"search"}
                                                                  categoria={""}
                                                                  subCategoria={""}
                                                                  Linea={""}
                                                                  />
                                                              ))}
                                                  </ul>
                                                </div>
                                              </div>       
                                          </div>
                                          <div className='Paginado__Category'> 
                                              <PaginationList cantidadPagina={ totalPagina } enlace={`/Search/${query}`} />
                                              <div className="content-Top-options-list-link" style={{paddingLeft:'0.5rem',marginTop:'1rem'}}> 
                                                  Total Productos: {totalProducts} 
                                              </div>
                                          </div>
                                        </div>
                                      )      
                                            
                              }
                  </>
              
              </div>
            </>
          )
        }
        
        </>
      )
    }
    </div>

  )
}


export default Search;


