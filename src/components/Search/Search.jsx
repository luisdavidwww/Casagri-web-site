import React, {  useMemo, useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { getProductByName } from '../../selectors/getProductByName';
import queryString from 'query-string';
//componentes
import  SearchForm  from "./SearchForm";
import  SimpleAccordion  from "./FiltersBar";
import CardItem from '../Cards/CardItem';
//Estilos
import './Search.css';
//icons
import {  BsXLg } from "react-icons/bs";


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


    const products = useMemo(() => getProductByName( query ))


  return (
    <>

        {/*Barra de Busqueda Superiror */}
        <div className='formSearch__Container__Main'>
            <div className='formSearch__Container'>
                <SearchForm/>
            </div>
        </div>

        {/* Formulario de Busqueda */}
        <div className='category__Container'>

            {/* Filtro de Busqueda  */}
            <div className='category__filter'>
                <SimpleAccordion/>
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
                                        <div className='result__Category__Container' >
                                            <div className='result__Search text__Category'> 
                                                {`${'Resultado de Busqueda: '} ${''}`}
                                                <span style={{fontWeight:'700'}}>{`${' '}${query}`}</span>  
                                                <BsXLg className='iconResult__Category'/>
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
                                            No se encuentra el producto: "{ query }"
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


