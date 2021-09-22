import React from "react";
import { Link } from "@mui/material";
import "../component/style.css";

const Sign = () => {
  const btnFunc = () => {
    console.log("this button work ");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-10">
            Don't have an account?<Link>Sign Up</Link>
            <br />
            <br />
            <br />
            <br />
            <p style={{ fontSize: "50px" }}>
              Sign in to <b>Nsestb</b>
            </p>
            <form>
              <label style={{ color: "gray", fontWeight: "bold" }}>
                ENTER YOUR USERNAME
              </label>
              <input
                style={{ width: "80%", height: "50px" }}
                type="text"
                placeholder="e.g. ashumaurya"
              />
              <label style={{ color: "gray", fontWeight: "bold" }}>
                ENTER YOUR PASSWORD
              </label>
              <input
                style={{ width: "80%", height: "50px" }}
                type="password"
                placeholder="enter your password"
              />
              <br />
              <br />
              <br />
              <br />
              <br />
              <span>Forget Password</span>
              <button
                type="button"
                className="btn btn-primary "
                onClick={btnFunc}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sign;
