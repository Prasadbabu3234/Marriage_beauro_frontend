import Cookies from "js-cookie"
import React, { useEffect } from "react"
import './Home.css'
import { useNavigate } from "react-router-dom"
import image1 from '../../Assets/cut.png'
import ganesh from '../../Assets/ganesh.jfif'
import sitaram from '../../Assets/sitaram kalyanam.jfif'
import { Carousel } from 'antd';

const contentStyle = {
    height: '300px',
    width: "100%",
    color: '#fff',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: '#364d79',
    borderRadius:"20px"
};

export default function Home() {

    const naviagte = useNavigate()

    const fetchData = () => {
        const token = Cookies.get("jwt_token")
        if (!token) {
            naviagte('/')
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return <div>
        <div className="d-flex justify-content-center top-content">
            <img src={ganesh} className="images-1" alt="img" />
            <img src={image1} alt="image1" />
            <img src={image1} alt="image1" />
            <img src={image1} alt="image1" />
            <img src={image1} alt="image1" />
            <img src={image1} alt="image1" />
            <img src={image1} alt="image1" />
            <img src={sitaram} className="images-1" alt="img" />
        </div>
        <nav>hello</nav>
        <div className="d-flex justify-content-center">
            <marquee>BHANU PRASAD MARRIAGE BEAURO</marquee>
        </div>
        <div className="d-flex justify-content-around align-items-center">
            <div>
                <h3 className="text-center">Reg No : <br></br>3FAFAFS9665L1Z7</h3>
            </div>
            <div style={{ width: "700px" }}>
                <Carousel autoplay>
                    <div>
                        <img src={ganesh} alt="image" style={contentStyle} />
                    </div>
                    <div>
                        <img src={ganesh} alt="image" style={contentStyle} />
                    </div>
                    <div>
                        <img src={ganesh} alt="image" style={contentStyle} />
                    </div>
                    <div>
                        <img src={ganesh} alt="image" style={contentStyle} />
                    </div>
                </Carousel>
            </div>

            <div>
                <h3 className="text-center">Reg No : <br></br>3FAFAFS9665L1Z7</h3>
            </div>
        </div>
            <div className="d-flex justify-content-center" >
                <div className="cards">
                    <img src={sitaram} alt={"image"}/>
                    <p>Sitaram</p>
                </div>
            </div>
    </div>
}