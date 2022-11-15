import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import  Navbar  from 'containers/Navbar/Navbar';
import Top_header from 'containers/Top_Header/Top_header'

import { Home } from 'pages/Home';



export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Top_header/>
                <Navbar/>
                <Routes>  
                    <Route path="/" element={ <Home/> }></Route>
                </Routes>
            </div>
        </Router>
    )
}
