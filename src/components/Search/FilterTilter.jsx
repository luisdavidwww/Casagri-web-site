import React from 'react';
//icons clickCategory
import {  BsFilter, BsDashLg, BsPlusLg } from "react-icons/bs";

const FilterTilter = ({component}) => {
  return (
    <>
    {
      component==="Sidebar" ? (
        <div className='containerFilter__Sidebar'>
            <BsFilter/>
            <div className='title__Filter-Main'>Filtros</div>
        </div>
      ):(
        <div className='containerFilter__Basic'>
            <BsFilter/>
            <div className='title__Filter-Main'>Filtros</div>
        </div>
      )
    }
        
    </>
  )
}

export default FilterTilter;