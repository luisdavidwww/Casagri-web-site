import React, { useEffect, useState } from 'react';

import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { AiOutlineRight } from "react-icons/ai";

export default function PaginationList({cantidadPagina, enlace}) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('Page') || '0', cantidadPagina);


  const [pages, setPages] = useState(0);

  useEffect(() => {
    setPages(parseInt(query.get('Page') || '0'))
  },[query])


  return (
    <div>
      { cantidadPagina == 1 ? (
        <Pagination
        /*page={logicaPage(page)}*/
        color="secondary"
        page={ 1 }
        count={cantidadPagina}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`${enlace}${item.page === 1 ? '' : `?Page=${item.page-1}`}`}
            {...item}
          />
        )}
      />
      ):(
        <Pagination
      /*page={logicaPage(page)}*/
      color="secondary"
      page={pages == 0 ? 1 : pages + 1 }
      count={cantidadPagina}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`${enlace}${item.page === 1 ? '' : `?Page=${item.page-1}`}`}
          {...item}
        />
      )}
    />
      )

      }
      
    {/*
      <div> enlace principal: {enlace} </div>
      <div> query: {query} </div>
      <div> Page: {page} </div>
      <div> Page New: {pages} </div>
      <div> Cantidad de paginas: {cantidadPagina} </div>
    */}

    </div>
    
  );
}
