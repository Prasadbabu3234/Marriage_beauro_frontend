import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Home from '../components/Home/Home'
import Profile from '../components/Profile/Profile'

export default function Routing(){
    return <>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/profile/:id' element={<Profile/>}/>
        </Routes>
    </>
}