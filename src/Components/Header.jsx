import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { AiFillAlert } from "react-icons/ai";
import axios from "axios"
import Avatar from '@mui/material/Avatar'

import "../style/Header.scss"
import ava from "../assets/avatar.png"
import { Button } from '@mui/material';

import {Context} from "../index"
import { toast } from 'react-hot-toast';


const Header = () => {

  const {isAuthenticated, setIsauthenticated} = useContext(Context)

  const logout = async() => {

    try {
      const {data} = await axios.get("https://jobquestserver.onrender.com/api/v1/users/logout", {
        withCredentials: true
      });
      toast.success(data.message)
      setIsauthenticated(false)
    } catch (error) {
      toast.error("some error occured")
      setIsauthenticated(true);
    }
  }


  return (
    <nav>
      <h2><a href="/">JobQuest</a></h2>
      <main>
        <Link to={"/"}>Find Jobs</Link>
        <Link to={"/talent"}>Find Talent</Link>
        <Link to={"/upload"}>Upload Job</Link>
        <Link to={"/about"}>About us</Link>
      </main>
        <div>
          {
            isAuthenticated ? <Button  onClick={logout}>Logout</Button> : <a href='/login'><Button>Login</Button></a> 
          }
          <a href='/notifications' ><AiFillAlert /></a>
          <a href='/profile'><Avatar alt="profile" src={ava} /></a>
        </div>
    </nav>
  )
}

export default Header

