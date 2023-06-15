//Data de productos casagri
import  data  from '../data/daticos/ProductosNew.json';
import { ACERCA_DE_CASAGRI, BANNERS, CATEGORIAS,
        BUSCARCATEGORIA, PRODUCTOS_MAESTROS, 
        PRODUCTOS_DISPONIBLES, PRODUCTOS_IMAGENES } from '../routers/index';


export const getProductosMaestros = async () => { 
    
      let luis = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE__TWO}${PRODUCTOS_MAESTROS}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la petición');
        }
        return response.json();
      })
      .then(data => {
        // Procesar los datos si la petición fue exitosa
        //setError(false);
        //setMasterProd(data.myQueryResults.Table);
        return (data.myQueryResults.Table);
        //console.log('Peticion exitosa,toma los productos bro'+products);
      })
      .catch(error => {
        // Manejar el error de la petición
        //setError(true);
        console.error('Error:', error.message);
      })

      return luis;


  }

  export const banner = async () => {

    await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE__TWO}${ACERCA_DE_CASAGRI}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la petición');
        }
        return response.json();
      })
      .then(data => {
        // Procesar los datos si la petición fue exitosa
        //setError(false);
        //setMasterProd(data.myQueryResults.Table);
        return (data);
        //console.log('Peticion exitosa,toma los productos bro'+products);
      })
      .catch(error => {
        // Manejar el error de la petición
        //setError(true);
        console.error('Error:', error.message);
      })

  }

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







