import React from "react";
// import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
// import facesmile from "../../images/facesmile.svg"
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
const TextFields = () => {
  return (
    <Grid
    xs={2} sm={4} md={2}
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "none",
        width: 400,
        maxWidth: "100%",
        backgroundColor: "#F4F4F7",
        padding: "8px 16px 8px 16px",
        borderRadius: "9.999px",
        marginTop: "1%",
        height: "35px",
      }}
    >
      <input
        type="text" placeholder="Type your message here"
        style={{
          border: "none",
          backgroundColor: "#F4F4F7",
          height: "25px",
          width: "400px",
          outline: "none",
        }}
      />

      {/* <img src={facesmile} alt="" /> */}
      <SentimentSatisfiedAltIcon />
    </Grid>

  );
};

export default TextFields;
