//Data de productos casagri
import  data  from '../data/daticos/productos.json';



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
        return data.filter( products => products.cat1.includes( "MEDICINA VETERINARIA" ) );
    }
            if ( category === 'ANALGÉSICOS Y ANTI-INFLAMATORIOS' ) {
                let analgesicos = data.filter( products => products.Cat3.includes( "ANALGESICO Y ANTIINFLAMATORIO") );
                let atidotos = data.filter( products => products.Cat3.includes( "ANTIDOTOS, ANTITOXICOS Y PARAS" ) );

                return analgesicos.concat( atidotos );
            }
            if ( category === 'ANTIBIÓTICOS' ) {
                return data.filter( products => products.Cat3.includes( "ANTIBIOTICOS" ) );
            }
            if ( category === 'ANTI-DIARREICOS' ) {
                return data.filter( products => products.Cat3.includes( "ANTIDIARREICOS" ) );
            }
            if ( category === 'ANTIEMETICOs' ) {
                return data.filter( products => products.Cat3.includes( "ANTIEMETICO" ) );
            }
    if ( category === 'IMPLEMENTOS VETERINARIOS' ) {
        return data.filter( products => products.cat2.includes( "IMPLEMENTOS VETERINARIOS" ) );
    }

    //category = category.toLocaleLowerCase();  

    return data.filter( products => products.cat1.includes( category ) );

}

//Listado de Productos por Categoria 2
export const getProductByCat2 = ( category = '' ) => {

    if ( category === '' ) {
        return [];
    }

    //category = category.toLocaleLowerCase();
    return data.filter( products => products.cat2.includes( category ) );

}
//Listado de Productos por Categoria 3
export const getProductByCat3 = ( category3 = '' ) => {

    if ( category3 === '' ) {
        return [];
    }

    //category = category.toLocaleLowerCase();
    return data.filter( products => products.Cat3.includes( category3 ) );

}
//Listado de Productos por Categoria 4
export const getProductByCat4 = ( category4 = '' ) => {

    if ( category4 === '' ) {
        return [];
    }

    //category = category.toLocaleLowerCase();
    return data.filter( products => products.cat4.includes( category4 ) );

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
      return CasagriBrands.filter(o => hash[o.Marca] ? false : hash[o.Marca] = true);
}

//Producto por Marca
export const getProductByBrands = ( Marca = '' ) => {

    if ( Marca === '' ) {
        return [];
    }

    //brand = brand.toLocaleLowerCase();
    return data.filter( products => products.Marca.includes( Marca )  );

}


/*------------------------METODOS DE PRODUCTO------------------------------*/

//Buscar Producto por nombre
export const getProductDataByName = ( name = '' ) => {

    if ( name === '' ) {
        return [];
    }

    name = name.toLocaleLowerCase();
    return data.filter( products => products.Nombre.toLocaleLowerCase().includes( name )  );

}

