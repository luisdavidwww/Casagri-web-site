/*
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
//import ArrowBackIcon from '@mui/icons-material/ArrowBack';
//import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { AiOutlineRight } from "react-icons/ai";

export default function PaginationList( {cantidadPagina, enlace }) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={cantidadPagina}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: AiOutlineRight, next: AiOutlineRight }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
*/

import * as React from 'react';
import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { AiOutlineRight } from "react-icons/ai";

export default function PaginationList({cantidadPagina, enlace}) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', cantidadPagina);
  return (
    <Pagination
      page={page}
      count={cantidadPagina}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/Category/${enlace}${item.page === 1 ? '' : `?Page=${item.page}`}`}
          {...item}
        />
      )}
    />
  );
}


/*
export default function PaginationList({cantidadPagina, enlace }) {
  return (
    <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
      <Routes>
        <Route path="*" element={<Content cantPage={cantidadPagina} />} />
      </Routes>
    </MemoryRouter>
  );
}
*/