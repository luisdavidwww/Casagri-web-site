import React, {  useMemo, useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { getBrand } from '../../selectors/getInfoCasagri';
import queryString from 'query-string';
//components
import Brands from '../FilterAccordion/Brands';
//Estilos
import './Search.css';
//icons
import { BsSearch } from "react-icons/bs"

const SearchFormBrands = ({ MarcasProductos, Enlace }) => {
     //constantes
     const { query } = useParams();
     const navigate = useNavigate();
 
     //variables de estados
     const [alert, setAlert] = useState("");
     const [marcas, setMarcas] = useState([]);
 
 
     //constantes
     const location = useLocation();
     const { q = '' } = queryString.parse( location.search );
 
 
     //usamos el hook del formulario 
     const [ formValues, handleInputChange ] = useForm({
             searchText: q
     });
     const { searchText } = formValues;
 
 
     useEffect(() => {

      if ( searchText == "" )
      {
        setMarcas([]);
      }
      else{
        setMarcas(getBrand( searchText , MarcasProductos ));
      }
  }, [searchText])

     //metodo para busqueda de producto
    const handleSearch = (e) => {
        if (searchText==='') {
            e.preventDefault();
            setMarcas([]);
          }  
          else{
            e.preventDefault();
            setMarcas(getBrand( searchText , MarcasProductos ));
            console.log(getBrand( searchText , MarcasProductos ));
            //console.log("QUE MAS PEUS"+JSON.stringify(marcas));
          }
        
    }

  return (
    <>
        {/* Formulario de Busqueda de Marca*/}
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
        
        {/* Resultado de Busqueda de Marca*/}
        {
          searchText !== "" ? (
            <div>
              {
                marcas.length !== 0 ? (
                  <Brands MarcaLista={marcas} Enlace={Enlace} />
                ):
                (
                  <div className='result__Filter'>sin resultados para: "{ searchText }"</div>
                )
              }
              
            </div>
            ):
            (
              <div>
                <Brands MarcaLista={MarcasProductos} Enlace={Enlace} />
              </div>
            )

        }

        
        

    </>
  )
}

export default SearchFormBrands