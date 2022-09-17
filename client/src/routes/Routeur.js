import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import Body from '../components/visitor/Body'

import Home from '../views/visitor/Home';
import Connexion from '../views/visitor/Connexion';
import Inscription from '../views/visitor/Inscription';
import NotFound from '../views/NotFound'

function Routeur() {
    return (
        <BrowserRouter>
            <Body>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/connexion" element={<Connexion />} />
                    <Route path="/inscription" element={<Inscription />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Body>
        </BrowserRouter>
    )
}

export default Routeur