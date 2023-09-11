import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Home from '../components/Home/Home'

export default function Routing(){
    return <>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    </>
}