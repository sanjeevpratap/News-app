import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default class App extends Component {
  pageSize=12;
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact   path='/'element={<News pageSize={9} country="in" category="general" key="general"/>} />
            <Route exact   path='/bussiness'element={<News pageSize={9} country="in" category="bussiness" key="bussiness"/>} />
            <Route exact   path='/entertainment'element={<News pageSize={9} country="in" category="entertainment" key="entertainment" />} />
            <Route exact   path='/general'element={<News pageSize={9} country="in" category="general" key="general"/>} />
            <Route exact   path='/health'element={<News pageSize={9} country="in" category="health" key="health" />} />
            <Route exact   path='/science'element={<News pageSize={9} country="in" category="science" key="science"/>} />
            <Route exact   path='/sports'element={<News pageSize={9} country="in" category="sports"  key="sports"/>} />
            <Route exact   path='/technology'element={<News pageSize={9} country="in" category="technology" key="technology"/>} />

          </Routes>

          {/* <News  pageSize={9} country="in" category="science"/> */}

        </BrowserRouter>
        {/* Hello my first class based compponent {this.c} */}
      </div>
    )
  }
}

