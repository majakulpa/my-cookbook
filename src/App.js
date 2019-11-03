import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import MyRecipes from "./components/MyRecipes/MyRecipes";
//import Login from "./components/Login/Login";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Navbar />
        <div className="Container">
          {/* <MyRecipes /> */}
          {/* <Main></Main> */}
          {/* <Login /> */}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
