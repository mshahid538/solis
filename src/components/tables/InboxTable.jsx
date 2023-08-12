import React, { useState } from "react";
import downarrrow from "../../images/downarrow.svg";
import Table from "@mui/joy/Table";
import DropDown from "../../menu/DropDown";
import Search from "../../components/header/Search";
import { Grid } from "@mui/joy";
import BasicPagination from "../pagination/BasicPagination";
import send from "../../images/send.svg";
import ButtonBase from "../../images/ButtonBase.svg";
import Alert from "../../images/Alert.svg";
import Close from '../../images/Close.svg'


const InboxTable = () => {
  const [showPopUp, setShowPopup] = useState(false);

  const Popup = () => {
    return (
      <>
        <Grid
          xs={2}
          sm={4}
          md={2}
          style={{
            backgroundColor: "#FFFFFF",
            height: "200px",
            padding: "12px",
            border:"1px solid",
            borderRadius: "8px",
          }}
        >
          <Grid
            xs={2}
            sm={4}
            md={2}
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Grid xs={2} sm={4} md={2}>
              <img src={Alert} alt="alert" style={{width:"19.2px",height:"19.2px"}}/>
            </Grid>
            <Grid xs={2} sm={4} md={2}>
              <p>Are you sure you want to delete it!!!</p>
            </Grid>
            <Grid xs={2} sm={4} md={2}>
              <img src={Close} alt="alert" style={{width:"19.2px",height:"19.2px"}}/>
            </Grid>
            
          </Grid>
          {/* <button onClick={() => setShowPopup(false)}>Accept it!!</button> */}
          <Grid mt={5} xs={2} sm={4} md={2}>
            <Grid xs={2} sm={4} md={2}>
            Deleting this item means it is permanent and you won’t have access to it later. 
            </Grid>
          </Grid>
          <Grid mt={5} xs={2} sm={4} md={2} style={{display:"flex"}}>
            <Grid xs={2} sm={4} md={2} style={{width:"200px"}}>
            </Grid>
            <Grid xs={2} sm={4} md={2} style={{display:"flex",justifyContent:"space-around",gap:"6px"}}>
                <Grid xs={2} sm={4} md={2} style={{backgroundColor:"#FFFFFF",padding:"6px 16px 6px 16px", border:"1px solid"}}>Cancel</Grid>
                <Grid xs={2} sm={4} md={2}style={{backgroundColor:"#CE1821",padding:"6px 16px 6px 16px"}} onClick={() => setShowPopup(false)}>Delete</Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  };
  return (
    <>
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
              Date <img src={downarrrow} alt="logo" />
            </th>
            <th
              style={{
                textAlign: "center",
                backgroundColor: "#F6F9FF",
                //   borderRight: "solid 1px",
              }}
            >
              Part
              <img src={downarrrow} alt="logo" />
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
              <img src={downarrrow} alt="logo" />
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
            <td>Full name </td>
            <td>
              <span
                style={{
                  backgroundColor: "#207A7A",
                  height: "30",
                  width: "63px",
                  borderRadius: "6px",
                }}
              >
                Message
              </span>
            </td>
            <td>
              <img src={send} alt="send" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={ButtonBase} alt="" />
            </td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>01/10/2020</td>
            <td>Full name </td>
            <td>
              <span
                style={{
                  backgroundColor: "#991F01",
                  height: "30",
                  width: "63px",
                  borderRadius: "6px",
                }}
              >
                Reported account
              </span>
            </td>
            <td>
              <img src={send} alt="send" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={ButtonBase} alt="" />
            </td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>01/10/2020</td>
            <td>Full name </td>
            <td>
              <span
                style={{
                  backgroundColor: "#207A7A",
                  height: "30",
                  width: "63px",
                  borderRadius: "6px",
                }}
              >
                Message
              </span>
            </td>
            <td>
              <img src={send} alt="send" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={ButtonBase} alt="" />
            </td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>01/10/2020</td>
            <td>Full name </td>
            <td>
              <span
                style={{
                  backgroundColor: "#991F01",
                  height: "30",
                  width: "63px",
                  borderRadius: "6px",
                }}
              >
                Reported account
              </span>
            </td>
            <td>
              <img src={send} alt="send" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={ButtonBase} alt="" />
            </td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>01/10/2020</td>
            <td>Full name </td>
            <td>
              <span
                style={{
                  backgroundColor: "#207A7A",
                  height: "30",
                  width: "63px",
                  borderRadius: "6px",
                }}
              >
                Message
              </span>
            </td>
            <td>
              <img src={send} alt="send" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={ButtonBase} alt="" />
            </td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>01/10/2020</td>
            <td>Full name </td>
            <td>
              <span
                style={{
                  backgroundColor: "#991F01",
                  height: "30",
                  width: "63px",
                  borderRadius: "6px",
                }}
              >
                Reported account
              </span>
            </td>
            <td>
              <img src={send} alt="send" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={ButtonBase} alt="" />
            </td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>01/10/2020</td>

            <td>Full name </td>
            <td>
              <span
                style={{
                  backgroundColor: "#207A7A",
                  height: "30",
                  width: "63px",
                  borderRadius: "6px",
                }}
              >
                Message
              </span>
            </td>
            <td>
              <img src={send} alt="send" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={ButtonBase} alt="" />
            </td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>01/10/2020</td>

            <td>Full name </td>
            <td>
              <span
                style={{
                  backgroundColor: "#991F01",
                  height: "30",
                  width: "63px",
                  borderRadius: "6px",
                }}
              >
                Reported account
              </span>{" "}
            </td>
            <td>
              <img src={send} alt="send" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={ButtonBase} alt="" />
            </td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>01/10/2020</td>

            <td>Full name </td>
            <td>
              <span
                style={{
                  backgroundColor: "#207A7A",
                  height: "30",
                  width: "63px",
                  borderRadius: "6px",
                }}
              >
                Message
              </span>
            </td>
            <td>
              <img src={send} alt="send" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={ButtonBase} alt="" />
            </td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>01/10/2020</td>

            <td>Full name </td>
            <td>
              <span
                style={{
                  backgroundColor: "#991F01",
                  height: "30",
                  width: "63px",
                  borderRadius: "6px",
                }}
              >
                Reported account
              </span>{" "}
            </td>
            <td>
              <img src={send} alt="send" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={ButtonBase} alt="" />
            </td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>01/10/2020</td>

            <td>Full name </td>
            <td>
              <span
                style={{
                  backgroundColor: "#207A7A",
                  height: "30",
                  width: "63px",
                  borderRadius: "6px",
                }}
              >
                Message
              </span>
            </td>
            <td>
              <img src={send} alt="send" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={ButtonBase} alt="" />
            </td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>01/10/2020</td>

            <td>Full name</td>
            <span
              style={{
                backgroundColor: "#991F01",
                height: "30",
                width: "63px",
                borderRadius: "6px",
              }}
            >
              Reported account
            </span>
            <td>
              <img src={send} alt="send" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img
                src={ButtonBase}
                alt="delete"
                onClick={() => setShowPopup(true)}
              />
              {showPopUp && <Popup />}
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

export default InboxTable;
