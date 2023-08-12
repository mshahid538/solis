import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { Grid } from '@mui/joy';
import DropDown from '../../menu/DropDown';
// import Filter from '../filter/Filter'
import BasicTable from '../tables/accountsTable';
export default function TabsBasic() {
  return (
    <Tabs aria-label="Basic tabs" defaultValue={0}>
      <TabList>
        <Tab>Accounts</Tab>
        <Tab>Age</Tab>
        <Tab>Location</Tab>
        <Tab>Universities</Tab>
        <Tab>Association</Tab>
        <Tab>Business</Tab>
      </TabList>
      <Grid display={"flex"} marginTop={"10px"} marginLeft={"90%"} >
        Filter by <DropDown/>
      </Grid>
      {/* <Filter/> */}
      {/*  */}
      <TabPanel value={0}>
      <BasicTable/>
      </TabPanel>
      <TabPanel value={1}>
      <BasicTable/>
      </TabPanel>
      <TabPanel value={2}>
      <BasicTable/>
      </TabPanel>
      <TabPanel value={3}>
      <BasicTable/>
      </TabPanel>
      <TabPanel value={4}>
      <BasicTable/>
      </TabPanel>
      <TabPanel value={5}>
      <BasicTable/>
      </TabPanel>
    </Tabs>
  );
}
