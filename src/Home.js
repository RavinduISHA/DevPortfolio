import React, {useState} from "react";
import "./Home.css";


function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle M
   const [show, setShow] = useState(true);
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
              <a href="#Home">Home</a>
            </li>
            <li className="sideNavbar">
              <a href="#About">About</a>
            </li>
            <li className="sideNavbar">
              <a href="#Services">Services</a>
            </li>
            <li className="sideNavbar">
              <a href="#Projects">Projects</a>
            </li>
            <li className="sideNavbar">
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
                        <span >{" "}</span>
                        </span>
                    </div>
                    <div className='profile-deatils-role'>
                        <span className='p-text'>{" "}
                            <h1>
                               {/*  {" "}<Typical
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
                                />*/}
                            </h1>
                        </span>
                    </div>
                    
                    
              </div>
                  <div className='profile-picture'>
                        <div className='profile-picture-b'>

                        </div>
                  </div>
        </div>
                  <div className='Profile-option'>
                        
                        <a href='Resume.pdf' download='Ravindu Profile.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                  </div>
                  <div className='colz'>
                            <div className='colz-icon'>
                                <a href='#'>
                                <i class="fa-brands fa-facebook"></i>
                                </a>
                                <a href='#'>
                                    <i className='fa fa-linkedin'></i>
                                </a>
                                <a href='#'>
                                    <i className='fa fa-twitter'></i>
                                </a>
                                <a href='#'>
                                    <i className='fa fa-google w3-hover-opacity'></i>
                                </a>
                            </div>
                  </div> 
      
    </div>
  );
}

export default Home;
