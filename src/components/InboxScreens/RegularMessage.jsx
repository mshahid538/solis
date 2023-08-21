import { Grid, Typography } from "@mui/material";
import React from "react";
import Close from "../../images/Close.svg";
import person from "../../images/person.svg";
import TextFields from "../textfields/TextFields";

const RegularMessage = () => {
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
        {/* <hr style={{ width: "100px", color: "red" }} /> */}
      </Grid>
      <p>06/01/2023</p>
      <br />

      <Grid style={{ display: "flex", justifyContent: "space-between" }}>
        <Grid xs={2} sm={4} md={2}>
          <hr style={{ width: "300px" }} className="today_hr" />
        </Grid>
        <Grid xs={2} sm={4} md={2}>
          Today
        </Grid>
        <Grid xs={2} sm={4} md={2}>
          <hr style={{ width: "300px" }} className="today_hr" />
        </Grid>
      </Grid>

      <Grid style={{ display: "flex" }}>
        <Grid xs={2} sm={4} md={2}>
          <img
            src={person}
            alt="person"
            style={{ marginTop: "15px", marginRight: "5px", float: "left" }}
          />
        </Grid>
        <Grid xs={2} sm={4} md={2}>
          <p
            style={{
              backgroundColor: "#F4F4F7",
              width: "307px",
              height: "45px",
              padding: "10px 16px 6px 14px",
              // gap:"4px",
              borderRadius: "0px 16px 16px 16px",
            }}
          >
            Hello! have you seen my backpack in office <br />
            15:42
          </p>
        </Grid>
      </Grid>

      <Grid xs={2} sm={4} md={2} style={{ width: "300px", marginTop: "200px" }}>
        <hr className="regular_message_hr" />
      </Grid>
      <Grid xs={2} sm={4} md={2}>
        <TextFields />
      </Grid>
    </>
  );
};

export default RegularMessage;
