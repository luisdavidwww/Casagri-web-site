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
                return data.filter( products => products.Cat3.includes( "RODENTICIDAS (PRESENTACIONES M" ) && 
                                                products.Cat3.includes( "FITORREGULADORES" ) &&
                                                products.Cat3.includes( "REGULADORES DE pH" ) &&
                                                products.Cat3.includes( "ADHERENTES-HUMECTANTES")
                                                );
                //return data.filter( products => {products.Cat3.includes( {"FITORREGULADORES", "RODENTICIDAS (PRESENTACIONES M"  })} ); 
            }

    if ( category === 'SEMILLAS' ) {
        return data.filter( products => products.cat2.includes( category ) );
    }
            if ( category === 'HORTALIZAS' ) {
                return data.filter( products => products.Cat3.includes( "HORTALIZAS VARIEDADES"  ) && products.Cat3.includes( "HORTALIZAS HIBRIDOS" ) );
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
    if ( category === 'MOTORES' ) {
        return data.filter( products => products.Cat3.includes( category ) );
    }



    

    if ( category === 'SALUD ANIMAL' ) {
        return data.filter( products => products.cat1.includes( "MEDICINA VETERINARIA", "GANADERIA" ) );
    }

    if ( category === 'MOTORES' ) {
        return data.filter( products => products.Cat3.includes( category ) );
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
export const getBrandsByName = () => {

    let CasagriBrands = [];

    //Buscamos las marcas que tienen los Productos
    CasagriBrands = data.map( function (item) {
      let brands = { Marca: item.Marca };
        return brands;
    });

    //filtramos las marcas repetidas
    let hash = {};
    return CasagriBrands.filter(o => hash[o.Marca] ? false : hash[o.Marca] = true);
}

//Buscar Marca por Nombre
export const getProductByBrands = ( Marca = '' ) => {

    if ( Marca === '' ) {
        return [];
    }

    //brand = brand.toLocaleLowerCase();
    return data.filter( products => products.Marca.includes( Marca )  );

}


/*------------------------METODOS DE PRODUCTO------------------------------*/

//Buscar Producto por nombre
export const getProductByName = ( name = '' ) => {

    if ( name === '' ) {
        return [];
    }

    name = name.toLocaleLowerCase();
    return data.filter( products => products.Nombre.toLocaleLowerCase().includes( name )  );

}

