import React, { Component, Suspense, lazy } from 'react';
import './App.css';
import Header from './Components/Header/Header';

const Body = lazy(() => import('./Components/Body/Body'));
const Footer = lazy(() => import('./Components/Footer/Footer'));

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Suspense fallback={<div></div>}>
          <Body />
          <Footer />
        </Suspense>
      </>
    );
  }
}
export default App;