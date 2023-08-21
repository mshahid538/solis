import React from "react";
import TabsBasic from "../../components/tabs/engagementTab";
import Sidebar from "../../components/sidenav/Sidebar";
import Header from "../../components/header/Header";

const AcitivityLog = () => {
  return (
    <>
      <Header />
      <Sidebar>
        <span style={{fontSize:"20px"}} >Activity Log</span>
        <TabsBasic />
      </Sidebar>
    </>
  );
};

export default AcitivityLog;
