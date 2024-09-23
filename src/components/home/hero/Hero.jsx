import React from "react"
import Heading from "../../common/heading/Heading";
import download from '../../../assets/images/download.gif';
import retro from '../../../assets/images/64.gif';
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container-fluid d-flex' style={{marginLeft: '60px'}}>
          <div className='row me-5'>
            <Heading subtitle='WELCOME TO EDU WARRIORS' title='Play and learn, master your future!' />
            <p style={{marginLeft: '-10px'}}>Enjoy learning and continuous practice – Each day is a step towards victory, where knowledge and skills help you shine!</p>
            <div className='button'>
              <button className='btn_download' style={{marginLeft: '-10px'}}>
                <span>DOWNLOAD NOW</span> <img className="ms-2" style={{marginTop: '-2px'}} width={30} src={download} alt="download" />
              </button>
            </div>
          </div>
        <div className="retro_right" style={{float: 'right'}}>
            <img src={retro} alt="retro" />
        </div>
        </div>
      </section>
      {/* <div className='margin'></div> */}
    </>
  )
}

export default Hero
