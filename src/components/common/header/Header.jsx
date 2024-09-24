import React, { useState } from "react";
import { Link } from "react-router-dom";
import VN from "../../../assets/images/flags/vietnam.png";
import EN from "../../../assets/images/flags/united-kingdom.png";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState({
    flag: EN,
    label: "EN",
  });

  const handleLanguageChange = (flag, label) => {
    setSelectedLanguage({ flag, label });
  };

  return (
    <div className="position-fixed w-100 top-0" style={{ zIndex: "9999" }}>
      <Head />
      <header>
        <nav className="navbar navbar-expand-lg Nav--2">
          {/* Navbar Toggler for Small Screens */}
          <button
            className="btn navbar-toggler" // Sử dụng class navbar-toggler để kiểm soát bằng media query
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            style={{
              position: "absolute",
              right: "35px",
              top: "-1.8rem",
              border: "none",
              color: "black",
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Menu */}
          <div className="container-fluid ms-5 mb-3"> {/* Thêm class desktop-menu */}
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link text-white d-block" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/courses">
                    Game Info
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/about">
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/team">
                    News & Updates
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="dropdown mt-3 me-3">
                <button
                  className="btn btn-language dropdown-toggle"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={selectedLanguage.flag}
                    alt={selectedLanguage.label}
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                  {selectedLanguage.label}
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                  style={{ marginLeft: "-120px", marginTop: "-20px" }}
                >
                  <li onClick={() => handleLanguageChange(EN, "EN")}>
                    <a className="dropdown-item" href="#!">
                      <img
                        src={EN}
                        alt="EN"
                        style={{ width: "20px", marginRight: "5px" }}
                      />
                      | English
                    </a>
                  </li>
                  <li onClick={() => handleLanguageChange(VN, "VN")}>
                    <a className="dropdown-item" href="#!">
                      <img
                        src={VN}
                        alt="VN"
                        style={{ width: "20px", marginRight: "5px" }}
                      />
                      | Vietnamese
                    </a>
                  </li>
                </ul>
              </div>
            </div>




          </div>


        </nav>

        {/* Offcanvas for Small Screens */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">Edu Warriors</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses">
                  Game Info
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team">
                  News & Updates
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Dropdown for language selection */}
            <div className="dropdown mt-3">
              <button
                className="btn btn-language dropdown-toggle"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={selectedLanguage.flag}
                  alt={selectedLanguage.label}
                  style={{ width: "20px", marginRight: "5px" }}
                />
                {selectedLanguage.label}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li onClick={() => handleLanguageChange(EN, "EN")}>
                  <a className="dropdown-item" href="#!">
                    <img src={EN} alt="EN" />
                    | English
                  </a>
                </li>
                <li onClick={() => handleLanguageChange(VN, "VN")}>
                  <a className="dropdown-item" href="#!">
                    <img src={VN} alt="VN" />
                    | Vietnamese
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </header>
    </div>
  );
};

export default Header;
