import React from 'react';
import Box from '@mui/material/Box';
import './css/navBar.css';
import { Link } from 'react-router-dom';
import NearMe from '@mui/icons-material/NearMe';
import Transaction from '@mui/icons-material/ReceiptOutlined'
import Payment from '@mui/icons-material/PaymentOutlined'
import Accounts from '@mui/icons-material/BarChartOutlined'
import Categories from '@mui/icons-material/LocalOfferRounded'
import Recurrings from '@mui/icons-material/CachedOutlined'
import Search from '@mui/icons-material/Search'
import Circle from '@mui/icons-material/Circle'
import WavingHand from '@mui/icons-material/WavingHand'
import Help from '@mui/icons-material/Help'
import Settings from '@mui/icons-material/Settings'
import CallMade from '@mui/icons-material/CallMade'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Icon from '@mui/material/Icon';


function NavBar() {
  return (
    <Box id='NavBarBox' style={{width:'250px', height:'100vh', backgroundColor: '#121f46'}}>
      <div id='searchBar'><div id='searchBarOutline'><Icon><Search style={{color: 'grey'}}/></Icon><input id='searchBarInput' type="text" placeholder='Search'/></div></div>
      <ul id='navBarList'>
        <li className='navLi'><div><Link to='/dashboard' className='navLink'><Icon><NearMe style={{fontSize:'small'}}/></Icon>Dashboard</Link></div></li>
        <li className='navLi'><div><Link to='/transactions' className='navLink'><Icon><Transaction style={{fontSize:'small'}}/></Icon>Transactions</Link></div></li>
        <li className='navLi'><div><Link className='navLink'><Icon><Payment style={{fontSize:'small'}}/></Icon>Accounts</Link></div></li>
        <li className='navLi'><div><Link className='navLink'><Icon><Accounts/></Icon>Investments</Link></div></li>
        <li className='navLi'><div><Link className='navLink'><Icon><Categories style={{fontSize:'small'}}/></Icon>Categories</Link></div></li>
        <li className='navLi'><div><Link className='navLink'><Icon id='RecurringIconBg'><Recurrings style={{fontSize:'small', color: '#121f46'}}/></Icon>Recurrings</Link></div></li>
      </ul>
      <div id='divMyAccount' style={{color: 'grey'}}>
        <div style={{paddingLeft: '1rem', paddingTop: '1rem'}}>MY ACCOUNT</div>
        <Accordion id='accordian' style={{color: 'grey'}}>
          <AccordionSummary style={{backgroundColor: '#121f46'}}>Other Accounts</AccordionSummary>
          <AccordionDetails><div id='accordianDetailDiv'><Icon><Circle color='green' fontSize='small'/></Icon>Manual Account</div></AccordionDetails>
        </Accordion>
      </div>
      <div className='settingDivContainer'>
        <div className='settingDiv' style={{color: 'orange'}}><Icon><WavingHand style={{fontSize: 'small'}}/></Icon>Start Here</div>
        <div className='settingDiv' style={{color: 'grey'}}><Icon><Help style={{fontSize:'small'}}/></Icon>Get Help</div>
        <div className='settingDiv' style={{color: 'grey'}}><Icon><Settings /></Icon>Settings</div>
      </div>
        <button id='subscribeBtn'>Subscribe to get your data <Icon><CallMade /></Icon></button>
    </Box>
  )
}

export default NavBar
