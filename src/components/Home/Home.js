import Cookies from "js-cookie"
import React, { useEffect, useState } from "react"
import { baseUrl } from "../../url"
import './Home.css'
import { useNavigate } from "react-router-dom"
import image1 from '../../Assets/cut.png'
import ganesh from '../../Assets/ganesh.jfif'
import sitaram from '../../Assets/sitaram kalyanam.jpg'
import corousal1 from '../../Assets/corousal1.jpg'
import { Carousel } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import * as Icon from 'react-bootstrap-icons'
import carousal2 from '../../Assets/elite-matchmaking-banner-2.png'
import lastCarousal from '../../Assets/last-carousal.jpg'
import payment from '../../Assets/payment.jpeg'
import axios from "axios"
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


const items = [
    {
        key: '1',
        label: (
            <div className="d-flex justify-content-start align-items-center">
                <input id="bride" type="checkbox" name="select" value={"bridegroom"} />
                <label htmlFor="bride">Bride</label>
            </div>

        ),
    },
    {
        key: '2',
        label: (
            <div className="d-flex justify-content-start align-items-center">
                <input id="bridegroom" type="checkbox" name="select" value={"bridegroom"} />
                <label htmlFor="bridegroom">Bridegroom</label>
            </div>

        ),
    }
];

const contentStyle = {
    height: '300px',
    width: "100%",
    color: '#fff',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: '#364d79',
    borderRadius: "20px"
};

export default function Home() {

    const [status, setStatus] = useState(false)
    const [profile, setProfile] = useState([])
    const [loader, setLoader] = useState(false)

    const naviagte = useNavigate()

    const fetchData = () => {
        setLoader(true)
        const token = Cookies.get("jwt_token")
        if (!token) {
            naviagte('/')
        }
        axios.get(`${baseUrl}/profile`).then((res) => {
            setProfile(res.data)
            setLoader(false)
        }).catch(err => console.log(err))
    }

    const handleLogout = () => {
        Cookies.remove("jwt_token")
        naviagte('/', { replace: true })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return <div className="bottom-container">
        <div className="mahalaxmi">
            <img src={"https://i0.wp.com/hindupad.com/wp-content/uploads/2014/11/Kanakamahalakshmi-Temple-Vizag-6-no-watermark.jpg?fit=467%2C702&ssl=1"} alt="5" className="images-1" />
        </div>

        <div className="d-flex justify-content-center top-content">
            <img src={ganesh} className="images-1" alt="2" />
            <img src={image1} alt="1" />
            <img src={image1} alt="1" />
            <img src={image1} alt="1" />
            <img src={image1} alt="1" />
            <img src={image1} alt="1" />
            <img src={image1} alt="1" />
            <img src={sitaram} className="images-1" alt="2" />
        </div>



        <nav className="bg-success">
            <input type="search" className="input-field" placeholder="Search..." />
            <Dropdown
                menu={{
                    items,
                }}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space style={{ color: "white" }}>
                        Select
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
            <Dropdown
                menu={{
                    items,
                }}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space style={{ color: "white" }}>
                        Caste
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>

            <Icon.PersonCircle height={30} width={30} />
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </nav>
        <div className="d-flex justify-content-center">
            <marquee>BANU PRASAD MARRIAGE BEURO</marquee>
        </div>
        <div className="d-flex justify-content-around align-items-center gap-5 flex-wrap">
            <div className="info-content">
                <div>
                    <h3>Conatct Info : </h3>
                    <p>SREE KANAKA MAHAA LAXMEE ENTERPRISES</p>
                    <p>Contact Name : A . Prasad Babu</p>
                    <p>Mobile : 9247698323, 9440615601</p>
                    <span><b>Reg No : 37AFAFS9665L1Z7</b></span>
                </div>
            </div>
            <div className="corousal">
                <Carousel autoplay>
                    <div>
                        <img src={corousal1} alt="3" style={contentStyle} />
                    </div>
                    <div>
                        <img src={"https://3.imimg.com/data3/CC/FO/MY-10157118/marriage-bureau-500x500.jpg"} alt="3" style={contentStyle} />
                    </div>
                    <div>
                        <img src={carousal2} alt="3" style={contentStyle} />
                    </div>
                    <div>
                        <img src={lastCarousal} alt="3" style={contentStyle} />
                    </div>
                </Carousel>
            </div>

            <div className="d-flex flex-column align-items-center gap-5">
                <div className="d-flex flex-column align-items-center gap-2">
                    {status && <div>
                        <img src={payment} alt="payment" className="payment-image" />
                    </div>}
                    {status ? <button className="btn btn-danger" onClick={() => setStatus(false)}>Close</button> : <button className="btn btn-success" onClick={() => setStatus(true)}>View QR</button>}
                </div>
                <div className="info-content1">
                    <h3>Meeting your life partner is one click away</h3>
                </div>
            </div>
        </div>
        <div className="profiles" >
            {loader ? <Spin indicator={antIcon} /> : <div>{
                profile.map((each) => {
                    return <div className="cards" key={each._id}>
                        <img src={`data:image/jpeg;base64,${each.imageData}`} alt={each.imageName} />

                        <p><b>Name :  </b>{each.name}</p>
                        <p><b>Job :  </b>{each.occupation}</p>
                    </div>
                })
            }</div>}

        </div>
    </div>
}
