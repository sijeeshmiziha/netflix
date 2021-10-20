import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {
  actions,
  comedy,
  horror,
  originals,
  romance,
} from "./constants/urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title="Netflix Originals" api={originals} />
      <RowPost title="Action Movies" isSmall={true} api={actions} />
      <RowPost title="Romantic Movies" isSmall={true} api={romance} />
      <RowPost title="Comedy Movies" isSmall={true} api={comedy} />
      <RowPost title="Horror Movies" isSmall={true} api={horror} />
    </div>
  );
}

export default App;
