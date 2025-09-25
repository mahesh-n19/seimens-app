import React, { Component } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

export default class Render extends Component {
  render() {
    return (
        <>
            <Navbar />

            <div className='sidebar-x-content'>
              <Sidebar />
              <div className='content'>
                <Outlet />
              </div>
            </div>
                    
      </>
    )
  }
}
