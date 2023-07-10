import React, { useEffect, useState } from 'react'
import toast from "react-hot-toast"
import axios from "axios";
import Loading from "../Components/Loading"

const Engineering = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHandler = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5001/api/v1/jobs/engineering/1`)
        setJobs(data.job);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error("some error occured")
      }
    }
    getHandler();
  }, [])



  return (
    <>
      <div>
        <h1>Engineering Jobs are: </h1>
        {
          loading ? (<Loading />) : (<div className='Parentcontainer'>
            {
              jobs.map((i) => (
                <>
                  <EngineeringCard id={i.jobID} title={i.jobTitle} />
                </>
              ))

            }
          </div>)
        }
      </div></>
  )
}


const EngineeringCard = ({ id, title }) => {
  return (
    <a className='link' href={`/engineering/details/${id}`} target={"blank"}>
      <div className='childContainer'>
        <h2 >{title}</h2>
      </div>
    </a >
  )
}

export default Engineering