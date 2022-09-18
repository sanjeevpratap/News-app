import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import { HashRouter, Route, Routes } from "react-router-dom";


export default class App extends Component {
  c = 'john';
  render() {
    return (
      <div>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route exact  key="general" path='/'element={<News pageSize={9} country="us" category="general" />} />
            <Route exact  key="bussiness" path='/bussiness'element={<News pageSize={9} country="us" category="bussiness" />} />
            <Route exact  key="entertainment" path='/entertainment'element={<News pageSize={9} country="us" category="entertainment" />} />
            <Route exact  key="general" path='/general'element={<News pageSize={9} country="us" category="general" />} />
            <Route exact  key="health" path='/health'element={<News pageSize={9} country="us" category="health" />} />
            <Route exact  key="science" path='/science'element={<News pageSize={9} country="us" category="science" />} />
            <Route exact  key="sports" path='/sports'element={<News pageSize={9} country="us" category="sports" />} />
            <Route exact  key="technology" path='/technology'element={<News pageSize={9} country="us" category="technology" />} />

          </Routes>

          {/* <News  pageSize={9} country="us" category="science"/> */}

        </HashRouter>
        {/* Hello my first class based compponent {this.c} */}
      </div>
    )
  }
}

