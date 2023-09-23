import React, { useEffect, useState } from "react"
import './Profile.css'
import { baseUrl } from "../../url"
import { useParams } from "react-router-dom"
import axios from "axios"



export default function Profile() {

    const [data, setData] = useState([])

    const { id } = useParams()

    const fetchdata = () => {
        axios.get(`${baseUrl}/profile/${id}`).then((res) => {
            setData(res.data[0])
            console.log(res.data[0])
        })
    }

    useEffect(() => {
        fetchdata()
    }, [])

    return <div>
        <div className="profile-card">
            <img src={`data:image/jpeg;base64,${data.imageData}`} alt={data.name} />
            <table className="table table-hover" style={{width:"60%",textAlign:"center"}}>

                <tbody >
                    <tr>
                        <th scope="row">Name</th>
                        <td>{data.name}</td>

                    </tr>
                    <tr>
                        <th scope="row">Mother Name</th>
                        <td>{data.motherName}</td>

                    </tr>
                    <tr>
                        <th scope="row">Father Name</th>
                        <td colSpan="2">{data.fatherName}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
}