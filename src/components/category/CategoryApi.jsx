import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from "react-router-dom";



import { obtenerProductosPorCategoria } from "../../selectors/getInfoCasagriApi";

//componentes
import CardItemNew from '../Cards/CardItemNew';
import  FilterSidebar  from "../Filters/FilterSidebar-Movil";
import { BannerCategory } from 'components/BannerMain/BannerCategory';
import { imgCasagriLoad } from '../../data/newsData';
import  PaginationList  from './PaginationApi';

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
   const [loanding, setLoanding] = useState(false);


 


   //Productos
   const [products, setProducts] = useState([]);
   const [totalPagina, setTotalPagina] = useState(0);
   const [currentPage, setCurrentPage] = useState(1);
   const [img, setImagen] = useState([]);




    useEffect(() => {

      const fetchData = async () => {
        try {
          const response = await fetch(`https://backend-casagri-render.onrender.com/api/articulos/Categoria2/AGROQUIMICOS?page=${currentPage}`);
          const resp = await response.json();

          setCurrentPage(resp.currentPage)
          setTotalPagina(resp.totalPages) ;
          setProducts(resp.productos) ;
          

        } catch (error) {
          console.log('Error fetching data:', error);
        }

      };
      
      fetchData();
      
 
       
    }, [])

    useEffect(() => {

      const fetchData = async () => {
        try {
          const response = await fetch(`https://backend-casagri-render.onrender.com/api/articulos/Categoria2/AGROQUIMICOS?page=${search}`);
          const resp = await response.json();

          setCurrentPage(resp.currentPage)
          setTotalPagina(resp.totalPages) ;
          setProducts(resp.productos) ;
          

        } catch (error) {
          console.log('Error fetching data:', error);
        }

      };
      
      fetchData();
      console.log(search)
       
    }, [search])



  return (
    <div style={{backgroundColor:'#F9F9F9'}}>
    {
      loanding ?( <Loader/>):(
        <>
                <div className='categoryBanner__Container'>
                  <BannerCategory image={banner.banner__desktop} imageMini={banner.banner__movil} consulta={consulta} />
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
                                                    {products.map((item, index) => (
                                                            <CardItemNew
                                                            key={`${component}-${index}`}
                                                            src={imgCasagriLoad.imgUrl}
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
