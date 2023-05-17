//Data de productos casagri
//import  data  from '../data/daticos/productos.json';
import  data  from '../data/daticos/ProductosNew.json';
import  ProducRecomendados  from '../data/daticos/ProducRecomendados.json';
import  FeaturedProducts  from '../data/daticos/FeaturedProducts.json';
//FeaturedProducts



/*------------------------METODOS DE CATEGORIAS------------------------------*/

//Listado de Productos por Categoria
export const getProductByCategory = ( category = '' ) => {

    if ( category === '' ) {
        return [];
    }

    //Agroindustrial
    if ( category === 'AGROINDUSTRIAL' ) {
        return data.filter( products => !products.cat2.includes( "EQUIPOS DE FUMIGACIÓN"));
    }

    if ( category === 'AGROQUÍMICOS' ) {
       return data.filter( products => products.cat2.includes( "AGROQUIMICOS" ) );
    }
            if ( category === 'INSECTICIDAS' ) {
                return data.filter( products => products.Cat3.includes( category ) );
            }
            if ( category === 'HERBICIDAS' ) {
                return data.filter( products => products.Cat3.includes( category ) );
            }
            if ( category === 'FUNGICIDAS' ) {
                return data.filter( products => products.Cat3.includes( category ) );
            }
            if ( category === 'FUNGICIDAS' ) {
                return data.filter( products => products.Cat3.includes( category ) );
            }
            if ( category === 'OTROS' ) {

                const rodenticidas = data.filter( products => products.Cat3.includes( "RODENTICIDAS (PRESENTACIONES M" ) );
                const fitorreguladores = data.filter( products => products.Cat3.includes( "FITORREGULADORES" ) );
                const reguladoresPH = data.filter( products => products.Cat3.includes( "REGULADORES DE pH" ) );
                const adherentes = data.filter( products => products.Cat3.includes( "ADHERENTES-HUMECTANTES" ) );
                return fitorreguladores.concat(fitorreguladores, reguladoresPH, adherentes );
            }

    if ( category === 'SEMILLAS' ) {
        return data.filter( products => products.cat2.includes( category ) );
    }
            if ( category === 'HORTALIZAS' ) {
                 const hibridos = data.filter( products => products.Cat3.includes( "HORTALIZAS HIBRIDOS" ) );
                 const variedades = data.filter( products => products.Cat3.includes( "HORTALIZAS VARIEDADES" ) );
                 return hibridos.concat(variedades);                               
            }
            if ( category === 'HORTALIZAS HÍBRIDAS' ) {
                return data.filter( products => products.Cat3.includes( "HORTALIZAS HIBRIDOS" ) );
            }
            if ( category === 'PASTO' ) {
                return data.filter( products => products.Cat3.includes( "SEMILLAS DE PASTO" ) );
            }
            if ( category === 'MAÍZ' ) {
                return data.filter( products => products.Cat3.includes( "CEREALES HIBRIDOS" ) );
            }
            if ( category === 'BANDEJAS DE GERMINACIÓN' ) {
                return data.filter( products => products.cat4.includes( "BANDEJAS" ) );
            }
            if ( category === 'BOLSAS DE VIVERO' ) {
                return data.filter( products => products.cat4.includes( "BOLSAS" ) );
            }

    if ( category === 'FERTILIZANTES' ) {
        return data.filter( products => products.cat2.includes( "FERTILIZANTES Y SUSTRATOS" ) );
    }
    if ( category === 'SACOS, CABULLAS Y CORDELES' ) {
        return data.filter( products => products.cat2.includes( category ) );
    }
    if ( category === 'CERCAS DE ALAMBRE Y ELÉCTRICAS' ) {
        return data.filter( products => products.cat2.includes( "CERCAS", "MALLAS Y PLÁSTICOS DE USOS VAR" ) );
    }


    //Maquinarias
    if ( category === 'MAQUINARIAS' ) {
        const maquinaria = data.filter( products => products.cat1.includes( "MAQUINARIA E IMPLEMENTOS" ) );
        const equipoFumigacion = data.filter( products => products.Cat3.includes( "ASPERJADORAS"));

        return equipoFumigacion.concat( maquinaria );
    }

    if ( category === 'MAQUINARIA AGRÍCOLA' ) {
        let motocultores = data.filter( products => products.Cat3.includes( 'MOTOCULTORES' ) );
        let siembra = data.filter( products => products.cat2.includes( "MAQUINAS PARA LA SIEMBRA" ) );
        let recoleccion = data.filter( products => products.cat2.includes( "MAQUINARIA PARA LA RECOLECCION" ) );
        let abono = data.filter( products => products.cat2.includes( "MAQUINAS PARA EL ABONO Y FERTI" ) );
        let procesamiento = data.filter( products => products.cat2.includes( "MAQUINARIA PROCESAMIENTO MATER" ) );
        let fumigacion = data.filter( products => products.cat2.includes( "EQUIPOS DE FUMIGACIÓN") );

        return motocultores.concat( siembra, recoleccion, abono, procesamiento, fumigacion );
    }
            if ( category === 'MOTOCULTORES' ) {
                return data.filter( products => products.Cat3.includes( category ) );
            }
            if ( category === 'SIEMBRA' ) {
                return data.filter( products => products.cat2.includes( "MAQUINAS PARA LA SIEMBRA" ) );
            }
            if ( category === 'RECOLECCIÓN' ) {
                return data.filter( products => products.cat2.includes( "MAQUINARIA PARA LA RECOLECCION" ) );
            }
            if ( category === 'ABONO Y FERTILIZACIÓN' ) {
                return data.filter( products => products.cat2.includes( "MAQUINAS PARA EL ABONO Y FERTI" ) );
            }
            if ( category === 'PROCESAMIENTO DE MATERIALES' ) {
                return data.filter( products => products.cat2.includes( "MAQUINARIA PROCESAMIENTO MATER" ) );
            }
            if ( category === 'FUMIGACIÓN' ) {
                return data.filter( products => products.cat2.includes( "EQUIPOS DE FUMIGACIÓN") );
            }

    if ( category === 'DESMALEZADORAS' ) {
        return data.filter( products => products.Cat3.includes( "DESMALEZADORAS" ) );
    }

    if ( category === 'MOTOSIERRAS' ) {
        return data.filter( products => products.Cat3.includes( "MOTOSIERRAS" ) );
    }

    if ( category === 'BOMBAS DE AGUA' ) {
        let domesticos = data.filter( products => products.Cat3.includes( "BOMBAS DE AGUA USO DOMESTICO" ) );
        let portatiles = data.filter( products => products.Cat3.includes( "BOMBAS DE AGUA PORTATILES" ) );

        return domesticos.concat( portatiles );
    }
            if ( category === 'BOMBAS DE AGUA DOMÉSTICAS' ) {
                return data.filter( products => products.Cat3.includes( "BOMBAS DE AGUA USO DOMESTICO" ) );
            }
            if ( category === 'BOMBAS DE AGUA PORTÁTILES' ) {
                return data.filter( products => products.Cat3.includes( "BOMBAS DE AGUA PORTATILES" ) );
            }

    if ( category === 'MOTORES' ) {
        return data.filter( products => products.Cat3.includes( 'MOTORES' ) );
    }

    if ( category === 'GENERADORES' ) {
        return data.filter( products => products.Cat3.includes( 'GENERADORES' ) );
    }



    //Salud Animal
    if ( category === 'SALUD ANIMAL' ) {
        return data.filter( products => products.cat1.includes( "MEDICINA VETERINARIA" ) );
    }

    if ( category === 'MEDICINA VETERINARIA' ) {
        return data.filter( products => products.cat1.includes( "MEDICINA VETERINARIA" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));;
    }
            if ( category === 'ANALGÉSICOS Y ANTI-INFLAMATORIOS' ) {
                let analgesicos = data.filter( products => products.Cat3.includes( "ANALGESICO Y ANTIINFLAMATORIO") );
                let atidotos = data.filter( products => products.Cat3.includes( "ANTIDOTOS, ANTITOXICOS Y PARAS" ) );

                return analgesicos.concat( atidotos );
            }//
            if ( category === 'ANTISEPTICOS Y DESINFECTANTES' ) {
                return data.filter( products => products.Cat3.includes( "ANTISEPTICOS-DESINFECTANTES" ) );
            }
            if ( category === 'ANTIBIÓTICOS' ) {
                return data.filter( products => products.Cat3.includes( "ANTIBIOTICOS" ) );
            }
            if ( category === 'ANTIMASTITICOS' ) {
                return data.filter( products => products.Cat3.includes( "ANTIMASTITICOS" ) );
            }
            if ( category === 'ANTITIMPÁNICO' ) {
                return data.filter( products => products.Cat3.includes( "ANTITIMPÀNICO" ) );
            }
            if ( category === 'ANTIDIARREICOS' ) {
                return data.filter( products => products.Cat3.includes( "ANTIDIARREICOS" ) );
            }
            if ( category === 'BAÑOS, ECTOPARASITARIOS Y MATAGUSANOS' ) {
                let antiparasitario = data.filter( products => products.Cat3.includes( "ANTIPARASITARIO EXTERNO (BAÑOS") );
                let topico = data.filter( products => products.Cat3.includes( "TOPICO ANTIPARASITARIO" ) );

                return antiparasitario.concat( topico ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));

            }
            if ( category === 'BIOLÓGICOS' ) {
                return data.filter( products => products.Cat3.includes( "VACUNAS Y BACTERINAS" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
            }
            if ( category === 'VITAMINAS Y SUPLEMENTOS' ) {
                let antiparasitarioInterno = data.filter( products => products.Cat3.includes( "ANTIPARASITARIO INTERNO") );
                let laxantesPurgantes = data.filter( products => products.Cat3.includes( "LAXANTES Y PURGANTES" ) );;

                return antiparasitarioInterno.concat( laxantesPurgantes ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
            }



    if ( category === 'IMPLEMENTOS VETERINARIOS' ) {
        return data.filter( products => products.cat2.includes( "IMPLEMENTOS VETERINARIOS" ) );
    }

    if ( category === 'MANEJO E IDENTIFICADORES' ) {
        return data.filter( products => products.Cat3.includes( "MANEJO E IDENTIFICACION" ) );
    }

    if ( category === 'CONTROL DE PLAGA' ) {

        let SaludPublica = data.filter( products => products.cat1.includes( "SALUD PUBLICA" ) );
        let Insecticidas = data.filter( products => products.cat2.includes( "INSECTICIDAS" ) );;

        return SaludPublica.concat( Insecticidas ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
    }

    if ( category === 'DESINFECTANTE' ) {
        return data.filter( products => products.Cat3.includes( "DESINFECTANTES" ) );
    }

    //category = category.toLocaleLowerCase();  

    return data.filter( products => products.cat1.includes( category ) );

}

//Listado de Productos Destacados
export const getProduct = ( ) => {

    return FeaturedProducts.concat(ProducRecomendados );

}

//Listado de Categorias
export const getCategory = (  ) => {

    let CasagriCategory = [];

    //Buscamos las marcas que tienen los Productos
    CasagriCategory = data.map( function (item) {
      let category = { cat1: item.cat1 };
        return category;
    });

    //filtramos las marcas repetidas
    let option = {};
    return CasagriCategory.filter(o => option[o.cat1] ? false : option[o.cat1] = true);

}




/*------------------------METODOS DE PRODUCTO------------------------------*/

//Buscar Producto Y Componente Activo
export const getProductDataByName = ( name = '' ) => {

    if ( name === '' ) {
        return [];
    }

    name = name.toLocaleUpperCase();
    let nombre = data.filter( products => products.Nombre.includes( name ) );
    let componente = data.filter( products => products.cat4.includes( name ) );;

    return nombre.concat( componente ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));

    //return data.filter( products => products.Nombre.includes( name )  );

}

//Buscar Producto por Codigo
export const getProductDataByCodigo = ( codigo ) => {

    if ( codigo === '' ) {
        return [];
    }

    //codigo = codigo.toLocaleLowerCase();
    return data.filter( products => products.CodigoProd.includes( codigo )  );

}


/*------------------------METODOS DE MARCA------------------------------*/

//Listado de Marcas Casagri
export const getBrandsByName = ( ArregloProducto ) => {

    let CasagriBrands =[];

    CasagriBrands = ArregloProducto.map( function (item) {
        let brands = { Marca: item.Marca };
          return brands;
      });
  
      //filtramos las marcas repetidas
      let hash = {};
      return CasagriBrands.filter(o => hash[o.Marca] ? false : hash[o.Marca] = true).sort((x, y) => x.Marca.localeCompare(y.Marca));
}

//Producto por Marca Normal
export const getProductByBrandsUni = ( Marca = '' ) => {

    if ( Marca === '' ) {
        return [];
    }
    //brand = brand.toLocaleLowerCase();
    return data.filter( products => products.Marca.includes( Marca )  );

}

//Producto por Marca con la categoria como condición
export const getProductByBrands = ( Marca = '', ProductoPorCategoria ) => {

    if ( Marca === '' ) {
        return [];
    }
    //brand = brand.toLocaleLowerCase();
    return data.filter( products => products.Marca.includes( Marca )).sort((x, y) => x.Nombre.localeCompare(y.Nombre)) ;

}

//Buscador de Marcas por nombre 
export const getBrand = ( searchText, MarcasProductos ) => {

    if ( searchText === '' ) {
        return [];
    }

    return MarcasProductos.filter( products => products.Marca.includes( searchText.toLocaleUpperCase() )  );

}



/*------------------------METODOS DE COMPOSICIÓN------------------------------*/

export const getComponentByName = ( ArregloProducto ) => {

    let CasagriComponents =[];

    CasagriComponents = ArregloProducto.map( function (item) {
        let brands = { cat4: item.cat4 };
          return brands;
      });
  
      //filtramos las marcas repetidas sort()
      let hash = {};
      return CasagriComponents.filter(o => hash[o.cat4] ? false : hash[o.cat4] = true).sort((x, y) => x.cat4.localeCompare(y.cat4));
      //return luis.sort((x, y) => x.cat4.localeCompare(y.cat4));
}

//Buscador de Componente por nombre 
export const getComponent = ( searchText, ComponentesProductos ) => {

    if ( searchText === '' ) {
        return [];
    }

    return ComponentesProductos.filter( products => products.cat4.includes( searchText.toLocaleUpperCase() )  );

}

//Buscador de Componente  
export const getComponentList = ( searchText ) => {

    if ( searchText === '' ) {
        return [];
    }

    return data.filter( products => products.cat4.includes( searchText.toLocaleUpperCase() )  );

}
