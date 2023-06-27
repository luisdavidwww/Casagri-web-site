import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';

//import  Navbar  from 'components/common/Navbar/Navbar';
import  NavbarNew  from 'components/common/Navbar/NavbarNew';
import Footer from 'components/common/Footer/Footer'

import { Home } from 'pages/Home';
import { Contact } from 'pages/Contact';
import { Company } from 'pages/Company';
import Search  from 'components/Search/Search';
import Category  from 'components/category/category';
import CategoryNew  from 'components/category/CategoryNew';
import CategoryApi  from 'components/category/CategoryApi';
import Marcas  from 'components/category/Marcas';
import Componentes  from 'components/category/Componentes';
import { Details }  from 'components/details/Details';
import { DetailsNew }  from 'components/details/DetailsNew';
import  CustomRouter  from '../hooks/CustomRouter';

export const AppRouter = () => {

  const navigation = useNavigation();


  useEffect(() => {
    const handleRouteChange = () => {
      const { pathname } = window.location;
      const routeTitle = getRouteTitle(pathname);
      document.title = routeTitle;
    };

    navigation.listen(handleRouteChange);
    handleRouteChange(); // Establecer el título de la pestaña inicialmente

    return () => {
      // Restaurar el título original al desmontar el componente
      document.title = 'Casagri';
    };

  }, [navigation]);


  const getRouteTitle = (pathname) => {
    // Lógica para obtener el título de la pestaña según la ruta
    // Puedes personalizar esta lógica según tus necesidades
    // Por ejemplo, puedes utilizar un objeto de configuración o un mapa de rutas y títulos
    if (pathname === '/') {
      return 'Inicio';
    } else if (pathname === '/Company') {
      return 'Campañía';
    } else if (pathname === '/contact') {
      return 'Contactanos';
    }
    // Si no coincide con ninguna ruta, puedes devolver un título predeterminado o vacío
    return 'Casagri';
  };

  return (
    <Router>
            <div style={{  display:'block' }}>
                <NavbarNew component="Navbar"/>
                <Routes>      
                        <Route path="/" element={ <Home/> }></Route>;
                        <Route path="/Contact" element={ <Contact/> }></Route>
                        <Route path="/Company" element={ <Company/> }></Route>
                        <Route path="/CategoryNew/:consulta" element={ <Category component={"Category"}/> }></Route>
                        <Route path="/Category/:consulta" element={ <CategoryApi component={"Category"}/> }></Route>
                        <Route path="/marcas/:marca" element={ <Marcas component={"Marca"}/> }></Route>
                        <Route path="/component/:composicion" element={ <Componentes component={"Composición"}/> }></Route>
                        <Route path="/search/:query" element={ <Search/> }></Route>
                        <Route path="/Details/:nombre" element={ <Details/> }></Route>
                        <Route path="/DetailsNew/:nombreProducto" element={ <DetailsNew/> }></Route>
                </Routes>
                <Footer/>
            </div> 
        </Router>
  );
};