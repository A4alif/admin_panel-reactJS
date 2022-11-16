import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar';
import './home.scss'
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';

const Home = () => {
  return (
    <>
    <div className='home'>
        <Sidebar />
        <div className="homecontainer">
          <Navbar />
          <div className="widgets">
            <Widget type='user' />
            <Widget  type='order' />
            <Widget  type='earnings' />
            <Widget  type='balance' />
          </div>
          <div className="charts">
            <Featured />
            <Chart />
          </div>
        </div>
    </div>
    </>
  )
}

export default Home