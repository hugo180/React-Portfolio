import React from "react";
import "./Project.css";
import Project1 from './img/weather.png';
import Project2 from './img/pet-pal.png';
import Project3 from './img/text-editor.png';


function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          Here are some of the latest projects I've work on,
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
                     <h5 className="project__text">Weather Dashboard</h5>
                     <h4 className="project__text">a simple app that uses a weatheer API</h4>
                     <a href="https://github.com/hugo180/WEatherdashbioard-Api-Project" className="project__btn">Github</a>
                     <a href="https://hugo180.github.io/WEatherdashbioard-Api-Project/" className="project__btn">Deployed app</a>

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
                     <h5 className="project__text">Pet-Pals-are-Us</h5>
                     <h4 className="project__text">This project focuses on a page for storing user & pet information which holds data such as pet name, pet breed, toys, and notes about the pet.</h4>
                     <a href="https://github.com/kkrogs/Pet-Pals-R-Us" className="project__btn">Github</a>
                     <a href="https://pet-pals-r-us.herokuapp.com/" className="project__btn">Deployed app</a>

                    
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
                     <h5 className="project__text">Text-Editor</h5>
                     <h4 className="project__text">A simple pwa text editor</h4>
                     <a href="https://github.com/hugo180/pwa-textEditor" className="project__btn">Github</a>
                     <a href="https://limitless-dusk-18977.herokuapp.com/" className="project__btn">Deployed app</a>
                     </div>
                 </div>
             </div>






             
             <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <a href="https://github.com/hugo180" className="project__btn">View more</a>
             </div>

           </div>
       </div>
    </div>
  );
}

export default Project;
