import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import { Grid } from "@mui/joy";
import DropDown from "../../menu/DropDown";
// import Filter from '../filter/Filter'
import BasicTable from "../tables/engagementTable";
// import conversion from "../tables/Conversion";
import Conversion from "../tables/Conversion";
import Activity from "../tables/Activity";
import Patricipations from "../tables/Patricipations";

export default function TabsBasic() {
  return (
    <Tabs aria-label="Basic tabs" defaultValue={0} style={{marginTop:"20px"}} >
      <TabList className="activity" >
        <Tab>Engagement</Tab>
        <Tab>Conversions</Tab>
        <Tab>Activity</Tab>
        <Tab>Participations</Tab>
      </TabList>
      <Grid  marginTop={"10px"} marginLeft={"91%"}>
       <span style={{display:"flex"}} className="activity_filter" >
        <span className="activity_para" >Filter by</span><DropDown />
        </span> 
      </Grid>
      {/* <Filter/> */}
      {/*  */}
      <TabPanel value={0} className="activity_tabs" ><BasicTable/></TabPanel>
      <TabPanel value={1} className="activity_tabs" ><Conversion/></TabPanel>
      <TabPanel value={2} className="activity_tabs" ><Activity/></TabPanel>
      <TabPanel value={3} className="activity_tabs" ><Patricipations/></TabPanel>
    </Tabs>
  );
}
