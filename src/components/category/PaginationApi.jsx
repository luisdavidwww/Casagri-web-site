import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

export default function PaginationList({ cantidadPagina, enlace }) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1');

  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    setCurrentPage(page);
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
              to={`${enlace}${item.page === 1 ? '' : `?page=${item.page}`}`}
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
              to={`${enlace}${item.page === 1 ? '' : `?page=${item.page}`}`}
              {...item}
            />
          )}
        />
      )}
    </div>
  );
}