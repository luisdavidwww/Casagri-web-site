import React, {  useMemo, useState } from 'react';
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { getProductByName } from '../../selectors/getProductByName';
import queryString from 'query-string';
import  data  from '../../data/daticos/ProductosNew.json';
//Estilos
import './Search.css';
//icons
import { BsSearch } from "react-icons/bs"


const SearchForm = ({ history }) => {

    //constantes
    const { query } = useParams();
    const navigate = useNavigate();

    //variables de estados
    const [alert, setAlert] = useState("");
    const [showAllSuggestions, setShowAllSuggestions] = useState(false);
    const maxSuggestions = 5; // Número máximo de sugerencias a mostrar inicialmente


    //constantes
    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );


    //usamos el hook del formulario 
    const [ formValues, handleInputChange ] = useForm({
            searchText: q
    });
    const { searchText } = formValues;


    const heroesFiltered = useMemo(() => getProductByName( query ))


    //metodo para busqueda de producto
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
    <div>
        {/* Formulario de Busqueda */}
        <div className='Search__container__Active'>
            <div className="container__Search__Active">
                
                    <form onSubmit={ handleSearch } className='Search__form'>
                            <input 
                                type="text"
                                placeholder="Buscar productos"
                                className='Search__imput'
                                name="searchText"
                                autoComplete="off"
                                value={ searchText }
                                onChange={ handleInputChange } 
                                list="suggestionsList"
                                
                            />
                            {/*<BsSearch className='icon__Search'/>*/}
                          
                    </form>
                    <datalist id="suggestionsList" >
                              {searchText.length >= 4 ? (
                                <div>
                                  {data
                                    .slice( showAllSuggestions ? data.length : maxSuggestions)
                                    .map((item, index) => (
                                      <option
                                        key={index}
                                        value={`${item.Nombre.toLowerCase()}`}
                                      />
                                    ))}
                                    <button onClick={() => setShowAllSuggestions(true)}>Ver todas</button>
                                    {showAllSuggestions && (
                                      <button onClick={() => setShowAllSuggestions(false)}>Ver menos</button>
                                    )}
                                </div>
                              ) : null}
                      </datalist>
            </div>
        </div>
    </div>

  )
}


export default SearchForm;

