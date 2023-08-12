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
    <Tabs aria-label="Basic tabs" defaultValue={0}>
      <TabList>
        <Tab>Engagement</Tab>
        <Tab>Conversions</Tab>
        <Tab>Activity</Tab>
        <Tab>Participations</Tab>
      </TabList>
      <Grid display={"flex"} marginTop={"10px"} marginLeft={"90%"}>
        <DropDown />
      </Grid>
      {/* <Filter/> */}
      {/*  */}
      <TabPanel value={0}><BasicTable/></TabPanel>
      <TabPanel value={1}><Conversion/></TabPanel>
      <TabPanel value={2}><Activity/></TabPanel>
      <TabPanel value={3}><Patricipations/></TabPanel>
    </Tabs>
  );
}
