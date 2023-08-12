import { Grid } from "@mui/joy";
import React from "react";
import DropDown from "../../menu/DropDown";
import Search from '../../components/header/Search'
import InboxTabs from "../../components/tabs/InboxTabs";


const Inbox = () => {
  return (
    <>
      <div style={{ fontSize: "20px" }}>Inbox</div>

      <Grid style={{ display: "flex" }} marginTop={"2%"}>
        <Grid xs={2} sm={4} md={4} style={{ display: "flex", width:"390px"}}>
          Filter by <DropDown />
        </Grid>
        <Grid xs={2} sm={4} md={4} style={{ display: "flex", width:"390px"}}>
          
        </Grid>

        <Grid xs={2} sm={4} md={4} style={{ display: "flex",width:"590"}}>
         <Search/>
        </Grid>
      </Grid>
      <InboxTabs/>
    </>
  );
};

export default Inbox;
