import React from 'react'
import "../style/Landing.scss"

import one from "../assets/2.webp"
const Landing = () => {


  const roles = [
    {
      "title": "Engineering",
      "url": "/engineering"
    },
    {
      "title": "Sales",
      "url": "/sales"
    },
    {
      "title": "Marketing",
      "url": "/marketing"
    },
    {
      "title": "Product",
      "url": "/product"
    }
  ];




  return (
    <>
      <div className='home' id='home'>
        <main>
          <h1>Find your dream job here</h1>
          <p>Looking for jobs? Browse our latest job openings to view & apply to the best jobs today!</p>
        </main>
        <img src={one} alt="img1" />
      </div>

      <div class='Parentcontainer'>
        {
          roles.map((i) => (
            <><RoleCard role={i.title} link={i.url} />
            </>
          ))
        }
      </div>

    </>
  )
}

const RoleCard = ({ role, link }) => {
  return (
    <a className='link' href={link} target={"blank"}>
      <div className='childContainer'>
        <h4 >{role}</h4>
      </div>
    </a>
  )
}



export default Landing