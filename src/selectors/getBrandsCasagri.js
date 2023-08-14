
import  data  from '../data/MarcasImagenes.json';



export const getBrandCategoryApi = ( marca ) => {

    let brand = data.filter( item => item.Marca.includes( marca ) );

        if ( brand.length == 0)
        {
            return false;
        }
        else
        {
            return true;
        }
    

}
