import React from "react";
import "./Project.css";
import Project1 from './img/portfolio-2.jpg';
import Project2 from './img/portfolio-6.jpg';
import Project3 from './img/portfolio-3.jpg';
import Project4 from './img/medi.jpg';

function Project() {
  return (
    <div className="project component__space" id="Projects">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          There are latests projects, 
        </p>
        <p className="heading p__color">
            what i'm done in my academic period.
        </p>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h4 className="project__text"><b>Simple Car</b></h4>
                     <h4 className="project__text"><b>Sale Application</b></h4>
                     <a href="https://github.com/Ravindu98-bot/Carsale-App" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h4 className="project__text"><b> Stu. Details</b></h4>
                     <h4 className="project__text"><b>Apllication</b></h4>
                     <a href="https://github.com/RavinduISHA/Student-Details-App" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h4 className="project__text">Medical center</h4>
                     <h4 className="project__text">Smart App</h4>
                     <a href="https://github.com/Ravindu98-bot/Hospital-Management-System" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h4 className="project__text">Dev Portfolio</h4>
                     <a href="https://github.com/Ravindu98-bot/Developer_Portfolio" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>
             
             {/*<div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn">View more</button>
  </div>*/}

           </div>
       </div>
    </div>
  );
}

export default Project;
