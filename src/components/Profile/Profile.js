import React,{useEffect,useState} from "react"
import './Profile.css'
import { baseUrl } from "../../url"
import { useParams } from "react-router-dom"
import axios from "axios"



export default function Profile(){
    
    const {id} = useParams()

    const fetchdata = () => {
        axios.get(`${baseUrl}/profile`)
    }

    useEffect(() => {
        fetchdata()
    },[])

    return <div>Profile</div>
}