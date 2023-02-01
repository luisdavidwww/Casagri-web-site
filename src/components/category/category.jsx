import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

//importacion de datos de productos
import { featuredProductss } from "../../data/featuredProductss";
import { featuredProducts } from "../../data/featuredProducts";
import { ProductsAll } from "../../data/ProductsAll";
//componentes
import CardItem from '../Cards/CardItem'
import  Search  from "../Search/Search";
import { BannerCategory } from 'components/BannerMain/BannerCategory';
//Datos para los banners
import { BannerData } from '../../data/BannerData';






// Valor del Banner Principal
const listaDatos = BannerData.filter(element => element.id === 3);

//Img del banner principal  
const bannerImg =  listaDatos.map(item => item.img);
const bannerImgMini =  listaDatos.map(item => item.miniimg);

//Titulo del banner principal  
const bannerTitle =  listaDatos.map(item => item.title);

//Convertimos a strings para las props
const img =  bannerImg.toString();
const imgMini = bannerImgMini.toString()
const tit =  bannerTitle.toString();

//constante para pedir img de Banner
const imgCategory = require.context('../../static/images/category', true);




const Category = ({history}) => {
   
    //query de la url
    const { consulta } = useParams();
  
    //constante que almacena todas las categorias
    const allCategories = [
		'All',
		...new Set(featuredProductss.map(products => products.category)),
  ];

    //constante que almacena todas las Subcategorias
    const allSubCategories = [
      new Set(featuredProductss.map(products => products.subCategory)),
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
        let compareData = featuredProductss.filter((e) => {
          return e.category == consulta;
        })
        setProducts(compareData);
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
        let compareData = featuredProductss.filter((e) => {
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
        let compareData = featuredProductss.filter((e) => {
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
        const filteredData = featuredProductss.filter(products => products.category === category);
		    setProducts(filteredData)
        }
        
    }
    
    const [categories, setCategories] = useState(allCategories);


    //use effects general
    useEffect(() => {
        productsMain();
    }, [consulta])


  return (
    <>
            <BannerCategory image={imgCategory(`./${consulta+'.jpg'}`)} imageMini={imgCategory(`./${consulta+'.jpg'}`)} rutes={consulta}/>
            <Search/>

                { 
                        ( products.length == 0  ) 
                            && 
                            <div className="alert alert-danger">
                                Lo sentimos no existen productos en esta categoria
                            </div>
                }

                {
                        (  products.length !== 0  ) 
                        && 
                            <div className='cards'>
                                <div className='cards__container'>
                                    <div className='cards__wrapper'>
                                    <ul className='cards__items'>
                                    {products?.map((item) => (
                                        <CardItem
                                        key={item.id}
                                        src={item.imgUrl}
                                        title={item.title}
                                        label=''
                                        path={`/cart/${ item.id }`}
                                        price={item.price}
                                        presentation={item.presentation}
                                        />
                                    ))}
                                    </ul>
                                    </div>
                                </div>       
                            </div>
                        
                    }

    </>
  )
}

export default Category;
