import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <>
       <div className="sidebar">
       <div className="top">
            <span className='logo' >Sales Board</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">Main</p>
                <li>
                    <DashboardIcon className='icon' />
                    <span>Dashboard</span>
                </li>
                <p className="title">List</p>

                <li>
                    <Person3OutlinedIcon className='icon' />
                    <span>User</span>
                </li>
                <li>
                    <Inventory2OutlinedIcon className='icon' />
                    <span>Products</span>
                </li>
                <li>
                    <StorefrontIcon className='icon' />
                    <span>Order</span>
                </li>
                <li>
                    <DeliveryDiningIcon className='icon' />
                    <span>Delivery</span>
                </li>
                <p className="title">Useful</p>

                <li>
                    <QueryStatsIcon className='icon' />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsActiveIcon className='icon' />
                    <span>Notification</span>
                </li>
                <p className="title">Service</p>

                <li>
                    <MedicalInformationIcon className='icon' />
                    <span> System Health</span>
                </li>
                <li>
                    <PsychologyIcon className='icon' />
                    <span> Logs</span>
                </li>
                <li>
                    <SettingsIcon className='icon' />
                    <span>Settings</span>
                </li>
                <p className="title">User</p>

                <li>
                    <PersonIcon className='icon' />
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon  className='icon' />
                    <span>Logout</span>
                </li>
               
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOptions"></div>
            <div className="colorOptions"></div>
            
        </div>
       </div>
    </>
  )
}

export default Sidebar