import React, { useState } from 'react'
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import axios from "axios"
// import toast from "react-hot-toast";

import "../style/Upload.scss"

const Upload = () => {

  const [checked, setChecked] = useState(false);

  return (
    <>
      {
        checked ? (<UploadPage />) : (<div className='container'>
          <h1 className='flex'>Here are some common minimum requirements: </h1>
          <div className='flex'>
            <ul className="list-group">
              <li className="list-group-item"><b>Job Description:</b> You need to provide a detailed and accurate description of the job. It should include the job title, responsibilities, qualifications, experience requirements, location, and any other relevant information.</li>
              <li className="list-group-item"><b>Company Information:</b> You typically need to provide information about your company, including the name, industry, location, and a brief overview of what your company does.</li>
              <li className="list-group-item"><b>Job Location:</b> Specify the location of the job, whether it is a physical location, remote, or a combination of both.</li>
              <li className="list-group-item"><b>Legal Compliance:</b> Ensure that your job posting complies with local labor laws and regulations, including equal employment opportunity (EEO) guidelines and any other applicable legal requirements.</li>
            </ul>
          </div>
          <div className='auth'>
            <p>It's important to review the specific guidelines and requirements of the job board or platform you plan to use, as they may have additional or specific requirements for posting a job.</p>
          </div>
          <div className='utils'>

            <Button variant="contained" onClick={() => setChecked(true)} >Proceed</Button>
          </div>
        </div>)
      }
    </>
  )
}


const UploadPage = () => {

  const initialvalues = {
    title: "",
    location: "",
    id: "",
    language: "",
    qualification: "",
    description: "",
  }

  const [jobs, setJobs] = useState(initialvalues);

  const submit = async () => {
    const { data } = await axios.post("https://jobquestserver.onrender.com/api/v1/jobs/uploadJobs", {
      title: jobs.title,
      location: jobs.location,
      id: jobs.id,
      language: jobs.language,
      qualification: jobs.qualification,
      description: jobs.description
    }, {
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true,
    });
    console.log(data.message)
    setJobs(initialvalues);
  };

  const handleChange = (e) => {
    setJobs({ ...jobs, [e.target.name]: e.target.value });
  };

  return (

    <>
      <div className='container2'>
        <h3>Upload job here</h3>
        <div className='section'>
          <form>
            <TextField onChange={handleChange} value={jobs.title} name="title" id="standard-basic" label="Job title" variant="standard" required />
            <TextField onChange={handleChange} value={jobs.location} name="location" id="standard-basic" label="Job location" variant="standard" required />
            <TextField onChange={handleChange} value={jobs.id} name="id" id="standard-basic" label="Job id" variant="standard" required />
            <TextField onChange={handleChange} value={jobs.language} name="language" id="standard-basic" label="Prefered Language" variant="standard" required />
            <TextField onChange={handleChange} value={jobs.qualification} name="qualification" id="standard-basic" label="Preered qualification" variant="standard" required />
          </form>
          <label>Description: </label>
          <textarea onChange={handleChange} value={jobs.description} name="description" maxLength={700} required />
          <Button onClick={submit} variant='contained'>Submit</Button>
        </div>
      </div>
    </>
  )
}

export default Upload
