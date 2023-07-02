import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';

import { fetchData } from "../../selectors/getInfoCasagriApi";

//componentes 
import CardItemApi from '../Cards/CardItemApi';
import  SearchForm  from "../Search/SearchForm";
import  FilterSidebar  from "../Filters/FilterSidebar-Movil";
import  FiltersBar  from "../Filters/FiltersBar";
import { BannerCategory } from 'components/BannerMain/BannerCategory';
import  PaginationList  from './PaginationApi';
import  Error  from '../../pages/Error404';

//Variables de Entorno
import { BANNERSCATEGORIA, BANNERS, CATEGORIAS, BUSCARCATEGORIA } from '../../routers/index';


//Loader Styles
import Loader from "components/Loader/Loader";


//Estilos
import './Category.css';
import './Pagination.css';


//icons
import { AiOutlineRight } from "react-icons/ai";


const Category = ({ component }) => {
   
  //query de la url
  const { consulta } = useParams();
  let { search } = useLocation();

  //Variables del Banner
  const [banner, setBanner] = useState([]);

  //Variables de Carga
  const [loanding, setLoanding] = useState(true);
  const [error, setError] = useState(null);
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

      if (consulta === "Buscar"){
        //Petición a la api
        setLoandingBanner(true)
        const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${BANNERS}${consulta}`);
        const res = await response.json();
        setBanner(res.data);
        setLoandingBanner(false)

        try {
          //Petición a la api
          setLoandingBanner(true)
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${BANNERS}${consulta}`);
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
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${BANNERSCATEGORIA}${consulta.replace(/\s+/g, '')}`);
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


    //Peticion para la secuencia logica del buscador
    const getPages = async () => {

      setSubCategoria("");
      setCategoria("");
      setLinea("");

      //Petición a la api
      let response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${BUSCARCATEGORIA}${consulta.replace(/\s+/g, '')}`);
      let res = await response.json();

      if (res.data.subcategoria != null){ 
        setLinea(res.data.nombre);
        setSubCategoria(res.data.subcategoria.nombre);
        if (subCategoria){
          let respon = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${CATEGORIAS}${res.data.subcategoria.categoria}`);
          let resp = await respon.json();
          setCategoria(resp.data.nombre);
        }
      }
      if (res.data.categoria  ){
        setSubCategoria(res.data.nombre);
        setCategoria(res.data.categoria.nombre);
      }
      if (res.data.subcategoria == null && res.data.categoria == null)
      {
        setCategoria(res.data.nombre);
      }
      
  }



    useEffect(() => {

      getInfo();
      getPages();

      const fetchDataAndHandleResponse = async () => {

        try {
          setLoanding(true);
          const response = await fetchData(consulta.toUpperCase(), search);
          // Procesa la respuesta o realiza otras operaciones necesarias
          setTotalPagina(response.totalPages);
          setTotalProducts(response.total);
          setProducts(response.productos);
          setMarcas(response.marcas);
          setComponentes(response.componentes);
          setError(null);
          setLoanding(false);

        } catch (error) {
          console.log('Error fetching data:', error);
          setLoanding(false);
          setError('Ocurrió un error al obtener los datos. Por favor, inténtalo de nuevo.');
        }
      };
    
      fetchDataAndHandleResponse();

     }, [consulta, search])



  return (
    <div style={{backgroundColor:'#F9F9F9'}}>
    {
      loanding ?( <Loader/>):(
        <>
        {
          error ?( 
            //Error
            <Error/>
            ):
            (
              <>
                {/*Banner de la Categoria */}
                <div className='categoryBanner__Container'>
                  <BannerCategory image={banner.banner__desktop} imageMini={banner.banner__movil} 
                                  consulta={consulta} loandingBanner={loandingBanner} />
                </div>

                {/*Seccion Superiror */}
                <div className='formSearch__Container__Main'>
                    {/*Secuencia Lógica Categorias*/}
                    <div className='Pages'> 
                      <Link to={`/Category/Buscar`} style={{textDecoration:'none', color:'#494949'}}> 
                          <>Productos</>
                      </Link>
                      <Link 
                        className={consulta === categoria ? 'pagesText__active' : 'pagesText'}
                        to={`/Category/${categoria}`} 
                        style={{textDecoration:'none', color:'#494949'}}> 
                        {categoria != "" ? (
                          <span className='pagesText__Categoria' >
                            <AiOutlineRight style={{marginLeft:'0.5rem', marginRight:'0.5rem'}}/>
                            {categoria}
                          </span>
                        ):null
                      }</Link>
                      <Link 
                        className={consulta === subCategoria ? 'pagesText__active' : 'pagesText'}
                        to={`/Category/${subCategoria}`} 
                        style={{textDecoration:'none', color:'#494949'}}>
                      { subCategoria != "" ? (
                          <span className='pagesText__Categoria'>
                            <AiOutlineRight style={{marginLeft:'0.5rem', marginRight:'0.5rem'}}/>
                            {subCategoria}
                          </span>
                        ):null
                      }</Link>
                      <Link 
                        className={consulta === linea ? 'pagesText__active' : 'pagesText'}
                        to={`/Category/${linea}`} 
                        style={{textDecoration:'none', color:'#494949'}}>
                      {
                        linea != "" ? (
                          <span className='pagesText__Categoria'>
                            <AiOutlineRight style={{marginLeft:'0.5rem', marginRight:'0.5rem'}}/>
                            {linea}
                          </span>
                        ):null
                      }
                      </Link>
                    </div>
                    {/*Barra de Busqueda */}
                    <div className='formSearch__Container'>
                      <SearchForm/>
                    </div>
                </div>

                {/*Titulo de Resultado Desktop */}
                <div className='result__Search__Container' >
                    {
                      consulta== "Buscar" ? null:(
                        <div className='result__Search text__Result__Category'> 
                          <span style={{fontWeight:'700', fontSize:'29px'}}> {consulta}</span>  
                        </div>
                      )
                    }
                      
                </div>

                {/*Titulo de Resultado Movil */}
                <div className='result__Category__Container__Movil' >
                      <div className='result__Category__Movil text__Result__Category__Movil'> 
                        <>
                            <p style={{fontWeight:'700', fontSize:'25px', marginBottom:'0rem', textAlign:'center'}}>{consulta}</p> 
                        </>
                      </div>
                </div>

                {/*Contenido de Sección */}
                <div className='category__Container'>

                  {/* Filtro */}
                  <div className='category__filter'>
                    <FiltersBar Consulta={consulta} Marcas={marcas} Componentes={componentesProd} />
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
                                              path={`/Details/${ item.Nombre_interno }`}
                                              />
                                          ))}
                                    </ul>
                                  </div>
                                </div>       
                          </div>
                          <div className='Paginado__Category'> 
                              <PaginationList cantidadPagina={ totalPagina } enlace={`/Category/${consulta}`} />
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

export default Category;
