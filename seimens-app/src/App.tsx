import './App.css'
import React, { Component } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Render from './components/Render'
import Home from './components/Home'
import About from './components/About'
import Courses from './components/Courses'
import Profile from './components/Profile'

export default class App extends Component {
  render() {
    return (
      <Routes>
          <Route path="" element={<Render/>} >
            <Route path="" element={<Home/>} />
            <Route path="about" element={<About />} />
            <Route path="courses" element={<Courses />} />
            <Route path="profile" element={<Profile />} />
          </Route>
      </Routes>
    )
  }
}
