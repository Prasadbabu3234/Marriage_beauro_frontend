import React, { useState,useEffect } from "react";
import './Login.css'
import TextField from '@mui/material/TextField';
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie'



export default function Login() {

    const [showPassword, setShowPassword] = useState(false);
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")
    const [error,setError] = useState("")

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const naviagte = useNavigate()

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            mobile,
            password
        }
        axios.post('http://localhost:4000/login', data).then((res) => {
            console.log(res)
            if (res.data.token) {
                const {token} = res.data
                Cookies.set("jwt_token",token,1)
                naviagte('/home',{replace:true})
            }

        }).catch(err => {
            if (err.response.status === 403) {
                console.log(err.response.data.message)
                setError(err.response.data.message)
                
            }
        })
    }

    useEffect(() => {
        const token = Cookies.get("jwt_token")
        if (token) {
            naviagte("/home")
        }
    },[])

    return (
        <div className="login-page">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <TextField type="text" id="Username" label="Email or Mobile" variant="standard" value={mobile} required onChange={(e) => setMobile(e.target.value)} />
                <FormControl variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                <Button
                    type="submit"
                    color="secondary"
                    disabled={false}
                    size="large"
                    variant="outlined"
                >Login</Button>
                {error.length > 0 && <p style={{color:"red"}}>{error}</p>}
                <span>Didn't have an account <Link to={'/register'}>register</Link> here</span>
            </form>

        </div>
    )

}