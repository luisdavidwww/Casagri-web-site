import React, {  useMemo } from 'react';
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { getProductByName } from '../../selectors/getProductByName';
import queryString from 'query-string';


//componentes
import  ProductContainerNew  from "../Search/ProductContainerNew";


const Search = ({ history }) => {


    //constantes
    const { query } = useParams();


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
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }



  return (
    <div>
        <div>Search</div>
        <div className="">

            <div>
            

            <h4 > Search Form </h4>
                    <hr />

                    <form>
                        <input 
                            type="text"
                            placeholder="escribe un producto"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange } 
                        />
                        <Link to={`/search/${searchText}`}>
                            <button > Search...</button>
                        </Link>
                        
                    </form>

            <div className="">
                    { 
                        (searchText ==='') 
                        && 
                        <div className="alert alert-info">
                            Busca un producto
                        </div>
                    }


                    {
                        heroesFiltered.map( item => (
                            <ProductContainerNew 
                            key={item.index}
                            id={item.id}
                            imgUrl={item.imgUrl}
                            title={item.title}
                            price={item.price}
                            presentacion={item.presentation}
                            />
                        ))
                    }

                    { 
                        ( q !=='' && heroesFiltered.length !== 0  ) 
                            && 
                            <div className="alert alert-danger">
                                Lo sentimos no existe el producto: { q }
                            </div>
                    }

            </div>
            

            </div>
           
            
           
            
        </div>
    </div>
  )
}


export default Search;


