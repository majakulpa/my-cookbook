import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Main></Main>
      <Footer />
    </div>
  );
}

export default App;
