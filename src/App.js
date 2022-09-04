import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';

export default class App extends Component {
  c='john';
  render() {
    return (
      <div>
     
        <Navbar/> 
        <News/>
        
          Hello my first class based compponent {this.c}
      </div>
    )
  }
}

