import React, {  useMemo, useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { getComponent } from '../../selectors/getInfoCasagri';
import queryString from 'query-string';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//Componentes
import ComponentsProducts from '../FilterAccordion/Components';
//Estilos
import './Search.css';
//icons
import { BsSearch } from "react-icons/bs"

const SearchFormComposition = ({ ComponentesProductos, Enlace }) => {
     //constantes
     const { query } = useParams();
     const navigate = useNavigate();
 
     //variables de estados
     const [alert, setAlert] = useState("");
     const [componentes, setComponentes] = useState([]);
 
 
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
        setComponentes([]);

      }
      else{
        setComponentes(getComponent( searchText , ComponentesProductos ));

      }
  }, [searchText])

     //metodo para busqueda de producto
    const handleSearch = (e) => {
        if (searchText==='') {
            e.preventDefault();
            setComponentes([]);
          }  
          else{
            e.preventDefault();
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
                                placeholder="Buscar Componente"
                                className='Search__imput'
                                name="searchText"
                                autoComplete="off"
                                value={ searchText }
                                onChange={ handleInputChange } 
                                
                            />
                            
                          
                    </form>
            </div>
        </div>
        
        {/* Resultado de Busqueda de Marca*/}
        {
          searchText !== "" ? (
            <div>
              {
                componentes?.length !== 0 ? (
                  <ComponentsProducts ComponentesProductos={componentes} Enlace={Enlace} />
                ):
                (
                  <div className='result__Filter'>sin resultados para: "{ searchText }"</div>
                )
              }
              
            </div>
            ):
            (
              <div>
                <ComponentsProducts ComponentesProductos={ComponentesProductos} Enlace={Enlace} />
              </div>
            )

        }
        

    </>
  )
}

export default SearchFormComposition;