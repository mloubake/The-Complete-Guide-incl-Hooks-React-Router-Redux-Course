import React, { ChangeEvent, FormEvent, useState } from "react";

import Button from "../../UI/Button/Button";
import Form from "../../UI/Form/Form";
import Input from "../../UI/Input/Input";
import Label from "../../UI/Label/Label";

import { FormControl } from "./styles";

interface IProps {
  onAddGoal: (value: string) => void;
}

const CourseInput: React.FC<IProps> = ({ onAddGoal }) => {
  const [enteredValue, setEnteredValue] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  const goalInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    onAddGoal(enteredValue);
  };

  return (
    <Form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <Label text="Course Goal" />
        <Input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </Form>
  );
};

export default CourseInput;
