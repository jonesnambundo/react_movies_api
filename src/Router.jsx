import {Routes, Route } from 'react-router-dom'
import {Inicio } from './pages/Inicio'
import {Series } from './pages/Series'
import {Filmes } from './pages/Filmes'
import { Erro } from './pages/Erro'
import { Detalhes } from './pages/Detalhes'


export function Router(){

    return(
        <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/filmes' element={<Filmes/>} />
            <Route path='/series' element={<Series/>} />
            <Route path='/detalhes/:category/:id' element={<Detalhes/>} />
            <Route path='*' element={<Erro/>} />
        </Routes>
    )
} 