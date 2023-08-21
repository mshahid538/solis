import React from "react";
import { Grid } from "@mui/material";
import TextFields from "../textfields/TextFields";
import Close from "../../images/Close.svg";
import person from "../../images/person.svg";
import linkexternal from "../../images/linkexternal.svg";
const Profile = () => {
  return (
    <>
      <Grid xs={2} sm={4} md={2} style={{ float: "right" }}>
        <img src={Close} alt="Close icon" />
      </Grid>
      <br />
      <Grid style={{ display: "flex" }}>
        <Grid
          xs={2}
          sm={4}
          md={2}
          style={{ marginTop: "15px", marginRight: "5px" }}
        >
          <img src={person} alt="person" />
        </Grid>
        <Grid xs={2} sm={4} md={2}>
          <p
            style={{
              backgroundColor: "#F4F4F7",
              height: "45px",
              width: "320px",
              padding: "10px 16px 6px 14px",
              // gap:"4px",
              borderRadius: "0px 16px 16px 16px",
            }}
          >
            Hello! have you seen my backpack in office <br />
            15:42
          </p>
        </Grid>
        <Grid xs={2} sm={4} md={2} style={{ marginTop: "8px" }}>
          <img
            src={linkexternal}
            alt="linkexternal"
            style={{ width: "20px", height: "20px", marginTop: "30px" }}
          />
        </Grid>
        <span
          style={{ color: "#006ACC", marginTop: "30px" }}
          className="profile_view_icon"
        >
          View Events
        </span>
      </Grid>

      <Grid xs={2} sm={4} md={2} style={{ width: "300px", marginTop: "200px" }}>
        <hr className="regular_message_hr"/>
      </Grid>
      <Grid xs={2} sm={4} md={2}>
        <TextFields />
      </Grid>
    </>
  );
};

export default Profile;
