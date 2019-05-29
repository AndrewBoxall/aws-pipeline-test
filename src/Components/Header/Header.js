import React, { Component } from 'react';
import './Header.css';
import Navigation from './Navigation';
import CarouselBackground from './CarouselBackground';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <CarouselBackground />
        <Navigation />
      </div>
    );
  }
}
export default Header;