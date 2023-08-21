import { Grid } from "@mui/joy";
import React from "react";
import DropDown from "../../menu/DropDown";
import Search from "../../components/header/Search";
import InboxTabs from "../../components/tabs/InboxTabs";
import Sidebar from "../../components/sidenav/Sidebar";
import Header from "../../components/header/Header";

const Inbox = () => {
  return (
    <>
      <Header />
      <Sidebar>
        <div style={{ fontSize: "30px" }}>Inbox</div>
        <Grid
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <Grid
            xs={2}
            sm={4}
            md={4}
            style={{ display: "flex" }}
          >
            <span className="inbox_fileter" style={{display:"flex"}} >
              <span className="inbox_para" > Filter by</span>  <DropDown />
            </span>
          </Grid>
          {/* <Grid
            xs={2}
            sm={4}
            md={4}
            style={{ display: "flex", width: "390px" }}
          ></Grid> */}

          <Grid xs={2} sm={4} md={4} style={{ display: "flex" }}>
           <span className="inbox_search" ><Search /></span> 
          </Grid>
        </Grid>
        <InboxTabs />
      </Sidebar>
    </>
  );
};

export default Inbox;
