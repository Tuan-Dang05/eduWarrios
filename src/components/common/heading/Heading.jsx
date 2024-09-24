import React from "react"

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div id='heading'>
        <h3>{subtitle} </h3>
        <h1 style={{backgroundImage: 'linear-gradient(to right top, #0ad1c8, #00c1be, #01b1b3, #0aa1a8, #14919b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{title} </h1>
      </div>
    </>
  )
}

export default Heading
