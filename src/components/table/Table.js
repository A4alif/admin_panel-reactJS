
import "./table.scss";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  const rows = [
    {
      id: 1416895,
      product: "Asus Laptop ",
      customer: "Farhan Khan",
      date: "2 March",
      amount: 10850,
      method: "Online Payment",
      status: "Approved"
    },
    {
      id: 1416987,
      product: "Xbox",
      customer: "Aslam Ali",
      date: "1 August",
      amount: 99999,
      method: "Cash on Delivery",
      status: "Pending"
    },
    {
      id: 2417895,
      product: "Play Station 5",
      customer: "Mohaiminul Eraj",
      date: "8 May",
      amount: 45968,
      method: "Online Payment",
      status: "Pending"
    },
    {
      id: 3186895,
      product: "Macbook Air ",
      customer: "Alif Hasan Shah",
      date: "15 May",
      amount: 85966,
      method: "Cash on Delivery",
      status: "Approved"
    },
    {
      id: 2245957,
      product: "Sony A47",
      customer: "Zihad Khan",
      date: "7 July",
      amount: 78500,
      method: "Online Payment",
      status: "Pending"
    },
  ]
  return (
    <>
       <TableContainer component={Paper} className = "table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              
            >
              <TableCell>
                {row.id}
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.product}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default List;
