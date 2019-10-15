import React, {Component} from 'react';
import './App.css';
import Home from './Home/Home'
import Contact from './Contact/Contact'
import Info from './Info/Info'

import Port from './Port/Port'


const onP ={
  color:'#99B03B'
};
const nP={
  color:'#999999'
};



class App extends Component{
  constructor(props){
    super(props);
    this.state={
      currPage:0,
      onH:onP,
      onI:nP,
      onPort:nP,
      onC:nP
    }
    this.left = this.left.bind(this);
    this.right = this.right.bind(this);
    this.chooser = this.chooser.bind(this);
    
  
  }
  
  left(){
    var now = this.state.currPage;
    var next;
    if(now >0) next = now-1;
    else next = 3;
   this.chooser(next)
    this.setState({
      currPage:next
    });
  }

  right(){
    var now = this.state.currPage;
    var next;
    if(now <3) next = now+1;
    else next = 0;
    this.chooser(next)
    this.setState({
      currPage: next
    });
      } 
  
  chooser(inp){
    var colArr = [nP,nP,nP,nP];
    colArr[inp] = onP;
    this.setState({
      onH:colArr[0],
      onI:colArr[1],
      onPort:colArr[2],
      onC:colArr[3]
    })
  }
  
  

  render(){
    var coolArr = [Home(), Info(), Port(),Contact()];
   
    return (
      <div className="App">
           
      
        <header>
          <nav id="main">
  
            <div id="homepage" className="icon" val={0} style={this.state.onH} onClick={() => {this.setState({currPage: 0});this.chooser(0);}}>
              <i className="fas fa-home i" ></i>
              <div ><h2 className="topper">Home</h2></div>
            </div>
            <div id="about" className="icon" val={1} style={this.state.onI} onClick={() => {this.setState({currPage: 1});this.chooser(1);}}>
              <i className="fas fa-info i" ></i>
            <div ><h2 className="topper">Info</h2></div>
            </div>
            <div id="portfolio" className="icon" val={2} style={this.state.onPort} onClick={() => {this.setState({currPage: 2});this.chooser(2);}}>
              <i className="fas fa-desktop i" ></i>
              <div><h2 className="topper">Portfolio</h2></div>
            </div>
  
            <div id="contact" className="icon" val={3} style={this.state.onC}onClick={() => {this.setState({currPage: 3});this.chooser(3);}}>
              <i className="fas fa-comment-alt i"></i>
              <div><h2 className="topper">Contact</h2></div>
            </div>
  
          </nav>
         
  
        </header>
        <nav className="side" id="left">
          <div><i className="fas fa-chevron-left" onClick={this.left}></i></div>
        </nav>
        <nav className="side" id="right">
          <div><i className="fas fa-chevron-right" onClick={this.right}></i></div>
        </nav>
        <div id="into container">
        {coolArr[this.state.currPage]}
        </div>
        <div class="bg-image"></div>

        <footer></footer>
        
      </div>
      
    );
  }
}




export default App;
