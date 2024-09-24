import React from "react";
import Logo from '../../../assets/images/header/logo.png';
// import login from '../../../assets/images/header/login.gif';

const Head = () => {
  return (
    <>
      <section className='head ' style={{backgroundColor: '#E9F5DB'}}>
        <div className='container-fluid' style={{ display: 'flex', alignItems: 'center', margin: '0 auto' }}>
          <div className='logo' style={{ display: 'flex', alignItems: 'center', margin: '0 auto' }}>
            <img width={55} className="me-3" src={Logo} alt="logo" />
            <i>
              <h1 className="d-flex" style={{ margin: 0 }}>
                <span className="text-black" style={{ WebkitTextStroke: '1px #237FA5' }}>EDU&nbsp;</span>
                <span style={{ color: '#1791C8', WebkitTextStroke: '1px white' }}>WARRIORS</span>
              </h1>
            </i>
            {/* <img width={55} className="ms-3" src={Logo} alt="logo" /> */}
          </div>

          {/* <div className="align-self-center me-5" style={{ display: 'flex', alignItems: 'center' }}>
            <button class="btn-shine button_btn-shine">
              <span>login </span>
              <img width={25} src={login} className="ms-1" alt="login" />
            </button>
        </div> */}
        </div>
      </section>
    </>
  );
}

export default Head;
