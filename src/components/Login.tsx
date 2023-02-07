import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";
import { getEmail, getPassword } from "../store/loginSlice";
import { setAuthentication } from "../store/authenticateSlice";

import classes from "./Login.module.css";

const Login = () => {
  const [isEmailValid, setIsEmailValid] = useState<boolean | string>("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const dispatch = useDispatch();

  const email = useSelector((state: RootState) => state.login.email);
  const password = useSelector((state: RootState) => state.login.password);

  const getEmailHandler = (event: FormEvent<HTMLInputElement>) => {
    dispatch(getEmail(event.currentTarget.value));
  };

  const getPasswordHandler = (event: FormEvent<HTMLInputElement>) => {
    dispatch(getPassword(event.currentTarget.value));
  };

  const authLoginHandler = (event: FormEvent) => {
    event.preventDefault();

    setIsEmailValid(true);
    setIsPasswordValid(true);

    console.log({ email, password });

    if (email.trim().length < 0) {
      setIsEmailValid(false);

      return;
    }

    if (password.trim().length < 6) {
      setIsPasswordValid(false);

      return;
    }

    setIsEmailValid(true);
    setIsPasswordValid(true);
    dispatch(setAuthentication(true));
  };

  return (
    <div className={classes.login}>
      <form id="form" onSubmit={authLoginHandler}>
        <div className="">
          <h3>Email</h3>
          <input
            type="text"
            value={email}
            onChange={(event) => {
              getEmailHandler(event);
            }}
          />
        </div>
        <div>
          <h3>Password</h3>
          <input
            type="text"
            value={password}
            onChange={(event) => {
              getPasswordHandler(event);
            }}
          />
        </div>
        <button type="submit"> Login</button>
      </form>
      {isEmailValid === false ? <p>E-mail must not be empty!</p> : ""}
      {!isPasswordValid === false ? (
        <p>Password must have 6 characteres or more</p>
      ) : (
        ""
      )}
      {!isEmailValid === false && !isPasswordValid ? (
        <p>Please, type a valid E-mail and Password</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Login;
