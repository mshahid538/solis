import { Grid } from "@mui/material";
import React from "react";
import Uploadimage from "../../images/Uploadimage.svg";
import Communicationarrow from "../../images/Communicationarrow.svg";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidenav/Sidebar";
const CommunicationPromo = () => {
  return (
    <>
      <Header />
      <Sidebar>
        <Grid xs={2} sm={4} md={4} style={{ fontWeight: "700", fontSize: "20px",width:"20%" }} >
          <span >
            Create a promotion
          </span>
        </Grid>
        <Grid xs={2} sm={4} md={4} mt={5}>
          <span style={{ fontWeight: "500", fontSize: "18px" }}>Add Image</span>
        </Grid>
        <Grid xs={2} sm={4} md={4} mt={5}>
          <Grid
            className="promo_box"
            xs={2}
            sm={4}
            md={4}
            style={{ border: "1px solid lightgray", height: "158px" }}
          >
            <Grid xs={2} sm={4} md={4}>
              <Grid mt={8} xs={2} sm={4} md={4} style={{ textAlign: "center" }}>
                <img
                  src={Uploadimage}
                  alt="Uploadimage"
                  style={{ height: "30px" }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <input type="file" />
          </Grid>
        </Grid>
        <Grid xs={2} sm={4} md={4} mt={3}>
          <span
            style={{ fontWeight: "500", fontSize: "18px" }}
          >
            Description
          </span>
        </Grid>
        <Grid xs={2} sm={4} md={4} mt={4} className="promo_description" >
          <input 
            type="text"
            placeholder="Add a description to the event"
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
            // width: "100%",
          }}
        >
          <Grid xs={2} sm={4} md={4} style={{ width: "32%" }} className="name_of_event"  >
            Name of the event <br />
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
          <Grid xs={2} sm={4} md={4} style={{ width: "33%" }}>
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
          <Grid xs={2} sm={4} md={4} style={{ width: "33%" }}>
            Location <br />
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
                placeholder="Placeholder"
                style={{
                  width: "97%",
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
          style={{
            display: "flex",
            gap: "25px",
            width: "100%",
          }}
        >
          <Grid xs={2} sm={4} md={4} style={{ width: "32%" }}>
            Select a category for the event <br />
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
                placeholder="Sports"
                style={{
                  width: "100%",
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
          <Grid xs={2} sm={4} md={4} style={{ width: "33%" }}>
            Name of the event <br />
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
          <Grid xs={2} sm={4} md={4} style={{ width: "33%" }}>
            Select a category for the event <br />
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
                placeholder="Sports"
                style={{
                  width: "100%",
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
        {/* Target section */}
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
        <Grid xs={2} sm={4} md={4} mt={2} style={{ display: "flex" }}>
          <Grid xs={2} sm={4} md={4} style={{ width: "50%" }} >
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
            <Grid xs={2} sm={4} md={4} mr={2}>
              <span className="communi_btn"
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
              <span className="publish_btn"
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

export default CommunicationPromo;
