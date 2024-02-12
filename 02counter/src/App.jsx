import { useState } from "react";

import "./App.css";

async function App() {
  // let counter = 5;
  //Can give any default values '',{},0,etc.
  //counter is a variable and setCounter is a function which is used to change the values after an action has been made.

  let [counter, setCounter] = useState(5);

  const addValue = () => {
    console.log("Clicked", Math.random());
    // counter = counter + 1;

    
    if (counter < 20) {
      setCounter(counter + 1);
      // console.log(counter);

      setCounter((counter) => counter + 1);

      console.log(counter);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log(counter);
    }
  };
  return (
    <>
      <h1>React Basics</h1>
      <h2>
        {counter} Value: {counter}
      </h2>
      <button onClick={addValue}>Add value {counter}</button>
      <button onClick={removeValue}>Subtract value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );

  
}
export default App;
