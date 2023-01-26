import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import  Navbar  from 'components/common/Navbar/Navbar';
import Footer from 'components/common/Footer/Footer'

import { Home } from 'pages/Home';
import { Contact } from 'pages/Contact';
import { Company } from 'pages/Company';

import '../Styles/GlobalStyles.css'



export const AppRouter = () => {
    return (
        <Router>
            <div style={{  display:'block' }}>
                <Navbar/>
                <Routes>  
                    <Route path="/" element={ <Home/> }></Route>;
                    <Route path="/Contact" element={ <Contact/> }></Route>
                    <Route path="/Company" element={ <Company/> }></Route>
                </Routes>
                <Footer/>
            </div>
        </Router>
    )
}
