import { featuredProductss } from '../data/featuredProductss';



export const getProductByName = ( name = '' ) => {

    if ( name === '' ) {
        return [];
    }

    name = name.toLocaleLowerCase();
    return featuredProductss.filter( products => products.title.toLocaleLowerCase().includes( name )  );

}