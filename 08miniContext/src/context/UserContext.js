//pure javascript. that's y we're not using .jsx
import React from "react";  

const UserContext=React.createContext()

export default UserContext
//UserContext gives us provider.
//After wrapping with UserContext it becomes provider which means we get access to Global variable which is UserContext 

//two ways to make a provider
//1st----Make a jsx file where we use these UserContext and provider and wrap using these