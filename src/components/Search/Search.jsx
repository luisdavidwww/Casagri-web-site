import React, {  useMemo, useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { getProductByName } from '../../selectors/getProductByName';
import queryString from 'query-string';
//componentes
import  SearchForm  from "./SearchForm";
import  FiltersBar  from "../Search/FiltersBar";
import  FilterSidebar  from "../Search/FilterSidebar";
import CardItem from '../Cards/CardItem';
import { BannerCategory } from 'components/BannerMain/BannerCategory';
//Datos para los banners 
import { BannerSearch } from '../../data/BannerData';
//Estilos
import './Search.css';
//icons
import {  BsXLg } from "react-icons/bs";



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


    //constantes
    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );


    //usamos el hook del formulario 
    const [ formValues, handleInputChange ] = useForm({
            searchText: q
    });
    const { searchText } = formValues;


    const products = useMemo(() => getProductByName( query ));

    useEffect(() => {
        console.log(listaDatos);
    }, [])

  return (
    <>

        <BannerCategory image={img} imageMini={imgMini} consulta={tit} />

        {/*Barra de Busqueda Superiror */}
        <div className='formSearch__Container__Main'>
            <div className='formSearch__Container'>
                <SearchForm/>
            </div>
        </div>

        {/* Contenido de Seccion*/}
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

                {/*--------------------- Resultado de Busqueda -------------------------*/}
                <div className="">
                        {
                            
                            (  products.length !== 0  ) 
                            && 
                            <>
                            {/*--------------------- Busqueda Exitosa -------------------------*/}

                            {/*
                                <div className="alert alert-danger">
                                        <h1>Resultado de Busqueda: { query }</h1>
                                </div>

                             */}

                                <div className='category__products'>
                                    <div className='cards'>
                                        {/*Titulo de Resultado Desktop */}
                                        <div className='result__Search__Container' >
                                            <div className='result__Search text__Result__Category'> 
                                                {`${'Resultado: '} ${''}`}
                                                <span style={{fontWeight:'700'}}> "{query}"</span>  
                                            </div>
                                        </div>
                                        {/*Titulo de Resultado Movil */}
                                        <div className='result__Category__Container__Movil' >
                                            <div className='result__Category__Movil text__Result__Category__Movil'> 
                                            <>
                                                <p style={{fontWeight:'700'}}>{`${'Resultado: '}` }"{query}"</p> 
                                                {/*<BsXLg className='iconResult__Category'/>*/}
                                            </>
                                            </div>
                                        </div>
                                            <div className='cards__container'>
                                                <div className='cards__wrapper'> 
                                                    <ul className='cards__items__Container'>
                                                    {products?.map((item, index) => (
                                                        <CardItem
                                                        component={"Categoria"}
                                                        key={`${'Search'}-${index}`}
                                                        src={item.imgUrl}
                                                        title={item.title}
                                                        label=''
                                                        path={`/Details/${ item.id }`}
                                                        price={item.price}
                                                        presentation={item.presentation}
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
                </div>
        </div>
    </>

  )
}


export default Search;


