import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import CallMade from '@mui/icons-material/CallMade'
import Icon from '@mui/material/Icon'
import './css/Dashboard.css'

function Dashboard() {
  return (
    <div id='dashboardContainer'>
      <NavBar id='NavBar'/>
      <div id='dashboardContainer1'>
        <div id='monthlySpending'>
          <h4 style={{color:'rgba(255, 255, 255, 0.69)'}}>Monthly Spending</h4>
          <Link className='linkDashboard'><h5 style={{color: 'rgb(48, 97, 195)'}}>TRANSACTIONS<Icon><CallMade className='callMade'/></Icon></h5></Link>
        </div>
        <div id='transactions'>
          <h4 style={{color:'rgba(255, 255, 255, 0.69)'}}>Transactions To Review</h4>
          <Link className='linkDashboard'><h5  style={{color: 'rgb(48, 97, 195)'}}>VIEW ALL <Icon><CallMade className='callMade'/></Icon></h5></Link>
        </div>
        <div id='monthlyIncome'>
          <h4 style={{color:'rgba(255, 255, 255, 0.69)'}}>Monthly Income</h4>
          <Link className='linkDashboard'><h5  style={{color: 'rgb(48, 97, 195)'}}>NET CHANGE <Icon><CallMade className='callMade'/></Icon></h5></Link>
        </div>
      </div>
      <div id='dashboardContainer2'> 
        <div id='accounts'>
          <Link className='linkDashboard'><h5  style={{color: 'rgb(48, 97, 195)'}}>ACCOUNTS <Icon> <CallMade className='callMade'/></Icon></h5></Link>
        </div>
        <div id='topCategories'>
          <h4 style={{color:'rgba(255, 255, 255, 0.69)'}}>Top Categories</h4>
          <Link className='linkDashboard'><h5  style={{color: 'rgb(48, 97, 195)'}}>VIEW ALL <Icon><CallMade className='callMade'/></Icon></h5></Link>
        </div>
        <div id='recurrings'>
          <h4 style={{color:'rgba(255, 255, 255, 0.69)'}}>Next Two Weeks</h4>
          <Link className='linkDashboard'><h5  style={{color: 'rgb(48, 97, 195)'}}>RECURRINGS <Icon><CallMade className='callMade'/></Icon></h5></Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
