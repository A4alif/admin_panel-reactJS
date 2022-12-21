import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar';
import './home.scss'
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';

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
            <Chart aspect={2/1} title="Last Five Month Revenue" />
          </div>
          <div className="listContainer">
            <div className="title">Latest Tracsactions</div>
            <Table />
          </div>
        </div>
    </div>
    </>
  )
}

export default Home