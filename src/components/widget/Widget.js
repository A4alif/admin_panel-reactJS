import React from 'react'
import './widget.scss';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

const Widget = ({type}) => {
    
  return (
    <>
        <div className="widget">
            <div className="left">
                <div className="title">USERS</div>
                <div className="counter">123456</div>
                <div className="link">See all Users</div>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <ArrowUpwardIcon />
                    20%
                </div>
                <Person2OutlinedIcon className='icon' />
            </div>
        </div>
    </>
  )
}

export default Widget