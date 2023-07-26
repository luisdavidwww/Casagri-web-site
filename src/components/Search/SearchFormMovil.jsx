import React, {  useMemo, useState, useEffect, useRef  } from 'react';
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { getProductByName } from '../../selectors/getProductByName';
import queryString from 'query-string';
//data
import  data  from '../../data/daticos/ProductosNew.json';
//Estilos
import './SearchFormMovil.css'
//Icons
import { AiOutlineSearch } from "react-icons/ai";
import {  BsSearch } from "react-icons/bs";
import { SiMoleculer } from "react-icons/si";


const SearchFormMovil = ( clickSearch ) => {


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



    //metodo del formulario para 
    const handleSearch = (e) => {
        if (searchText==='') {
            e.preventDefault();
          }  
          else{
            //e.preventDefault();
            navigate(`/search/${ searchText }`);
            //navigate(0);
            //setAlert(searchText);
          }
        
    }


    const searchClick = ( props ) => {
      //navigate(0);
      navigate(`/search/${ props }`);
  }

  

   //Metododos para el autocompletado y sugerencias del buscador
   const refOne = useRef(undefined);

   //Escucha cualquier click en el documento para cerrarla ventana de sugerencia del buscador
   const handleclickOutside = (e) => {
     if (!refOne?.current?.contains(e.target)){
      setClick(false)
     } else{
     }
   }

   //Despliega o cierra la ventana de sugerencia del buscador
   const handleClick = () => {
    if(click == false){
      setClick(true)
    }
    else{
      setClick(false)
    }
    
    }




    const arrayComponent = (props) => {
      return  Array.from( 
                    new Set(
                      data
                        .filter((product) => product.cat4.toLowerCase().indexOf(props.toLowerCase()) !== -1)
                        .map((filteredProduct) => filteredProduct.cat4.toLowerCase())
                      )
                  )
    }


   useEffect(() => {
    document.addEventListener("click", handleclickOutside, true);
    }, []);




  return (
<div>

    {/* Formulario de Busqueda */}
    <div className='Search__container__Active__Navbar'>
        <div className="container__Search__Active__Navbar">
                <form onSubmit={ handleSearch } className='Search__form--Movil' onClick={ () => { handleClick(); }}>
                        <input 
                            type="text"
                            placeholder="Busca un producto"
                            className='Search__imput--Movil'
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange } 
                        />
                        <BsSearch className='icon__Search'/>
                         
                </form>

                  {/* Sugerencias de Busquedas*/}
                  <div style={{width:"100%"}}>
                        { searchText.length >= 5 && click ? (
                          <div className='autocomplete__container--Movil' >
                          
                            {/* Sugerencias para Nombre de Productos*/}
                            <div
                              className={  
                                data.filter((product) => product.Nombre.toLowerCase() 
                                    .indexOf(searchText.toLowerCase()) !== -1 ) 
                                    ?.length > 6 ? 'autocomplete__List--Scroll--Movil--Nombre': 'autocomplete__List--Movil'}
                            >
                                {data.filter((product) => product.Nombre.toLowerCase()
                                      .indexOf(searchText.toLowerCase()) !== -1)
                                      .map((filteredProduct,index) => (
                                        <div 
                                          key={`${filteredProduct.id}-${index}`} 
                                          className='autocomplete__item--Movil'
                                          onMouseDown={ () => { 
                                                        searchClick(filteredProduct.Nombre);
                                                      }}>
                                                        <BsSearch className='icon__SearchForm'/>
                                                    <p>{filteredProduct.Nombre.toLowerCase()}</p>
                                        </div>
                                          ))}
                              
                            </div>


                            {/* Sugerencias para Componente*/}
                            <> 
                                {searchText.length >= 4 && click && !arrayComponent(searchText).length == 0 ? (
                                  <>
                                    <div className={arrayComponent(searchText).length > 6 ? 'autocomplete__List--Scroll--Movil' : 'autocomplete__List--Movil'}>
                                    <div className='component__Search__Container'>
                                        <div className='component__Search'>Componentes:</div>
                                      </div>
                                      {arrayComponent(searchText).map((cat4, index) => (
                  
                                          <div
                                          key={index}
                                          className='autocomplete__item--Movil'
                                          onMouseDown={() => {
                                            searchClick(cat4);
                                          }}
                                        >
                                          <SiMoleculer className='icon__SearchForm'/>
                                          <p>{cat4}</p>
                                        </div>
                                        
                                      ))}
                                    </div>
                                  </>
                                ) : null}
                            </>

                          </div> 
                        ) : null}
                  </div>


        </div>
    </div>
</div>

  )
}


export default SearchFormMovil;


