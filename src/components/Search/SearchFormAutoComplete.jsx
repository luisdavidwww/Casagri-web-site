import React, {  useMemo, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import Autosuggest from 'react-autosuggest';
import  data  from '../../data/daticos/ProductosNew.json';
import queryString from 'query-string';
import "bootstrap/dist/css/bootstrap.min.css";


function SearchFormAutoComplete() {

  const navigate = useNavigate();
  const location = useLocation();

  //variables de estados
  const[presidentes, setPresidentes]= useState(data);
  const[value, setValue]= useState("");
  const[presidenteSeleccionado, setPresidenteSeleccionado]= useState({});
  const [alert, setAlert] = useState("");


  const { q = '' } = queryString.parse( location.search );
  //usamos el hook del formulario 
  const [ formValues, handleInputChange ] = useForm({
    searchText: q
  });
  const { searchText } = formValues;
  


  const onSuggestionsFetchRequested=({value})=>{
    if(value.length >= 3){
    setPresidentes(filtrarPresidentes(value));
  }
  }
  
  const filtrarPresidentes=(value)=>{
    const inputValue=value.trim().toLowerCase();
  const inputLength=inputValue.length;
  
    var filtrado=data.filter((Nombre)=>{
      var textoCompleto=Nombre.Nombre + " - " +Nombre.cat4;
  
      if(textoCompleto.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(inputValue)){
        return Nombre;
      }
    });
  
    return inputLength===0 ? [] : filtrado;
  }
  
  const onSuggestionsClearRequested = () =>{
    setPresidentes([]);
  }
  
  const getSuggestionValue=(suggestion)=>{
    return `${suggestion.Nombre} - ${suggestion.cat4}`;
  }
  
  const renderSuggestion=(suggestion)=>(
    <div className='sugerencia' onClick={()=>seleccionarPresidente(suggestion)}>
      {`${suggestion.Nombre.toLowerCase()} - ${suggestion.cat4}`}
    </div>
  );
  
  const seleccionarPresidente=(Nombre)=>{
    setPresidenteSeleccionado(Nombre);
  }
  
  const onChange=(e, {newValue})=>{
    setValue(newValue);
  }
  
  const inputProps={
  placeholder:"Escribe el nombre del producto Bro",
  value,
  className:"Search__imput",
  name:"searchText",
  value: searchText,
  onChange: handleInputChange 
  
  };
  
  const eventEnter=(e)=>{
  if(e.key == "Enter"){
    var split = e.target.value.split('-');
    var Nombre ={
      Nombre: split[0].trim(),
      cat4: split[1].trim(),
    };
    seleccionarPresidente(Nombre);
  }
  }


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
      <>
      {/* Formulario de Busqueda */}
      <div className='Search__container__Active'>
            <div className="container__Search__Active">

              <form onSubmit={ handleSearch } className='Search__form'>
                {/* 
                <Autosuggest 
                suggestions={presidentes}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={ inputProps }
                onSuggestionSelected={eventEnter}
                />
                */}

              <input
                type="text"
                placeholder="Escribe el nombre del producto Bro"
                value={searchText}
                className='Search__imput'
                name="searchText"
                onChange={handleInputChange}
                onKeyPress={eventEnter}
                list="suggestionsList"
              />
                <datalist id="suggestionsList">
                  {/* Aquí mostrarás las opciones sugeridas */}
                    {searchText.length >= 3 ?
                    (<div>
                      {data.map((presidente, index) => (
                        <option
                          key={index}
                          value={`${presidente.Nombre} - ${presidente.cat4}`}
                        />
                      ))}
                    </div>):(null)
                    }
                </datalist>

              </form>

            </div>
      </div>
      </>
 
    );
  }

export default SearchFormAutoComplete;

