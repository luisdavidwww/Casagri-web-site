import React, {  useMemo, useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { getProductByName } from '../../selectors/getProductByName';
import queryString from 'query-string';

//Estilos
import './SearchNavbar.css'


const SearchNavbar = ( clickSearch ) => {


    //constantes
    const { query } = useParams();
    const navigate = useNavigate();

    //variables de estados
    const [alert, setAlert] = useState("");
    const [click, setClick] = useState(clickSearch);


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
            navigate(0);
            setAlert(searchText);
          }
        
    }




  return (
<div>

    {/* Formulario de Busqueda */}
    <div className='Search__container__Active__Navbar'>
        <div className="container__Search__Active__Navbar">
                <form onSubmit={ handleSearch } className='Search__form__Navbar'>
                        <input 
                            type="text"
                            placeholder="Busca un producto"
                            className='Search__imput__Navbar'
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange } 
                        />
                         
                </form>
        </div>
    </div>
</div>

  )
}


export default SearchNavbar;


