import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from "react-router-dom";

import { fetchData } from "../../selectors/getInfoCasagriApi";

//componentes 
import CardItemApi from '../Cards/CardItemApi';
import  SearchForm  from "../Search/SearchForm";
import  FilterSidebar  from "../Filters/FilterSidebar-Movil";
import  FiltersBar  from "../Filters/FiltersBar";
import { BannerCategory } from 'components/BannerMain/BannerCategory';
import { imgCasagriLoad } from '../../data/newsData';
import  PaginationList  from './PaginationApi';

//Variables de Entorno
import { BANNERSCATEGORIA, BANNERS, CATEGORIAS,
  BUSCARCATEGORIA, PRODUCTOS_MAESTROS, 
  PRODUCTOS_DISPONIBLES, PRODUCTOS_IMAGENES } from '../../routers/index';


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
  let { search, state } = useLocation();

  const [banner, setBanner] = useState([]);
  const [loanding, setLoanding] = useState(true);

  //variables para paginado
  const [categoria, setCategoria] = useState([]);
  const [subCategoria, setSubCategoria] = useState([]);
  const [linea, setLinea] = useState([]);

  //Productos
  const [products, setProducts] = useState([]);
  const [totalPagina, setTotalPagina] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [img, setImagen] = useState([]);



    //Peticion el Banner Principal
    const getInfo = async () => {

      if (consulta === "Buscar"){

        //Petición a la api
        const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${BANNERS}${consulta}`);
        const res = await response.json();
        setBanner(res.data);

      }
      else{

        //Petición a la api
        const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${BANNERSCATEGORIA}${consulta.replace(/\s+/g, '')}`);
        const res = await response.json();

        //Petición exitosa
        if ( res.data !== null )
        {
          setBanner(res.data);

        }
        // En caso que exista un error en la petición del Banner
        else{
          //se asigna el banner de la seccion buscar
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${BANNERS}${"Buscar"}`);
          const res = await response.json();

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
          setLoanding(false);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };
    
      fetchDataAndHandleResponse();

     }, [consulta, search])



  return (
    <div style={{backgroundColor:'#F9F9F9'}}>
    {
      loanding ?( <Loader/>):(
        <>
                <div className='categoryBanner__Container'>
                  <BannerCategory image={banner.banner__desktop} imageMini={banner.banner__movil} consulta={consulta} />
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
                    <FiltersBar  Consulta={consulta} />
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
                                                            
                                                            src={ "news02.jpg" }
                                                            Nombre={item.Nombre}
                                                            Imagen={  item.Imagen }
                                                            CargandoImg={ img.length  == 0 ? "Cargando" : " Cargada" }
                                                            Peso={item.PesoKG}
                                                            elco={item.Nombre}
                                                            path={`/DetailsNew/${ item.Nombre.replace(/ /g, "-").replace(/%/g, "").replace(/[ / ]/g, "_") }`}
                                                            price={""}
                                                            CodigoProd={item.CodigoProd}
                                                            Marca={item.Marca}
                                                            
                                                            component={component}
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
    </div>
  )
}

export default Category;













/*

<>
                              {
                                  products.length  == 0  || masterProd.length == 0  ?
                                    (
                                    <> 
                                      <div className='container__error'>
                                        <div className="">
                                          Cargando Articulos...
                                        </div>
                                      </div>
                                    </>
                                    ):
                                    (
                                    <>
                                    <div className='category__products'>
                                      <div className='cards'>
                                            <div className='cards__container'>
                                              <div className='cards__wrapper'> 
                                                <ul className='cards__items__Container'>
                                                  {filterProducts()?.map((item, index) => (
                                                          <CardItemNew
                                                          key={`${component}-${index}`}
                                                          src={imgCasagriLoad.imgUrl}
                                                          Nombre={item.Nombre}
                                                          Imagen={ img.length  == 0 ? "Cargando" : item.Imagen }
                                                          CargandoImg={ img.length  == 0 ? "Cargando" : " Cargada" }
                                                          Peso={item.PesoKG}
                                                          elco={item.Nombre}
                                                          path={`/DetailsNew/${ item.Nombre.replace(/ /g, "-").replace(/%/g, "").replace(/[ / ]/g, "_") }`}
                                                          price={""}
                                                          CodigoProd={item.CodigoProd}
                                                          Marca={item.Marca}
                                                          
                                                          component={component}
                                                          categoria={""}
                                                          subCategoria={""}
                                                          Linea={""}

                                                          //NuevosParametros
                                                          arrayProductosStock={ filterProducts() }
                                                          />
                                                      ))}
                                                </ul>
                                              </div>
                                            </div>       
                                      </div>
                                      <div className='Paginado__Category'>
                                          
                                          {
                                            Number.isInteger(cantPages) ? (
                                              <>
                                                <PaginationList cantidadPagina={ Math.trunc(cantPages) } enlace={`/Category/${consulta}`} />
                                              </>
                                            ):
                                            (
                                              <>
                                                <PaginationList cantidadPagina={ Math.trunc(cantPages)+1 } enlace={`/Category/${consulta}`} />
                                              </>
                                            )
                                          }
 
                                      </div>
                                    </div>           
                                    </>
                                    )        
                              }
                              </>
                              */
