import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom';
import { BiMobile } from "react-icons/bi";
import { Button } from '@mui/material';
import { toast } from 'react-hot-toast';

export const EngineeringDetails = () => {

  const [jobdetail, setJobdetail] = useState([]);

  const params = useParams();

  useEffect(() => {
    const getDetails = async () => {
     try {
      const { data } = await axios.get(`http://localhost:5001/api/v1/jobs/engineering/details/${params.jobID}`);
      setJobdetail(data.jobDetails)
     } catch (error) {
      toast.error("Some error Occured")
     }
    }
    getDetails()
  }, [params.jobID])


  const apply = () => {
    toast.success("cheers! submmitted Successfullly")
  }
  
  return (
    <div className='parent-container'>
      {
        jobdetail.map((i) => (
          <>
          <div className='child-container-one'>
            <div className='detail-one'>
              <h2>{i.jobTitle}</h2>
              <h4>{i.jobID}</h4>
              <h4>{i.location}</h4>
            </div>
           <div className='detail-two'>
           <h3>Prefered language: {i.language}</h3>
            <p>Description: {i.description}</p>
           </div>
          </div>
          
          <div className='detail-three'>
          <div className='detail-four'>
            <span>Contact us:  <BiMobile/> +91 9999900***
           </span></div>          
            <div className='apply-btn'>
              <Button onClick={apply}>Apply</Button>
            </div>
          </div>  
          </>
        ))
      }
    </div>
  )
}
