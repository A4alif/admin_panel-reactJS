import React from 'react'
import './navbar.scss'
import SavedSearchOutlinedIcon from '@mui/icons-material/SavedSearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder="Search" />
            <SavedSearchOutlinedIcon />
          </div>
          <div className="items">
            <div className="item">
            <LanguageOutlinedIcon />
            English
            </div>
            <div className="item">
            <DarkModeOutlinedIcon />
            </div>
            <div className="item">
            <FullscreenExitOutlinedIcon />
            </div>
            <div className="item">
            <NotificationsNoneOutlinedIcon />
            <div className="counter">1</div>
            </div>
            <div className="item">
            <ChatBubbleOutlineOutlinedIcon />
            <div className="counter">2</div>
            </div>
            <div className="item">
            <ListOutlinedIcon />
            </div>
            <div className="item">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='avatar' alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar