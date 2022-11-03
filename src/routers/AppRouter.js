import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import  Navbar  from 'containers/Navbar/Navbar';

import { Home } from 'pages/Home';



export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar/>
                <Routes>  
                    <Route path="/" element={ <Home/> }></Route>
                </Routes>
            </div>
        </Router>
    )
}
