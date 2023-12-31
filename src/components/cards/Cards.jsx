import * as React from "react";
// import { experimentalStyled as styled } from "@mui/material/styles";
// import Box from '@mui/material/Box';
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DropDown from "../../menu/DropDown";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const Cards = () => {
  return (
    <>
      <Grid
        style={{
          //   backgroundColor: "red",
          display: "flex",
          // gap: "281px",
          justifyContent: "space-between",
          marginTop: "16px",
        }}
      >
        <Grid
          className="revenue_cards"
          xs={2}
          sm={4}
          md={2}
          style={{
            backgroundColor: "#E5EDFF",
            padding: "12px",
            // width: "314.33px",
            borderRadius: "16px",
          }}
        >
          Total Earnings
          <br />
          <br />
          <span style={{ fontSize: "36px" }}>$155,520</span>
          <br />
          <br />
          <span style={{ color: "#1A8449" }}>+9.65%</span>More earnings than
          usual
        </Grid>
        <Grid
          className="revenue_cards"
          xs={2}
          sm={4}
          md={2}
          style={{
            backgroundColor: "#E5EDFF",
            padding: "12px",
            // width: "314.33px",
            fontSize: "16px",
            borderRadius: "16px",
          }}
        >
          Sales Today
          <br />
          <br />
          <span style={{ fontSize: "36px" }}>$432</span>
          <br />
          <br />
          <span style={{ color: "#1A8449" }}>+9.65%</span>More earnings than
          usual
        </Grid>
        <Grid
          className="revenue_cards"
          xs={2}
          sm={4}
          md={2}
          style={{
            backgroundColor: "#E5EDFF",
            padding: "12px",
            // width: "314.33px",
            fontSize: "16px",
            borderRadius: "16px",
          }}
        >
          Sales this month
          <br />
          <br />
          <span style={{ fontSize: "36px" }}>12,960</span>
          <br />
          <br />
          <span style={{ color: "#1A8449" }}>+9.65%</span>More earnings than
          usual
        </Grid>
      </Grid>
      <div style={{ marginLeft: "90%", marginTop: "15px " }}>
        <span className="revenue_filter" style={{display:"flex"}}> 
          <span className="reveneue_para" >Filter By</span>
          <DropDown />
        </span>
      </div>
    </>
  );
};

export default Cards;
