import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar'
import ava from '../../assets/avatar.png'
import { Button } from '@mui/material';
import toast from "react-hot-toast"
import Loading from '../../Components/Loading';

const TalentDetails = () => {
  const [jobdetail, setJobdetail] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5001/api/v1/profile/talent/details/${params._id}`);
        setJobdetail(data.talentDetails);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error("some error occured")
      }
    }
    getDetails()
  }, [params._id])

  const hire = () => {
    toast.success("Mail sent")
  }

  return (
    <div className='parent-container'>
      {
        loading ? (<Loading/>) :(<div className='child-container-one'>
        <Avatar
          alt="Remy Sharp"
          src={ava}
          sx={{ width: 100, height: 100 }}
        />
        {
          jobdetail.map((i) => (
            <>
              <div className='detail-one'>
                <h3>Name :{i?.name || ''}, Email:{i?.email || ''}, Contact: {i?.contact || ''}</h3>
              </div>
              <hr />
              <div className='detail-two'>
                <a href={`${i?.linkedin}`}><Button>Linkedin</Button></a>
                <a href={`${i?.codingProfile}`}><Button>Coding</Button></a>
              </div>
              <div className='detail-three'>
                <p>Skills: {i?.skills}</p>
              </div>
              <div className='detail-four' >
                <p>{i?.tellaboutyourself}</p>
              </div>
              <div className='apply-btn'>
                <Button onClick={hire}>Hire me</Button>
              </div>
            </>
          ))
        }
      </div>
)
      }
    </div>
  )
}

export default TalentDetails