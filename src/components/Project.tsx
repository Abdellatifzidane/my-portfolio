import React from "react";
import karozad from '../assets/images/karozad.png';
import taika from '../assets/images/taika.png';
import bi from '../assets/images/BI.png';
import kaggle from '../assets/images/kaggle.png';

import market from '../assets/images/market.png';



import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projets pricipales réalisés</h1>
        <div className="projects-grid">
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={market} className="zoom" alt="thumbnail" width="100%"/></a>
                <a target="_blank" rel="noreferrer"><h2>Dashboard - Market Pro</h2></a>
                <p>J'ai participé en tant que Data Analyst à un projet visant à créer un tableau de bord dynamique en React et SQL, Power BI pour une application de gestion de caisse pour supermarchés.</p>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={taika} className="zoom" alt="thumbnail" width="100%"/></a>
                <a target="_blank" rel="noreferrer"><h2>E-commerce Dashboard - Taika</h2></a>
                <p>Développement d'un dashboard d'un site web e-commerce destiné aux boutiques de vêtements, en utilisant les SQL, Node.js, HTML, CSS, Javascript</p>
            </div>
            <div className="project">
                <a  target="_blank" rel="noreferrer"><img src={bi} className="zoom" alt="thumbnail" width="100%"/></a>
                <a  target="_blank" rel="noreferrer"><h2>Dashboard pour un projet BI</h2></a>
                <p>Traitement et visualisation des données d'un dataset récupéré d'une entreprise de e-commerce "olist" en brésil en Power BI.</p>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={kaggle} className="zoom" alt="thumbnail" width="100%"/></a>
                <a target="_blank" rel="noreferrer"><h2>Compétition machine learning - Kaggle</h2></a>
                <p>expérimentation et régularisation des modèles du deep learning telle que les LSTMs, RNNs, ResNets..., en utilisant Keras, Tensorflow, python.</p>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={karozad} className="zoom" alt="thumbnail" width="100%"/></a>
                <a target="_blank" rel="noreferrer"><h2>Karozad - App</h2></a>
                <p>Durant mon stage chez Karozad, J'ai conçu et développé une application pour automatiser le traitement des commandes en utilisant JavaScript, Express et SQL.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;