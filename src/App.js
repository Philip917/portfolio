import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <header>
        <nav id="main">

          <div id="homepage" className="icon">
            <i className="fas fa-home i"></i>
          </div>
          <div id="about" className="icon" ><i className="fas fa-info i"></i></div>
          <div id="portfolio" className="icon">
            <i className="fas fa-desktop i"></i>
          </div>

          <div id="contact" className="icon">
            <i className="fas fa-comment-alt i"></i>
          </div>

        </nav>

      </header>
      <nav className="side" id="left">
        <div><i className="fas fa-chevron-left s"></i></div>
      </nav>
      <nav className="side" id="right">
        <div><i className="fas fa-chevron-right s"></i></div>
      </nav>
      <div id="into">
        <div id='root'></div>
      </div>

    </div>
  );
}

export default App;
