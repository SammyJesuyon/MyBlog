import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';


function Router() {
    return (
            <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/test" element={ <h1>This is test page</h1> } />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;