import React, { useEffect, useState, useMemo } from 'react';
import { useLocation, withRouter } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { getProductByName } from '../../selectors/getProductByName';
import queryString from 'query-string';

//components
import  ProductContainerNew  from "../Search/ProductContainerNew";

const SearchScreen = ({ history }) => {



    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );


    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });

    
    const { searchText } = formValues;

    const luis = () => {
        
    }

    
    const heroesFiltered = useMemo(() => getProductByName( searchText ))
    console.log(heroesFiltered);


    

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    useEffect(() => {
        const { searchText } = formValues;
    }, [])


  return (
    <>
    <div className="">
                    <h4 > Search Form </h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="escribe un producto"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button type="submit"> Search...</button>
                    </form>


                </div>

                <div className="">

                    <h4> Results </h4>
                    <hr />

                    { 
                        (q ==='') 
                            && 
                            <div className="alert alert-info">
                                Busca un producto
                            </div>
                    }

                    { 
                        (  q !=='' && heroesFiltered.length === 0  ) 
                            && 
                            <div className="alert alert-danger">
                                Lo sentimos no existe el producto: { searchText }
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

                </div>
    </>
  )
}

export default withRouter(SearchScreen);