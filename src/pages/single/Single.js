import React from "react";
import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from '../../components/table/Table';
import "./single.scss";

const Single = () => {
  return (
    <>
      <div className="single">
        <Sidebar />
        <div className="singleContainer">
          <Navbar />
          <div className="top">
            <div className="left">
              <div className="editButton">Edit</div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="football"
                  className="itemimg"
                />
                <div className="details">
                  <div className="itemTitle">Alif Hasan Shah</div>
                  <div className="detailItem">
                    <span className="itemKey">Email :</span>
                    <span className="itemValue">alifhasanshah@gmail.com</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone :</span>
                    <span className="itemValue">+88 0184545454</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address :</span>
                    <span className="itemValue">Bashundhara R/A</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country :</span>
                    <span className="itemValue">Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
                <Chart aspect={4/1} title = "User Spending ( Last 4 Months)"/>
            </div>
          </div>
          <div className="bottom">
          <h1 className="title">Last Transactions</h1>
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};

export default Single;
