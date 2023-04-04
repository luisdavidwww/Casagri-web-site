//Data de productos casagri
import  data  from '../data/daticos/productos.json';



/*------------------------METODOS DE CATEGORIAS------------------------------*/

//Listado de Productos por Categoria 1
export const getProductByCategory = ( category = '' ) => {

    if ( category === '' ) {
        return [];
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

