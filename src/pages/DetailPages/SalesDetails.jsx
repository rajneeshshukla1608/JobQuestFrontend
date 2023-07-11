import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom';
import { BiMobile } from "react-icons/bi";
import { Button } from '@mui/material';
import toast from 'react-hot-toast';
import Loading from '../../Components/Loading';
const SalesDetails = () => {

  const [jobdetail, setJobdetail] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const { data } = await axios.get(`https://jobquestserver.onrender.com/api/v1/jobs/sales/details/${params.jobID}`);
        setJobdetail(data.jobDetails)
        setLoading(false);

      } catch (error) {
        setLoading(false);
        toast.error("some error occured")
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
      loading ? <Loading/>:  <div>
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
                <p>Description: {i.description}</p>
              </div>
            </div>
            <div className='detail-three'>
              <div className='detail-four'>
                <span>Contact us:  <BiMobile /> +91 9999900***
                </span></div>
              <div className='apply-btn'>
                <Button onClick={apply}>Apply</Button>
              </div>
            </div>
          </>
        ))
      }
      </div>
     }
    </div>
  )
}

export default SalesDetails
