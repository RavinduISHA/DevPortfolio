import React, {useState} from "react";
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Typical from "react-typical";


function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle M
   const [show, setShow] = useState(false);

   const handleRouteClick = () => {
    setShow(false); // Set show state to false when a route is clicked
   };
  return (
    <div className="home" id="Home">
        <div className="header d__flex align__items__center pxy__30">
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15" id="Home">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">Services</li>
              </a>
              <a href="#Projects">
                <li className="nav__items mx__15">Projects</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
        {/* Toogle M */}
          <div className="toggle__menu">
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ?(
          <div className="sideNavbar">
              <ul className="sidebar d__flex">
              <li className="sideNavbar">
              <a href="#Home" onClick={handleRouteClick}>Home</a>
            </li>
            <li className="sideNavbar">
              <a href="#About" onClick={handleRouteClick}>About</a>
            </li>
            <li className="sideNavbar">
              <a href="#Services" onClick={handleRouteClick}>Services</a>
            </li>
            <li className="sideNavbar" onClick={handleRouteClick}>
              <a href="#Projects">Projects</a>
            </li>
            <li className="sideNavbar" onClick={handleRouteClick}>
              <a href="#Contact">Contact</a>
            </li>
              </ul>
          </div>
           ) : null}
        </div>
        {/* CONTENT */}
        <div className='profile-parent'>

          <div className='profile-detail'>
            
            
              <div className='profile-details-name'>
                        <span className='p-text'>Hello, my name is 
                        <span className='h-text'>Ravindu Umayanga</span>
                        </span>
                    </div>
                    <span >{" "}</span>
                    <div className='profile-deatils-role'>
                        <span className='p-text'>{" "}
                            <h1 className='typical-text'>
                                {" "}<Typical
                                loop={Infinity}
                                steps={[
                                    "Ethusiastic Dev 🛑",
                                    1000,
                                    "Full Stack Developer 🌐",
                                    1000,
                                    "Self Learning Passionate 💻",
                                    1000,
                                    "MERN Stack Dev 😎",
                                    1000,
                                    "Programmer 🤓",
                                    1000,
                                ]}
                                />
                            </h1>
                        </span>
                    </div>
                    <div className='colz'>
                      <div>
                        <a href="https://www.facebook.com/profile.php?id=100005207028337">
                          <FontAwesomeIcon icon={faFacebook} className="colz-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/ravindu-umayanga-1a7424204/">
                          <FontAwesomeIcon icon={faLinkedin} className="colz-icon2"/>
                        </a>
                        {/* <a href="rumayanga51@gmail.com">
                          <FontAwesomeIcon icon={faGoogle} className="colz-icon2"/>
                        </a> */}
                      </div>
                    </div>
              </div>
                <div className='profile-picture'>
                  <div className='profile-picture-b'>
                  </div>
                </div>
                
        </div>
        <div className='Profile-option'>
              
              <a href='Resume.pdf' download='Resume - Ravindu Umayanga.pdf'>
                  <button className='btn highlighted-btn'>Get Resume</button>
              </a>
        </div>   
    </div>
  );
}

export default Home;
