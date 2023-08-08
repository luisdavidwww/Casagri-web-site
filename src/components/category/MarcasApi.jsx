import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from "react-router-dom";

//componentes  
import CardItemApi from '../Cards/CardItemApi';
import  SearchForm  from "../Search/SearchForm";
import  SearchFormMovil  from "../Search/SearchFormMovil";
import  FilterSidebar  from "../Filters/FilterSidebar-Movil";
import  FiltersBar  from "../Filters/FiltersBar";
import { BannerCategory } from 'components/BannerMain/BannerCategory';
import  PaginationList  from './PaginationApi';

//Hook para Peticiones
import { getProductsBrand } from "../../selectors/getInfoCasagriApi";

//Variables de Entorno
import { BANNERSCATEGORIA, BANNERS, CATEGORIAS, BUSCARCATEGORIA } from '../../routers/index';

//Manejo de Carga y Error
import Loader from "components/Loader/Loader";
import  ErrorPage  from '../../components/ErrorPage/ErrorPage';

//Estilos
import './Category.css';
import './Pagination.css';

//icons
import { AiOutlineRight } from "react-icons/ai";




const MarcasApi = ({ component }) => {
   
  //query de la url
  const { marca } = useParams();
  let { search } = useLocation();

  //Variables del Banner
  const [banner, setBanner] = useState([]);

  //Variables de Carga
  const [loanding, setLoanding] = useState(true);
  const [error, setError] = useState(true);
  const [loandingBanner, setLoandingBanner] = useState(true);

  //Variables para Paginado
  const [categoria, setCategoria] = useState([]);
  const [subCategoria, setSubCategoria] = useState([]);
  const [linea, setLinea] = useState([]);

  //Variables para Productos
  const [products, setProducts] = useState([]);
  const [totalPagina, setTotalPagina] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  //Variables para Marcas
  const [marcas, setMarcas] = useState([]);

  //Variables para Componentes
  const [componentesProd, setComponentes] = useState([]);



  //Peticion el Banner Principal
  const getInfo = async () => {

      if (marca === "Buscar"){
        //Petición a la api
        setLoandingBanner(true)
        const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${BANNERS}${marca}`);
        const res = await response.json();
        setBanner(res.data);
        setLoandingBanner(false)

        try {
          //Petición a la api
          setLoandingBanner(true)
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${BANNERS}${marca}`);
          const res = await response.json();

          setBanner(res.data);
          setLoandingBanner(false)

        } catch (error) {
          console.log('Error fetching data:', error);
          setLoandingBanner(false);
        }


      }
      else{
        //Petición a la api
        try {
          setLoandingBanner(true);
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${BANNERSCATEGORIA}${marca.replace(/\s+/g, '')}`);
          const res = await response.json();

          // Procesa la respuesta o realiza otras operaciones necesarias
          //Petición exitosa
          if ( res.data !== null )
          {
            setBanner(res.data);
            setLoandingBanner(false)
          }

          // En caso que exista un error en la petición del Banner
          else{
            //se asigna el banner de la seccion buscar
            const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${BANNERS}${"Buscar"}`);
            const res = await response.json();
            setBanner(res.data);
            setLoandingBanner(false)
          }

        } catch (error) {
          console.log('Error fetching data:', error);
          setLoanding(false);
          setError('Ocurrió un error al obtener los datos. Por favor, inténtalo de nuevo.');
        }
        
      }
  }




    useEffect(() => {

      console.log(marca);

      getInfo();

      const fetchDataAndHandleResponse = async () => {

        try {
          setLoanding(true);
          const response = await getProductsBrand(marca.toUpperCase(), search);
          // Procesa la respuesta o realiza otras operaciones necesarias
          setTotalPagina(response.totalPages);
          setTotalProducts(response.total);
          setProducts(response.productos);
          setError(false);
          setLoanding(false);

        } catch (error) {
          console.log('Error fetching data:', error);
          setLoanding(false);
          setError('Ocurrió un error al obtener los datos. Por favor, inténtalo de nuevo.');
        }
      };
    
      fetchDataAndHandleResponse();

     }, [marca, search])



  return (
    <div style={{backgroundColor:'#F9F9F9'}}>
    {
      loanding ?( <Loader/>):(
        <>
        {
          error || totalProducts == 0 ?( 
            //Error
            <ErrorPage />
            ):
            (
              <>
                {/*Banner de la Categoria */}
                <div className='categoryBanner__Container'>
                  <BannerCategory image={banner.banner__desktop} imageMini={banner.banner__movil} 
                                  consulta={marca} loandingBanner={loandingBanner} />
                </div>

                {/*Seccion Superiror */}
                <div className='formSearch__Container__Main'>
                  {/*Secuencia Lógica Categorias   */}
                  <div className='Pages'> 
                    <Link to={'/'} style={{textDecoration:'none', color:'#494949'}}>
                      <div>Incio</div>
                    </Link>
                    <div style={{textDecoration:'none', color:'#494949'}}> 
                        <AiOutlineRight style={{marginLeft:'0.5rem', marginRight:'0.5rem'}}/>
                        <>Marcas</>
                    </div>
                    <div className='pagesText__active' style={{textDecoration:'none', color:'#494949'}}> 
                        <AiOutlineRight style={{marginLeft:'0.5rem', marginRight:'0.5rem'}}/>
                        <>{marca}</>
                    </div>
                  </div>

                  {/*Barra de Busqueda */}
                  <div className='formSearch__Container'>
                    <SearchForm/>
                  </div>
                  
                </div>

                {/*Titulo de Resultado Desktop */}
                <div className='result__Search__Container' >
                    {
                      marca== "Buscar" ? null:(
                        <div className='result__Search text__Result__Category'> 
                          <span style={{fontWeight:'700', fontSize:'29px'}}> {marca}</span>  
                        </div>
                      )
                    }
                      
                </div>

                {/*Titulo de Resultado Movil */}
                <div className='result__Category__Container__Movil' >
                      <div className='result__Category__Movil text__Result__Category__Movil'> 
                        <>
                            <p style={{fontWeight:'700', fontSize:'25px', marginBottom:'0rem', textAlign:'center'}}>{marca}</p> 
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
                    <FiltersBar Consulta={marca} Marcas={marcas} Componentes={componentesProd} />
                  </div>

                  {/* Filtro Movil */}
                  <div className='category__filter__Movil'>
                    <div className='category__Display'>
                      Display 
                    </div>
                      <FilterSidebar/>
                  </div>

                  {/* Resultado de Busqueda */}
                  <>
                      <>
                        <div className='category__products'>
                          <div className='cards'>
                                <div className='cards__container'>
                                  <div className='cards__wrapper'> 
                                    <ul className='cards__items__Container'>
                                      {products?.map((item, index) => (
                                              <CardItemApi
                                              key={`${component}-${index}`} 
                                              Nombre={item.Nombre}
                                              Imagen={  item.Imagen }
                                              src={ "news02.jpg" }
                                              Marca={item.Marca}
                                              StockActual={item.StockActual}
                                              path={`/Details/${ item.Nombre_interno }`}
                                              />
                                          ))}
                                    </ul>
                                  </div>
                                </div>       
                          </div>
                          <div className='Paginado__Category'> 
                              <PaginationList cantidadPagina={ totalPagina } enlace={`/marcas/${marca}`} />
                              <div className="content-Top-options-list-link" style={{paddingLeft:'0.5rem',marginTop:'1rem'}}> 
                                  Total Productos: {totalProducts} 
                              </div>
                          </div>
                        </div>           
                      </>
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

export default MarcasApi;






