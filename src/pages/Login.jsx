import React, { useContext, useState } from 'react'
import axios from "axios"
import { toast } from "react-hot-toast";
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { Link, Navigate } from "react-router-dom";

import "../style/Login.scss"
import {Context} from "../index"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {isAuthenticated, setIsauthenticated} = useContext(Context)

    console.log(isAuthenticated)

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("https://jobquestserver.onrender.com/api/v1/users/login",
                {
                    email,
                    password
                }, 
                {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
            );
            toast.success(data.message);
            setIsauthenticated(true)

        } catch (error) {
            toast.error(error.response.data.message);
            setIsauthenticated(false)

        }
    }

    if(isAuthenticated) return <Navigate to={"/"}/>


    return (
        <div className='center'>
            <section className='section'>
                <h3>Login</h3>
                <form onSubmit={submitHandler}>
                    <TextField
                        className="outlined-basic"
                        label="Email"
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        className="outlined-basic"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type='submit' >Login</Button>
                    <h4>Or</h4>
                    <Link to="/register">SignUp?</Link>
                </form>
            </section>
        </div>
    )
}

export default Login
