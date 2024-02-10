import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  );
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }
//This is customreact. We need to write custommethod.

const anotherElement = (
  <a href="http://google.com" target="_blank">
    Visit Google
  </a>
);

const anotherElement2 = "Link for google";



//Proper way
const ReactElement = React.createElement(
  "a", //Tag
  { href: "http://google.com", target: "_blank" },
  "Click me to visit google", //setAttribute
  anotherElement2


  //Evaluated expression so that we cannot write these if,else statement


);

ReactDOM.createRoot(document.getElementById("root")).render(
  // {/* <App /> */}
  //Expects A function

  //   anotherElement
  ReactElement
);
//Every react uses a bundler.
// MyApp()
