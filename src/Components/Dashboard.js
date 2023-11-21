import React from 'react'
import "./Style/dashboardpage.css"
import Nav from './Nav'
import {Sidebar} from './Sidebar'
import Content from './Content'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
    <Nav/>
    <Sidebar/>
    <Content/>
    </div>
    
  )
}

export default Dashboard