import React from "react";
import Cards from "../../components/cards/Cards";
import BasicTable from "../../components/tables/accountsTable";
// import Revenuetabletable from "../../components/tables/Revenuetable";



const Revenue = () => {
  return (
    <>
      <div style={{fontSize:"20px"}}>Revenue</div> 
      <Cards />
      {/* <Revenuetabletable/> */}
      <BasicTable/>
    </>
  );
};

export default Revenue;
