import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../components/global";

const SignUp = () => {
  const [inpval, setInpval] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    city: "",
    img: "",
  });
  console.log(inpval);

  const setVal = (e) => {
    //console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API}/auth/register`, inpval);
      console.log(res);
      if (res && res.status === 200) {
        navigate("/login");
      } else {
        console.log("error in Signup");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <p style={{ textAlign: "center" }}>
              Welcome to{" "}
              <span style={{ color: "yellow", fontSize: "2rem" }}>BOOKIT!</span>
            </p>
          </div>

          <form className="formbox">
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter Your Name"
                onChange={setVal}
                value={inpval.username}
              />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Address"
                onChange={setVal}
                value={inpval.email}
              />
            </div>
            <div className="form_input">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                id="country"
                placeholder="Enter Your country "
                onChange={setVal}
                value={inpval.country}
              />
            </div>
            <div className="form_input">
              <label htmlFor="country">City</label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Enter Your city "
                onChange={setVal}
                value={inpval.city}
              />
            </div>
            <div className="form_input">
              <label htmlFor="fname">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter Your phone "
                onChange={setVal}
                value={inpval.phone}
              />
            </div>
            <div className="form_input">
              <label htmlFor="fname">ImageUrl</label>
              <input
                type="text"
                name="img"
                id="img"
                placeholder="Enter ImageUrl "
                onChange={setVal}
                value={inpval.img}
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>

              <input
                //   type={!passShow ? "password" : "text"}
                name="password"
                id="password"
                placeholder="Enter Your password"
                onChange={setVal}
                inpval={inpval.password}
              />
              {/* <div className="showpass" onClick={() => setPassShow(!passShow)}>
                            {!passShow ? "Show" : "Hide"}
                        </div> */}
            </div>

            <button className="btn" onClick={handleSubmit}>
              Sign Up
            </button>
            <div className="logindiv">
           
              <p>Already have an account?</p>
              <button className="loginbtn" onClick={()=>navigate('/login')}>Login</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
