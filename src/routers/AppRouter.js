import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import  Navbar  from 'containers/Navbar/Navbar';
import  Navbar2  from 'containers/Navbar/Navbar2';

import { Home } from 'pages/Home';



export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar2/>
                <Routes>  
                    <Route path="/" element={ <Home/> }></Route>
                </Routes>
            </div>
        </Router>
    )
}
