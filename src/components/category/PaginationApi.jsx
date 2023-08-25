import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

export default function PaginationList({ cantidadPagina, enlace }) {
  const location = useLocation();
  const Search = location.search;
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1');

  const [currentPage, setCurrentPage] = useState(page);



  const DefinirParametros = ( Search ) => {

    let searchParam = "";
  
    //Existe el parametro de Numero de Pagina: "?page=1"
    if (Search !== "" ){
      const searchParams = new URLSearchParams(Search);
      //No tiene definido parametro de Orden: "&orderBy"
      if ( searchParams.get('orderBy') === null ){
        searchParam = "";
      }
      if ( searchParams.get('marca') !== null ){

        const marcaByParam = searchParams.get('marca' ||  '' )
        searchParam = `&marca=${marcaByParam}`;
      }
      //Si tiene definido parametro de Orden: "&orderBy"
      else{
        const orderByParam = searchParams.get('orderBy' ||  '' )
        searchParam = `&orderBy=${orderByParam}`;
      }
      return searchParam;
    }
    //No existe el parametro de Numero de Pagina: "?page=1"
    else{
      return Search;
    }
  
  }
  

  

  useEffect(() => {
    setCurrentPage(page);
    //console.log(location);
  }, [page]);

  return (
    <div>
      {cantidadPagina === 1 ? (
        <Pagination
          color="secondary"
          page={1}
          count={cantidadPagina}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`${enlace}${item.page === 1 ? `?page=1${DefinirParametros(Search)}` : `?page=${item.page}${DefinirParametros(Search)}`}`}
              {...item}
            />
          )}
        />
      ) : (
        <Pagination
          color="secondary"
          page={currentPage}
          count={cantidadPagina}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`${enlace}${item.page === 1 ? `?page=1${DefinirParametros(Search)}` : `?page=${item.page}${DefinirParametros(Search)}`}`}
              {...item}
            />
          )}
        />
      )}
    </div>
  );
}