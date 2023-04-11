import React, { useEffect, useState } from 'react';
import { useParams,Link, useLocation, useNavigate} from "react-router-dom";


//importacion de datos de productos
import { featuredProductss } from "../../data/featuredProductss";
import dataPro from "../../data/daticos/productos.json";
import { featuredProducts } from "../../data/featuredProducts";
import { ProductsAll } from "../../data/ProductsAll";
//METODOS FILTRADO
import { getProductByCategory , getProductByCat2 } from "../../selectors/getInfoCasagri";
//componentes
import CardItem from '../Cards/CardItem';
import CardItemNew from '../Cards/CardItemNew';
import  Search  from "../Search/Search";
import  SearchForm  from "../Search/SearchForm";
import  FiltersBar  from "../Search/FiltersBar";
import  FilterSidebar  from "../Search/FilterSidebar";
import { BannerCategory } from 'components/BannerMain/BannerCategory';
import { imgCasagriLoad } from '../../data/newsData';
import Loader from "components/Loader/Loader";
//Variables de Entorno
import { BANNERSCATEGORIA, BANNERS } from '../../routers/index';
//Datos para los banners 
import { BannerData } from '../../data/BannerData';
import { BannerCategoryImg } from '../../data/BannerData';
import { links } from "../common/Navbar/Mylinks";
//Estilos
import './Category.css';
//icons
import { AiOutlineRight } from "react-icons/ai";







// Valor del Banner Principal
const listaDatos = BannerData.filter(element => element.id === 3);

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




