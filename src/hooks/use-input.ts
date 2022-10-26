import { useReducer } from "react";

const ACTION_TYPE_NAME = {
  INPUT: "INPUT",
  BLUR: "BLUR",
  RESET: "RESET",
};

const initialInputState = {
  value: "",
  isTouched: false,
};

interface IState {
  value: string;
  isTouched: boolean;
}

interface IAction {
  type: "INPUT" | "BLUR" | "RESET";
  value: string;
}

const inputStateReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case ACTION_TYPE_NAME.INPUT:
      console.log("input");

      return { value: action.value, isTouched: state.isTouched };

    case ACTION_TYPE_NAME.BLUR:
      return { isTouched: true, value: state.value };

    case ACTION_TYPE_NAME.RESET:
      return { isTouched: false, value: "" };

    default:
      return initialInputState;
  }
};

const useInput = (validateValue: any) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event: any) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
