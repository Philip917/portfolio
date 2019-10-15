import React from 'react';

import './Contact.css';

function Contact(){
    return(
    <div className = "container use" id="contactP">
        <h1>Want to get in touch?</h1>
        <div>
          <i className="thumb fas fa-envelope"></i>
          <h4>philips.progdev@gmail.com</h4>
        </div>
        <a href="https://github.com/Philip917" rel="noopener noreferrer"  target="_blank">
        <div className="conti">
          <i className="thumb fab fa-github-square"></i>
         
        </div></a>
        <a href="https://www.linkedin.com/in/philip-koekemoer-299992170" rel="noopener noreferrer" target="_blank">
        <div className="conti">
          <i className="thumb fab fa-linkedin"></i>          
                     
        </div>
        </a>
        <div></div>
      </div>
    )
  }

  export default Contact;
  