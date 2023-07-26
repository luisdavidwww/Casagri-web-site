import React, {  useMemo, useState, useEffect, useRef  } from 'react';
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { getProductByName } from '../../selectors/getProductByName';
import queryString from 'query-string';
//data
import  data  from '../../data/daticos/ProductosNew.json';
//Estilos
import './SearchNavbar.css'
//Icons
import {  BsSearch } from "react-icons/bs";
import { SiMoleculer } from "react-icons/si";


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


    const searchClick = ( props ) => {
      navigate(`/search/${ props }`);
      navigate(0);
      setAlert(searchText);
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
                <form onSubmit={ handleSearch } className='Search__form__Navbar' onClick={ () => { handleClick(); }}>
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

                  {/* Sugerencias de Busquedas*/}
                  <>
                        { searchText.length >= 4 && click ? (
                          <div className='autocomplete__container--Navbar' >
                          
                            {/* Sugerencias para Nombre de Productos*/}
                            <div
                              className={  
                                data.filter((product) => product.Nombre.toLowerCase() 
                                    .indexOf(searchText.toLowerCase()) !== -1 ) 
                                    ?.length > 6 ? 'autocomplete__List--Scroll--Navbar': 'autocomplete__List--Navbar'}
                            >
                                {data.filter((product) => product.Nombre.toLowerCase()
                                      .indexOf(searchText.toLowerCase()) !== -1)
                                      .map((filteredProduct,index) => (
                                        <div 
                                          key={`${filteredProduct.id}-${index}`} 
                                          className='autocomplete__item--Navbar'
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
                                    <div className={arrayComponent(searchText).length > 6 ? 'autocomplete__List--Scroll--Navbar' : 'autocomplete__List--Navbar'}>
                                    <div className='component__Search__Container'>
                                        <div className='component__Search'>Componentes:</div>
                                      </div>
                                      {arrayComponent(searchText).map((cat4, index) => (
                  
                                          <div
                                          key={index}
                                          className='autocomplete__item--Navbar'
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
                  </>


                





        </div>
    </div>
</div>

  )
}


export default SearchNavbar;


