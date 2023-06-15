//Data de productos casagri
//import  data  from '../data/daticos/productos.json';
import  data  from '../data/daticos/ProductosNew.json';
import  ProducRecomendados  from '../data/daticos/ProducRecomendados.json';
import  FeaturedProducts  from '../data/daticos/FeaturedProducts.json';
//FeaturedProducts




export const getProductByCategoryApi = ( category , datos ) => {


    if ( category === '' ) {
        return [];
    }

    /* ----------------------------------------------- CATEGORIAS ------------------------------------------------------- */

    //Agroindustrial
    if ( category === 'AGROQUÍMICOS' ) {
        return datos.filter( products => products.cat2.includes( "AGROQUIMICOS" ) );
     }

        if ( category === 'INSECTICIDAS' ) {
            return datos.filter( products => products.Cat3.includes( category ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
        }
        if ( category === 'HERBICIDAS' ) {
            return datos.filter( products => products.Cat3.includes( category ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
        }
        if ( category === 'FUNGICIDAS' ) {
            return datos.filter( products => products.Cat3.includes( category ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
        }
        if ( category === 'FUNGICIDAS' ) {
            return datos.filter( products => products.Cat3.includes( category ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
        }
        if ( category === 'OTROS' ) {

            const fitorreguladores = data.filter( products => products.Cat3.includes( "FITORREGULADORES" ) );
            const reguladoresPH = data.filter( products => products.Cat3.includes( "REGULADORES DE pH" ) );
            const adherentes = data.filter( products => products.Cat3.includes( "ADHERENTES-HUMECTANTES" ) );
            return fitorreguladores.concat(fitorreguladores, reguladoresPH, adherentes ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
        }

    if ( category === 'SEMILLAS' ) {
        let simillas = data.filter( products => products.cat2.includes( 'SEMILLAS' ) );
        //let semillas_BolsaVivero = simillas.filter( products => !products.cat4.includes( 'BOLSAS' ) )
        return simillas.filter( products => !products.cat4.includes( 'BANDEJAS' ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
    }
            if ( category === 'HORTALIZAS' ) {
                 const hibridos = datos.filter( products => products.Cat3.includes( "HORTALIZAS HIBRIDOS" ) );
                 const variedades = datos.filter( products => products.Cat3.includes( "HORTALIZAS VARIEDADES" ) );
                 return hibridos.concat(variedades).sort((x, y) => x.Nombre.localeCompare(y.Nombre));                               
            }
            if ( category === 'HORTALIZAS HÍBRIDAS' ) {
                return datos.filter( products => products.Cat3.includes( "HORTALIZAS HIBRIDOS" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
            }
            if ( category === 'PASTO' ) {
                return datos.filter( products => products.Cat3.includes( "SEMILLAS DE PASTO" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
            }
            if ( category === 'MAÍZ' ) {
                const Amarillo = datos.filter( products => products.cat4.includes( "MAIZ AMARILLO" ) );
                const Blanco = datos.filter( products => products.cat4.includes( "MAIZ BLANCO" ) );
                return Amarillo.concat(Blanco).sort((x, y) => x.Nombre.localeCompare(y.Nombre)); 
            }
            if ( category === 'BANDEJAS DE GERMINACIÓN' ) {
                return datos.filter( products => products.cat4.includes( "BANDEJAS" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
            }
            if ( category === 'BOLSAS DE VIVERO' ) {
                return datos.filter( products => products.cat4.includes( "BOLSAS" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
            }

    if ( category === 'FERTILIZANTES' ) {
        return datos.filter( products => products.cat2.includes( "FERTILIZANTES Y SUSTRATOS" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
    }
    if ( category === 'SACOS, CABULLAS Y CORDELES' ) {
        return datos.filter( products => products.cat2.includes( category ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
    }
    if ( category === 'CERCAS DE ALAMBRE Y ELÉCTRICAS' ) {
        return datos.filter( products => products.cat2.includes( "CERCAS", "MALLAS Y PLÁSTICOS DE USOS VAR" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
    }


    //Maquinarias
    if ( category === 'MAQUINARIAS' ) {
        const maquinaria = datos.filter( products => products.cat1.includes( "MAQUINARIA E IMPLEMENTOS" ) );
        const equipoFumigacion = datos.filter( products => products.Cat3.includes( "ASPERJADORAS"));

        return equipoFumigacion.concat( maquinaria ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
    }

    if ( category === 'MAQUINARIA AGRÍCOLA' ) {
        let motocultores = datos.filter( products => products.Cat3.includes( 'MOTOCULTORES' ) );
        let siembra = datos.filter( products => products.cat2.includes( "MAQUINAS PARA LA SIEMBRA" ) );
        let recoleccion = datos.filter( products => products.cat2.includes( "MAQUINARIA PARA LA RECOLECCION" ) );
        let abono = datos.filter( products => products.cat2.includes( "MAQUINAS PARA EL ABONO Y FERTI" ) );
        let procesamiento = datos.filter( products => products.cat2.includes( "MAQUINARIA PROCESAMIENTO MATER" ) );
        let fumigacion = datos.filter( products => products.cat2.includes( "EQUIPOS DE FUMIGACIÓN") );

        return motocultores.concat( siembra, recoleccion, abono, procesamiento, fumigacion );
    }
            if ( category === 'MOTOCULTORES' ) {
                return datos.filter( products => products.Cat3.includes( category ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
            }
            if ( category === 'SIEMBRA' ) {
                return datos.filter( products => products.cat2.includes( "MAQUINAS PARA LA SIEMBRA" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
            }
            if ( category === 'RECOLECCIÓN' ) {
                return datos.filter( products => products.cat2.includes( "MAQUINARIA PARA LA RECOLECCION" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
            }
            if ( category === 'ABONO Y FERTILIZACIÓN' ) {
                return datos.filter( products => products.cat2.includes( "MAQUINAS PARA EL ABONO Y FERTI" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
            }
            if ( category === 'PROCESAMIENTO DE MATERIALES' ) {
                return datos.filter( products => products.cat2.includes( "MAQUINARIA PROCESAMIENTO MATER" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
            }
            if ( category === 'FUMIGACIÓN' ) {
                return datos.filter( products => products.cat2.includes( "EQUIPOS DE FUMIGACIÓN") ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
            }

    if ( category === 'DESMALEZADORAS' ) {
        //console.log(datos);
        return datos.filter( products => products.Cat3.includes( "DESMALEZADORAS" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
    }

    if ( category === 'MOTOSIERRAS' ) {
        return datos.filter( products => products.Cat3.includes( "MOTOSIERRAS" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
    }

    if ( category === 'BOMBAS DE AGUA' ) {
        let domesticos = datos.filter( products => products.Cat3.includes( "BOMBAS DE AGUA USO DOMESTICO" ) );
        let portatiles = datos.filter( products => products.Cat3.includes( "BOMBAS DE AGUA PORTATILES" ) );

        return domesticos.concat( portatiles ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
    }
            if ( category === 'BOMBAS DE AGUA DOMÉSTICAS' ) {
                return datos.filter( products => products.Cat3.includes( "BOMBAS DE AGUA USO DOMESTICO" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
            }
            if ( category === 'BOMBAS DE AGUA PORTÁTILES' ) {
                return datos.filter( products => products.Cat3.includes( "BOMBAS DE AGUA PORTATILES" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
            }

    if ( category === 'MOTORES' ) {
        //console.log('muestra' + datos);
        return datos.filter( products => products.Cat3.includes( 'MOTORES' ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
    }

    if ( category === 'GENERADORES' ) {
        return datos.filter( products => products.Cat3.includes( 'GENERADORES' ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
    }


    //Salud Animal
    if ( category === 'SALUD ANIMAL' ) {
        return datos.filter( products => products.cat1.includes( "MEDICINA VETERINARIA" ) );
    }

    if ( category === 'MEDICINA VETERINARIA' ) {
        return datos.filter( products => products.cat1.includes( "MEDICINA VETERINARIA" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
    }
            if ( category === 'ANALGÉSICOS Y ANTIINFLAMATORIOS' ) {
                let analgesicos = datos.filter( products => products.Cat3.includes( "ANALGESICO Y ANTIINFLAMATORIO") );
                let antidotos = datos.filter( products => products.Cat3.includes( "ANTIDOTOS, ANTITOXICOS Y PARAS" ) );
                let antitimpanico = datos.filter( products => products.Cat3.includes( "ANTITIMPÀNICO" ) );

                return analgesicos.concat( antidotos , antitimpanico ).filter( products => !products.cat2.includes( 'MEDICINA MASCOTAS' ) );
            }
            if ( category === 'ANTISEPTICOS Y DESINFECTANTES' ) {
                let antisepticos = datos.filter( products => products.Cat3.includes( "ANTISEPTICOS-DESINFECTANTES" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));

                return antisepticos.filter( products => !products.cat2.includes( 'MEDICINA MASCOTAS' ) );
            }
            if ( category === 'ANTIBIÓTICOS' ) {
                let antibioticos = datos.filter( products => products.Cat3.includes( "ANTIBIOTICOS") ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
                let antitimastitico = datos.filter( products => products.Cat3.includes( "ANTIMASTITICOS" ) );

                return antibioticos.concat( antitimastitico ).filter( products => !products.cat2.includes( 'MEDICINA MASCOTAS' ) );
            }
            if ( category === 'ANTIDIARREICOS' ) {
                let antidiarreicos = datos.filter( products => products.Cat3.includes( "ANTIDIARREICOS" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));

                return antidiarreicos.filter( products => !products.cat2.includes( 'MEDICINA MASCOTAS' ) );
            }
            if ( category === 'BAÑOS, ECTOPARASITARIOS Y MATAGUSANOS' ) {
                let antiparasitario = datos.filter( products => products.Cat3.includes( "ANTIPARASITARIO EXTERNO (BAÑOS") );
                let topico = datos.filter( products => products.Cat3.includes( "TOPICO ANTIPARASITARIO" ) );
                return antiparasitario.concat( topico ).filter( products => !products.cat2.includes( 'MEDICINA MASCOTAS' ) );
            }
            if ( category === 'BIOLÓGICOS' ) {
                let biologicos = datos.filter( products => products.Cat3.includes( "VACUNAS Y BACTERINAS" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
                
                return biologicos.filter( products => !products.cat2.includes( 'MEDICINA MASCOTAS' ) );
            }

            if ( category === 'HEMOPARASITICIDAS' ) {

                let hemoparasiticidas = datos.filter( products => products.Cat3.includes( "HEMOPARASITICIDA" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
                
                return hemoparasiticidas.filter( products => !products.cat2.includes( 'MEDICINA MASCOTAS' ) );
            }

            if ( category === 'HORMONALES' ) {

                let hormonales = datos.filter( products => products.Cat3.includes( "HORMONALES PARA REPRODUCCION" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre))
             
                return hormonales.filter( products => !products.cat2.includes( 'MEDICINA MASCOTAS' ) );
            }
            
            //METER ENDECTOCIDAS EN DESPARASITANTES

            if ( category === 'VITAMINAS Y MINERALES' ) {
                let reconstituyentes = datos.filter( products => products.Cat3.includes( "RECONSTITUYENTES, REHIDRATANTE") ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
                let vitaminas = datos.filter( products => products.Cat3.includes( "VITAMINAS" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));

                return reconstituyentes.concat( vitaminas ).filter( products => !products.cat2.includes( 'MEDICINA MASCOTAS' ) );
            }



    if ( category === 'IMPLEMENTOS VETERINARIOS' ) {
        let impVet = datos.filter( products => products.Cat3.includes( "IMPLEMENTOS VETERINARIOS") );
        //let laxantesPurgantes = datos.filter( products => products.Cat3.includes( "LAXANTES Y PURGANTES" ) );
        return impVet.filter( products => !products.cat2.includes( "MANEJO E IDENTIFICACION" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
    }

    if ( category === 'MANEJO E IDENTIFICADORES' ) {
        return datos.filter( products => products.Cat3.includes( "MANEJO E IDENTIFICACION" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
    }

    if ( category === 'ALIMENTO ANIMAL' ) {
        return datos.filter( products => products.cat2.includes( "ALIMENTOS ANIMALES DE PRODUCCI" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
    }

    if ( category === 'MASCOTAS' ) {
        return datos.filter( products => products.cat2.includes( "MEDICINA MASCOTAS" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
    }





    if ( category === 'FERRETERÍA AGRÍCOLA' ) {

        let ferreteria = datos.filter( products => products.cat1.includes( "FERRETERIA" ) );
        return ferreteria.filter( products => !products.cat2.includes( "ELECTRICIDAD" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
    }   
    
        if ( category === 'ELECTRICIDAD' ) {
            return datos.filter( products => products.cat2.includes( "ELECTRICIDAD" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
        }     


    //Salud Pública
    if ( category === 'CONTROL DE PLAGA' ) {

        let SaludPublica = datos.filter( products => products.cat1.includes( "SALUD PUBLICA" ) );
        let Insecticidas = datos.filter( products => products.cat2.includes( "INSECTICIDAS" ) );

        return SaludPublica.concat( Insecticidas ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
    }

    if ( category === 'DESINFECTANTE' ) {
        return datos.filter( products => products.Cat3.includes( "DESINFECTANTES" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
    }


}


/* ----------------------------------------------- PRODUCTOS ------------------------------------------------------- */

//Buscar Producto por Nombre
export const getProductByNombreApi = ( nombre, datos ) => {

    let nombreM = nombre.toLocaleUpperCase();
    //console.log(datos);
    return datos.filter( products => products.Nombre.includes( nombreM )  );

}

//Buscar Producto por Codigo
export const getProductByCodigoApi = ( codigo, datos ) => {
    return datos.filter( products => products.Nombre.includes( codigo )  );

}






















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
        return data.filter( products => products.cat1.includes( "MEDICINA VETERINARIA" ) ).sort((x, y) => x.Nombre.localeCompare(y.Nombre));
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
export const getProductDataByName = ( name ) => {

    if ( name === '' ) {
        return [];
    }

    
    //name = name.toLocaleUpperCase();
    console.log("Nombre como parametro "+name)
    console.log("resultado de busqueda "+data.filter( products => products.Nombre.includes( name )))
    return data.filter( products => products.Nombre.includes( name ) )
    

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
      return CasagriBrands.filter(o => hash[o.Marca] ? false : hash[o.Marca] = true);


    
    //let datos = getProductByCategoryApi( category, ArregloProducto );


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
