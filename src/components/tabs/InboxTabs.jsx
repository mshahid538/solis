import React from 'react'
import TabPanel from '@mui/joy/TabPanel';
import Tab from '@mui/joy/Tab';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import RegularMessage from '../InboxScreens/RegularMessage';
import ReportMessage from '../InboxScreens/ReportMessage';
import Profile from '../InboxScreens/Profile';
import Modal from '../InboxScreens/Modal';
import InboxTable from '../tables/InboxTable';

const InboxTabs = () => {
  return (
    <Tabs aria-label="Basic tabs" defaultValue={0}>
      <TabList>
        <Tab>Regular Message</Tab>
        <Tab>Report Message</Tab>
        <Tab>Profile</Tab>
        <Tab>Modal</Tab>
        <Tab>Table</Tab>
      </TabList>
      <TabPanel value={0}>
      <RegularMessage/>
      </TabPanel>
      <TabPanel value={1}>
      <ReportMessage/>
      </TabPanel>
      <TabPanel value={2}>
      <Profile/>
      </TabPanel>
      <TabPanel value={3}>
      <Modal/>
      </TabPanel>
      <TabPanel value={4}>
      <InboxTable/>
      </TabPanel>
    </Tabs>
  )
}

export default InboxTabs