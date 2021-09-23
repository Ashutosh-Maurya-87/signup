import React, { useState } from "react";
import { Link } from "@mui/material";
import "../component/style.css";
import banner from "./imeges/login-bannerimg.png";

const Sign = () => {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const [errorUser, setErrorUser] = useState(false);
  const [errorPass, setErrorPass] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userName, userPass);
    if (!userName) setErrorUser(true);
    if (!userPass) setErrorPass(true);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-7" id="first-column">
            <div className="main-form">
              Don't have an account?
              <Link>Sign Up first</Link>
              <p className="sign-text">
                Sign in to <b>Nsestb</b>
              </p>
              <form onSubmit={onSubmit}>
                <div className="user-block">
                  <label style={{ fontWeight: "bold" }}>
                    ENTER YOUR USERNAME
                  </label>
                  <input
                    style={{
                      width: "100%",
                      height: "50px",
                      borderColor: errorUser ? "red" : "#B8BECD",
                    }}
                    type="text"
                    placeholder="e.g. ashumaurya"
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                  {errorUser && (
                    <p style={{ color: "red" }}>Enter a valid User Name</p>
                  )}
                </div>
                <div className="password-block">
                  <label style={{ fontWeight: "bold", marginTop: "5%" }}>
                    ENTER YOUR PASSWORD
                  </label>

                  <input
                    style={{
                      width: "100%",
                      height: "50px",
                      borderColor: errorPass ? "red" : "#B8BECD",
                    }}
                    type="password"
                    value={userPass}
                    onChange={(e) => {
                      setUserPass(e.target.value);
                    }}
                    placeholder="enter your password"
                  />
                  {errorPass && (
                    <p style={{ color: "red" }}>Enter a valid Password</p>
                  )}
                </div>
                <input type="checkbox" />
                <label>keep me logged in next time</label>
                <br />
                <button
                  type="submit"
                  className="btn btn-primary "
                  // onClick={btnFunc}
                >
                  Login
                </button>
                <div id="first">
                  <p className="text">Forget Password?</p>
                  <p className="text">
                    Already have an account?<Link>Login here</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="col-sm-5">
            <img className="right-image" src={banner} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Sign;
