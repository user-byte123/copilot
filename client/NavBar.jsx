import React from 'react';
import Box from '@mui/material/Box';
import './navBar.css';
import { Link } from 'react-router-dom';
import NearMe from '@mui/icons-material/NearMe';
import Transaction from '@mui/icons-material/ReceiptOutlined'
import Payment from '@mui/icons-material/PaymentOutlined'
import Accounts from '@mui/icons-material/BarChartOutlined'
import Categories from '@mui/icons-material/LocalOfferRounded'
import Recurrings from '@mui/icons-material/CachedOutlined'
import Icon from '@mui/material/Icon';


function NavBar() {
  return (
    <Box style={{width:'250px'}}>
      <div id='searchBar'><input type="text" placeholder='Search'/></div>
      <ul id='navBarList'>
        <li class='navLi'><div><Link class='navLink'><Icon><NearMe style={{fontSize:'small'}}/></Icon>Dashboard</Link></div></li>
        <li class='navLi'><div><Link class='navLink'><Icon><Transaction style={{fontSize:'small'}}/></Icon>Transactions</Link></div></li>
        <li class='navLi'><div><Link class='navLink'><Icon><Payment style={{fontSize:'small'}}/></Icon>Accounts</Link></div></li>
        <li class='navLi'><div><Link class='navLink'><Icon><Accounts/></Icon>Investments</Link></div></li>
        <li class='navLi'><div><Link class='navLink'><Icon><Categories style={{fontSize:'small'}}/></Icon>Categories</Link></div></li>
        <li class='navLi'><div><Link class='navLink'><Icon id='RecurringIconBg'><Recurrings style={{fontSize:'small', color: '#121f46'}}/></Icon>Recurrings</Link></div></li>
      </ul>
    </Box>
  )
}

export default NavBar
