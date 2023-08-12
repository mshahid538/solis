import { Grid } from "@mui/material";
import React from "react";
import Icon from "../../images/Icon.svg";
import Calendar from "../../images/Calendar.svg";
import People from "../../images/People.svg";
import Delete from "../../images/Delete.svg";
import Block from '../../images/Block.svg'
const ModalCards = () => {
  return (
    <>
      <Grid
        style={{
          //   backgroundColor: "red",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "16px",
          fontSize: "18px",
        }}
      >
        <Grid
          style={{
            backgroundColor: "#D4D6D8 ",
            border: "solid 1px gray",
            height: "390px",
            borderRadius: "16px",
          }}
        >
          <Grid
            xs={2}
            sm={4}
            md={2}
            style={{
              // backgroundColor: "#E5EDFF",
              padding: "20px",
              width: "314.33px",

              height: "390px",
            }}
          >
            <span
              style={{
                backgroundColor: "black",
                color: "white",
                width: "63px",
                height: "24px",
                padding: "4px 8px 4px 8px",
                borderRadius: "4px",
              }}
            >
              Public
              <br />
            </span>
            <br />
            <Grid
              style={{
                backgroundColor: "#72767D",
                height: "86px",
                width: "279.67px",
              }}
            ></Grid>
            <br />
            {/* <span style={{ fontWeight:"700"}}>Name of the event            </span> */}
            <Grid
              xs={2}
              sm={4}
              md={2}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span style={{ fontWeight: "700" }}>Name of the event</span>
              <span style={{ fontWeight: "700" }}>$200</span>
            </Grid>
            <Grid xs={2} sm={4} md={2} display={"flex"}>
              <img src={Icon} alt="" />
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#72767D",
                  marginLeft: "5px",
                }}
              >
                Place
              </span>
            </Grid>
            <Grid xs={2} sm={4} md={2} display={"flex"}>
              <img src={Calendar} alt="" />
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#72767D",
                  marginLeft: "5px",
                }}
              >
                02/22/2023
              </span>
            </Grid>
            <Grid xs={2} sm={4} md={2} display={"flex"}>
              <img src={People} alt="" />
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#72767D",
                  marginLeft: "5px",
                }}
              >
                No limit
              </span>
            </Grid>
            <Grid xs={2} sm={4} md={2} display={"flex"}>
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#72767D",
                  //   marginLeft: "5px",
                }}
              >
                Description of the event.Description of the event. Description
                of the event.
              </span>
            </Grid>
            <Grid
              xs={2}
              sm={4}
              md={2}
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <Grid
                xs={2}
                sm={4}
                md={2}
                style={{
                  backgroundColor: "white",
                  padding: "6px 16px 6px 16px",
                  height:"36px",
                  width:"135.83px",
                  textAlign:"center",
                  borderRadius:"4px"
                }}
              >
                <img src={Delete} alt="" />
                <span>Delete</span>
              </Grid>
              <Grid xs={2} sm={4} md={2}  style={{
                  backgroundColor: "white",
                  padding: "6px 16px 6px 16px",
                  height:"36px",
                  width:"135.83px",
                  textAlign:"center",
                  borderRadius:"4px"
                }}>
                <img src={Block} alt="" />
                <span>Block</span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          style={{
            backgroundColor: "#D4D6D8 ",
            border: "solid 1px gray",
            height: "390px",
            borderRadius: "16px",
          }}
        >
          <Grid
            xs={2}
            sm={4}
            md={2}
            style={{
              // backgroundColor: "#E5EDFF",
              padding: "20px",
              width: "314.33px",

              height: "390px",
            }}
          >
            <span
              style={{
                backgroundColor: "black",
                color: "white",
                width: "63px",
                height: "24px",
                padding: "4px 8px 4px 8px",
                borderRadius: "4px",
              }}
            >
              Public
              <br />
            </span>
            <br />
            <Grid
              style={{
                backgroundColor: "#72767D",
                height: "86px",
                width: "279.67px",
              }}
            ></Grid>
            <br />
            {/* <span style={{ fontWeight:"700"}}>Name of the event            </span> */}
            <Grid
              xs={2}
              sm={4}
              md={2}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span style={{ fontWeight: "700" }}>Name of the event</span>
              <span style={{ fontWeight: "700" }}>$200</span>
            </Grid>
            <Grid xs={2} sm={4} md={2} display={"flex"}>
              <img src={Icon} alt="" />
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#72767D",
                  marginLeft: "5px",
                }}
              >
                Place
              </span>
            </Grid>
            <Grid xs={2} sm={4} md={2} display={"flex"}>
              <img src={Calendar} alt="" />
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#72767D",
                  marginLeft: "5px",
                }}
              >
                02/22/2023
              </span>
            </Grid>
            <Grid xs={2} sm={4} md={2} display={"flex"}>
              <img src={People} alt="" />
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#72767D",
                  marginLeft: "5px",
                }}
              >
                No limit
              </span>
            </Grid>
            <Grid xs={2} sm={4} md={2} display={"flex"}>
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#72767D",
                  //   marginLeft: "5px",
                }}
              >
                Description of the event.Description of the event. Description
                of the event.
              </span>
            </Grid>
            <Grid
              xs={2}
              sm={4}
              md={2}
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <Grid
                xs={2}
                sm={4}
                md={2}
                style={{
                  backgroundColor: "white",
                  padding: "6px 16px 6px 16px",
                  height:"36px",
                  width:"135.83px",
                  textAlign:"center",
                  borderRadius:"4px"
                }}
              >
                <img src={Delete} alt="" />
                <span>Delete</span>
              </Grid>
              <Grid xs={2} sm={4} md={2}  style={{
                  backgroundColor: "white",
                  padding: "6px 16px 6px 16px",
                  height:"36px",
                  width:"135.83px",
                  textAlign:"center",
                  borderRadius:"4px"
                }}>
                <img src={Block} alt="" />
                <span>Block</span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          style={{
            backgroundColor: "#D4D6D8 ",
            border: "solid 1px gray",
            height: "390px",
            borderRadius: "16px",
          }}
        >
          <Grid
            xs={2}
            sm={4}
            md={2}
            style={{
              // backgroundColor: "#E5EDFF",
              padding: "20px",
              width: "314.33px",

              height: "390px",
            }}
          >
            <span
              style={{
                backgroundColor: "black",
                color: "white",
                width: "63px",
                height: "24px",
                padding: "4px 8px 4px 8px",
                borderRadius: "4px",
              }}
            >
              Public
              <br />
            </span>
            <br />
            <Grid
              style={{
                backgroundColor: "#72767D",
                height: "86px",
                width: "279.67px",
              }}
            ></Grid>
            <br />
            {/* <span style={{ fontWeight:"700"}}>Name of the event            </span> */}
            <Grid
              xs={2}
              sm={4}
              md={2}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span style={{ fontWeight: "700" }}>Name of the event</span>
              <span style={{ fontWeight: "700" }}>$200</span>
            </Grid>
            <Grid xs={2} sm={4} md={2} display={"flex"}>
              <img src={Icon} alt="" />
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#72767D",
                  marginLeft: "5px",
                }}
              >
                Place
              </span>
            </Grid>
            <Grid xs={2} sm={4} md={2} display={"flex"}>
              <img src={Calendar} alt="" />
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#72767D",
                  marginLeft: "5px",
                }}
              >
                02/22/2023
              </span>
            </Grid>
            <Grid xs={2} sm={4} md={2} display={"flex"}>
              <img src={People} alt="" />
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#72767D",
                  marginLeft: "5px",
                }}
              >
                No limit
              </span>
            </Grid>
            <Grid xs={2} sm={4} md={2} display={"flex"}>
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#72767D",
                  //   marginLeft: "5px",
                }}
              >
                Description of the event.Description of the event. Description
                of the event.
              </span>
            </Grid>
            <Grid
              xs={2}
              sm={4}
              md={2}
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <Grid
                xs={2}
                sm={4}
                md={2}
                style={{
                  backgroundColor: "white",
                  padding: "6px 16px 6px 16px",
                  height:"36px",
                  width:"135.83px",
                  textAlign:"center",
                  borderRadius:"4px"
                }}
              >
                <img src={Delete} alt="" />
                <span>Delete</span>
              </Grid>
              <Grid xs={2} sm={4} md={2}  style={{
                  backgroundColor: "white",
                  padding: "6px 16px 6px 16px",
                  height:"36px",
                  width:"135.83px",
                  textAlign:"center",
                  borderRadius:"4px"
                }}>
                <img src={Block} alt="" />
                <span>Block</span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        style={{
          //   backgroundColor: "red",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "16px",
          fontSize: "18px",
        }}
      >
        <Grid
          style={{
            backgroundColor: "#D4D6D8 ",
            border: "solid 1px gray",
            height: "390px",
            borderRadius: "16px",
          }}
        >
          <Grid
            xs={2}
            sm={4}
            md={2}
            style={{
              // backgroundColor: "#E5EDFF",
              padding: "20px",
              width: "314.33px",

              height: "390px",
            }}
          >
            <span
              style={{
                backgroundColor: "black",
                color: "white",
                width: "63px",
                height: "24px",
                padding: "4px 8px 4px 8px",
                borderRadius: "4px",
              }}
            >
              Public
              <br />
            </span>
            <br />
            <Grid
              style={{
                backgroundColor: "#72767D",
                height: "86px",
                width: "279.67px",
              }}
            ></Grid>
            <br />
            {/* <span style={{ fontWeight:"700"}}>Name of the event            </span> */}
            <Grid
              xs={2}
              sm={4}
              md={2}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span style={{ fontWeight: "700" }}>Name of the event</span>
              <span style={{ fontWeight: "700" }}>$200</span>
            </Grid>
            <Grid xs={2} sm={4} md={2} display={"flex"}>
              <img src={Icon} alt="" />
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#72767D",
                  marginLeft: "5px",
                }}
              >
                Place
              </span>
            </Grid>
            <Grid xs={2} sm={4} md={2} display={"flex"}>
              <img src={Calendar} alt="" />
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#72767D",
                  marginLeft: "5px",
                }}
              >
                02/22/2023
              </span>
            </Grid>
            <Grid xs={2} sm={4} md={2} display={"flex"}>
              <img src={People} alt="" />
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#72767D",
                  marginLeft: "5px",
                }}
              >
                No limit
              </span>
            </Grid>
            <Grid xs={2} sm={4} md={2} display={"flex"}>
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#72767D",
                  //   marginLeft: "5px",
                }}
              >
                Description of the event.Description of the event. Description
                of the event.
              </span>
            </Grid>
            <Grid
              xs={2}
              sm={4}
              md={2}
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <Grid
                xs={2}
                sm={4}
                md={2}
                style={{
                  backgroundColor: "white",
                  padding: "6px 16px 6px 16px",
                  height:"36px",
                  width:"135.83px",
                  textAlign:"center",
                  borderRadius:"4px"
                }}
              >
                <img src={Delete} alt="" />
                <span>Delete</span>
              </Grid>
              <Grid xs={2} sm={4} md={2}  style={{
                  backgroundColor: "white",
                  padding: "6px 16px 6px 16px",
                  height:"36px",
                  width:"135.83px",
                  textAlign:"center",
                  borderRadius:"4px"
                }}>
                <img src={Block} alt="" />
                <span>Block</span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          style={{
            backgroundColor: "#D4D6D8 ",
            border: "solid 1px gray",
            height: "390px",
            borderRadius: "16px",
          }}
        >
          <Grid
            xs={2}
            sm={4}
            md={2}
            style={{
              // backgroundColor: "#E5EDFF",
              padding: "20px",
              width: "314.33px",

              height: "390px",
            }}
          >
            <span
              style={{
                backgroundColor: "black",
                color: "white",
                width: "63px",
                height: "24px",
                padding: "4px 8px 4px 8px",
                borderRadius: "4px",
              }}
            >
              Public
              <br />
            </span>
            <br />
            <Grid
              style={{
                backgroundColor: "#72767D",
                height: "86px",
                width: "279.67px",
              }}
            ></Grid>
            <br />
            {/* <span style={{ fontWeight:"700"}}>Name of the event            </span> */}
            <Grid
              xs={2}
              sm={4}
              md={2}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span style={{ fontWeight: "700" }}>Name of the event</span>
              <span style={{ fontWeight: "700" }}>$200</span>
            </Grid>
            <Grid xs={2} sm={4} md={2} display={"flex"}>
              <img src={Icon} alt="" />
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#72767D",
                  marginLeft: "5px",
                }}
              >
                Place
              </span>
            </Grid>
            <Grid xs={2} sm={4} md={2} display={"flex"}>
              <img src={Calendar} alt="" />
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#72767D",
                  marginLeft: "5px",
                }}
              >
                02/22/2023
              </span>
            </Grid>
            <Grid xs={2} sm={4} md={2} display={"flex"}>
              <img src={People} alt="" />
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#72767D",
                  marginLeft: "5px",
                }}
              >
                No limit
              </span>
            </Grid>
            <Grid xs={2} sm={4} md={2} display={"flex"}>
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#72767D",
                  //   marginLeft: "5px",
                }}
              >
                Description of the event.Description of the event. Description
                of the event.
              </span>
            </Grid>
            <Grid
              xs={2}
              sm={4}
              md={2}
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <Grid
                xs={2}
                sm={4}
                md={2}
                style={{
                  backgroundColor: "white",
                  padding: "6px 16px 6px 16px",
                  height:"36px",
                  width:"135.83px",
                  textAlign:"center",
                  borderRadius:"4px"
                }}
              >
                <img src={Delete} alt="" />
                <span>Delete</span>
              </Grid>
              <Grid xs={2} sm={4} md={2}  style={{
                  backgroundColor: "white",
                  padding: "6px 16px 6px 16px",
                  height:"36px",
                  width:"135.83px",
                  textAlign:"center",
                  borderRadius:"4px"
                }}>
                <img src={Block} alt="" />
                <span>Block</span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          style={{
            backgroundColor: "#D4D6D8 ",
            border: "solid 1px gray",
            height: "390px",
            borderRadius: "16px",
          }}
        >
          <Grid
            xs={2}
            sm={4}
            md={2}
            style={{
              // backgroundColor: "#E5EDFF",
              padding: "20px",
              width: "314.33px",

              height: "390px",
            }}
          >
            <span
              style={{
                backgroundColor: "black",
                color: "white",
                width: "63px",
                height: "24px",
                padding: "4px 8px 4px 8px",
                borderRadius: "4px",
              }}
            >
              Public
              <br />
            </span>
            <br />
            <Grid
              style={{
                backgroundColor: "#72767D",
                height: "86px",
                width: "279.67px",
              }}
            ></Grid>
            <br />
            {/* <span style={{ fontWeight:"700"}}>Name of the event            </span> */}
            <Grid
              xs={2}
              sm={4}
              md={2}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span style={{ fontWeight: "700" }}>Name of the event</span>
              <span style={{ fontWeight: "700" }}>$200</span>
            </Grid>
            <Grid xs={2} sm={4} md={2} display={"flex"}>
              <img src={Icon} alt="" />
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#72767D",
                  marginLeft: "5px",
                }}
              >
                Place
              </span>
            </Grid>
            <Grid xs={2} sm={4} md={2} display={"flex"}>
              <img src={Calendar} alt="" />
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#72767D",
                  marginLeft: "5px",
                }}
              >
                02/22/2023
              </span>
            </Grid>
            <Grid xs={2} sm={4} md={2} display={"flex"}>
              <img src={People} alt="" />
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#72767D",
                  marginLeft: "5px",
                }}
              >
                No limit
              </span>
            </Grid>
            <Grid xs={2} sm={4} md={2} display={"flex"}>
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#72767D",
                  //   marginLeft: "5px",
                }}
              >
                Description of the event.Description of the event. Description
                of the event.
              </span>
            </Grid>
            <Grid
              xs={2}
              sm={4}
              md={2}
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <Grid
                xs={2}
                sm={4}
                md={2}
                style={{
                  backgroundColor: "white",
                  padding: "6px 16px 6px 16px",
                  height:"36px",
                  width:"135.83px",
                  textAlign:"center",
                  borderRadius:"4px"
                }}
              >
                <img src={Delete} alt="" />
                <span>Delete</span>
              </Grid>
              <Grid xs={2} sm={4} md={2}  style={{
                  backgroundColor: "white",
                  padding: "6px 16px 6px 16px",
                  height:"36px",
                  width:"135.83px",
                  textAlign:"center",
                  borderRadius:"4px"
                }}>
                <img src={Block} alt="" />
                <span>Block</span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <div style={{marginLeft:"90%",marginTop:"15px "}}>
       Filter By<DropDown />
      </div> */}
      
    </>
  );
};

export default ModalCards;
