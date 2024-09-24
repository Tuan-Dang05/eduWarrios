import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import aboutcard from "../../assets/images/about/aboutcard.gif"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome container-fluid'>
        <div className='flexSB'>
          <div className='left row'>
            <img src={aboutcard} alt='aboutcard gif' />
          </div>
          <div className='right row'>
            <Heading className='headtitle' title='Benefits About Online Games Learning Expertise' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default AboutCard
