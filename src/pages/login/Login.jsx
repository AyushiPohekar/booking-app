import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../components/global";
import { AuthContext } from "../../Context/AuthContext";

import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  

  const {user,loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`${API}/auth/login`, credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
     
    } catch (err) {
       dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
   
    }
  };
  console.log(user)


  return (
    <div className="login">
      <div className="form_heading">
            <p style={{ textAlign: "center" }}>
              Welcome to{" "}
              <span style={{ color: "yellow", fontSize: "2rem" }}>BOOKIT!</span>
            </p>
          </div>
      <div className="formbox">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="btn">
          Login
        </button>
        {error && <span>{error.message}</span>}
        <div className="logindiv">
        <p>Are you new?</p>
       <button onClick={()=>navigate('/signup')} className="loginbtn">SignUp</button>
       </div>
      </div>
    </div>
  );
};

export default Login;