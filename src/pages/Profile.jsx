import React, { useState, useEffect, Fragment } from 'react'
import axios from "axios"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"



const Profile = ({ name }) => {

  const [profile, setProfile] = useState({});
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("https://jobquestserver.onrender.com/api/v1/users/me", {
          withCredentials: true
        });
        setProfile(data.user);
      } catch (error) {
    toast.error("Not Logged in");
        
      }
    }
    getData();
  }, [])


  return (
    <Fragment>
      <div>
        <h2>
          Welcome to JobQuest  {profile.name}
        </h2>
        {
          authenticated ? (<>
            <div>Logged In</div></>) : (<DetailCard />)
        }
      </div>

    </Fragment>
  )
}

const DetailCard = () => {
  const initialvalues = {
    name: "",
    email: "",
    mobile: "",
    linkedin: "",
    codingprofile: "",
    skills: "",
    tellaboutyourself: "",
  }
  const [talent, setTalent] = useState(initialvalues);

  const submit = async () => {
    const { data } = await axios.post("http://localhost:5001/api/v1/profile/new", {
      name: talent.name,
      email: talent.email,
      mobile: talent.mobile,
      linkedin: talent.linkedin,
      codingprofile: talent.codingprofile,
      skills: talent.skills,
      tellaboutyourself: talent.tellaboutyourself,
    }, {
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true,
    });
    console.log(data.message)
    setTalent(initialvalues);
  };


  const handleChange = (e) => {
    setTalent({ ...talent, [e.target.name]: e.target.value });
  };


  return (
    <>
      <div className='container2'>
        <h3>Enter your details here: </h3>
        <div className='section'>
          <form> 
            <TextField onChange={handleChange}  value={talent.name} name='name' label="Name" />
            <TextField onChange={handleChange} value={talent.email} name='email' label="Email" />
            <TextField onChange={handleChange} value={talent.mobile} name='mobile' label="Mob" />
            <TextField onChange={handleChange} value={talent.linkedin} name='linkedin' label="Linkedin URL" />
            <TextField onChange={handleChange} value={talent.codingprofile} name='codingprofile' label="Coding Profile" />
            <TextField onChange={handleChange} value={talent.skills} name='skills' label="Skills" />
            <textarea onChange={handleChange} value={talent.tellaboutyourself} name='tellaboutyourself' placeholder='Tell me about yourself? Hi My name is jon I am an engineering student....' />
            <Button onClick={submit} >Submit</Button>
          </form>
        </div>
      </div>
    </>
  )
}





export default Profile
