//Data de productos casagri
import { featuredProductss } from '../data/featuredProductss';
import  data  from '../data/Productos.json';



export const getProductByName = ( name = '' ) => {

    if ( name === '' ) {
        return [];
    }

    name = name.toLocaleLowerCase();
    return featuredProductss.filter( products => products.title.toLocaleLowerCase().includes( name )  );

}

export const getProductByBrands = ( Marca = '' ) => {

    if ( Marca === '' ) {
        return [];
    }

    //brand = brand.toLocaleLowerCase();
    return data.filter( products => products.Marca.includes( Marca )  );

}