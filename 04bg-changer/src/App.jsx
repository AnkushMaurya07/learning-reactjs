/* eslint-disable no-unused-vars */
import { useState } from "react";

function App() {
  const [color, setColor] = useState("green");
  const [top, setTop] = useState("orangered");

  return (
    <>
      <div
        className="flex justify-center py-16  text-black space-x-3"
        style={{ backgroundColor: top }}
      >
        <button
          onClick={() => setTop("red")}
          className="outline-none px-4 rounded-full text-white small"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => setTop("green")}
          className="outline-none px-4 rounded-full text-white small"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
        <button
          onClick={() => setTop("blue")}
          className="outline-none px-4 rounded-full text-white small"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
          onClick={() => setTop("black")}
          className="outline-none px-4 rounded-full text-white small"
          style={{ backgroundColor: "black" }}
        >
          Black
        </button>
        <button
          onClick={() => setTop("gray")}
          className="outline-none px-4 rounded-full text-white small"
          style={{ backgroundColor: "gray" }}
        >
          Gray
        </button>{" "}
        <button
          onClick={() => setTop("violet")}
          className="outline-none px-4 rounded-full text-white small"
          style={{ backgroundColor: "violet" }}
        >
          Violet
        </button>{" "}
        <button
          onClick={() => setTop("purple")}
          className="outline-none px-4 rounded-full text-white small"
          style={{ backgroundColor: "purple" }}
        >
          Purple
        </button>
        <button
          onClick={() => setTop("Limegreen")}
          className="outline-none px-4 rounded-full text-white small"
          style={{ backgroundColor: "Limegreen" }}
        >
          Limegreen
        </button>
      </div>
      <div
        className="h-50 w-full flex justify-center bg-white"
        style={{ backgroundColor: "" }}
      >
        <img
          className="w-56 h-40 flex justify-center"
          
          src="https://cdn.pixabay.com/photo/2023/05/13/16/31/ashok-chakra-7990878_1280.png"
          alt="Bike image was here"
        />
      </div>
      <div
        className="w-screen h-screen duration-200 "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justofy-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 rounded-full text-white small"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 rounded-full text-white small"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 rounded-full text-white small"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 rounded-full text-white small"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => setColor("gray")}
              className="outline-none px-4 rounded-full text-white small"
              style={{ backgroundColor: "gray" }}
            >
              Gray
            </button>{" "}
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 rounded-full text-white small"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>{" "}
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 rounded-full text-white small"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
            <button
              onClick={() => setColor("Limegreen")}
              className="outline-none px-4 rounded-full text-white small"
              style={{ backgroundColor: "Limegreen" }}
            >
              Limegreen
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
