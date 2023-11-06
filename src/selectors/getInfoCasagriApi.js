

/* ----------------------------------------------- PRODUCTOS ------------------------------------------------------- */

//Busqueda de productos con el Buscador
export const getProductDataByName = async ( name, search ) => {

  if ( name === '' ) {
      return [];
  }
  //let Nombre_interno = name.replace(/-fiporif-/g, '%');
  console.log()
  try {
    const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Buscar/'}${name}${search}`);
    const resp = await response.json();
    return resp;
    
  } catch (error) {
    console.log('Error fetching data:', error);
  }

}

//Busqueda de productos con el Buscador
export const getProductDataByNameTwo = async ( name, search ) => {

  if ( name === '' ) {
      return [];
  }

  try {
    const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Buscar/'}${name}${(DefinirParametrosTwo(search))}`);
    const resp = await response.json();
    return resp;
    
  } catch (error) {
    console.log('Error fetching data:', error);
  }

}



//Busqueda de producto detalles
export const getProductDetails = async ( name ) => {

  if ( name === '' ) {
      return [];
  }

  try {
    const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/BuscarDetalle/'}${name}`);
    const resp = await response.json();
    return resp;
    
  } catch (error) {
    console.log('Error fetching data:', error);
  }

}


//Busqueda de productos Recomendados
export const getProductRecomend = async ( name ) => {

  if ( name === '' ) {
      return [];
  }

  try {
    const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/BuscarRecomendado/'}${name}`);
    const resp = await response.json();
    return resp;
    
  } catch (error) {
    console.log('Error fetching data:', error);
  }

}





const DefinirParametrosTwo = ( SearchCategory ) => {

  let searchParam = "";

  //Existe el parametro de Numero de Pagina: "?page="
  if (SearchCategory !== "" ){
    const searchParams = new URLSearchParams(SearchCategory);
    //No tiene definido parametro de Orden: "&orderBy"
    if ( searchParams.get('orderBy') === null ){
      searchParam = `${SearchCategory}&orderBy=${"asc"}`;
    }
    //Si tiene definido parametro de Orden: "&orderBy"
    else{
      searchParam = SearchCategory;
    }
    return searchParam;
  }
  //No existe el parametro de Numero de Pagina: "?page="
  else{
    return SearchCategory;
  }

}




/* ----------------------------------------------- CATEGORIES ------------------------------------------------------- */

