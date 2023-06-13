import React, { useEffect, useState } from 'react';
import { useParams,Link, useLocation, useNavigate} from "react-router-dom";

//METODOS FILTRADO
import { getProductByCategory , 
        getProductByCategoryApi,  
        getBrandsByName,
        getComponentByName, 
         } from "../../selectors/getInfoCasagri";
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


    const navigate = useNavigate();

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


   //Productos
   const [products, setProducts] = useState([]);
   const [img, setImagen] = useState([]);
   const [masterProd, setMasterProd] = useState([]);
   const [productsComb, setProductsComb] = useState([]);
   //const [prueba, setPrueba] = useState("");


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









    
    //Obtenemos los Productos Disponibles
    const getProductosProxyCasagriDisponibles = async () => {

      if ( products.length == 0)
      {
        await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE__TWO}${PRODUCTOS_DISPONIBLES}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la petición');
          }
          return response.json();
        })
        .then(data => {
          // Procesar los datos si la petición fue exitosa
          setProducts(data.myQueryResults.Table);
          //console.log('Peticion exitosa,toma los productos bro'+products);
        })
        .catch(error => {
          // Manejar el error de la petición
          console.error('Error:', error.message);
        })
      }
      else{

      }

    }

    //Obtenemos los Productos Disponibles
    const getImagenProductos = async () => {
      if ( img.length == 0)
      {
        await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE__TWO}${PRODUCTOS_IMAGENES}`)
        .then(response => {
        if (!response.ok) {
            throw new Error('Error en la petición');
        }
        return response.json();
        })
        .then(data => {
        // Procesar los datos si la petición fue exitosa
        //setError(false);
        setImagen(data.myQueryResults.Table);
        //console.log('Peticion exitosa,toma las imagenes bro',img);
        })
        .catch(error => {
        // Manejar el error de la petición
        //setError(true);
        console.error('Error:', error.message);
        })
      }
      else{

      }

        

    
    }

    //Obtenemos los Productos Maestros
    const getProductosMaestros = async () => {

      if ( masterProd.length == 0)
      {
        await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE__TWO}${PRODUCTOS_MAESTROS}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la petición');
          }
          return response.json();
        })
        .then(data => {
          // Procesar los datos si la petición fue exitosa
          setMasterProd(data.myQueryResults.Table);
          //console.log('Peticion exitosa,toma los productos bro'+products);
        })
        .catch(error => {
          // Manejar el error de la petición
          console.error('Error:', error.message);
        })
      }
      else{
      }
  
    }


    const filterProducts = ( ) => {

      const Combinado = masterProd.map(master => {
        let disponible = products.find(disp => disp.Nombre === master.Nombre);
        if ( typeof disponible !== 'undefined' ){
          return { 
            IdApi: master.IdApi,
            Nombre: master.Nombre,
            Marca: master.Marca,
            Imagen: null,
            cat1: master.cat1,
            cat2: master.cat2,
            Cat3: master.Cat3,
            cat4: master.cat4,
            cat5: master.cat5,
          };
        }
        else{
          return { 
            IdApi:null,
          };          
        }
      })

      let ProductosDisponibles = Combinado.filter( products => products.IdApi !== null);

      const Productos_Imagenes = ProductosDisponibles.map(item => {
        let imgProducto = img.find(image => image.IdApi === item.IdApi);
          return { 
            IdApi: item.IdApi,
            Nombre: item.Nombre,
            Imagen: imgProducto ? imgProducto.Imagen : null,
            Marca: item.Marca,
            cat1: item.cat1,
            cat2: item.cat2,
            Cat3: item.Cat3,
            cat4: item.cat4,
            cat5: item.cat5,
          };


      });

      console.log('LosProductos en existencia: ', getProductByCategoryApi( consulta.toUpperCase(), Productos_Imagenes ));

      //Filtro Por Categoria
      return getProductByCategoryApi( consulta.toUpperCase(), Productos_Imagenes ).slice( pagesNext * 17  , (pagesNext * 17) + 16);

    }






    //Marcas
    const filterBrands = () => {
      setMarcas((getBrandsByName(getBrandsByName(getProductByCategory(consulta.toUpperCase())))));
      return getBrandsByName(getProductByCategory(consulta.toUpperCase()));
    }
    
    //Componentes 
    const filtersComponent = () => {
      setComponentes((getComponentByName(getProductByCategory(consulta.toUpperCase()))));
      //console.log(getComponentByName(getProductByCategory(consulta.toUpperCase())));
      return getComponentByName(getProductByCategory(consulta.toUpperCase()));
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

          //console.log( searchF.match(regex).toString() );
          //console.log( parseInt(condicion) );
      }
      //cuando es la página 0
      else {
          setPagesNext(0);
          //filterProducts();
      }
          
    }

    


    useEffect(() => {

       //Peticiones Para la Api Casagri
       getProductosProxyCasagriDisponibles();
       getImagenProductos();
       getProductosMaestros();
       filterProducts();

      setCurrentPage(0);

      filterBrands();
      filtersComponent();

      getInfo();
      getNumbLink();
        
    }, [consulta])

    useEffect(() => {
      //searchF es todos los parametros: ?Page=0
        getNumbLink();
    },[searchF])

    useEffect(() => {
      getPages();

      setCantPages((getProductByCategory(consulta.toUpperCase()).length)/17);
      //setCantPages((getProductByCategoryApi( consulta.toUpperCase(), Final ).length)/17);
      
      setPaginado(Math.trunc(cantPages));
      
    },[consulta, pagesNext])

    useEffect(() => {
      getInfo();
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
                                    <div className="">
                                      No hay productos disponibles
                                    </div>
                                  </div>
                                  
                      }
      
                      {
                              (  filterProducts !== null  ) 
                              && 
                              <>
                              {
                                  products.length  == 0  ?
                                    (
                                    <> 
                                      <div className='container__error'>
                                        <div className="alert alert-danger">
                                          <Loader/>
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
                                                          Imagen={item.Imagen}
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