const Category = ({ component }) => {
   
    //query de la url
    const { consulta } = useParams();
    let { search } = useLocation();
    let query = new URLSearchParams(search);

    let start = 0;
    let end = query.get("fin");


    const navigate = useNavigate();
  
    //constante que almacena todas las categorias
    const allCategories = [
		'All',
		...new Set(featuredProductss.map(products => products.category)),
  ];

    //constante que almacena todas las Subcategorias
    const allSubCategories = [
      new Set(featuredProductss.map(products => products.subCategory)),
  ];

   const [products, setProducts] = useState([]);
   const [imgBanner, setImgBanner] = useState('');
   const [imgMiniBanner, setImgMiniBanner] = useState('');
   const [banner, setBanner] = useState([]);
   const [loanding, setLoanding] = useState(false);
   const [ currentPage, setCurrentPage ] = useState(0);
   const [ buscar, setBuscar ] = useState('');


   //variables apra paginado
   const [categoria, setCategoria] = useState([]);
   const [subCategoria, setSubCategoria] = useState([]);
   const [linea, setLinea] = useState([]);
   


  //Peticion el Banner Principal
  const getInfo = async () => {

    if (consulta === "Buscar"){
      //Estado del Loanding Verdadero 
      setLoanding(true);

      //Petición a la api
      const response = await fetch(`${'http://localhost:8080/api/'}${BANNERS}${consulta}`);
      const res = await response.json();
      setBanner(res.data);
      //Estado del Loanding Falso
      setLoanding(false);
    }
    else{
      //Estado del Loanding Verdadero 
      setLoanding(true);

      //Petición a la api
      const response = await fetch(`${'http://localhost:8080/api/'}${BANNERSCATEGORIA}${consulta.replace(/\s+/g, '')}`);
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
        const response = await fetch(`${'http://localhost:8080/api/'}${BANNERS}${"Buscar"}`);
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
      let response = await fetch(`${'http://localhost:8080/api/lineaProductos/buscarCategoria/'}${consulta.replace(/\s+/g, '')}`);
      let res = await response.json();

      if (res.data.subcategoria != null){ 
        setLinea(res.data.nombre);
        setSubCategoria(res.data.subcategoria.nombre);
        if (subCategoria){
          let respon = await fetch(`${'http://localhost:8080/api/categorias/'}${res.data.subcategoria.categoria}`);
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
        setProducts(featuredProducts);

          let compareBanner = BannerCategoryImg.filter((e) => {return e.category == 'buscar';})
         //declaramos las variables para las imagenes
         let condImg =  compareBanner.map(item => item.img).toString();
         let condImgMini = compareBanner.map(item => item.miniimg).toString();
 
         //Cargamos las imagenes
         setImgBanner(condImg);
         setImgMiniBanner(condImgMini);
        return
		}
        else {
        setProducts([]);
		    compare();
			  return
		}
    }



    //Paginacion Productos
    const filterProducts = () => {

            if( buscar.length === 0 ) 
            {
              return getProductByCategory(consulta.toUpperCase()).slice(currentPage, currentPage + 16);
              console.log(getProductByCategory(consulta.toUpperCase()));
            }



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

    

    //compara la props de URL con las categorias existentes
    const compare = () => {

      //Categorias
      if (consulta === 'Agroindustrial' || consulta === 'Maquinarias' 
          || consulta === 'Salud Animal' || consulta === 'Ferretería' 
          || consulta === 'Salud Pública')
      {
        /*let compareData = featuredProductss.filter((e) => {
          return e.category == consulta;
        })
        setProducts(compareData); getProductByCategory*/
        setProducts(getProductByCategory("AGROINDUSTRIAL").slice(0,5)); 
      }


      //SubCategorias
      if (consulta === 'Agroquímicos' || consulta === 'Semillas' 
      || consulta === 'Fertilizantes' || consulta === 'Sacos Cabuyas y Cordeles' 
      || consulta === 'Cercas de Alambre y Eléctricas' || consulta === 'Equípos Agrícolas'
      || consulta === 'Bombas de Agua' || consulta === 'Generadores'
      || consulta === 'Motores' || consulta === 'Medicina Veterinaria'
      || consulta === 'Instrumental Veterinario' || consulta === 'Manejo e Identificadores'
      || consulta === 'Ferreteria Agricola' || consulta === 'Electricidad'
      || consulta === 'Otros Productos ' || consulta === 'Control De Plaga'
      || consulta === 'Desinfectante'     
      )
      {
        let compareData = featuredProductss.filter((e) => {
          return e.subCategory == consulta;
        })
        
        //setProducts(compareData);
        const filtered = getProductByCat2("AGROQUIMICOS");
        return filtered.slice( currentPage, currentPage + 5); 
      }


      //tipoProductos 
      if (consulta === 'Insecticidas' || consulta === 'Herbicidas' 
      || consulta === 'Fungicidas' || consulta === 'Asperjadoras' 
      || consulta === 'Alta Presión' || consulta === 'Baja Presión'
      || consulta === 'Baños, Ectoparasitarios y Matagusanos'   
      )
      {
        let compareData = featuredProductss.filter((e) => {
          return e.TipoProducto == consulta;
        })
        setProducts(compareData);
      }

    }



    //use effects general
    useEffect(() => {
        productsMain();
        setCurrentPage(0);
        console.log(getProductByCategory(consulta.toUpperCase()));
    }, [consulta])

    useEffect(() => {
      getInfo();
    },[consulta])

    useEffect(() => {
      getPages();
    },[consulta])


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
                    <Link to={`/`} style={{textDecoration:'none', color:'#494949'}}> 
                        <>Inicio</>
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
                            {/*<BsXLg className='iconResult__Category'/>*/}
                      </>
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
                                              <CardItemNew
                                              key={`${component}-${index}`}
                                              src={imgCasagriLoad.imgUrl}
                                              Nombre={item.Nombre}
                                              Peso={item.PesoKG}
                                              path={`/DetailsNew/${ item.Nombre }`}
                                              price={""}
                                              CodigoProd={item.CodigoProd}
                                              Marca={item.Marca}
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
                                  <div>Total Productos: {getProductByCategory(consulta.toUpperCase()).length}</div>
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

export default Category;
