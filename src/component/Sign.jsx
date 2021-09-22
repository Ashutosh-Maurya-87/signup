import React, { useState } from "react";
import { Link } from "@mui/material";
import "../component/style.css";
import banner from "./imeges/login-bannerimg.png";

const Sign = () => {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState(" ");
  const btnFunc = () => {
    alert("data are save");
    console.log("this button work ");
    setUserName(" ");
    setUserPass(" ");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit function call");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-10">
            Don't have an account?<Link>Sign Up</Link>
            <p className="sign-text">
              Sign in to <b>Nsestb</b>
            </p>
            <form onSubmit={onSubmit}>
              <label style={{ color: "gray", fontWeight: "bold" }}>
                ENTER YOUR USERNAME
              </label>
              <input
                style={{ width: "100%", height: "50px" }}
                type="text"
                placeholder="e.g. ashumaurya"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <label
                style={{ color: "gray", fontWeight: "bold", marginTop: "5%" }}
              >
                ENTER YOUR PASSWORD
              </label>
              <input
                style={{ width: "100%", height: "50px" }}
                type="password"
                value={userPass}
                onChange={(e) => {
                  setUserPass(e.target.value);
                }}
                placeholder="enter your password"
              />
              <input type="checkbox" />
              <label>keep me logged in next time</label>
              <br />

              <p className="text">Forget Password?</p>
              <button
                type="submit"
                className="btn btn-primary "
                onClick={btnFunc}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="col-sm-4 text-right">
        <img src={banner} alt="" />
      </div>
    </>
  );
};
export default Sign;
