import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Abdellatifzidane" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/abdellatif-zidane-b65170264/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Ce portfolio a été créé par <a target="_blank" rel="noreferrer">Abdellatif ZIDANE</a></p>
    </footer>
  );
}

export default Footer;