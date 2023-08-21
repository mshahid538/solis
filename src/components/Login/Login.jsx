import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/joy";
import Bridge from "../../images/Bridge.jpg";
import Logogroup from "../../images/Logogroup.svg";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/dashboard");
  };
  
  
  return (
    <>
      <Grid xs={2} sm={4} md={4} >
        <Grid
          xs={2}
          sm={4}
          md={4}
          mt={13}
          ml={20}
          style={{
            // backgroundColor: "gray",
            //   textAlign: "center",
            //   marginTop: "13%",
            //   marginLeft:"13%",
            height: "602px",
            width: "80%",
            display: "flex",
          }}
        >
          <Grid className="login_form_background"
            xs={2}
            sm={4}
            md={4}
            style={{ width: "40%", backgroundColor: "black" }}
          >
            <Grid ml={18} xs={2} sm={4} md={4} style={{ display: "flex" }}>
              <Grid xs={2} sm={4} md={4} mt={5}>
                <img className="solis_text"
                  style={{ width: "23px", height: "30px" }}
                  src={Logogroup}
                  alt="Logo"
                />
              </Grid>
              <Grid xs={2} sm={4} md={4} mt={4} ml={1}>
                <span className="solis_text"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "40px",
                  }}
                >
                  Solis
                </span>
              </Grid>
            </Grid>
            <Grid
              xs={2}
              sm={4}
              md={4}
                // ml={3}
              //   mt={20}
              style={{
                backgroundColor: "#2A2C2F",
                height: "350px",
                width: "306px",
                marginLeft: "70px",
                borderRadius:"13px"
              }}
            >
              <Grid xs={2} sm={4} md={4} mt={5} pt={4} ml={2.5}>
                <span
                  style={{
                    fontWeight: "500",
                    fontSize: "18px",
                    color: "white",
                    // paddingTop: "6px",
                  }}
                >
                  Login
                </span>
              </Grid>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid xs={2} sm={4} md={4} mt={3} ml={2.5}>
                  <span style={{ color: "white" }}>Email Address</span> <br />
                  <input
                    style={{
                      width: "240px",
                      height: "20px",
                      padding: "8px 10px 8px 10px",
                      border: "2px solid #40484F",
                      backgroundColor: "#40484F",
                      color:"white",
                      borderRadius: "4px",
                      marginTop: "8px",
                      outline:"none",
                    }}
                    type="email"
                    name="email"
                    autocomplete="off"
                    placeholder="example@gmail.com"
                    required
                    {...register("email")}
                  />
                </Grid>
                <Grid xs={2} sm={4} md={4} ml={2.5} mt={3}>
                  <span style={{ color: "white" }}>Password</span> <br />
                  <input
                    style={{
                      width: "240px",
                      height: "20px",
                      padding: "8px 10px 8px 10px",
                      border: "2px solid #40484F",
                      backgroundColor: "#40484F",
                      color:"white",
                      borderRadius: "4px",
                      marginTop: "8px",
                      outline:"none"
                    }}
                    type="password"
                    name="password"
                    autoComplete="on"
                    placeholder="password atleast 8 characters"
                    required
                    {...register("password")}
                  />
                </Grid>
                <Grid xs={2} sm={4} md={4} ml={2.5} mt={3}>
                  <button
                    style={{
                      width: "260px",
                      height: "40px",
                      padding: "8px 10px 8px 10px",
                      border: "2px solid #40484F",
                      backgroundColor: "#B0CAFF",
                      borderRadius: "20px",
                      marginTop: "8px",
                    }}
                    type="submit"
                  >
                    Login
                  </button>
                </Grid>
              </form>
            </Grid>
          </Grid>
          <Grid className="bridge_img"
            xs={2}
            sm={4}
            md={4}
            style={{ width: "60%", backgroundColor: "black" }}
          >
            <img 
              style={{ width: "100%", height: "602px" }}
              src={Bridge}
              alt="Bridge"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
