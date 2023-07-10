import React, {useState, useEffect} from 'react'
import axios from  "axios"
import toast from "react-hot-toast"
import Loading from "../Components/Loading"

const Product = () => {


  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHandler = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5001/api/v1/jobs/product/4`)
      setProduct(data.job);
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
      <h1>Product Jobs are: </h1>
     {
      loading ? (<Loading/>) : ( <div className='Parentcontainer'>
      {
        product.map((i) => (
          <>
            <ProductCard id={i.jobID} title={i.jobTitle}/>
          </>
        ))

      }
    </div>)
     }
    </div></>
  )
}

const ProductCard = ({ id, title }) => {
  return (
    <a className='link' href={`/product/details/${id}`} target={"blank"}>
      <div className='childContainer'>
      <h2 >{title}</h2>
      </div>
  </a >
  )
}

export default Product