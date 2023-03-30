import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(!changeText);
  };

  return (
    <div>
      <h2>Hello Test World!</h2>
      {!changeText && <Output>It's good to see you!</Output>}
      {changeText && <p>Changed!</p>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
