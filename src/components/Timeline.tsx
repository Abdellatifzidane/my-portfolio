import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Études et formations</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2020 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Licence en informatique et Systèmes d'informations.</h3>
            <h4 className="vertical-timeline-element-subtitle">Algérie, Béjaia</h4>
            <p>
            Au cours de laquelle j'ai étudié des modules en algèbre, statistiques, algorithmique et complexité des algorithmes, ainsi que des techniques de conception des systèmes d'information.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor en Ingénierie de logiciel.</h3>
            <h4 className="vertical-timeline-element-subtitle">France, Ivry-sur-Seine</h4>
            <p>
            Développement Frontend, Développement Backend, Expérience Utilisateur, Gestion d'Équipe.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Master en Intelligence Artificielle et Big Data.</h3>
            <h4 className="vertical-timeline-element-subtitle">France, Paris</h4>
            <p>
            Machine Learning, Deep Learning et gestion de grandes données. J'ai appris à concevoir des solutions intelligentes pour résoudre des problèmes complexes et à utiliser les outils nécessaires pour exploiter les données massives et automatiser les processus décisionnels.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;