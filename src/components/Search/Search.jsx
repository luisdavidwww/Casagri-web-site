import React, {  useMemo, useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { getProductByName } from '../../selectors/getProductByName';
import queryString from 'query-string';


//componentes
import  ProductContainerNew  from "../Search/ProductContainerNew";
import CardItem from '../Cards/CardItem'

//Estilos
import './Search.css'

//icons
import { BsSearch } from "react-icons/bs"


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


    const heroesFiltered = useMemo(() => getProductByName( query ))


    //metodo del formulario para 
    const handleSearch = (e) => {
        if (searchText==='') {
            e.preventDefault();
            navigate(`/Category/All`);
          }  
          else{
            e.preventDefault();
            navigate(`/search/${ searchText }`);
            setAlert(searchText);
          }
        
    }


  return (
<div className='Search__Background' >

    {/* Formulario de Busqueda */}
    <div className='Search__container__Active'>
        <div className="container__Search__Active">
                <form onSubmit={ handleSearch } className='Search__form'>
                        <input 
                            type="text"
                            placeholder="Busca un producto"
                            className='Search__imput'
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange } 
                        />
                        
                        <button className='Search__btn' type='submit'><BsSearch className='Search__icon' /></button>
                </form>
        </div>

            {/* Resultado de Busqueda */}
            <div className="">
                    {
                        (  heroesFiltered.length !== 0  ) 
                        && 
                        <>
                        <div className="alert alert-danger">
                                <h1>Resultado de Busqueda: { query }</h1>
                        </div>
                            <div className='cards'>
                                <div className='cards__container'>
                                    <div className='cards__wrapper'>
                                    <ul className='cards__items'>
                                    {heroesFiltered?.map((item) => (
                                        <CardItem
                                        key={item.id}
                                        src={item.imgUrl}
                                        title={item.title}
                                        label=''
                                        path={`/cart/${ item.id }`}
                                        price={item.price}
                                        presentation={item.presentation}
                                        />
                                    ))}
                                    </ul>
                                    </div>
                                </div>       
                            </div>
                        </>
                        
                    }

                    { 
                        ( heroesFiltered.length == 0 && query !== undefined && searchText == alert)  
                            && 
                            <div className="alert alert-danger">
                                <h1>Lo sentimos no existe el producto: { query }</h1>
                            </div>
                    }



            </div>
    </div>
</div>

  )
}


export default Search;


