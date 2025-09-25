import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
            <div className='top-icons'>
              

              

               <div className="icon">
                <NavLink to="" className="sidebar-links">
                  <img src="https://img.icons8.com/?size=32&id=xtnIDXkBb0sK&format=png&color=ffffff" alt="home"/>
                  <p>Home</p>
                </NavLink>
              </div>

              <div className="icon">
                <NavLink to="/courses" className="sidebar-links">
                  <img src="https://img.icons8.com/?size=32&id=1767&format=png&color=ffffff" alt="courses"/>
                  <p>Courses</p>
                </NavLink>
              </div>
              

              
              <div className="icon">
                <NavLink to="/profile" className="sidebar-links">
                  <img src="https://img.icons8.com/?size=32&id=7820&format=png&color=ffffff" alt="profile"/>
                  <p>Profile</p>
                </NavLink>
              </div>

     
              <div className="icon">
                <NavLink to="/about" className="sidebar-links">
                  <img src=" https://img.icons8.com/?size=32&id=77&format=png&color=ffffff" alt="about"/>
                  <p>About</p>
                </NavLink>
              </div>


            </div>

            <div className="bottom-icons">
               <div className="icon">
                <img src=" https://img.icons8.com/?size=32&id=2445&format=png&color=ffffff" alt="logout"/>
                <p>Logout</p>
              </div>
            </div>
      </div>
    )
  }
}