export const fetchDataTwo = async (category, search ) => {
  try {


    if ( category === '' ) {
          return [];
      }

    //Parametro de paginado 
    let searchApi = "";
    //si el paginado esta vacío, quiere decir que es la pagina 1
    if ( search === ""){
      searchApi = "?page=1";
    }
    //si no esta vacío, significa que ya viene el numero de pagina en el parametro 
    else{
      searchApi = search;
    }

    /* ----------------------------------------------- AGROINDUSTRIAL ------------------------------------------------------- */

    if ( category === 'AGROINDUSTRIAL') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria/AGROINDUSTRIAL'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
  }

    //Agroquimicos
    if ( category === 'AGROQUÍMICOS') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria2/AGROQUIMICOS'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

      if ( category === 'INSECTICIDAS' || category === 'HERBICIDAS' || category === 'FUNGICIDAS') {
          try {
            const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria3/'}${category}${(DefinirParametrosTwo(search))}`);
            const resp = await response.json();
            return resp;
            
          } catch (error) {
            console.log('Error fetching data:', error);
          }
      }
      if ( category === 'OTROS' ) {
        try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/OtrosAgroquimicos'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      }
      
    //Semillas
    if ( category === 'SEMILLAS') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/SEMILLAS'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }
          if ( category === 'MAÍZ' ) {
            try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/MAIZ'}${(DefinirParametrosTwo(search))}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
          }

          if ( category === 'PASTO' ) {
            try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria3/'}${'SEMILLAS DE PASTO'}${(DefinirParametrosTwo(search))}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

        if ( category === 'HORTALIZAS' ) {
          try {
            const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/'}${'Hortalizas'}${(DefinirParametrosTwo(search))}`);
            const resp = await response.json();
            return resp;
            
          } catch (error) {
            console.log('Error fetching data:', error);
          }
      }

        if ( category === 'BANDEJAS DE GERMINACIÓN' ) {
          try {
            const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria4/'}${'BANDEJAS'}${(DefinirParametrosTwo(search))}`);
            const resp = await response.json();
            return resp;
            
          } catch (error) {
            console.log('Error fetching data:', error);
          }
        }

        if ( category === 'BOLSAS DE VIVERO' ) {
          try {
            const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria4/'}${'BOLSAS'}${(DefinirParametrosTwo(search))}`);
            const resp = await response.json();
            return resp;
            
          } catch (error) {
            console.log('Error fetching data:', error);
          }
        }

    if ( category === 'FERTILIZANTES') {
      try {

          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/Fertilizantes'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();

          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    
    //SACOS, CABULLAS Y CORDELES
    if ( category === 'SACOS, CABULLAS Y CORDELES') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria2/SACOS, CABULLAS Y CORDELES'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    //CERCAS DE ALAMBRE Y ELÉCTRICAS
    if ( category === 'CERCAS DE ALAMBRE Y ELÉCTRICAS') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/cercasAlambreyElectricas'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    /* ----------------------------------------------- MAQUINARIAS ------------------------------------------------------- */

    if ( category === 'MAQUINARIAS') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria/MAQUINARIA E IMPLEMENTOS'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
  }

    //Maquinarias
    if ( category === 'MAQUINARIAS') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/maquinariaTotal'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    if ( category === 'MAQUINARIA AGRÍCOLA') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/maquinarias'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

          if ( category === 'MOTOCULTORES') {
            try {
                const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria3/MOTOCULTORES'}${(DefinirParametrosTwo(search))}`);
                const resp = await response.json();
                return resp;
                
              } catch (error) {
                console.log('Error fetching data:', error);
              }
          }

          if ( category === 'SIEMBRA') {
            try {
                const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria2/MAQUINAS PARA LA SIEMBRA'}${(DefinirParametrosTwo(search))}`);
                const resp = await response.json();
                return resp;
                
              } catch (error) {
                console.log('Error fetching data:', error);
              }
          }

          if ( category === 'RECOLECCIÓN') {
            try {
                const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria2/MAQUINARIA PARA LA RECOLECCION'}${(DefinirParametrosTwo(search))}`);
                const resp = await response.json();
                return resp;
                
              } catch (error) {
                console.log('Error fetching data:', error);
              }
          }

          if ( category === 'ABONO Y FERTILIZACIÓN') {
            try {
                const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria2/MAQUINAS PARA EL ABONO Y FERTI'}${(DefinirParametrosTwo(search))}`);
                const resp = await response.json();
                return resp;
                
              } catch (error) {
                console.log('Error fetching data:', error);
              }
          }

          if ( category === 'PROCESAMIENTO DE MATERIALES') {
            try {
                const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria2/MAQUINARIA PROCESAMIENTO MATER'}${(DefinirParametrosTwo(search))}`);
                const resp = await response.json();
                return resp;
                
              } catch (error) {
                console.log('Error fetching data:', error);
              }
          }

          if ( category === 'FUMIGACIÓN') {
            try {
                const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria2/EQUIPOS DE FUMIGACIÓN'}${(DefinirParametrosTwo(search))}`);
                const resp = await response.json();
                return resp;
                
              } catch (error) {
                console.log('Error fetching data:', error);
              }
          }

    if ( category === 'DESMALEZADORAS') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria3/DESMALEZADORAS'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    if ( category === 'MOTOSIERRAS') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria3/MOTOSIERRAS'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    if ( category === 'BOMBAS DE AGUA') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/bambasDeAgua'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

        if ( category === 'BOMBAS DE AGUA DOMÉSTICAS') {
          try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria3/BOMBAS DE AGUA USO DOMESTICO'}${(DefinirParametrosTwo(search))}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

        if ( category === 'BOMBAS DE AGUA PORTÁTILES') {
          try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria3/BOMBAS DE AGUA PORTATILES'}${(DefinirParametrosTwo(search))}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

    if ( category === 'MOTORES') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria3/MOTORES'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    if ( category === 'GENERADORES') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria3/GENERADORES'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

     /* ----------------------------------------------- SALUD ANIMAL ------------------------------------------------------- */

     if ( category === 'SALUD ANIMAL') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria/MEDICINA VETERINARIA'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
  }

    //Medicina Veterinaria
    if ( category === 'MEDICINA VETERINARIA') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaA-Z/MEDICINA VETERINARIA'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

        if ( category === 'ANALGÉSICOS Y ANTIINFLAMATORIOS') {
          try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/analgesicosAntiinflamatorios'}${(DefinirParametrosTwo(search))}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

        if ( category === 'ANTISEPTICOS Y DESINFECTANTES') {
          try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/antisepticosDesinfectantes'}${(DefinirParametrosTwo(search))}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

        if ( category === 'ANTIBIÓTICOS') {
          try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/antibioticos'}${(DefinirParametrosTwo(search))}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

        if ( category === 'ANTIDIARREICOS') {
          try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/antidiarreicos'}${(DefinirParametrosTwo(search))}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

        if ( category === 'BAÑOS, ECTOPARASITARIOS Y MATAGUSANOS') {
          try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/banosEctoparasitariosMatagusanos'}${(DefinirParametrosTwo(search))}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

        if ( category === 'BIOLÓGICOS') {
          try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/biologicos'}${(DefinirParametrosTwo(search))}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

        if ( category === 'DESPARASITANTES') {
          try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/desparasitantes'}${(DefinirParametrosTwo(search))}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

        if ( category === 'HEMOPARASITICIDAS') {
          try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/hemoparasiticidas'}${(DefinirParametrosTwo(search))}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

        if ( category === 'HORMONALES') {
          try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/hormonales'}${(DefinirParametrosTwo(search))}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

        if ( category === 'VITAMINAS Y MINERALES') {
          try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/vitaminasMinerales'}${(DefinirParametrosTwo(search))}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

    if ( category === 'IMPLEMENTOS VETERINARIOS') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/implementosVeterinarios'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    if ( category === 'MANEJO E IDENTIFICADORES') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria3/MANEJO E IDENTIFICACION'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    if ( category === 'ALIMENTO ANIMAL') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria2/ALIMENTOS ANIMALES DE PRODUCCI'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    if ( category === 'ALIMENTO ANIMAL') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria2/ALIMENTOS ANIMALES DE PRODUCCI'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    if ( category === 'MASCOTAS') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria2/MEDICINA MASCOTAS'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

/* ----------------------------------------------- FERRETERÍA  ------------------------------------------------------- */

if ( category === 'FERRETERÍA') {
  try {
      const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaA-Z/FERRETERIA'}${(DefinirParametrosTwo(search))}`);
      const resp = await response.json();
      return resp;
      
    } catch (error) {
      console.log('Error fetching data:', error);
    }
}

    //Ferreteria Agrícola
    if ( category === 'FERRETERÍA AGRÍCOLA') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/ferreteriaAgricola'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    if ( category === 'ELECTRICIDAD') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/electricidad'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }


    /* ----------------------------------------------- SALUD PÚBLICA  ------------------------------------------------------- */

    if ( category === 'SALUD PÚBLCA') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria/SALUD PUBLICA'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }
    //Salud Pública
    if ( category === 'SALUD PÚBLICA') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria/SALUD PUBLICA'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    if ( category === 'DESINFECTANTE') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria3/DESINFECTANTES'}${(DefinirParametrosTwo(search))}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    if ( category === 'CONTROL DE PLAGAS') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/controlDePlaga'}${(DefinirParametrosTwo(search))}`);
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




export const fetchData = async (category, search) => {
  try {


    if ( category === '' ) {
          return [];
      }

    /* ----------------------------------------------- AGROINDUSTRIAL ------------------------------------------------------- */

    if ( category === 'AGROINDUSTRIAL') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria/AGROINDUSTRIAL'}${search}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
  }
    //Agroquimicos
    if ( category === 'AGROQUÍMICOS') {
        try {
            const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria2/AGROQUIMICOS'}${search}`);
            const resp = await response.json();
            return resp;
            
          } catch (error) {
            console.log('Error fetching data:', error);
          }
    }
          if ( category === 'INSECTICIDAS' || category === 'HERBICIDAS' || category === 'FUNGICIDAS') {
              try {
                const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria3/'}${category}${search}`);
                const resp = await response.json();
                return resp;
                
              } catch (error) {
                console.log('Error fetching data:', error);
              }
          }
          if ( category === 'OTROS' ) {
            try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/OtrosAgroquimicos'}${search}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
          }

    //Semillas
    if ( category === 'SEMILLAS') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/SEMILLAS'}${search}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }
          if ( category === 'MAÍZ' ) {
            try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/MAIZ'}${search}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
          }

          if ( category === 'PASTO' ) {
            try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria3/'}${'SEMILLAS DE PASTO'}${search}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

        if ( category === 'HORTALIZAS' ) {
          try {
            const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/'}${'Hortalizas'}${search}`);
            const resp = await response.json();
            return resp;
            
          } catch (error) {
            console.log('Error fetching data:', error);
          }
      }

        if ( category === 'BANDEJAS DE GERMINACIÓN' ) {
          try {
            const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria4/'}${'BANDEJAS'}${search}`);
            const resp = await response.json();
            return resp;
            
          } catch (error) {
            console.log('Error fetching data:', error);
          }
        }

        if ( category === 'BOLSAS DE VIVERO' ) {
          try {
            const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria4/'}${'BOLSAS'}${search}`);
            const resp = await response.json();
            return resp;
            
          } catch (error) {
            console.log('Error fetching data:', error);
          }
        }

    //Fertilizantes SACOS, CABULLAS Y CORDELES
    if ( category === 'FERTILIZANTES') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/Fertilizantes'}${search}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    //SACOS, CABULLAS Y CORDELES
    if ( category === 'SACOS, CABULLAS Y CORDELES') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria2/SACOS, CABULLAS Y CORDELES'}${search}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    //CERCAS DE ALAMBRE Y ELÉCTRICAS
    if ( category === 'CERCAS DE ALAMBRE Y ELÉCTRICAS') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/cercasAlambreyElectricas'}${search}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    /* ----------------------------------------------- AGROINDUSTRIAL ------------------------------------------------------- */

    if ( category === 'MAQUINARIAS') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria/MAQUINARIA E IMPLEMENTOS'}${search}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
  }

    //Maquinarias
    if ( category === 'MAQUINARIAS') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/maquinariaTotal'}${search}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    if ( category === 'MAQUINARIA AGRÍCOLA') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/maquinarias'}${search}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

          if ( category === 'MOTOCULTORES') {
            try {
                const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria3/MOTOCULTORES'}${search}`);
                const resp = await response.json();
                return resp;
                
              } catch (error) {
                console.log('Error fetching data:', error);
              }
          }

          if ( category === 'SIEMBRA') {
            try {
                const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria2/MAQUINAS PARA LA SIEMBRA'}${search}`);
                const resp = await response.json();
                return resp;
                
              } catch (error) {
                console.log('Error fetching data:', error);
              }
          }

          if ( category === 'RECOLECCIÓN') {
            try {
                const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria2/MAQUINARIA PARA LA RECOLECCION'}${search}`);
                const resp = await response.json();
                return resp;
                
              } catch (error) {
                console.log('Error fetching data:', error);
              }
          }

          if ( category === 'ABONO Y FERTILIZACIÓN') {
            try {
                const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria2/MAQUINAS PARA EL ABONO Y FERTI'}${search}`);
                const resp = await response.json();
                return resp;
                
              } catch (error) {
                console.log('Error fetching data:', error);
              }
          }

          if ( category === 'PROCESAMIENTO DE MATERIALES') {
            try {
                const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria2/MAQUINARIA PROCESAMIENTO MATER'}${search}`);
                const resp = await response.json();
                return resp;
                
              } catch (error) {
                console.log('Error fetching data:', error);
              }
          }

          if ( category === 'FUMIGACIÓN') {
            try {
                const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria2/EQUIPOS DE FUMIGACIÓN'}${search}`);
                const resp = await response.json();
                return resp;
                
              } catch (error) {
                console.log('Error fetching data:', error);
              }
          }

    if ( category === 'DESMALEZADORAS') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria3/DESMALEZADORAS'}${search}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    if ( category === 'MOTOSIERRAS') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria3/MOTOSIERRAS'}${search}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    if ( category === 'BOMBAS DE AGUA') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/bambasDeAgua'}${search}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

        if ( category === 'BOMBAS DE AGUA DOMÉSTICAS') {
          try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria3/BOMBAS DE AGUA USO DOMESTICO'}${search}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

        if ( category === 'BOMBAS DE AGUA PORTÁTILES') {
          try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria3/BOMBAS DE AGUA PORTATILES'}${search}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

    if ( category === 'MOTORES') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria3/MOTORES'}${search}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    if ( category === 'GENERADORES') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria3/GENERADORES'}${search}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

     /* ----------------------------------------------- SALUD ANIMAL ------------------------------------------------------- */

     if ( category === 'SALUD ANIMAL') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria/MEDICINA VETERINARIA'}${search}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
  }

    //Medicina Veterinaria
    if ( category === 'MEDICINA VETERINARIA') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaA-Z/MEDICINA VETERINARIA'}${search}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

        if ( category === 'ANALGÉSICOS Y ANTIINFLAMATORIOS') {
          try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/analgesicosAntiinflamatorios'}${search}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

        if ( category === 'ANTISEPTICOS Y DESINFECTANTES') {
          try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/antisepticosDesinfectantes'}${search}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

        if ( category === 'ANTIBIÓTICOS') {
          try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/antibioticos'}${search}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

        if ( category === 'ANTIDIARREICOS') {
          try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/antidiarreicos'}${search}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

        if ( category === 'BAÑOS, ECTOPARASITARIOS Y MATAGUSANOS') {
          try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/banosEctoparasitariosMatagusanos'}${search}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

        if ( category === 'BIOLÓGICOS') {
          try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/biologicos'}${search}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

        if ( category === 'DESPARASITANTES') {
          try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/desparasitantes'}${search}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

        if ( category === 'HEMOPARASITICIDAS') {
          try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/hemoparasiticidas'}${search}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

        if ( category === 'HORMONALES') {
          try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/hormonales'}${search}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

        if ( category === 'VITAMINAS Y MINERALES') {
          try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/vitaminasMinerales'}${search}`);
              const resp = await response.json();
              return resp;
              
            } catch (error) {
              console.log('Error fetching data:', error);
            }
        }

    if ( category === 'IMPLEMENTOS VETERINARIOS') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/implementosVeterinarios'}${search}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    if ( category === 'MANEJO E IDENTIFICADORES') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria3/MANEJO E IDENTIFICACION'}${search}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    if ( category === 'ALIMENTO ANIMAL') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria2/ALIMENTOS ANIMALES DE PRODUCCI'}${search}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    if ( category === 'ALIMENTO ANIMAL') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria2/ALIMENTOS ANIMALES DE PRODUCCI'}${search}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    if ( category === 'MASCOTAS') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria2/MEDICINA MASCOTAS'}${search}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

/* ----------------------------------------------- FERRETERÍA  ------------------------------------------------------- */

if ( category === 'FERRETERÍA') {
  try {
      const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaA-Z/FERRETERIA'}${search}`);
      const resp = await response.json();
      return resp;
      
    } catch (error) {
      console.log('Error fetching data:', error);
    }
}

    //Ferreteria Agrícola
    if ( category === 'FERRETERÍA AGRÍCOLA') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/ferreteriaAgricola'}${search}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    if ( category === 'ELECTRICIDAD') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/electricidad'}${search}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }


    /* ----------------------------------------------- SALUD PÚBLICA  ------------------------------------------------------- */

    if ( category === 'SALUD PÚBLCA') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria/SALUD PUBLICA'}${search}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }
    //Salud Pública
    if ( category === 'SALUD PÚBLICA') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria/SALUD PUBLICA'}${search}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    if ( category === 'DESINFECTANTE') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Categoria3/DESINFECTANTES'}${search}`);
          const resp = await response.json();
          return resp;
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }

    if ( category === 'CONTROL DE PLAGAS') {
      try {
          const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/CategoriaBuscar/controlDePlaga'}${search}`);
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








/* ----------------------------------------------- MARCAS ------------------------------------------------------- */

//Buscar Productos por Marca
export const getProductsBrand = async( marca, search ) => {

  if ( marca === '' ) {
      return [];
  }
  else{
    try {
      const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${'articulos/Marca/'}${marca}${search}`);
      const resp = await response.json();
      return resp;
      
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }

}


//Metodo para las marcas en los filtros de Busqueda
export const getBrand = ( searchText, MarcasProductos ) => {

  if ( searchText === '' ) {
      return [];
  }

  return MarcasProductos.filter( products => products.Marca.includes( searchText.toLocaleUpperCase() )  );

}



/* ----------------------------------------------- Componentes ------------------------------------------------------- */


export const getComponent = ( searchText, ComponentesProductos ) => {

  if ( searchText === '' ) {
      return [];
  }

  return ComponentesProductos.filter( products => products.cat4.includes( searchText.toLocaleUpperCase() )  );

}

