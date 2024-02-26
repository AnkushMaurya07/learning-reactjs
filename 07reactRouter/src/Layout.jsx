//Can give name route.jsx also
//We can also do this inside App.jsx

import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

//we want to pass things dynamically---> we'll use Outlet
//Outlet will use Layout as a base
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
  //there's a syntax for using the layout also. 
  //Inside index we have to specify we're using LAyout and inside it we're giving components
   
}

export default Layout;
