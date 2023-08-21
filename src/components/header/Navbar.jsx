import * as React from "react";
import DropDown from "../../menu/DropDown";
import Logo from "../../images/Logo.svg";
import Search from "./Search";
import ByeWind from "../../images/ByeWind.svg";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const Navbar = () => {
  return (
    <>
      <Grid 
        className="navbar"
        // xs={2}
        // sm={4}
        // md={4}
        // mt={2}
        style={{
          display: "flex",
          justifyContent: "space-between",
          height:"68px"
          // width: "100%",
        }}
      >
        <Grid xs={2} sm={4} md={4} mt={1} >
          <img src={Logo} alt="logo" className="solis_logo" style={{width:"104px"}}  />
        </Grid>
        <Grid
         style={{ marginTop: "12px" }}
        >
          <Search />
        </Grid>
        <Grid
          
          // xs={2}
          // sm={4}
          // md={4}
          style={{ display: "flex", marginTop: "17px", height: "20px",}}
        >
          <img src={ByeWind} alt="Bywind" style={{ marginRight: "6px"}} className="adminlogo"/>
          <Grid
            xs={2}
            sm={4}
            md={4}
            style={{ height: "0px", marginLeft: "0px" }}
            className="adminlogo"
          >
            Super Admin
          </Grid>
          <span className="nav_filter" ><DropDown /></span>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};
export default Navbar;
