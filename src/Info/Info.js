import React from 'react';

import './Info.css';

function Info(){
    return(
    <div className = "container use">
        <h1 id="aboutMe">About me:</h1>
        <h2 id="description">Description</h2>
        <div id="screenPar">
        <p >I am a self taught full stack developer, that is always looking for the next challenge or oppertunity to learn and broaden my horizons. I have worked on a multitude of projects ranging from APIs to Data visualisation using chloropleth maps</p>
        </div>
          <h2 id="stack">Stack I use</h2>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>CSS/HTML5</li>
            <li>Mongoose/MongoDB</li>
            <li>Git</li>
            <li>Npm</li>
          </ul>
        <h2>Certifications</h2>
        <h3>Free Code Camp:</h3>
        <ul>
            <li>Full Stack Developer Certification <br />(1800 hours)</li>
            <li>Responsive web design <br />(300 hours)</li>
            <li>JavaScript Algorithms and Data Structures <br />(300 hours)</li>
            <li>Front End Libraries <br />(300 hours)</li>
            <li>Data Visualisation <br />(300 hours)</li>
            <li>Apis and Microservices <br />(300 hours)</li>
            <li>Information Security and Quality Assurance <br />(300 hours)</li>
          </ul>
        
      </div>
    )
  }

  export default Info;