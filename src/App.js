import "./App.css";
import { Link } from "@mui/material";

function App() {
  return (
    <>
      <h3 className="text-center">Welcome</h3>
      <button type="button" className="btn btn-primary" variant="primary">
        Login
      </button>
      <div className="container">
        <div className="row">
          <div className="col-sm-10">
            Don't have an account?<Link>Sign Up</Link>
            <p style={{ fontSize: "50px" }}>
              Sign in to <b>Nsestb</b>
            </p>
            <b>ENTER YOUR USERNAME</b> <br />
            <input
              style={{ width: "50%", height: "50px" }}
              type="text"
              placeholder="e.g. ashumaurya"
            />
            <br />
            <b>ENTER YOUR PASSWORD</b>
            <br />
            <input
              style={{ width: "50%", height: "50px" }}
              type="password"
              placeholder="enter your password"
            />
            <p>lorem epsum sdfgds dsgsdg rety ersty ewrwert asrsafsd bg</p>
          </div>
          {/* <div className="col-lg-5">
            <h2>colunm2</h2>
            <p>lorem epsum sdfgds dsgsdg rety ersty ewrwert asrsafsd bg</p>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
