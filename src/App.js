import React from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./index.css"

function App(props) {
  return (
    <div>
      <Navbar/>
      <Main />
      <Footer/>
    </div>
  );
};

export default App;