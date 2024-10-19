import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export class App extends Component {
  render() {
    return (
      <Router>
     
      <div>
      <Routes>
      <Route path="/home" element={<NavBar />}>
      <Route path='/' element={<News pageSize={5} country='in' category='sports' />} />
      </Routes>
      </div>
      
      </Router>
    )
  }
}

export default App
