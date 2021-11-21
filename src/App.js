import React from "react";
import './App.css';
import Header from "./Header";
import Converter from "./Converter";
import {Route, Routes} from "react-router-dom";
import CurrentExchangeRates from "./CurrentExchangeRates";

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route exact path={"/"} element={<Converter />}/>
          <Route exact path={"/current"} element={<CurrentExchangeRates />}/>
        </Routes>
    </div>
  );
}

export default App;
