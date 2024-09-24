import React from "react";
import Logo from '../../../assets/images/header/logo.png';

const Head = () => {
  return (
    <>
      <section className='head ' style={{backgroundColor: '#E9F5DB'}}>
        <div className='container-fluid' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className='logo ms-5' style={{ display: 'flex', alignItems: 'center' }}>
            <img width={55} className="me-3" src={Logo} alt="logo" />
            <i>
              <h1 className="d-flex" style={{ margin: 0 }}>
                <span className="text-black" style={{ WebkitTextStroke: '1px white' }}>EDU&nbsp;</span>
                <span style={{ color: '#1791C8', WebkitTextStroke: '1px white' }}>WARRIORS</span>
              </h1>
            </i>
          </div>

          <div className='social'>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Head;
