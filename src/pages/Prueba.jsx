import React, { useEffect, useState } from 'react';

const Prueba = ({ Data, Loader}) => {

    useEffect(() => {
        console.log('aqui esta la data? '+ Data);
     }, [Data])

    if (Loader) {
        return <div style={{margin:'20rem'}}>Loading...</div>;
      }
    
      return (
        <>
        <div style={{margin:'20rem'}}>
            <div>{Data}</div>
        </div>
        </>
      );
}

export default Prueba