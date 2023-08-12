import { Grid } from "@mui/material";
import React from "react";
import Uploadimage from "../../images/Uploadimage.svg";
import Communicationarrow from "../../images/Communicationarrow.svg";

const CommunicationPromo = () => {
  return (
    <>
      <Grid xs={2} sm={4} md={4}>
        <span style={{ fontWeight: "700", fontSize: "20px" }}>
          Create a promotion
        </span>
      </Grid>
      <Grid xs={2} sm={4} md={4} mt={5}>
        <span style={{ fontWeight: "500", fontSize: "18px" }}>Add Image</span>
      </Grid>
      <Grid xs={2} sm={4} md={4} mt={5}>
        <Grid
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
        <span style={{ fontWeight: "500", fontSize: "18px" }}>Description</span>
      </Grid>
      <Grid xs={2} sm={4} md={4} mt={4}>
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
        style={{ display: "flex", gap: "50px" }}
      >
        <Grid xs={2} sm={4} md={4}>
          Name of the event <br />
          <input
            type="text"
            placeholder="Placeholder"
            style={{
              width: "450px",
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
        <Grid xs={2} sm={4} md={4}>
          Date <br />
          <input
            type="date"
            placeholder="Placeholder"
            style={{
              width: "450px",
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
        <Grid xs={2} sm={4} md={4} style={{ width: "400px" }}>
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
                width: "450px",
                marginTop: "7px",
                height: "29px",
                border: "2px solid #F5F5F5",
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
        style={{ display: "flex", gap: "50px" }}
      >
        <Grid xs={2} sm={4} md={4}>
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
                width: "440px",
                marginTop: "7px",
                height: "29px",
                border: "2px solid #F5F5F5",
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
        <Grid xs={2} sm={4} md={4}>
          Amount to charge <br />
          <input
            type="text"
            placeholder="$0.00"
            style={{
              width: "440px",
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
        <Grid xs={2} sm={4} md={4} style={{ width: "400px" }}>
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
                width: "450px",
                marginTop: "7px",
                height: "29px",
                border: "2px solid #F5F5F5",
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
        style={{ display: "flex", gap: "50px" }}
      >
        <Grid xs={2} sm={4} md={4} style={{ width: "670px" }}>
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
                width: "670px",
                marginTop: "7px",
                height: "29px",
                border: "2px solid #F5F5F5",
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
        <Grid xs={2} sm={4} md={4} style={{ width: "670px" }}>
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
                width: "670px",
                marginTop: "7px",
                height: "29px",
                border: "2px solid #F5F5F5",
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
        style={{ display: "flex", gap: "50px" }}
      >
        <Grid xs={2} sm={4} md={4} style={{ width: "670px" }}>
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
                width: "670px",
                marginTop: "7px",
                height: "29px",
                border: "2px solid #F5F5F5",
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
        <Grid xs={2} sm={4} md={4} style={{ width: "670px" }}>
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
                width: "670px",
                marginTop: "7px",
                height: "29px",
                border: "2px solid #F5F5F5",
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
        <Grid
          xs={2}
          sm={4}
          md={4}
          style={{ width: "60%" }}
        >
          {/* shams */}
        </Grid>
        <Grid
          xs={2}
          sm={4}
          md={4}
          style={{
            width: "40%",
            display: "flex",
          }}
        >
          <Grid xs={2} sm={4} md={4} mr={2}>
            <span
              style={{
                backgroundColor: "#D4D6D8",
                width: "140px",
                padding: "10px ",
                borderRadius: "8px",
              }}
            >
              Save as draft
            </span>
          </Grid>
          <Grid xs={2} sm={4} md={4} mr={2}>
            <span
              style={{
                backgroundColor: "Black",
                color:"white",
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
    </>
  );
};

export default CommunicationPromo;
