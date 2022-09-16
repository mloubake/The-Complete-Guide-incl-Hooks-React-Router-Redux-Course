import React, {
  ChangeEvent,
  EventHandler,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";

import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";

import classes from "./styles.module.css";

interface IProps {
  onLogon: (email: string, password: string) => void;
}

interface IError {
  error: boolean;
  message: string;
}

const Login: React.FC<IProps> = ({ onLogon }) => {
  let [email, setEmail] = useState<string>("");
  let [password, setPassword] = useState<string>("");

  let [isEmailValid, setIsEmailValid] = useState<boolean>("empty");
  let [isPasswordValid, setIsPasswordValid] = useState<boolean>("empty");

  let [isFormValid, setIsFormValid] = useState<boolean>(false);

  let emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    if (email.includes("@")) {
      setIsEmailValid(true);

      return;
    }

    setIsEmailValid(false);
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    if (password.trim().length >= 6) {
      setIsPasswordValid(true);

      return;
    }

    setIsPasswordValid(false);
  };

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();

    onLogon(email, password);

    return;
  };

  useEffect(() => {
    setIsFormValid(isEmailValid === true && isPasswordValid === true);
  }, [isEmailValid, isPasswordValid]);

  return (
    <div className={classes.main}>
      <Container className={classes.container}>
        <form id="login-form" onSubmit={submitHandler}>
          <div className={classes.control} id="username">
            <label>E-mail</label>
            <input
              className={`${isEmailValid ? "" : classes.error}`}
              type="text"
              value={email}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                emailChangeHandler(event);
              }}
            />
          </div>
          <div className={classes.control}>
            <label>Password</label>
            <input
              className={`${isPasswordValid ? "" : classes.error}`}
              type={"password"}
              value={password}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                passwordChangeHandler(event);
              }}
            />
          </div>
        </form>
        <Button
          form="login-form"
          button_class={"primary"}
          text={"Login"}
          type={"submit"}
          disabled={!isFormValid}
        />
      </Container>
    </div>
  );
};

export default Login;
