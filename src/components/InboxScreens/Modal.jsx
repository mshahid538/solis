import React from 'react'
import { Grid, Typography } from "@mui/material";
import Close from "../../images/Close.svg";
import ModalCards from '../cards/ModalCards';
const Modal = () => {
  return (
    <>
    <Grid xs={2} sm={4} md={2} style={{ float: "right" }}>
      <img src={Close} alt="Close icon" />
    </Grid>
    <br />
    <Grid xs={2} sm={4} md={2} style={{ marginTop: "2%" }}>
      <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>
        Jared Black
      </Typography>
      {/* <hr style={{ width: "100px", color: "red" }} /> */}
    </Grid>
    <ModalCards/>
  </>
  )
}

export default Modal