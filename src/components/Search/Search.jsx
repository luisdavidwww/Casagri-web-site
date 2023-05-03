import React, {  useMemo, useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
//import { getProductByName } from '../../selectors/getProductByName';
import  {getProductDataByName}  from "../../selectors/getInfoCasagri";
import queryString from 'query-string';
//componentes
import  SearchForm  from "./SearchForm";
import  FiltersBar  from "../Filters/FiltersBar";
import  FilterSidebar  from "../Filters/FilterSidebar-Movil";
import CardItem from '../Cards/CardItem';
import { BannerCategory } from 'components/BannerMain/BannerCategory';
import Loader from "components/Loader/Loader";
//Variables de Entorno
import { BANNERSCATEGORIA, BANNERS } from '../../routers/index';
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


const Search = ({ history }) => {


    //constantes
    const { query } = useParams();
    const navigate = useNavigate();

    //variables de estados
    const [alert, setAlert] = useState("");
    const [banner, setBanner] = useState([]);
    const [products, setProducts] = useState([]);
    const [loanding, setLoanding] = useState(false);


    //Peticion el Banner Principal
  const getInfo = async () => {

      //Estado del Loanding Verdadero 
      setLoanding(true);

      //Petición a la api
      const response = await fetch(`${'http://localhost:8080/api/'}${BANNERS}${'Buscar'}`);
      const res = await response.json();
      setBanner(res.data);
      //Estado del Loanding Falso
      setLoanding(false);

  }


  const buscarProducto = () => {

    //setProducts(getProductDataByName( query ));
    return getProductDataByName(query.toUpperCase());

}




    //constantes
    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );


    //usamos el hook del formulario 
    const [ formValues, handleInputChange ] = useForm({
            searchText: q
    });
    const { searchText } = formValues;

    //getProductByName
    //const products = useMemo(() => getProductByName( query ));
    

    useEffect(() => {
        getInfo();
      },[query])

  return (
    <div style={{backgroundColor:'#F9F9F9', paddingTop:'2rem'}}>

    {
      loanding ?( <Loader/>):(
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
                        Resultado de Búsqueda para:
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
                        <span style={{fontWeight:'700', fontSize:'29px'}}> Resultado de Búsqueda para: '{query}'</span>  
                    </div>
            </div>
            {/*Titulo de Resultado Movil */}
            <div className='result__Category__Container__Movil' >
                    <div className='result__Category__Movil text__Result__Category__Movil'> 
                      <>
                          <p style={{fontWeight:'700', fontSize:'25px', marginBottom:'0rem', textAlign:'center'}}>Resultado de Búsqueda para: '{query}'</p> 
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
            

                {/*Resultado de Busqueda*/}
                <>
                            {
                                
                                (  buscarProducto() !== null  ) 
                                && 
                                <>
                                {/*--------------------- Busqueda Exitosa -------------------------*/}
                                    <div className='category__products'>
                                        <div className='cards'>
                                            <div className='cards__container'>
                                                <div className='cards__wrapper'> 
                                                    <ul className='cards__items__Container'>
                                                    {buscarProducto()?.map((item, index) => (
                                                        <CardItem
                                                        component={"Categoria"}
                                                        key={`${'Search'}-${index}`}
                                                        src={item.imgUrl}
                                                        title={item.title}
                                                        label=''
                                                        path={`/Details/${ item.title }`}
                                                        price={item.price}
                                                        presentation={item.presentation}
                                                        categoria={""}
                                                        subCategoria={""}
                                                        Linea={""}
                                                        />
                                                    ))}
                                                    </ul>
                                                </div>
                                            </div>       
                                        </div>
                                    </div>
                                </>
                                
                            }

                            { 
                                
                                ( products.length == 0 && query !== undefined && searchText == alert)  
                                    && 
                                    <>
                                        {/*--------------------- Busqueda Fllida -------------------------*/}
                                        <div className='container__error'>
                                            <div className="alert alert-danger">
                                                Lo sentimos, no encontramos resultados para: "{ query }"
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


export default Search;


