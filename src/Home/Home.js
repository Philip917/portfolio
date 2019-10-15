import React from 'react';

import './Home.css'

function Home() {
    return (
      <div className="container use " id="screen">
      <h1>Hi I'm Philip!</h1>
        <h2>I'm a web developer.</h2>
        <h2>Need A Website? Looking to hire?<br />Check out the links below!</h2>
        <div >
          <a href="https://github.com/Philip917" rel="noopener noreferrer" target="_blank" >
          <i className="fab fa-github-square thumb"></i>
          </a>
          <a href="https://www.linkedin.com/in/philip-koekemoer-299992170" rel="noopener noreferrer" target="_blank" >
          <i className="fab fa-linkedin thumb"></i>
          </a>
        </div>
      
        </div>
        );
    }

    export default Home;
