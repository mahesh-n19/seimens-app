import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div className='dashboard'>
            <div className="dashboard-profile">
                <img style={{width:"50%"}} src="https://img.icons8.com/?size=512&id=7820&format=png&color=000000" alt="profile"/>
                <div className='separator'></div>
                <h2>Mahesh Narayankar</h2>

                <div className='progress-metrix'>
                  <div className='progress-item'>

                      <h1>2</h1>
                      <p>Courses Enrolled</p>
                  </div>
                  <div className='progress-item'>
                    <div className='progress-item'>

                      <h1>1</h1>
                      <p>Courses Completed</p>
                  </div>
                  </div>
                </div>

            </div>

            <div className="courses-enrolled">

            </div>
      </div>
    )
  }
}
