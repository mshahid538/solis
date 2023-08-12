import React from 'react'
import downarrrow from '../../images/downarrow.svg'
import Table from '@mui/joy/Table';
import BasicPagination from '../pagination/BasicPagination';


const Conversion = () => {
  return (
    <>
    <Table aria-label="basic table">
      <thead>
        <tr>
          <th style={{ width: '20%',textAlign:"center", backgroundColor: "#F6F9FF" }}>Date <img src={downarrrow} alt="logo" /></th>
          <th style={{ textAlign:"center" ,backgroundColor: "#F6F9FF"}}>Catogory Button <img src={downarrrow} alt="logo" /></th>
          <th style={{ textAlign:"center" ,backgroundColor: "#F6F9FF"}}>Total Clicks <img src={downarrrow} alt="logo" /></th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ textAlign:"center" }}>
          <td>01/01/2023</td>
          <td>18</td>
          <td>18</td>
        </tr>
        <tr style={{ textAlign:"center" }}>
          <td>01/01/2023</td>
          <td>18</td>
          <td>18</td>
        </tr>
        <tr style={{ textAlign:"center" }}>
          <td>01/01/2023</td>
          <td>18</td>
          <td>18</td>
        </tr>
        <tr style={{ textAlign:"center" }}>
          <td>01/01/2023</td>
          <td>18</td>
          <td>18</td>

        </tr>
        <tr style={{ textAlign:"center" }}>
          <td>01/01/2023</td>
          <td>18</td>
          <td>18</td>

        </tr>
        <tr style={{ textAlign:"center" }}>
          <td>01/01/2023</td>
          <td>18</td>
          <td>18</td>

        </tr>
        <tr style={{ textAlign:"center" }}>
          <td>01/01/2023</td>
          <td>18</td>
          <td>18</td>

        </tr>
        <tr style={{ textAlign:"center" }}>
          <td>01/01/2023</td>
          <td>18</td>
          <td>18</td>

        </tr>
        <tr style={{ textAlign:"center" }}>
          <td>01/01/2023</td>
          <td>18</td>
          <td>18</td>
        </tr>
      </tbody>
    </Table>
    <div style={{marginLeft:"40%"}}>
    <BasicPagination />
  </div>
  </>
  )
}

export default Conversion