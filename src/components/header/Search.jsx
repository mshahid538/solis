import * as React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/joy";

export default function CustomizedInputBase() {
  return (
    <Grid
    xs={2}
    sm={4}
    md={4}
    style={{
      width: "330px",
      height: "34px",
      borderRadius: "7px",
      backgroundColor: "#F5F5F5",
      // marginBottom:"20px",
    }}
    // 
    >
      <IconButton className="main_search">
        <SearchIcon />
      </IconButton>
      <InputBase 
        placeholder="Search " className="navbar_search"
        // inputProps={{ "aria-label": "search google maps" }}
      />
    </Grid>
  );
}
