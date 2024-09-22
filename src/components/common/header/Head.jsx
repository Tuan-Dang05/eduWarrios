import React from "react"
import Logo from '../../../assets/images/header/logo.png'
const Head = () => {
  return (
    <>
      <section className='head' >
        <div className='container flexSB'>
          <div className='logo' style={{display:'flex'}}>
            <img width={50} className="me-3" src={Logo} alt="logo"/>
            <i><h1>EDU WARRIORS</h1></i>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
