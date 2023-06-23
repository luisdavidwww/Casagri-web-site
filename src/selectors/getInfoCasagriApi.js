



export const obtenerProductosPorCategoria = async ( category, search ) => {


    if ( category === '' ) {
        return [];
    }

    /* ----------------------------------------------- CATEGORIAS ------------------------------------------------------- */

    //Agroindustrial
    if ( category === 'AGROQUÍMICOS' ) {
        try {
            const response = await fetch(`http://localhost:8080/api/articulos/Categoria2/AGROQUIMICOS${search}`);
            const resp = await response.json();

            return resp;
            
  
          } catch (error) {
            console.log('Error fetching data:', error);
          }
     }

}


export const fetchData = async (category, search) => {
  try {


    if ( category === '' ) {
          return [];
      }

    /* ----------------------------------------------- CATEGORIAS ------------------------------------------------------- */

    //Agroindustrial
    if ( category === 'AGROQUÍMICOS') {
        try {
            const response = await fetch(`http://localhost:8080/api/articulos/Categoria2/AGROQUIMICOS${search}`);
            const resp = await response.json();
            return resp;
            
          } catch (error) {
            console.log('Error fetching data:', error);
          }
    }
          if ( category === 'INSECTICIDAS' || category === 'HERBICIDAS' || category === 'FUNGICIDAS') {
              try {
                const response = await fetch(`http://localhost:8080/api/articulos/Categoria3/${category}${search}`);
                const resp = await response.json();
                return resp;
                
              } catch (error) {
                console.log('Error fetching data:', error);
              }
          }
          if ( category === 'OTROS' ) {
            try {
              const response = await fetch(`http://localhost:8080/api/articulos/CategoriaBuscar/OtrosAgroquimicos${search}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
          }

  } catch (error) {
    console.log('Error fetching data:', error);
  }
};

