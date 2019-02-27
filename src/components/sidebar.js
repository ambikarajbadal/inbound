import React, { Component } from 'react'
import './sidebar.css'
class sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
    
      const {chatWindow} = this.props;
        return ( 
            <nav id="sidebar" className="sidebar-wrapper">
    <div className="sidebar-content">
      <div className="sidebar-brand">
        <a href="#">STASHFIN</a>
        <div id="close-sidebar">
          <i className="fas fa-times"></i>
        </div>
      </div>
    
    {/*sidebar-header*/} 
      <div className="sidebar-search">
        <div>
          <div className="input-group">
            <input type="text" className="form-control search-menu" placeholder="Search..." />
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    {/* sidebar-search*/}  
      <div className="sidebar-menu">
        <ul>
          <li className="header-menu">
            <span>Users</span>
          </li>
          <li className="active" onClick={()=>{chatWindow('rahul','Rahul')}}>
            <a href="#">
              <i className="fa fa-user"></i>
              <span>Rahul</span>
              <span className="badge badge-pill badge-warning">6</span>
            </a>
           
          </li>
          <li onClick={(e)=>{chatWindow(e,'sunil','Sunil')}}>
            <a href="#">
              <i className="fa fa-user"></i>
              <span>Sunil</span>
              <span className="badge badge-pill badge-danger">3</span>
            </a>
            
          </li>
          <li onClick={(e)=>{chatWindow(e,'suraj','Suraj')}}>
            <a href="#">
              <i className="far fa-user"></i>
              <span>Suraj</span>
            </a>
            
          </li>
          <li onClick={(e)=>{chatWindow(e,'amit','Amit')}}>
            <a href="#">
              <i className="fa fa-user"></i>
              <span>Amit</span>
            </a>
           
          </li>
          <li onClick={(e)=>{chatWindow(e,'ankur','Ankur')}}>
            <a href="#">
              <i className="fa fa-user"></i>
              <span>Ankur</span>
            </a>
            <div className="sidebar-submenu">
             
            </div>
          </li>
         
        </ul>
      </div>
    {/*sidebar-menu*/} 
    </div>
    {/* sidebar-content*/}  
    <div className="sidebar-footer">
      <a href="#">
        <i className="fa fa-bell"></i>
        <span className="badge badge-pill badge-warning notification">3</span>
      </a>
      <a href="#">
        <i className="fa fa-envelope"></i>
        <span className="badge badge-pill badge-success notification">7</span>
      </a>
      <a href="#">
        <i className="fa fa-cog"></i>
        <span className="badge-sonar"></span>
      </a>
      <a href="#">
        <i className="fa fa-power-off"></i>
      </a>
    </div>
  </nav>
         );
    }
}
 
export default sidebar;