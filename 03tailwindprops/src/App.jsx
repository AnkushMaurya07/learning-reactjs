import "./App.css";
import Cards from "./components/Cards";
function App() {

  // let myObj = {
  //   username: "Ankush",
  //   age: "23",
  // };
  // let newArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400 text-black padding-4 rounded-xl mb-4 ml-10">
        Tailwind Test
      </h1>
      <Cards username="Ankush" btnText="click me" />
      <Cards username="Maurya" btnText="Don't Click here"/>
    </>
  );
}

export default App;
