import React, { useState } from "react"
import { Link } from "react-router-dom"
import VN from '../../../assets/images/flags/vietnam.png'
import EN from '../../../assets/images/flags/united-kingdom.png'
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const [selectedLanguage, setSelectedLanguage] = useState({
    flag: EN, 
    label: 'EN'  
  })

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)


  const handleLanguageChange = (flag, label) => {
    setSelectedLanguage({ flag, label })  
    setIsDropdownOpen(false) 
  }

  return (
    <div className="position-fixed w-100 top-0">
      <Head />
      <header>
        <nav className='d-flex container-fluid Nav--2' style={{paddingLeft: '40px', paddingRight: '30px'}}>
          <ul className={click ? "mobile-nav" : "d-flex"} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>Game Info</Link>
            </li>
            <li>
              <Link to='/about'>Features</Link>
            </li>
            <li>
              <Link to='/team'>News & Updates</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>

          {/* Dropdown for language selection */}
          <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
            <button className="btn btn-language" onClick={toggleDropdown}>
              {/* Display the selected language with its flag */}
              <img src={selectedLanguage.flag} alt={selectedLanguage.label} style={{ width: '20px', marginRight: '5px' }} />
              {selectedLanguage.label}
              <i className={`fas fa-chevron-${isDropdownOpen ? 'up' : 'down'}`}></i>
            </button>

            {/* Dropdown menu for language options */}
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li onClick={() => handleLanguageChange(EN, 'EN')}>
                  <img src={EN} alt="EN" style={{ width: '20px', marginRight: '5px' }} />
                  | English
                </li>
                <li onClick={() => handleLanguageChange(VN, 'VN')}>
                  <img src={VN} alt="VN" style={{ width: '20px', marginRight: '5px' }} />
                  | Vietnamese
                </li>
              </ul>
            )}
          </div>

          {/* Toggle button for mobile navigation */}
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </div>
  )
}

export default Header
