import React from 'react'
import NavBar from './NavBar'
import './css/Transactions.css';
import { Link } from 'react-router-dom';

function Transactions() {
  const months2023 = ['August 2023', 'September 2023', 'October 2023', 'November 2023', 'December 2023']
  const months2024 = ['Janurary 2024', 'Feburary 2024']
  return (
    <div id='transactionContainer'>
      <NavBar />
      <div id='firstBoxTransaction'>
        {months2024.reverse().map((month) => (
          <div className='monthContainer'>
            <h1 style={{color:'white'}}>{month}</h1>
            <hr style={{borderStyle:'none', borderTop: '1px  solid lightblue'}}/>
            <Link className='link'>OPEN YOUR MONTH IN REVIEW</Link>
          </div>
        ))}
        <div className='YearContainer2023'>
          <h1 style={{color: 'white'}}>2023</h1> 
          <hr style={{borderStyle:'none', borderTop: '1px  solid lightblue'}}/>
            <Link className='link'>OPEN YOUR YEAR IN REVIEW</Link>
        </div>
          {months2023.reverse().map((month) => (
            <div className='monthContainer'>
              <h1 style={{color:'white'}}>{month}</h1>
              <hr style={{borderStyle:'none', borderTop: '1px  solid lightblue'}}/>
              <Link className='link'>OPEN YOUR MONTH IN REVIEW</Link>
            </div>
          ))}
      </div>
      <div id='secondBoxTransaction'></div>
    </div>
  )
}

export default Transactions
