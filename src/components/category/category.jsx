import React, { useEffect, useState } from 'react';
import { useParams,Link, useLocation, useNavigate} from "react-router-dom";

//METODOS FILTRADO
import { getProductByCategory , 
        getProduct,  
        getBrandsByName,
        getComponentByName, 
        getProductByBrands } from "../../selectors/getInfoCasagri";
//componentes
import CardItemNew from '../Cards/CardItemNew';
import  SearchForm  from "../Search/SearchForm";
import  FiltersBar  from "../Filters/FiltersBar";
import  FilterSidebar  from "../Filters/FilterSidebar-Movil";
import { BannerCategory } from 'components/BannerMain/BannerCategory';
import { imgCasagriLoad } from '../../data/newsData';
import  Holis  from './TablePaginationOnly';
import  PaginationList  from './Pagination';
import Loader from "components/Loader/Loader";
//Variables de Entorno
import { BANNERSCATEGORIA, BANNERS, CATEGORIAS,
          BUSCARCATEGORIA, } from '../../routers/index';
// Data
import { PRODUCTOS_MAESTROS, PRODUCTOS_DISPONIBLES, PRODUCTOS_IMAGENES } from '../../routers/index';
//Estilos
import './Category.css';
import './Pagination.css';
//icons
import { AiOutlineRight } from "react-icons/ai";


