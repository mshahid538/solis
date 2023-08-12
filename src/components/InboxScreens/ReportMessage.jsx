import React from 'react'
import { Grid, Typography } from "@mui/material";
import TextFields from '../textfields/TextFields';
import Close from "../../images/Close.svg";
import person from "../../images/person.svg";


const ReportMessage = () => {
  return (
    <>
    <Grid xs={2} sm={4} md={2} style={{ float: "right" }}>
      <img src={Close} alt="Close icon" />
    </Grid>
    <br />
    <Grid xs={2} sm={4} md={2} style={{ marginTop: "2%" }}>
      <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>
        Full Name
      </Typography>
      <hr style={{ width: "100px", color: "red" }} />
    </Grid>
    <p>06/01/2023</p>
    <br />

    <Grid style={{ display: "flex", justifyContent: "space-between" }}>
      <Grid xs={2} sm={4} md={2}>
        {" "}
        <hr style={{ width: "300px" }} />{" "}
      </Grid>
      <Grid xs={2} sm={4} md={2}>
        Today
      </Grid>
      <Grid xs={2} sm={4} md={2}>
        <hr style={{ width: "300px" }} />
      </Grid>
    </Grid>

    <Grid style={{ display: "flex" }}>
      <Grid xs={2} sm={4} md={2}>
        <img src={person} alt="person" />
      </Grid>
      <Grid xs={2} sm={4} md={2}>
        <p
          style={{
            backgroundColor: "#F4F4F7",
            width: "397px",
            height: "55px",
            padding:"12px 18px 6px 18px",
            gap:"4px",
            borderRadius:"0px 16px 16px 16px"
          }}
        >
          Hello! have you seen my backpack in office <br />
          15:42
        </p>
      </Grid>
    </Grid>

    <Grid xs={2} sm={4} md={2}>
        <hr style={{ width: "500px" ,marginTop:"300px"}} />
    </Grid>
    <Grid xs={2} sm={4} md={2}>
      <TextFields />
     </Grid>
  </> 
  )
}

export default ReportMessage