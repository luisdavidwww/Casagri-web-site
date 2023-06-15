import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import  Navbar  from 'components/common/Navbar/Navbar';
import  NavbarNew  from 'components/common/Navbar/NavbarNew';
import Footer from 'components/common/Footer/Footer'

import { Home } from 'pages/Home';
import { Contact } from 'pages/Contact';
import { Company } from 'pages/Company';
import Search  from 'components/Search/Search';
import Category  from 'components/category/category';
import CategoryNew  from 'components/category/CategoryNew';
import Marcas  from 'components/category/Marcas';
import Componentes  from 'components/category/Componentes';
import { Details }  from 'components/details/Details';
import { DetailsNew }  from 'components/details/DetailsNew';
import  Prueba  from 'pages/Prueba';

//Peticion
import { getProductosMaestros, banner }  from '../hooks/useFetch';

import { ACERCA_DE_CASAGRI, PRODUCTOS_MAESTROS } from '../routers/index'



import '../Styles/GlobalStyles.css'


export const AppRouter = () => {

    const [data, setData] = useState("");
    const [products, setProducts] = useState("");
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        //setMasterProd(banner()); fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE__TWO}${PRODUCTOS_MAESTROS}`)

        const fetchData2 = async () => {
            try {
              const response = await  fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE__TWO}${PRODUCTOS_MAESTROS}`)
              const jsonData = await response.json();
              setProducts(jsonData.myQueryResults.Table);
              setIsLoading(false);
            } catch (error) {
              console.log('Error fetching data:', error);
              setIsLoading(false);
            }
          };

        const fetchData = async () => {
            try {
              const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${ACERCA_DE_CASAGRI}`)
              const jsonData = await response.json();
              console.log(jsonData.data);
              setData(jsonData.data);
              setIsLoading(false);
            } catch (error) {
              console.log('Error fetching data:', error);
              setIsLoading(false);
            }
          };
      
          fetchData2();

     }, [])

    return (
        <Router>
            <div style={{  display:'block' }}>
                <NavbarNew component="Navbar"/>
                <Routes>  
                    <Route path="/" element={ <Home/> }></Route>;
                    <Route path="/Contact" element={ <Contact/> }></Route>
                    <Route path="/Company" element={ <Company/> }></Route>
                    <Route path="/CategoryNew/:consulta" element={ <Category component={"Category"}/> }></Route>
                    <Route path="/Category/:consulta" element={ <CategoryNew component={"Category"}/> }></Route>
                    <Route path="/marcas/:marca" element={ <Marcas component={"Marca"}/> }></Route>
                    <Route path="/component/:composicion" element={ <Componentes component={"Composición"}/> }></Route>
                    <Route path="/search/:query" element={ <Search/> }></Route>
                    <Route path="/Details/:nombre" element={ <Details/> }></Route>
                    <Route path="/DetailsNew/:nombreProducto" element={ <DetailsNew/> }></Route>
                    {/*
                    <Route path="/Prueba" element={ 
                        ( isLoading == true )  &&  <Prueba Data={data.data} Loader={isLoading}/> 
                    }></Route>
                    */}
                    <Route path="/Prueba" element={ <Prueba Data={products} Loader={isLoading}/> }></Route>
                </Routes>
                <Footer/>
            </div>
        </Router>
    )
}
