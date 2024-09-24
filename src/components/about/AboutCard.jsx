import React from "react";
import "./about.css";
import aboutcard from "../../assets/images/keyboard.gif";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome container-fluid'>
        <div className='benefit mt-5 row' style={{marginBottom: '100px'}}>
          <h1 className="mb-5" style={{
            backgroundImage: 'linear-gradient(to right top, #0ad1c8, #00c1be, #01b1b3, #0aa1a8, #14919b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            margin: '0 auto',
            justifyContent: 'center',
            fontSize: '50px',
            marginLeft: '45px',
            marginTop: '-50px'
          }}>
            Benefits About Online Games
          </h1>
          <div className="col-12 col-xl-4 d-flex justify-content-center mb-4">
            <img src={aboutcard} alt='aboutcard gif' style={{ borderRadius: '10px', width: '100%' }} />
          </div>
          <div className='items col-12 col-xl-8 mt-1'>
            {homeAbout.map((val, index) => (
              <div key={index} className='item d-flex align-items-center mb-4'>
                <div className='img me-3'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <h2>{val.title}</h2>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default AboutCard;