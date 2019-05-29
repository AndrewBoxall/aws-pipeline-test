import React, { Component } from 'react';
import './CarouselBackground.css';

//import image1 from '../../images/pilates-banner.jpg';
//import image2 from '../../images/pilates-banner-2.jpg';
import image3 from '../../images/pilates-banner-9.jpg';

class CarouselBackground extends Component {
  constructor(props){
    super(props)

    this.state = {
      carouselImage: [image3, image3, image3],
      carouselIndex: 0
    }
  }
  componentDidMount(){
    this.carouselInterval = setInterval(
      () => this.changeBackground(), 10000
    );
  }
  componentWillUnmount(){
    clearInterval(this.carouselInterval);
  }
  changeBackground(){
    let currentIndex = this.state.carouselIndex;
    currentIndex = currentIndex + 1;

    if (currentIndex >= 3) {
      this.setState({carouselIndex: 0});
    } else {
      this.setState({carouselIndex: currentIndex});
    }
  }
  render() {
    return (
      <img className="carousel-background" src={this.state.carouselImage[this.state.carouselIndex]} alt="background header carousel"></img>
    );
  }
}
export default CarouselBackground;