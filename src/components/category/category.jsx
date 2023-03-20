import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

//importacion de datos de productos
import { featuredProductss } from "../../data/featuredProductss";
import { featuredProducts } from "../../data/featuredProducts";
import { ProductsAll } from "../../data/ProductsAll";
//componentes
import CardItem from '../Cards/CardItem'
import  Search  from "../Search/Search";
import  SimpleAccordion  from "../Search/FiltersBar";
import { BannerCategory } from 'components/BannerMain/BannerCategory';
//Datos para los banners 
import { BannerData } from '../../data/BannerData';
import { BannerCategoryImg } from '../../data/BannerData';
import { links } from "../common/Navbar/Mylinks";
//Estilos
import './Category.css'






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




const Category = ({history, component}) => {
   
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
   const [imgBanner, setImgBanner] = useState('');
   const [imgMiniBanner, setImgMiniBanner] = useState('');


    //evalua la prop de URL, 
    const productsMain = () => {
      if (consulta === 'All'){
        setProducts(featuredProducts);

          let compareBanner = BannerCategoryImg.filter((e) => {return e.category == 'All';})
         //declaramos las variables para las imagenes
         let condImg =  compareBanner.map(item => item.img).toString();
         let condImgMini = compareBanner.map(item => item.miniimg).toString();
 
         //Cargamos las imagenes
         setImgBanner(condImg);
         setImgMiniBanner(condImgMini);
         console.log(consulta);
        return
		}
        else {
		    compare();
        compareImgBanner();
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
      || consulta === 'Cercas de Alambre y Eléctricas' || consulta === 'Equípos Agrícolas'
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
    //compara la props de URL con las categorias existentes
    const compareImgBanner = () => {

      //Banner Agroindustrial
      if (consulta === 'Agroindustrial' || consulta === 'Agroquímicos' ||  consulta === 'Semillas' || consulta === 'Fertilizantes' || consulta === 'Sacos Cabuyas y Cordeles' || consulta === 'Cercas de Alambre y Eléctricas' || consulta === 'Insecticidas' || consulta === 'Otros' || consulta === 'Herbicidas' || consulta === 'Fungicidas' || consulta === 'Frutas y Hortalizas'|| consulta === 'Pasto' || consulta === 'Maíz'|| consulta === 'Sustratos')
      {
        let compareBanner = BannerCategoryImg.filter((e) => {return e.category == 'Agroindustial';})
        //declaramos las variables para las imagenes
        let condImg =  compareBanner.map(item => item.img).toString();
        let condImgMini = compareBanner.map(item => item.miniimg).toString();

        //Cargamos las imagenes
        setImgBanner(condImg);
        setImgMiniBanner(condImgMini);
      }

      //Banner Maquinarias
      if (consulta === 'Maquinarias' || consulta === 'Equípos Agrícolas' ||  consulta === 'Asperjadoras' || consulta === 'Abonadoras, Sembradoras y Cosechadoras' || consulta === 'Desmalezadoras' || consulta === 'Motosierras' || consulta === 'Motocultores' || consulta === 'Bombas de Agua' || consulta === 'Alta presión' || consulta === 'Baja presión'|| consulta === 'Generadores' || consulta === 'Motores'|| consulta === 'Sustratos')
      {
        let compareBanner = BannerCategoryImg.filter((e) => {return e.category == 'Maquinarias';})
        //declaramos las variables para las imagenes
        let condImg =  compareBanner.map(item => item.img).toString();
        let condImgMini = compareBanner.map(item => item.miniimg).toString();

        //Cargamos las imagenes
        setImgBanner(condImg);
        setImgMiniBanner(condImgMini);
      }

      //Banner Salud Animal
      if (consulta === 'Salud Animal' || consulta === 'Medicina Veterinaria' ||  consulta === 'Antibióticos' || consulta === 'Anti-Diarreícos' || consulta === 'Analgésicos y Antiflamatorios' || consulta === 'Baños, Ectoparasitarios y Matagusanos' || consulta === 'Desparacitantes' || consulta === 'Tópicos y Sicatrizantes' || consulta === 'Vacunas' || consulta === 'Vitaminas y Suplementos' || consulta === 'Instrumental Veterinario'  || consulta === 'Manejo e Identificadores'     )
      {
        let compareBanner = BannerCategoryImg.filter((e) => {return e.category == 'SaludAnimal';})
        //declaramos las variables para las imagenes
        let condImg =  compareBanner.map(item => item.img).toString();
        let condImgMini = compareBanner.map(item => item.miniimg).toString();

        //Cargamos las imagenes
        setImgBanner(condImg);
        setImgMiniBanner(condImgMini);
      }

      //Banner Ferretería
      if (consulta === 'Ferretería' || consulta === 'Ferretería Agrícola' ||  consulta === 'Electricidad' || consulta === 'Otros Productos')
      {
        let compareBanner = BannerCategoryImg.filter((e) => {return e.category == 'Ferretería';})
        //declaramos las variables para las imagenes
        let condImg =  compareBanner.map(item => item.img).toString();
        let condImgMini = compareBanner.map(item => item.miniimg).toString();

        //Cargamos las imagenes
        setImgBanner(condImg);
        setImgMiniBanner(condImgMini);
      }

      //Banner Salud Pública
      if (consulta === 'Salud Pública' || consulta === 'Control De Plaga' ||  consulta === 'Desinfectante')
      {
        let compareBanner = BannerCategoryImg.filter((e) => {return e.category == 'Salud Pública';})
        //declaramos las variables para las imagenes
        let condImg =  compareBanner.map(item => item.img).toString();
        let condImgMini = compareBanner.map(item => item.miniimg).toString();

        //Cargamos las imagenes
        setImgBanner(condImg);
        setImgMiniBanner(condImgMini);
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
            {/*
            <BannerCategory image={imgCategory(`./${consulta+'.jpg'}`)} imageMini={imgCategory(`./${consulta+'.jpg'}`)} consulta={consulta}/>
            */}
            <BannerCategory image={imgBanner} imageMini={imgMiniBanner} consulta={consulta} />
            <Search/>
            <div className='category__Container'>

              <div className='category__filter'>
                <SimpleAccordion/>
              </div>

              <div className='category__products'>
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
                                    {products?.map((item, index) => (
                                        <CardItem
                                        component={"Categoria"}
                                        key={`${component}-${index}`}
                                        src={item.imgUrl}
                                        title={item.title}
                                        label=''
                                        path={`/Details/${ item.id }`}
                                        price={item.price}
                                        presentation={item.presentation}
                                        />
                                    ))}
                                    </ul>
                                  </div>
                                </div>       
                            </div>
                    }
              </div>
            </div>

    </>
  )
}

export default Category;
