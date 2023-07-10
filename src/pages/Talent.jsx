import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Talent = () => {

  const [talent, setTalent] = useState([]);

  useEffect(() => {
    const talentHandler = async (req, res) => {
      const { data } = await axios.get("http://localhost:5001/api/v1/profile/talent")
      console.log(data.talents);
      setTalent(data.talents);
    }
    talentHandler()
  }, [])

  return (
    <div className='Parentcontainer'>
      <div>
        {
          talent.map((i) => (
            <>
              <TalentCard id={i._id} name={i.name} skills={i.skills} />
            </>
          ))
        }
      </div>
    </div>
  )
}


const TalentCard = ({ id, name, skills }) => {

  return (
    <a className='link' href={`/talent/details/${id}`} target={"blank"}>
      <div style={{
        border: "1px solid black",
        width: "245px",
        height: "100px",
        padding: "10px",
        margin: "20px",
        transition: "all 0.3s",
        borderRadius:"15px",
        color: "green",
      }} >
        <h4> Name: {name}</h4>
        <p>Skills: {skills}</p>
      </div>
    </a >
  )
}



export default Talent