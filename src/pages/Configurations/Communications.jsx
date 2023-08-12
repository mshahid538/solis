import React from "react";
import BasicPagination from "../../components/pagination/BasicPagination";
import send from "../../images/send.svg";
import ButtonBase from "../../images/ButtonBase.svg";
// import downarrrow from "../../images/downarrow.svg";
import Table from "@mui/joy/Table";
// import { Grid } from "@mui/joy";
import Chevrondown from "../../images/Chevrondown.svg";
import Edit from '../../images/Edit.svg'
import CommunicationFilter from '../../components/filter/CommunicationFilter'

const Communications = () => {
  return (
    <>
    <CommunicationFilter/>
      {/* <Grid style={{ display: "flex" }} marginTop={"2%"}>
        <Grid xs={2} sm={4} md={4} style={{ display: "flex", width:"390px"}}>
          Filter by <DropDown />
        </Grid>
        <Grid xs={2} sm={4} md={4} style={{ display: "flex", width:"390px"}}>
          
        </Grid>

        <Grid xs={2} sm={4} md={4} style={{ display: "flex",width:"590"}}>
         <Search/>
        </Grid>
      </Grid> */}
      <Table aria-label="basic table">
        <thead>
          <tr>
            {/* <th
            style={{
              borderBottom: "0",
              textAlign: "center",
              backgroundColor: "#F6F9FF",
            }}
          ></th> */}
            {/* <th
            style={{
              borderBottom: "0",
              textAlign: "center",
              backgroundColor: "#F6F9FF",
            }}
          >
            Students
          </th> */}
            {/* <th
            style={{
              borderBottom: "0",
              textAlign: "center",
              backgroundColor: "#F6F9FF",
            }}
          >
            Assocation Host <img src={downarrrow} alt="logo" />
          </th> */}
            {/* <th
            style={{
              borderBottom: "0",
              textAlign: "center",
              backgroundColor: "#F6F9FF",
            }}
          > */}
            {/* Business Host <img src={downarrrow} alt="logo" /> */}
            {/* </th> */}
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
                //   borderRight: "solid 1px",
              }}
            >
              Name
            </th>
            <th
              style={{
                textAlign: "center",
                backgroundColor: "#F6F9FF",
                //   borderRight: "solid 1px",
              }}
            >
              Part
            </th>
            <th
              style={{
                backgroundColor: "#F6F9FF",
              }}
            ></th>
            <th
              style={{
                backgroundColor: "#F6F9FF",
              }}
            >
              Type
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
            <td>01/10/2020</td>
            <td>Name </td>
            <td>
              <span
                style={{
                  backgroundColor: "#C5F5D9",
                  height: "50px",
                  width: "63px",
                  borderRadius: "6px",
                  padding: "8px",
                }}
              >
                Active
                <img src={Chevrondown} alt="logo" />
              </span>
            </td>
            <td>
              <img src={Edit} alt="send" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={ButtonBase} alt="" />
            </td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>01/10/2020</td>
            <td>Full name </td>
            <td>
              <span
                style={{
                  backgroundColor: "#F5F5F5",
                  height: "30",
                  width: "63px",
                  borderRadius: "6px",
                  borderRadius: "6px",
                  padding: "8px",
                }}
              >
                In-Active
                <img src={Chevrondown} alt="logo" />
              </span>
            </td>
            <td>
            <img src={Edit} alt="send" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={ButtonBase} alt="" />
            </td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>01/10/2020</td>
            <td>Full name </td>
            <td>
              <span
                style={{
                  backgroundColor: "#F5F5F5",
                  height: "30",
                  width: "63px",
                  borderRadius: "6px",
                  padding: "8px",
                }}
              >
                In-Active
                <img src={Chevrondown} alt="logo" />
              </span>
            </td>
            <td>
            <img src={Edit} alt="send" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={ButtonBase} alt="" />
            </td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>01/10/2020</td>
            <td>Name </td>
            <td>
              <span
                style={{
                  backgroundColor: "#C5F5D9",
                  height: "50px",
                  width: "63px",
                  borderRadius: "6px",
                  padding: "8px",
                }}
              >
                Active
                <img src={Chevrondown} alt="logo" />
              </span>
            </td>
            <td>
            <img src={Edit} alt="send" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={ButtonBase} alt="" />
            </td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>01/10/2020</td>
            <td>Name </td>
            <td>
              <span
                style={{
                  backgroundColor: "#C5F5D9",
                  height: "50px",
                  width: "63px",
                  borderRadius: "6px",
                  padding: "8px",
                }}
              >
                Active
                <img src={Chevrondown} alt="logo" />
              </span>
            </td>
            <td>
            <img src={Edit} alt="send" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={ButtonBase} alt="" />
            </td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>01/10/2020</td>
            <td>Name </td>
            <td>
              <span
                style={{
                  backgroundColor: "#C5F5D9",
                  height: "50px",
                  width: "63px",
                  borderRadius: "6px",
                  padding: "8px",
                }}
              >
                Active
                <img src={Chevrondown} alt="logo" />
              </span>
            </td>
            <td>
            <img src={Edit} alt="send" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={ButtonBase} alt="" />
            </td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>01/10/2020</td>
            <td>Name </td>
            <td>
              <span
                style={{
                  backgroundColor: "#C5F5D9",
                  height: "50px",
                  width: "63px",
                  borderRadius: "6px",
                  padding: "8px",
                }}
              >
                Active
                <img src={Chevrondown} alt="logo" />
              </span>
            </td>
            <td>
            <img src={Edit} alt="send" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={ButtonBase} alt="" />
            </td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>01/10/2020</td>
            <td>Name </td>
            <td>
              <span
                style={{
                  backgroundColor: "#C5F5D9",
                  height: "50px",
                  width: "63px",
                  borderRadius: "6px",
                  padding: "8px",
                }}
              >
                Active
                <img src={Chevrondown} alt="logo" />
              </span>
            </td>
            <td>
            <img src={Edit} alt="send" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={ButtonBase} alt="" />
            </td>
          </tr>
        </tbody>
      </Table>
      <div style={{ marginLeft: "40%" }}>
        <BasicPagination />
      </div>
    </>
  );
};

export default Communications;
