



export const obtenerProductosPorCategoria = async ( category ) => {


    if ( category === '' ) {
        return [];
    }

    /* ----------------------------------------------- CATEGORIAS ------------------------------------------------------- */

    //Agroindustrial
    if ( category === 'AGROQUÍMICOS' ) {
        try {
            const response = await fetch(`https://backend-casagri-render.onrender.com/api/articulos/Categoria2/AGROQUIMICOS`);
            const resp = await response.json();

            return resp.productos;
            
  
          } catch (error) {
            console.log('Error fetching data:', error);
          }
     }

}


