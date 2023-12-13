import React from 'react';
//icons
import { MdFilterAlt } from "react-icons/md";

const FilterTilter = ({component}) => {
  return (
    <>
    {
      component==="Sidebar" ? (
        <div className='containerFilter__Sidebar'>
            { /* Version Movil */}
            <div className='title__Filter-Main'> <MdFilterAlt style={{  marginRight:'0.3rem', fontSize:'15px' }}/> Filtros </div>
        </div>
      ):(
        <div className='containerFilter__Basic'>
            { /* Version Web */}
            <div className='title__Filter-Main'> <MdFilterAlt style={{ marginRight:'0.5rem', fontSize:'15px' }}/> Filtros </div>
        </div>
      )
    }
        
    </>
  )
}

export default FilterTilter;