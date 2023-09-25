import React, { useEffect, useState } from "react"
import './Profile.css'
import { baseUrl } from "../../url"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import * as Icon from 'react-bootstrap-icons'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 40,
        }}
        spin
    />
);



export default function Profile() {

    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)

    const { id } = useParams()
    const navigate = useNavigate()

    const fetchdata = () => {
        axios.get(`${baseUrl}/profile/${id}`).then((res) => {
            setData(res.data[0])
            setLoader(false)
            console.log(res.data[0])
        })
    }

    useEffect(() => {
        fetchdata()
    }, [])

    return <div className="profile-container">
        {loader ? <Spin indicator={antIcon} /> :
            <div className="profile-card">
                <div className="d-flex align-items-center gap-2 back-button" onClick={() => navigate('/home')}><Icon.ChevronLeft /><span>back</span></div>
                <h1>Profile details</h1>
                <img src={`data:image/jpeg;base64,${data.imageData}`} alt={data.name} />
                <table className="table table-hover" border={"1px"} style={{ width: "100%", maxWidth: "600px", textAlign: "center" }}>
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
                        <tr>
                            <th scope="row">Brother Name</th>
                            <td colSpan="2">{data.brother}</td>
                        </tr>
                        <tr>
                            <th scope="row">Sister Name</th>
                            <td colSpan="2">{data.sister}</td>
                        </tr>
                        <tr>
                            <th scope="row">DOB</th>
                            <td colSpan="2">{data.DOB}</td>
                        </tr>
                        <tr>
                            <th scope="row">Caste</th>
                            <td colSpan="2">{data.caste}</td>
                        </tr>
                        <tr>
                            <th scope="row">Skin color</th>
                            <td colSpan="2">{data.SkinColor}</td>
                        </tr>
                        <tr>
                            <th scope="row">Height</th>
                            <td colSpan="2">{data.height} feet</td>
                        </tr>
                        <tr>
                            <th scope="row">Weight</th>
                            <td colSpan="2">{data.Weight} kg</td>
                        </tr>
                        <tr>
                            <th scope="row">Education</th>
                            <td colSpan="2">{data.education}</td>
                        </tr>
                        <tr>
                            <th scope="row">Job</th>
                            <td colSpan="2">{data.occupation}</td>
                        </tr>
                        <tr>
                            <th scope="row">Salary</th>
                            <td colSpan="2">{data.salary} /- per year</td>
                        </tr>
                        <tr>
                            <th scope="row">Car</th>
                            <td colSpan="2">{data.car ? "Available" : "Not available"}</td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn btn-success">Request phone call</button>
            </div>}
    </div>
}