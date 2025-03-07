import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from "../assets/images/1729880575644.jpg";


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Abdellatifzidane" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/abdellatif-zidane-b65170264/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Abdellatif ZIDANE</h1>
          <p>Étudiant en IA et BIG DATA</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Abdellatifzidane" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/abdellatif-zidane-b65170264/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;