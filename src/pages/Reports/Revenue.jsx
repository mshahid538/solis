import React from "react";
import Cards from "../../components/cards/Cards";
import BasicTable from "../../components/tables/accountsTable";
import Sidebar from "../../components/sidenav/Sidebar";
import Header from "../../components/header/Header";
// import Revenuetabletable from "../../components/tables/Revenuetable";

const Revenue = () => {
  return (
    <>
    <Header/>
      <Sidebar>
        <div style={{ fontSize: "20px" }}>Revenue</div>
        <Cards />
        {/* <Revenuetabletable/> */}
        <BasicTable />
      </Sidebar>
    </>
  );
};

export default Revenue;
