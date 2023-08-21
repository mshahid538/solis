import React from "react";
import { Grid } from "@mui/material";
import Communicationarrow from "../../images/Communicationarrow.svg";
import Checkbox from "@mui/material/Checkbox";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidenav/Sidebar";

const CommunicationAnnouncement = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
    <Header/>
    <Sidebar>
      <Grid xs={2} sm={4} md={4}>
        <span style={{ fontWeight: "700", fontSize: "20px" }}>
          Create a promotion
        </span>
      </Grid>
      <Grid xs={2} sm={4} md={4} mt={3}>
        <span style={{ fontWeight: "500", fontSize: "18px" }}>
          General Information
        </span>
      </Grid>
      <Grid
        xs={2}
        sm={4}
        md={4}
        mt={3}
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "27px",
          width: "100%",
        }}
      >
        <Grid xs={2} sm={4} md={4} style={{ width: "49%" }}>
          Title <br />
          <input
            type="text"
            placeholder="Placeholder"
            style={{
              width: "97%",
              marginTop: "7px",
              height: "35px",
              border: "2px solid #F5F5F5",
              outline: "none",
              padding: "4px ",
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          />
        </Grid>
        <Grid xs={2} sm={4} md={4} style={{ width: "49%" }}>
          Date <br />
          <input
            type="date"
            placeholder="Placeholder"
            style={{
              width: "97%",
              marginTop: "7px",
              height: "35px",
              border: "2px solid #F5F5F5",
              outline: "none",
              padding: "4px ",
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          />
        </Grid>
      </Grid>
      <Grid xs={2} sm={4} md={4} mt={3}>
        <span style={{ fontWeight: "500", fontSize: "18px" }}>Description</span>
      </Grid>
      <Grid xs={2} sm={4} md={4} mt={4}>
        <input
          type="text"
          placeholder="Placeholder"
          style={{
            width: "100%",
            height: "44px",
            border: "none",
            outline: "none",
            padding: "4px",
            backgroundColor: "#F5F5F5",
          }}
        />
      </Grid>
      <Grid xs={2} sm={4} md={4} mt={3}>
        <span style={{ fontWeight: "500", fontSize: "18px" }}>Target</span>
      </Grid>
      <Grid
        xs={2}
        sm={4}
        md={4}
        mt={3}
        style={{ display: "flex", gap: "19px", width: "100%" }}
      >
        <Grid xs={2} sm={4} md={4} style={{ width: "49%" }}>
          Choose universities to include <br />
          <Grid
            xs={2}
            sm={4}
            md={4}
            style={{
              border: "1px solid #F5F5F5",
              display: "flex",
              padding: "4px",
            }}
            mt={1}
          >
            <input
              type="text"
              placeholder="All"
              style={{
                width: "98%",
                marginTop: "7px",
                height: "29px",
                // border: "2px solid #F5F5F5",
                border: "none",
                outline: "none",
                backgroundColor: "white",
                borderRadius: "5px",
                borderRight: "0",
              }}
            />
            <Grid xs={2} sm={4} md={4} mt={2}>
              <img src={Communicationarrow} alt="" />
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={2} sm={4} md={4} style={{ width: "49%" }}>
          Choose programs to include <br />
          <Grid
            xs={2}
            sm={4}
            md={4}
            style={{
              border: "1px solid #F5F5F5",
              display: "flex",
              padding: "4px",
            }}
            mt={1}
          >
            <input
              type="text"
              placeholder="All"
              style={{
                width: "98%",
                marginTop: "7px",
                height: "29px",
                // border: "2px solid #F5F5F5",
                border: "none",
                outline: "none",
                backgroundColor: "white",
                borderRadius: "5px",
                borderRight: "0",
              }}
            />
            <Grid xs={2} sm={4} md={4} mt={2}>
              <img src={Communicationarrow} alt="" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        xs={2}
        sm={4}
        md={4}
        mt={3}
        style={{ display: "flex", gap: "19px", width: "100%" }}
      >
        <Grid xs={2} sm={4} md={4} style={{ width: "49%" }}>
          City
          <br />
          <Grid
            xs={2}
            sm={4}
            md={4}
            style={{
              border: "1px solid #F5F5F5",
              display: "flex",
              padding: "4px",
            }}
            mt={1}
          >
            <input
              type="text"
              placeholder="Only City"
              style={{
                width: "98%",
                marginTop: "7px",
                height: "29px",
                // border: "2px solid #F5F5F5",
                border: "none",
                outline: "none",
                backgroundColor: "white",
                borderRadius: "5px",
                borderRight: "0",
              }}
            />
            <Grid xs={2} sm={4} md={4} mt={2}>
              <img src={Communicationarrow} alt="" />
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={2} sm={4} md={4} style={{ width: "49%" }}>
          Neighbourhood
          <br />
          <Grid
            xs={2}
            sm={4}
            md={4}
            style={{
              border: "1px solid #F5F5F5",
              display: "flex",
              padding: "4px",
            }}
            mt={1}
          >
            <input
              type="text"
              placeholder="-"
              style={{
                width: "98%",
                marginTop: "7px",
                height: "29px",
                // border: "2px solid #F5F5F5",
                border: "none",
                outline: "none",
                backgroundColor: "white",
                borderRadius: "5px",
                borderRight: "0",
              }}
            />
            <Grid xs={2} sm={4} md={4} mt={2}>
              <img src={Communicationarrow} alt="" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        xs={2}
        sm={4}
        md={4}
        mt={3}
        style={{ display: "flex", gap: "19px", width: "100%" }}
      >
        <Grid xs={2} sm={4} md={4} style={{ width: "49%" }}>
          Minimum age <br />
          <Grid
            xs={2}
            sm={4}
            md={4}
            style={{
              border: "1px solid #F5F5F5",
              display: "flex",
              padding: "4px",
            }}
            mt={1}
          >
            <input
              type="text"
              placeholder="-"
              style={{
                width: "98%",
                marginTop: "7px",
                height: "29px",
                // border: "2px solid #F5F5F5",
                border: "none",
                outline: "none",
                backgroundColor: "white",
                borderRadius: "5px",
                borderRight: "0",
              }}
            />
            <Grid xs={2} sm={4} md={4} mt={2}>
              <img src={Communicationarrow} alt="" />
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={2} sm={4} md={4} style={{ width: "49%" }}>
          Maximum age <br />
          <Grid
            xs={2}
            sm={4}
            md={4}
            style={{
              border: "1px solid #F5F5F5",
              display: "flex",
              padding: "4px",
            }}
            mt={1}
          >
            <input
              type="text"
              placeholder="-"
              style={{
                width: "98%",
                marginTop: "7px",
                height: "29px",
                // border: "2px solid #F5F5F5",
                border: "none",
                outline: "none",
                backgroundColor: "white",
                borderRadius: "5px",
                borderRight: "0",
              }}
            />
            <Grid xs={2} sm={4} md={4} mt={2}>
              <img src={Communicationarrow} alt="" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={2} sm={4} md={4} mt={3}>
        <span style={{ fontWeight: "500", fontSize: "18px" }}>Delivery</span>
      </Grid>
      <Grid xs={2} sm={4} md={4} mt={3}>
        <Checkbox {...label} /> By mail
      </Grid>
      <Grid xs={2} sm={4} md={4} mt={1}>
        <Checkbox {...label} /> In app notifications
      </Grid>
      <Grid xs={2} sm={4} md={4} mt={2} style={{ display: "flex" }}>
        <Grid xs={2} sm={4} md={4} style={{ width: "50%" }}>
          {/* shams */}
        </Grid>
        <Grid
          xs={2}
          sm={4}
          md={4}
          mt={5}
          ml={120}
          style={{
            width: "30%",
            display: "flex",
          }}
        >
          <Grid xs={2} sm={4} md={4} mr={2} >
            <span className="announce_btn"
              style={{
                backgroundColor: "#D4D6D8",
                width: "140px",
                padding: "10px ",
                borderRadius: "8px",
              }}
            >
              Save
            </span>
          </Grid>
          <Grid xs={2} sm={4} md={4} mr={2}>
            <span className="announce_publish_btn"
              style={{
                backgroundColor: "Black",
                color: "white",
                width: "140px",
                padding: "10px ",
                borderRadius: "8px",
              }}
            >
              Publish
            </span>
          </Grid>
        </Grid>
      </Grid>
      </Sidebar>
    </>
  );
};

export default CommunicationAnnouncement;
