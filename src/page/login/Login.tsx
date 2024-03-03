import React, { useContext, useState } from "react";
import classes from "./Login.module.css";
import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/ApiCalls";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {state: loginState, dispatch} = useContext(AuthContext);

  const handleLogin = (e : any) => {
    e.preventDefault();
    login({email, password}, dispatch)
  };

  return (
    <div className={classes.login}>
      <form className={classes.loginForm}>
        <input
          type="text"
          placeholder="email"
          className={classes.loginInput}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className={classes.loginInput}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={classes.loginButton} onClick={handleLogin} disabled={loginState.isFetching}>Login</button>
      </form>
    </div>
  );
};
