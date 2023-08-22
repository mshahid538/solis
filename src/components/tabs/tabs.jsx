import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import { Grid } from "@mui/joy";
import DropDown from "../../menu/DropDown";
// import Filter from '../filter/Filter'
import BasicTable from "../tables/accountsTable";
export default function TabsBasic() {
  return (
    <Tabs>
      <TabList className="demographcis">
        <Tab>Accounts</Tab>
        <Tab>Age</Tab>
        <Tab>Location</Tab>
        <Tab>Universities</Tab>
        <Tab>Association</Tab>
        <Tab>Business</Tab>
      </TabList>
      <Grid marginTop={"10px"} marginLeft={"90%"}>
        <span style={{display:"flex"}} className="demofilter">
         <span className="demo_para" >Filter by</span><DropDown />
        </span>
      </Grid>
      {/* <Filter/> */}
      {/*  */}
      <TabPanel value={0} className="demo_tabs">
        <BasicTable />
      </TabPanel>
      <TabPanel value={1} className="demo_tabs">
        <BasicTable />
      </TabPanel>
      <TabPanel value={2} className="demo_tabs">
        <BasicTable />
      </TabPanel>
      <TabPanel value={3} className="demo_tabs">
        <BasicTable />
      </TabPanel>
      <TabPanel value={4} className="demo_tabs">
        <BasicTable />
      </TabPanel>
      <TabPanel value={5} className="demo_tabs">
        <BasicTable />
      </TabPanel>
    </Tabs>
  );
}
