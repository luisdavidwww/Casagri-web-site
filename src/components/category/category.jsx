import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


//importacion de datos de productos
import { featuredProducts } from "../../data/featuredProductss";


//componentes
import  ProductContainerNew  from "../Search/ProductContainerNew";
import  Search  from "../Search/Search";

const Category = ({history}) => {
   
    //query de la url
    const { consulta } = useParams();
    console.log("aqui va la query" + consulta);
  
    //constante que almacena todas las categorias
    const allCategories = [
		'All',
		...new Set(featuredProducts.map(products => products.category)),
  ];

    //constante que almacena todas las Subcategorias
    const allSubCategories = [
      new Set(featuredProducts.map(products => products.subCategory)),
  ];




   const [products, setProducts] = useState([]);



    //evalua la prop de URL, 
    const productsMain = () => {
      if (consulta === 'All'){
        setProducts(featuredProducts);
        return
		}
        else {
		    compare();
			return
		}
    }

    
    //compara la props de URL con las categorias existentes
    const compare = () => {

      //Categorias
      if (consulta === 'Agroindustrial' || consulta === 'Maquinarias' 
          || consulta === 'Salud Animal' || consulta === 'Ferretería' 
          || consulta === 'Salud Pública')
      {
        let compareData = featuredProducts.filter((e) => {
          return e.category == consulta;
        })
        setProducts(compareData);
        console.log("aqui va los productos:  " + products);
      }


      //SubCategorias
      if (consulta === 'Agroquímicos' || consulta === 'Semillas' 
      || consulta === 'Fertilizantes' || consulta === 'Sacos Cabuyas y Cordeles' 
      || consulta === 'Cercas de alambre' || consulta === 'Equípos Agrícolas'
      || consulta === 'Bombas de Agua' || consulta === 'Generadores'
      || consulta === 'Motores' || consulta === 'Medicina Veterinaria'
      || consulta === 'Instrumental Veterinario' || consulta === 'Manejo e Identificadores'
      || consulta === 'Ferreteria Agricola' || consulta === 'Electricidad'
      || consulta === 'Otros Productos ' || consulta === 'Control De Plaga'
      || consulta === 'Desinfectante'     
      )
      {
        let compareData = featuredProducts.filter((e) => {
          return e.subCategory == consulta;
        })
        setProducts(compareData);
      }


      //tipoProductos 
      if (consulta === 'Insecticidas' || consulta === 'Herbicidas' 
      || consulta === 'Fungicidas' || consulta === 'Asperjadoras' 
      || consulta === 'Alta Presión' || consulta === 'Baja Presión'
      || consulta === 'Baños, Ectoparasitarios y Matagusanos'   
      )
      {
        let compareData = featuredProducts.filter((e) => {
          return e.TipoProducto == consulta;
        })
        setProducts(compareData);
      }

    }
      


    //metodo para aplicar los filtros de busqueda
    const filterCategory = (category, consulta) => {
		if (category === 'All'){
			compare()
			return
		}
        if (consulta === 'Agroindustrial'){
			compare()
			return
		}
        else{
            const filteredData = featuredProducts.filter(products => products.category === category);
		    setProducts(filteredData)
        }
        
    }
    
    

   
    const [categories, setCategories] = useState(allCategories);




    //use effects general
    useEffect(() => {
        productsMain();
        console.log("aqui va la query" + consulta);
    }, [consulta])


  return (
    <>
            {/*<Search/>*/}

                { 
                        ( products.length == 0  ) 
                            && 
                            <div className="alert alert-danger">
                                Lo sentimos no existen productos en esta categoria
                            </div>
                }

                {
                    products.map((product, index) => {
                        return (
                            <ProductContainerNew 
                            key={index}
                            id={product.id}
                            imgUrl={product.imgUrl}
                            title={product.title}
                            price={product.price}
                            presentacion={product.presentation}
                            />
                        )
                    })
                    
                }

    </>
  )
}

export default Category;
