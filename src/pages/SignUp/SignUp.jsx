import React from "react";
import "./SignUp.css";
import { Navigate } from "react-router-dom";
const SignUp = () => {
  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p style={{ textAlign: "center" }}>
              We are glad that you will be using Project Cloud to manage <br />
              your tasks! We hope that you will get like it.
            </p>
          </div>

          <form>
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="form_input">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                id="country"
                placeholder="Enter Your country "
              />
            </div>
            <div className="form_input">
              <label htmlFor="country">City</label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Enter Your city "
              />
            </div>
            <div className="form_input">
              <label htmlFor="fname">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter Your phone "
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                //   type={!passShow ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="Enter Your password"
                />
                {/* <div className="showpass" onClick={() => setPassShow(!passShow)}>
                            {!passShow ? "Show" : "Hide"}
                        </div> */}
              </div>
            </div>

            <button className="btn">Sign Up</button>
            <p>
              Already have an account? <Navigate to="/login">Log In</Navigate>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
