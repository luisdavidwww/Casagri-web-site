import React from 'react';
//icons clickCategory
import {  BsFilter, BsDashLg, BsPlusLg } from "react-icons/bs";

const FilterTilter = ({component}) => {
  return (
    <>
    {
      component==="Sidebar" ? (
        <div className='containerFilter__Sidebar'>
            
            <div className='title__Filter-Main'>Otras Opciones</div>
        </div>
      ):(
        <div className='containerFilter__Basic'>
           
            <div className='title__Filter-Main'>Otras Opciones</div>
        </div>
      )
    }
        
    </>
  )
}

export default FilterTilter;