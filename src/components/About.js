import React from "react";
import "./About.css";
import aboutImg from '../Assets/Home/MyUpdate.png';
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color justify">
              I am self-motivated and enthusiastic person to work in any situation. I'm passionate about creating cutting-edge web applications that are both user-friendly and visually appealing. With a strong ability in front-end and back-end development. My skillset includes expertise in 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭, 𝐑𝐞𝐚𝐜𝐭.𝐣𝐬, 𝐍𝐨𝐝𝐞.𝐣𝐬, 𝐚𝐧𝐝 𝐏𝐲𝐭𝐡𝐨𝐧, as well as a deep understanding of various databases.
              <br/><br/>
              I am a problem solver by nature and enjoy working in a fast-paced, dynamic environment. I am always eager to learn new technologies and stay up-to-date with industry trends to bring the best solutions to clients.

              I am now looking to take on new challenges and continue to grow as a developer.

              </p>
              <p className="about__text p__color">
                
              </p>
              <p className="about__text p__color">
                
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#Contact">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        {/* eslint-disable-next-line */}
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
