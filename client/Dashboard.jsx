import React from 'react'
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
          <h3>Monthly Spending</h3>
          <h4>TRANSACTIONS <Icon><CallMade /></Icon></h4>
        </div>
        <div id='transactions'>
          <h3>Transactions To Review</h3>
          <h4>VIEW ALL <Icon><CallMade /></Icon></h4>
        </div>
        <div id='monthlyIncome'>
          <h3 >Monthly Income</h3>
          <h4>NET CHANGE <Icon><CallMade /></Icon></h4>
        </div>
      </div>
      <div id='dashboardContainer2'> 
        <div id='accounts'>
          <h4>ACCOUNTS <Icon> <CallMade /></Icon></h4>
        </div>
        <div>
          <h3>Top Categories</h3>
          <h4>VIEW ALL <Icon><CallMade /></Icon></h4>
        </div>
        <div>
          <h3>Next Two Weeks</h3>
          <h4>RECURRINGS <Icon><CallMade /></Icon></h4>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
