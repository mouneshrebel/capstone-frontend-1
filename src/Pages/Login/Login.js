import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "../../firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };
  
  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {})
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://img.freepik.com/free-vector/dairy-farm-text-label_1308-89775.jpg?size=626&ext=jpg&uid=R101342376&ga=GA1.1.1061175198.1706787495&semt=ais"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login__signInButton" onClick={login}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to  ARKM Dairy  farm manager of Use & Sale. Please
          see our Privacy Noticy, our Cookies Notice and our Internet-Based Ads
          Notice.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your ARKM Dairy Farm Account
        </button>
      </div>
    </div>
  );
};

export default Login;
