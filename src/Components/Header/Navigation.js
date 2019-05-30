import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <ul id="nav-bar" className="">
        <li className="nav-item">
          <a href="#About" className="bookmark-link">ABOUT</a>
        </li>
        <li className="nav-item">
          <a href="#Classes" className="bookmark-link">CLASSESTest</a>
        </li>
        <li className="nav-item">
          <a href="#Schedule" className="bookmark-link">SCHEDULE</a>
        </li>
        <li className="nav-item">
          <a href="#Testimonials" className="bookmark-link">TESTIMONIALS</a>
        </li>
        <li className="nav-item">
          <a href="#Contact" className="bookmark-link">CONTACT</a>
        </li>
        <li className="nav-item right-nav">
          <a href="#Contact" className="nav-link">GET STARTED</a>
        </li>
      </ul>
    );
  }
}
export default Navigation;
