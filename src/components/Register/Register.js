import React, { useState, useEffect } from "react";
import './Register.css'
import { baseUrl } from "../../url";
import TextField from '@mui/material/TextField';
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from "js-cookie";
import { LoadingOutlined } from '@ant-design/icons';
import { Modal, Spin } from 'antd';

const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 25,
        }}
        spin
    />
);

export default function Register() {

    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [loader, setLoader] = useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const naviagte = useNavigate()

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const success = () => {
        naviagte("/")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoader(true)
        const data = {
            username,
            email,
            mobile,
            password
        }
        axios.post(`${baseUrl}/register`, data).then((res) => {
            if (res.data === "account created") {
                setLoader(false)
                Modal.success({
                    content: "Successfully registered",
                    centered: true,
                    okText: "Go to Login",
                    onOk: success(),

                })
            }
        }).catch(err => console.log(err))
    }
    useEffect(() => {
        const token = Cookies.get("jwt_token")
        if (token) {
            naviagte("/home")
        }
    }, [])



    return <>
        <div className="register-page">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <TextField type="text" id="Username" label="Username" variant="standard" required value={username} onChange={(e) => setUsername(e.target.value)} />
                <TextField type="email" id="Email" label="Email" variant="standard" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField type="number" id="Mobile" label="Mobile" variant="standard" required value={mobile} onChange={(e) => setMobile(e.target.value)} />
                <FormControl variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={password} onChange={(e) => setPassword(e.target.value)}

                    />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="standard-adornment-password1">Re-enter Password</InputLabel>
                    <Input
                        id="standard-adornment-password1"
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={rePassword} onChange={(e) => setRePassword(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                {loader ? <Button
                    type="submit"
                    color="secondary"
                    disabled={false}
                    size="large"
                    variant="outlined"
                ><Spin indicator={antIcon} /></Button> : <Button
                    type="submit"
                    color="secondary"
                    disabled={false}
                    size="large"
                    variant="outlined"
                >Register</Button>}
                <span className="text-align-end">Already have an account <Link to={'/'}>login</Link> here</span>
            </form>

        </div></>
}
//<Spin indicator={antIcon} />