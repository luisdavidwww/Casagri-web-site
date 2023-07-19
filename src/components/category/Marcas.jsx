import React, { useEffect, useState } from 'react';
import { useParams,Link, useLocation, useNavigate} from "react-router-dom";


//METODOS FILTRADO
import { getProductByCategory ,  
        getBrandsByName, 
        getProductByBrands } from "../../selectors/getInfoCasagri";
//componentes
import CardItemApi from '../Cards/CardItemApi';
import  SearchForm  from "../Search/SearchForm";
import  FiltersBar  from "../Filters/FiltersBar";
import  FilterSidebar  from "../Filters/FilterSidebar-Movil";
import { BannerCategory } from 'components/BannerMain/BannerCategory';
import { imgCasagriLoad } from '../../data/newsData';
import Loader from "components/Loader/Loader";
//Variables de Entorno
import { BANNERS } from '../../routers/index';

//icons
import { AiOutlineRight } from "react-icons/ai";



const Marcas = ({ component }) => {
   
    //query de la url
    const { marca } = useParams();
    let { search } = useLocation();
    let query = new URLSearchParams(search);

    let start = 0;
    let end = query.get("fin");


    const navigate = useNavigate();
    const location = useLocation()
    const  consultaParaLeerMarcas  = location.state;
  
   const [imgBanner, setImgBanner] = useState('');
   const [imgMiniBanner, setImgMiniBanner] = useState('');
   const [banner, setBanner] = useState([]);
   const [loanding, setLoanding] = useState(false);
   const [ currentPage, setCurrentPage ] = useState(0);
   const [ buscar, setBuscar ] = useState('');

   //Productos
   const [products, setProducts] = useState([]);

   //Filtros
   const [marcas, setMarcas] = useState([]);

   //variables para paginado
   const [categoria, setCategoria] = useState([]);
   const [subCategoria, setSubCategoria] = useState([]);
   const [linea, setLinea] = useState([]);
   


  //Peticion el Banner Principal
  const getBanner = async () => {
      //Estado del Loanding Verdadero 
      setLoanding(true);

      //Petición a la api
      const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${BANNERS}${"Buscar"}`);
      const res = await response.json();
      setBanner(res.data);
      //Estado del Loanding Falso
      setLoanding(false);

  }




    //Productos
    const filterProducts = () => {
        return getProductByBrands(marca.toUpperCase() , marca.toString() ).slice(currentPage, currentPage + 16 );
        //getProductByCategory(consultaParaLeerMarcas.toString().toUpperCase());
    }
    const filterProductsTotal = () => {
      return getProductByBrands(marca.toUpperCase() , marca.toString() );
      //getProductByCategory(consultaParaLeerMarcas.toString().toUpperCase());
  }
    //Leer Todas las marcas de la categoría
    const filterBrands = () => {
      setMarcas((getBrandsByName(getBrandsByName(getProductByCategory(marca.toString().toUpperCase())))));
      return getBrandsByName(getProductByCategory(marca.toString().toUpperCase()));
    }


    const pageSuma = 1;
    //botones de Paginación
    const nextPage = () => {
      navigate({search:`?Page=${start + pageSuma}`})
      setCurrentPage( currentPage + 16 );
    }

    const prevPage = () => {
          setCurrentPage( currentPage - 16 );
    }

    

 


    //use effects general
    useEffect(() => {
        
        setCurrentPage(0);
        filterProducts();

        filterBrands();

        console.log(consultaParaLeerMarcas);
        console.log(filterProductsTotal());
    }, [marca])

    useEffect(() => {
      getBanner();
    },[marca])


    useEffect(() => {
      filterProducts();
  }, [])


  return (
    <div style={{backgroundColor:'#F9F9F9'}}>
    {
      loanding ?( <Loader/>):(
        <>


                <div className='categoryBanner__Container'>
                  <BannerCategory image={banner.banner__desktop} imageMini={banner.banner__movil} consulta={consultaParaLeerMarcas} />
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
                      <div className='result__Search text__Result__Category'> 
                        <span style={{fontWeight:'500', fontSize:'23px', marginTop:'0.4rem', marginLeft:'0.1rem'}}>Marca:</span>  
                        <span style={{fontWeight:'700', fontSize:'29px', marginLeft:'0.5rem' }}>{/* <>&nbsp;</> */}  {marca}</span>  
                        
                      </div>
                      
                </div>

                {/*Titulo de Resultado Movil */}
                <div className='result__Category__Container__Movil' >
                    <div className='result__Category__Movil text__Result__Category__Movil'> 
                      <>
                          <p style={{fontWeight:'700', fontSize:'25px', marginBottom:'0rem', textAlign:'center'}}>Marca: {marca}</p> 
                      </>
                    </div>
                </div>
                
                
    
                {/*Contenido de Sección */}
                <div className='category__Container'>
                  {/* Filtro */}
                  <div className='category__filter'>
                    <FiltersBar Marcas={marcas} Consulta={consultaParaLeerMarcas}/>
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
                            <div className='category__products'>
                              <div className='cards'>
                                    <div className='cards__container'>
                                      <div className='cards__wrapper'> 
                                        <ul className='cards__items__Container'>
                                          {filterProducts()?.map((item, index) => (
                                              <CardItemApi
                                              key={`${component}-${index}`}
                                              src={imgCasagriLoad.imgUrl}
                                              Nombre={item.Nombre}
                                              Peso={item.PesoKG}
                                              path={`/DetailsNew/${ item.Nombre.replace(/\s+/g, '').replace(/[^a-zA-Z0-9 ]/g, '') }`}
                                              price={""}
                                              CodigoProd={item.CodigoProd}
                                              Marca={item.Marca}
                                              StockActual={item.StockActual}
                                              ranking={""}
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
                                
                                <div>
                                  <button 
                                      className="btn btn-primary"
                                      onClick={ prevPage }
                                  >
                                      Anteriores
                                  </button>
                                    <button 
                                      className="btn btn-primary"
                                      onClick={ nextPage }
                                  >
                                      Siguientes
                                  </button>
                                  <div>Total Productos: {getProductByBrands(marca.toUpperCase()).length}</div>
                                </div>
                            </div>
                            
                                
                        }
                  </>
                </div>
    
        </>
      )
    }
    </div>
  )
}

export default Marcas;
