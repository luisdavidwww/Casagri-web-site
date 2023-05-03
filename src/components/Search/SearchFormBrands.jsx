import React, {  useMemo, useState } from 'react';
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { getBrand } from '../../selectors/getInfoCasagri';
import queryString from 'query-string';
//Estilos
import './Search.css';
//icons
import { BsSearch } from "react-icons/bs"

const SearchFormBrands = ({ MarcasProductos }) => {
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
 
 
     //const heroesFiltered = useMemo(() => getBrand( query ));

     //metodo para busqueda de producto
    const handleSearch = (e) => {
        if (searchText==='') {
            e.preventDefault();
            navigate(`/Category/All`);
          }  
          else{
            e.preventDefault();
            //navigate(`/search/${ searchText }`);
            //setAlert(searchText);
            
            console.log(getBrand( searchText, MarcasProductos ));
            console.log(searchText);
          }
        
    }

  return (
    <>
        {/* Formulario de Busqueda */}
        <div className='Search__Brand__container__Active'>
            <div className="Search__Brand__container__Active">
                    <form onSubmit={ handleSearch } className='Search__form'>
                            <input 
                                type="text"
                                placeholder="Buscar Marca"
                                className='Search__imput'
                                name="searchText"
                                autoComplete="off"
                                value={ searchText }
                                onChange={ handleInputChange } 
                                
                            />
                            <BsSearch className='icon__Search'/>
                          
                    </form>
            </div>
        </div>
    </>
  )
}

export default SearchFormBrands