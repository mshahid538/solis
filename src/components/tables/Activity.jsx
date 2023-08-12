import React from 'react'
import downarrrow from "../../images/downarrow.svg";
import BasicPagination from "../pagination/BasicPagination";
import Table from '@mui/joy/Table';

const Activity = () => {
  return (
    <>
    <Table aria-label="basic table">
      <thead>
        <tr>
          <th
            style={{
              borderBottom: "0",
              textAlign: "center",
              backgroundColor: "#F6F9FF",
            }}
          ></th>
          <th
            style={{
              borderBottom: "0",
              textAlign: "center",
              backgroundColor: "#F6F9FF",
            }}
          >
            Students
          </th>
          <th
            style={{
              borderBottom: "0",
              textAlign: "center",
              backgroundColor: "#F6F9FF",
            }}
          >
            Assocation Host <img src={downarrrow} alt="logo" />
          </th>
          <th
            style={{
              borderBottom: "0",
              textAlign: "center",
              backgroundColor: "#F6F9FF",
            }}
          >
            Business Host <img src={downarrrow} alt="logo" />
          </th>
          {/* <th
            style={{
              borderBottom: "0",
              textAlign: "center",
              backgroundColor: "#F6F9FF",
            }}
          >
            Total Events
          </th> */}
        </tr>
        <tr style={{ backgroundColor: "#F6F9FF" }}>
          <th
            rowSpan={3}
            style={{
              width: "20%",
              textAlign: "center",
              backgroundColor: "#F6F9FF",
              borderRight: "solid 1px",
            }}
          >
            Date <img src={downarrrow} alt="logo" />
          </th>
          <th
            style={{
              textAlign: "center",
              backgroundColor: "#F6F9FF",
              borderRight: "solid 1px",
            }}
          >
            Part
            <img src={downarrrow} alt="logo" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Host
            <img src={downarrrow} alt="logo" />
          </th>
          <th
            style={{
              backgroundColor: "#F6F9FF",
            }}
          >
          </th>
          <th
            style={{
              backgroundColor: "#F6F9FF",
            }}
          >
          </th>
          {/* <th style={{ textAlign: "center", backgroundColor: "#F6F9FF" }}>
            Part
            <img src={downarrrow} alt="logo" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Host
            <img src={downarrrow} alt="logo" />
          </th> */}
        </tr>
      </thead>
      <tbody className={"border"}>
        <tr style={{ textAlign: "center" }}>
          <td>Night out</td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
         
        </tr>
        <tr style={{ textAlign: "center" }}>
          <td>Study</td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
          
        </tr>
        <tr style={{ textAlign: "center" }}>
          <td>Sport</td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>

        </tr>
        <tr style={{ textAlign: "center" }}>
          <td>01/01/2023</td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
 
        </tr>
        <tr style={{ textAlign: "center" }}>
          <td>Music</td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>

        </tr>
        <tr style={{ textAlign: "center" }}>
          <td>Culture</td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
 
        </tr>
        <tr style={{ textAlign: "center" }}>
          <td>Art</td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
 
        </tr>
        <tr style={{ textAlign: "center" }}>
          <td>Lectures</td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
 
        </tr>
        <tr style={{ textAlign: "center" }}>
          <td>Events</td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>

        </tr>
        <tr style={{ textAlign: "center" }}>
          <td>Events</td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
  
        </tr>
        <tr style={{ textAlign: "center" }}>
          <td>Events</td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
 
        </tr>
        <tr style={{ textAlign: "center" }}>
          <td>Events</td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>
          <td>
            11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          </td>

        </tr>
      </tbody>
    </Table>
    <div style={{marginLeft:"40%"}}>
      <BasicPagination />
    </div>
  </>
  )
}

export default Activity