const Category = ({ component }) => {
   
    //query de la url
    const { consulta } = useParams();
    let { search, state } = useLocation();

    const searchF = search || `?Page=0`;
    const NumbPage = state?.numberPage;

    let start = 0;

    const navigate = useNavigate();
    const location = useLocation();

   const [banner, setBanner] = useState([]);
   const [loanding, setLoanding] = useState(false);
   const [ currentPage, setCurrentPage ] = useState(0);
   const [ buscar, setBuscar ] = useState('');


   //Filtros
   const [marcas, setMarcas] = useState([]);
   const [componentes, setComponentes] = useState([]);

   //variables para paginado
   const [categoria, setCategoria] = useState([]);
   const [subCategoria, setSubCategoria] = useState([]);
   const [linea, setLinea] = useState([]);

   //numero de la pagina
   const [pagesNext, setPagesNext] = useState(0);
   //cantidad de paginas que tiene la consulta
   const [cantPages, setCantPages] = useState(0);

   //Arreglo de numerod e paginas para botones
   const [paginado, setPaginado] = useState([]);
   


  //Peticion el Banner Principal
  const getInfo = async () => {

    if (consulta === "Buscar"){
      //Estado del Loanding Verdadero 
      setLoanding(true);

      //Petición a la api
      const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${BANNERS}${consulta}`);
      const res = await response.json();
      setBanner(res.data);
      //Estado del Loanding Falso
      setLoanding(false);

    }
    else{
      //Estado del Loanding Verdadero 
      setLoanding(true);

      //Petición a la api
      const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${BANNERSCATEGORIA}${consulta.replace(/\s+/g, '')}`);
      const res = await response.json();

      //Petición exitosa
      if ( res.data !== null )
      {
        setBanner(res.data);
        //Estado del Loanding Falso
        setLoanding(false); 
      }
      // En caso que exista un error en la petición del Banner
      else{
        //se asigna el banner de la seccion buscar
        const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${BANNERS}${"Buscar"}`);
        const res = await response.json();
        setBanner(res.data);

        //Estado del Loanding Falso
        setLoanding(false);
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


    //Productos Principales a Mostrar 
    const productsMain = () => {

      if (consulta === 'Buscar'){

         return getProduct().slice(currentPage, currentPage + 16);
		}
        else {
          return getProduct().slice(currentPage, currentPage + 16);
		}
    }


    //Productos
    const filterProducts = ( ) => {

      if (consulta === 'Buscar'){
        return getProduct().slice(currentPage, currentPage + 16);
      }

      if ( pagesNext == 0){
        return getProductByCategory(consulta.toUpperCase()).slice(0  , 16);
      }


      return getProductByCategory().slice( pagesNext * 17  , (pagesNext * 17) + 16);
    }

    //Marcas
    const filterBrands = () => {
      setMarcas((getBrandsByName(getBrandsByName(getProductByCategory(consulta.toUpperCase())))));
      return getBrandsByName(getProductByCategory(consulta.toUpperCase()));
    }
    
    //Componentes 
    const filtersComponent = () => {
      setComponentes((getComponentByName(getProductByCategory(consulta.toUpperCase()))));
      console.log(getComponentByName(getProductByCategory(consulta.toUpperCase())));
      return getComponentByName(getProductByCategory(consulta.toUpperCase()));
    }


    //botones de Paginación
    const nextPage = () => {
      //navigate({search:`?Page=${start + pageSuma}`})
      
      //setCurrentPage( currentPage + 16 );
      //navigate({search:`?Page=${pagesNext + 1}`} , { state: {numberPage: 1} } );
      setPagesNext(pagesNext + 1);
      navigate({search:`?Page=${pagesNext + 1}`} , { state: {numberPage: pagesNext + 1 } } );
      
      //setCurrentPage( currentPage + 16 );
    }

    const prevPage = () => {
      if (pagesNext == 1){
          setCurrentPage( currentPage - 16 );
          navigate(`/Category/${consulta}`);
          setPagesNext(0);
      }
      else {
          setCurrentPage( currentPage - 16 );
          navigate(`?Page=${pagesNext - 1}`);
          setPagesNext(pagesNext - 1);
      }
          
    }

    //Obtener numero de pagina del enlace
    const getNumbLink = () => {

      //definimos la regla para detectar en numero de pagina
      var regex = /(\d+)/g;

      /* 
      searchF es el condicional de busqueda de numero de paginas, cuando
      es la pagina cero(primera pagina): '?Page=0', luego las paginas que
      detecta son: '?Page=1', '?Page=2', '?Page=3'

      Lo que nos interesa de esta cadena de caracteres del enlace es el valor 
      numérico: 0,2,3.... etc
      */
      //guardamos el numero de pagina como un string
      let condicion = searchF.match(regex).toString();

      //cuando es una pagina diferente a la 0
      if ( parseInt(condicion) !== 0 ){

          setPagesNext(parseInt(condicion));

          console.log( searchF.match(regex).toString() );
          console.log( parseInt(condicion) );
      }
      //cuando es la página 0
      else {
          setPagesNext(0);
          //filterProducts();
      }
          
    }

    //Obtener numero de pagina del enlace
    const arrayPaginado = () => {

      //definimos la regla para detectar en numero de pagina
      let miarray = new Array(10);
      miarray.forEach(function(item,index,arr){
        console.log("Posición " + index + ": " + item);
    });
          
    }

    

    //use effects general
    useEffect(() => {
        productsMain();
        
        setCurrentPage(0);
        filterProducts();

        filterBrands();
        filtersComponent();

        getInfo();
        getNumbLink();
        
    }, [consulta])

    useEffect(() => {
      getNumbLink();
    },[searchF])

    useEffect(() => {
      getPages();

      setCantPages((getProductByCategory(consulta.toUpperCase()).length)/17);

      
      setPaginado(Math.trunc(cantPages));

    

      console.log('holis bebe'+ paginado);


      console.log((getProductByCategory(consulta.toUpperCase()).length)/17);
      console.log( pagesNext +'-------------'+ cantPages );
      
    },[consulta, pagesNext ])

    useEffect(() => {
      getInfo();
      filterProducts();

      getNumbLink();  

  }, [pagesNext])


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
                    <FiltersBar Marcas={marcas} Consulta={consulta} Componentes={componentes}/>
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
                    { 
                              ( filterProducts === null  ) 
                                  && 
                                  <div className='container__error'>
                                    <div className="alert alert-danger">
                                      No hay productos disponibles
                                    </div>
                                  </div>
                                  
                      }
      
                      {
                              (  filterProducts !== null  ) 
                              && 
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
                                                  Peso={item.PesoKG}
                                                  elco={item.Nombre}
                                                  /*path={`/DetailsNew/${ item.Nombre.replace(/\s+/g, '').replace(/[^a-zA-Z0-9 ]/g, '') }`}*/
                                                  path={`/DetailsNew/${ item.Nombre.replace(/ /g, "-").replace(/%/g, "").replace(/[ / ]/g, "_") }`}
                                                  price={""}
                                                  CodigoProd={item.CodigoProd}
                                                  Marca={item.Nombre}
                                                  
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

                                      {/* Botones Pagina siguiente y Anterior */}
                                      <div>
                                      {
                                        /*
                                        
                                        <button 
                                          className="btn btn-primary"
                                          onClick={ prevPage }
                                      >
                                          Anteriores
                                      </button>
                                        {
                                        (  pagesNext == Math.trunc(cantPages) ) 
                                          && 
                                          <>
                                          </>
                                        }
                                        {
                                        (  pagesNext < Math.trunc(cantPages)  ) 
                                          && 
                                          <>
                                          {
                                              pagesNext == Math.trunc(cantPages)-1 && Number.isInteger(cantPages) ? (null):(
                                              <button 
                                              className="btn btn-primary"
                                              onClick={ nextPage }
                                              >
                                                  Siguientes
                                              </button>

                                            )
                                          }
                                          </>    
                                        }
                                        <div>Total Productos: {getProductByCategory(consulta.toUpperCase()).length}</div>
                                        Paginas: {pagesNext+1} / {Math.trunc(cantPages)}
                                        <div>Paginado: { paginado } </div>


                                        recorrido de las paginas:
                                        <div>
                                            {Paginas?.filter((it, idx) => idx < Math.trunc(cantPages)).map((item, index) => (
                                              <div key={`paginado-${index}`} >
                                                {item.pagina}
                                              </div>
                                            ))}
                                        </div>

                                        <div>
                                            {Paginas?.filter((it, idx) => idx < Math.trunc(cantPages)+1).map((item, index) => (
                                              <div key={`paginado-${index}`} >
                                                {item.pagina}
                                              </div>
                                            ))}
                                        </div>
                                        
                                        */
                                      }
                                      </div>
                                      
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
                              
      
                      }
                    </>
                </div>
    
        </>
      )
    }
    </div>
  )
}

export default Category;
