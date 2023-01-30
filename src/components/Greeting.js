import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  const handleChangedText = () => {
    setChangedText(true);
  }
  return (
    <div>
      <h2>Hey You!</h2>
      {/* { !changedText && <p>It's great to see you!</p> } */}
      { !changedText && <Output>It's great to see you!</Output> }
      { changedText && <Output>Changed!</Output>}
      <button onClick={handleChangedText}>Changed Text!</button>
    </div>
  );
};
export default Greeting;
