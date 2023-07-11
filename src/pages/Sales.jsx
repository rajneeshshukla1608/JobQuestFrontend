import React, { useEffect, useState } from 'react'
import axios from "axios"
import Loading from "../Components/Loading"
import toast from "react-hot-toast"

const Sales = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const getHandler = async () => {
      try {
        const { data } = await axios.get(`https://jobquestserver.onrender.com/api/v1/jobs/engineering/2`)
        setSales(data.job);
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
        <h1>Sales Jobs are: </h1>
        {
          loading ? (<Loading />) : (<div className='Parentcontainer'>
            {
              sales.map((i) => (
                <>
                  <SalesCard id={i.jobID} title={i.jobTitle} />
                </>
              ))

            }
          </div>)
        }
      </div></>
  )
}




const SalesCard = ({ id, title }) => {
  return (
    <a className='link' href={`/sales/details/${id}`} target={"blank"}>
      <div className='childContainer'>
        <h2 >{title}</h2>
      </div>
    </a >
  )
}

export default Sales
