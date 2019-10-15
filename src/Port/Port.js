import React from 'react';
import './Port.css'
const lObj =[
    {
        head:"Front End: React",
        tech:"Tech Used: HTML, CSS, JavaScript, React",
        objS:[
            {            
            name:"Random Quote Machine",
            sL:"https://codepen.io/Koekies/pen/oNNxNgy",
            pL:"https://codepen.io/Koekies/full/oNNxNgy"
        },
        {            
            name:"Markdown Previewer",
            sL:"https://codepen.io/Koekies/pen/wvvGBJe",
            pL:"https://codepen.io/Koekies/full/wvvGBJe"
        },
        {            
            name:"Drum Machine",
            sL:"https://codepen.io/Koekies/pen/vYYGOLJ",
            pL:"https://codepen.io/Koekies/full/vYYGOLJ"
        },
        {            
            name:"JavaScript Calculator",
            sL:"https://codepen.io/Koekies/pen/GRRZpZL",
            pL:"https://codepen.io/Koekies/full/GRRZpZL"
        },
        {            
            name:"Pomodoro Clock<",
            sL:"https://codepen.io/Koekies/pen/MWWyKBZ",
            pL:"https://codepen.io/Koekies/full/MWWyKBZ"
        }
    ]
    },
    {
        head:"Front End:Data visualisation with D3",
        tech:"Tech Used: HTML, CSS, JavaScript, D3.js",
        objS:[
            {            
            name:"United States GDP Bar Chart",
            sL:"https://codepen.io/Koekies/pen/xxxVOVp",
            pL:"https://codepen.io/Koekies/full/xxxVOVp"
        },
        {            
            name:"Pro Cycling Scatter Plot",
            sL:"https://codepen.io/Koekies/pen/MWWybYd",
            pL:"https://codepen.io/Koekies/full/MWWybYd"
        },
        {            
            name:"Global Temp 1753-2015 Heat Map",
            sL:"https://codepen.io/Koekies/pen/jOOqMPG",
            pL:"https://codepen.io/Koekies/full/jOOqMPG"
        },
        {            
            name:"US Educational Choropleth Map",
            sL:"https://codepen.io/Koekies/pen/QWWNEOE",
            pL:"https://codepen.io/Koekies/full/QWWNEOE"
        },
        {            
            name:"Movie Tree Map<",
            sL:"https://codepen.io/Koekies/pen/JjjXbOE",
            pL:"https://codepen.io/Koekies/full/JjjXbOE"
        }
    ]
    },
    {
        head:"Back-end: Node.js",
        tech:"Tech Used: Node.js, Mocha, Chai, MongoDB, MongooseJS, HelmetJS, Bcrypt",
        objS:[
            {            
            name:"Metric-Imperial Converter",
            sL:"https://glitch.com/edit/#!/freecodecamp-boilerplate-project-metricimpconverter-5",
            pL:"https://freecodecamp-boilerplate-project-metricimpconverter-5.glitch.me"
        },
        {            
            name:"Issue Tracker",
            sL:"https://glitch.com/edit/#!/freecodecamp-boilerplate-project-issuetracker-4",
            pL:"https://freecodecamp-boilerplate-project-issuetracker-4.glitch.me"
        },
        {            
            name:"Personal Library",
            sL:"https://glitch.com/edit/#!/freecodecamp-boilerplate-project-library-3",
            pL:"https://freecodecamp-boilerplate-project-library-3.glitch.me"
        },
        {            
            name:"Stock Price Checker",
            sL:"https://glitch.com/edit/#!/freecodecamp-boilerplate-project-stockchecker",
            pL:"https://freecodecamp-boilerplate-project-stockchecker.glitch.me"
        },
        {            
            name:"Anonymous Message Board",
            sL:"https://glitch.com/edit/#!/freecodecamp-boilerplate-project-messageboard",
            pL:"https://freecodecamp-boilerplate-project-messageboard.glitch.me"
        }
    ]
    }





]

function Pad(objArr){
    

    
        return(
            <div className ="two">
      <a href={objArr.sL} rel="noopener noreferrer" target="_blank">
        <div className = "link"><h3>{objArr.name}</h3></div>
      </a>
      <a href={objArr.pL} rel="noopener noreferrer" target="_blank">
        <div className = "link"><h3>{objArr.name}</h3></div>
      </a>      
      </div>
        )
    }


function Typer(mArr){
    
    
        const pads = mArr.objS.map((x)=>{
          return  Pad(x)
        }) 
        return(
            <div>
            <h2>{mArr.head}</h2>
            <p>{mArr.tech}</p>
            <div className ="portHead"><h3>Source Code</h3></div>
            <div className ="portHead"><h3>Preview</h3></div>
            {pads}
            </div> 

        )
    }

function Port(){
    
   
        const pLinks = lObj.map((x)=>{
           return Typer(x)
        })
        return(
            <div className = "container use">
        <h1 id="portWelc">My Portfolio</h1>
            {pLinks}
        </div>

        )
    }

export default Port;