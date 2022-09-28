import React, {
  ChangeEvent,
  SyntheticEvent,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";

import classes from "./styles.module.css";
import AuthenticateContext from "../../store/authenticate-context";

const emailReducer = (state: State, action: Action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.includes("@") };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }

  return { value: "", isValid: false };
};

const passwordReducer = (state: State, action: Action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.trim().length > 6 };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }

  return { value: "", isValid: false };
};

type State = {
  value: string;
  isValid: boolean;
};

type Action = { type: string; value?: string };

const Login: React.FC = () => {
  let [isFormValid, setIsFormValid] = useState<boolean>(false);

  let [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  let [passwordState, dispathPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const authenticateContext = useContext(AuthenticateContext);

  useEffect(() => {
    console.log("EFFECT RUNNING");

    return () => {
      console.log("EFFECT CLEANUP");
    };
  }, []);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");

      setIsFormValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEANUP");

      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  let emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchEmail({ type: "USER_INPUT", value: event.target.value });
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispathPassword({ type: "USER_INPUT", value: event.target.value });
  };

  const validadeEmail = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePassword = () => {
    dispathPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();

    authenticateContext.onLogin(emailState.value, passwordState.value);
  };

  return (
    <div className={classes.main}>
      <Container className={classes.container}>
        <form id="login-form" onSubmit={submitHandler}>
          <div className={classes.control} id="username">
            <label>E-mail</label>
            <input
              className={`${emailState.isValid === false ? classes.error : ""}`}
              type="text"
              value={emailState.value}
              onChange={emailChangeHandler}
              onBlur={validadeEmail}
            />
          </div>
          <div className={classes.control}>
            <label>Password</label>
            <input
              className={`${
                passwordState.isValid === false ? classes.error : ""
              }`}
              type={"password"}
              value={passwordState.value}
              onChange={passwordChangeHandler}
              onBlur={validatePassword}
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
