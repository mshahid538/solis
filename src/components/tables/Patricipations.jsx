import React from "react";
import Table from "@mui/joy/Table";
import downarrrow from "../../images/downarrow.svg";
import BasicPagination from "../pagination/BasicPagination";

const Patricipations = () => {
  return (
    <>
      <Table aria-label="basic table">
        <thead>
          <tr>
            <th style={{ width: "20%", backgroundColor: "#F6F9FF" }}>
              Events <img src={downarrrow} alt="logo" />
            </th>
            <th style={{ backgroundColor: "#F6F9FF" }}>
              Type <img src={downarrrow} alt="logo" />
            </th>
            <th style={{ backgroundColor: "#F6F9FF" }}>
              Number fo clicks <img src={downarrrow} alt="logo" />
            </th>
            <th style={{ backgroundColor: "#F6F9FF" }}>
              Publiction date <img src={downarrrow} alt="logo" />
            </th>
            <th style={{ backgroundColor: "#F6F9FF" }}>
              Event date
              <img src={downarrrow} alt="logo" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01/01/2023</td>
            <td>Redirected</td>
            <td>100</td>
            <td>01/01/2023</td>
            <td>01/01/2023</td>
          </tr>
          <tr>
            <td>01/01/2023</td>
            <td>Free</td>
            <td>100</td>
            <td>01/01/2023</td>
            <td>01/01/2023</td>
          </tr>
          <tr>
            <td>01/01/2023</td>
            <td>Paid</td>
            <td>100</td>
            <td>01/01/2023</td>
            <td>01/01/2023</td>
          </tr>
          <tr>
            <td>01/01/2023</td>
            <td>Redirected</td>
            <td>100</td>
            <td>01/01/2023</td>
            <td>01/01/2023</td>
          </tr>
          <tr>
            <td>01/01/2023</td>
            <td>Free</td>
            <td>100</td>
            <td>01/01/2023</td>
            <td>01/01/2023</td>
          </tr>
          <tr>
            <td>01/01/2023</td>
            <td>Paid</td>
            <td>100</td>
            <td>01/01/2023</td>
            <td>01/01/2023</td>
          </tr>
          <tr>
            <td>01/01/2023</td>
            <td>Redirected</td>
            <td>100</td>
            <td>01/01/2023</td>
            <td>01/01/2023</td>
          </tr>
          <tr>
            <td>01/01/2023</td>
            <td>Free</td>
            <td>100</td>
            <td>01/01/2023</td>
            <td>01/01/2023</td>
          </tr>
          <tr>
            <td>01/01/2023</td>
            <td>Paid</td>
            <td>100</td>
            <td>01/01/2023</td>
            <td>01/01/2023</td>
          </tr>
          <tr>
            <td>01/01/2023</td>
            <td>Redirected</td>
            <td>100</td>
            <td>01/01/2023</td>
            <td>01/01/2023</td>
          </tr>
          <tr>
            <td>01/01/2023</td>
            <td>Free</td>
            <td>100</td>
            <td>01/01/2023</td>
            <td>01/01/2023</td>
          </tr>
        </tbody>
      </Table>
      <div style={{marginLeft:"40%"}}>
        <BasicPagination />
      </div>
    </>
  );
};

export default Patricipations;
