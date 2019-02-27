import React, { Component } from 'react';
import Sidebar from './sidebar'
 
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      total_popups: 0,
      popups: []

      }}

close_popup =(id)=>
{
  const {popups} = this.state
    for(var iii = 0; iii < popups.length; iii++)
    {
        if(id === popups[iii])
        {
            Array.remove(popups, iii);
            
            document.getElementById(id).style.display = "none";
            
            this.calculate_popups();
            
            return;
        }
    }   
}

//displays the popups. Displays based on the maximum number of popups that can be displayed on the current viewport width
 display_popups=()=>
{

  const {total_popups, popups} = this.state
    var right = 20;
    
    var iii = 0;
    for(iii; iii < total_popups; iii++)
    {
      
        if(popups[iii] !== undefined)
        {
            var element = document.getElementById(popups[iii]);
            console.log(element);
            
            element.style.right = right + "px";
            right = right + 320;
            element.style.display = "block";
        }
    }
    
    for(var jjj = iii; jjj < popups.length; jjj++)
    {
        var element = document.getElementById(popups[jjj]);
        element.style.display = "none";
    }
}

//creates markup for a new popup. Adds the id to popups array.
chatWindow = (id, name)=>
{
  console.log(id)
  console.log(name)
    const {popups} = this.state
    for(var iii = 0; iii < popups.length; iii++)
    {   
        //already registered. Bring it to front.
        if(id == popups[iii])
        {
            Array.remove(popups, iii);
        
            popups.unshift(id);
            
            this.calculate_popups();
            
            
            return;
        }
    }               

    var element = '<div class="popup-box chat-popup" id="'+ id +'">';
    element = element + '<div class="popup-head">';
    element = element + '<div class="popup-head-left">'+ name +'</div>';
    element = element + '<div class="popup-head-right"><a href="javascript:close_popup(\''+ id +'\');">&#10005;</a></div>';
    element = element + '<div style="clear: both"></div></div><div class="popup-messages"></div></div>';
    
    document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML + element;  

    popups.unshift(id);
            
    this.calculate_popups();
  
    
    
}

//calculate the total number of popups suitable and then populate the toatal_popups variable.
calculate_popups=()=>
{ 
  const {total_popups} = this.state
    var width = window.innerWidth;
    if(width < 540)
    {
        total_popups = 0;
    }
    else
    {
        width = width - 200;
        let tpop = parseInt(width / 320)
        //320 is width of a single popup box
        this.state.total_popups = tpop;
    }
    
    this.display_popups();
    
}
componentDidMount(calculate_popups) {
  window.addEventListener("resize", calculate_popups);
  window.addEventListener("load", calculate_popups);
}
componentWillUnmount(calculate_popups) {
  window.addEventListener("resize", calculate_popups);
  window.addEventListener("load", calculate_popups);
}

//recalculate when window is loaded and also when window is resized.


  render() {
    return (
      <div className="page-wrapper chiller-theme toggled">
        <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
          <i className="fas fa-bars"></i>
        </a>
        <Sidebar chatWindow={this.chatWindow} close_popup={this.close_popup}/>
          {/*sidebar-wrapper*/} 
    
     </div>
    );
  }
}

export default App;
