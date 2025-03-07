import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker,  faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faChartBar } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "JavaScript",
    "Node",
    "Express",
    ".NET",
    "C#",
    "SQL",
    "MySQL",
    "HTML5",
    "CSS3",
    "Postman"
];

const labelsSecond = [
    "SQL",
    "Spark",
    "Python",
    "Power BI",
    "Excel VBA",
    "Pandas",
    "Seaborn",
    "Matplotlib"
];

const labelsThird = [
    "TensorFlow",
    "Python",
    "Keras",
    "numpy",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expériences</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Développment Full Stack</h3>
                    <p>J'ai une expérience réelle en développement d'applications web et mobiles avec une stack technique variée, incluant des projets professionnels réalisés lors de mes stages, ainsi que des projets scolaires et personnels.</p>
                    <div className="flex-chips">
                        <span className="chip-title">environnement technique : </span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x" />
                    <h3>Data engineering</h3>
                    <p>J'ai travaillé sur des projets en BI et en traitement de données, ce qui m'a permis d'acquérir des compétences solides en analyse et visualisation des données. </p>
                    <div className="flex-chips">
                        <span className="chip-title">environnement technique : </span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Deep Learning et IA</h3>
                    <p> je crée des solutions intelligentes en exploitant des réseaux neuronaux pour analyser et traiter de grandes quantités de données.</p>
                    <div className="flex-chips">
                        <span className="chip-title">environnement technique : </span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;