import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import  Navbar  from 'components/common/Navbar/Navbar';
import  NavbarNew  from 'components/common/Navbar/NavbarNew';
import Footer from 'components/common/Footer/Footer'

import { Home } from 'pages/Home';
import { Contact } from 'pages/Contact';
import { Company } from 'pages/Company';
import Search  from 'components/Search/SearchApi';
import CategoryApi  from 'components/category/CategoryApi';
import Marcas  from 'components/category/Marcas';
//MarcasApi
import MarcasApi  from 'components/category/MarcasApi';
import Componentes  from 'components/category/Componentes';
import { Details }  from 'components/details/Details';
import { DetailsNew }  from 'components/details/DetailsNew';



import '../Styles/GlobalStyles.css'


export const AppRouter = () => {

    return (
        <Router>
            <div style={{  display:'block' }}>
                    <NavbarNew component="Navbar"/>        
                    <Routes>  
                        <Route path="/" element={ <Home/> }></Route>;
                        <Route path="/Contact" element={ <Contact/> }></Route>
                        <Route path="/Company" element={ <Company/> }></Route>
                        <Route path="/Category/:consulta" element={ <CategoryApi component={"Category"}/> }></Route>
                        {/*<Route path="/marcas/:marca" element={ <Marcas component={"Marca"}/> }></Route>*/}
                        <Route path="/marcas/:marca" element={ <MarcasApi component={"Marca"}/> }></Route>
                        <Route path="/component/:composicion" element={ <Componentes component={"Composición"}/> }></Route>
                        <Route path="/search/:query" element={ <Search/> }></Route>
                        <Route path="/Details/:nombre" element={ <Details/> }></Route>
                        <Route path="/DetailsNew/:nombreProducto" element={ <DetailsNew/> }></Route>    
                    </Routes>
                    <Footer/>
            </div> 
        </Router>
    )
}
