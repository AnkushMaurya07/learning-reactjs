import New from "./new"

function App() {
  //How to inject variable
  const username="Chai aur code"

  return (
    <>
       <New/>
       <h1>Chai aur react {username}</h1>
    </>
   //Cannot add any actionable code here.
   //Can only add components which will be wrappped and can return only one element

  )
}

export default App
