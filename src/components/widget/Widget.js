import React from 'react'
import './widget.scss';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({type}) => {
    let data;
    // temporary data
    const amount = 100;
    const diff = 20;
    switch(type){
        case 'user':
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all Users",
                icon : <Person2OutlinedIcon className='icon' />
            }
            break;
        case 'order':
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "See all Orders",
                icon : <ShoppingCartOutlinedIcon className='icon' />
            }
            break;
        case 'earnings':
            data = {
                title: "Earnings",
                isMoney: true,
                link: "View net earnings",
                icon : <MonetizationOnOutlinedIcon className='icon' />
            }
            break;
        case 'balance':
            data = {
                title: "Balance",
                isMoney: true,
                link: "View All Balance",
                icon : <AccountBalanceOutlinedIcon className='icon' />
            }
            break;
        default :
         break;
    }
  return (
    <>
        <div className="widget">
            <div className="left">
                <div className="title">{data.title}</div>
                <div className="counter">{data.isMoney && "$"} {amount}</div>
                <div className="link">{data.link}</div>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <ArrowUpwardIcon />
                    {diff} %
                </div>
               {data.icon}
            </div>
        </div>
    </>
  )
}

export default Widget