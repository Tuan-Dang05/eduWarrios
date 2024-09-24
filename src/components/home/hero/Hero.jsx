import React from "react";
// import Heading from "../../common/heading/Heading";
import download from '../../../assets/images/download.gif';
import retro from '../../../assets/images/64.gif';
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className=' d-flex' style={{ marginLeft: '60px' }}>
          <div className='row me-5 mobile-deivce'>
            <div className="heading">
            <p className="welcome" style={{fontWeight: '600', lineHeight: '1.5', fontSize: '40px', color: 'white'}}>WELCOME TO EDU WARRIORS </p>
            <h1 className="play_earn" style={{fontWeight: '600', fontSize: '50px',backgroundImage: 'linear-gradient(to right top, #0ad1c8, #00c1be, #01b1b3, #0aa1a8, #14919b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Play and learn, master your future! </h1>
            </div>
            <p style={{ marginLeft: '0px' }}>
              Enjoy learning and continuous practice – Each day is a step towards victory, where knowledge and skills help you shine!
            </p>
            <div className='button'>
              <button className='btn_download mt-5' style={{ marginLeft: '0px' }}>
                <span>DOWNLOAD NOW</span> <img className="ms-2" style={{ marginTop: '-2px' }} width={30} src={download} alt="download" />
              </button>
            </div>
          </div>
        </div>
        <div className="retro_right" style={{ float: 'right', position: 'relative', bottom: '24rem', transform: 'scaleX(-1)' }}>
          <img src={retro} alt="retro" />
        </div>
      </section>
    </>
  );
};

export default Hero;
