import React, { useEffect, useState } from 'react'
import axios from "axios"
import Loading from "../Components/Loading"
import toast from "react-hot-toast"


const Marketing = () => {
  const [marketing, setMarketing] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHandler = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5001/api/v1/jobs/engineering/3`)
        setMarketing(data.job)
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
        <h1>Marketing Jobs are: </h1>
        {
          loading ? (<Loading />) : (
            <div className='Parentcontainer'>
              {
                marketing.map((i) => (
                  <>
                    <MarketingCard id={i.jobID} title={i.jobTitle} />
                  </>
                ))
              }
            </div>
          )
        }
      </div></>
  )
}


const MarketingCard = ({ id, title }) => {
  return (
    <a className='link' href={`/marketing/details/${id}`} target={"blank"}>
      <div className='childContainer'>
        <h2 >{title}</h2>
      </div>
    </a >
  )
}

export default Marketing