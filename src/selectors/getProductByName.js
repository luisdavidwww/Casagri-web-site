import { featuredProducts } from '../data/featuredProducts';



export const getProductByName = ( name = '' ) => {

    if ( name === '' ) {
        return [];
    }

    name = name.toLocaleLowerCase();
    return featuredProducts.filter( products => products.title.toLocaleLowerCase().includes( name )  );

}