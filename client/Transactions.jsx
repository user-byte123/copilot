import React from 'react'
import NavBar from './NavBar'
import './css/Transactions.css';
import { Link } from 'react-router-dom';
import { ManageAccountsSharp } from '@mui/icons-material';

function Transactions() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  //getMonth just gets an index and so Jan starts at 0
  const currentMonth = currentDate.getMonth();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];
  //declare variable to store year; 
  let year = currentYear;

  const generateMonths = (currentMonth) => {
    //declare variable to store prevMonth
    let prevMonth = currentMonth -1
    //declare variable to contain all preview for each month
    const previews = [];
    //want to display 7 months prior to currentMonth
    for (let i = 0; previews.length < 7; i++) {
      if (prevMonth < 0) {
        prevMonth = 11; 
        year--;
      }
      //use unshift b/c want the earliest month to appear in the beginning of the array and display the earliest month will be displayed in the bottom of the page
      previews.unshift(`${monthNames[prevMonth]} ${year}`);
      prevMonth--;
    }
    return previews;
  }
  
  const months=generateMonths(currentMonth)
  
  return (
    <div id='transactionContainer'>
      <NavBar />
      <div id='firstBoxTransaction'>
        <div className='YearContainer2023'>
          <h1 style={{color: 'white'}}>{year}</h1> 
          <hr style={{borderStyle:'none', borderTop: '1px  solid lightblue'}}/>
          <Link className='link'>OPEN YOUR YEAR IN REVIEW</Link>
        </div>
          {months.reverse().map((month) => (
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
