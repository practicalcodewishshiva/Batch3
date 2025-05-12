import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "@mui/material/Button";
import "./App.css";
import CustomCard from "./Components/CustomCard/CustomCard";
import Header from "./Components/Header/Header";
import { Grid } from "@mui/material";
import DashBoard from "./Components/DashBoard/DashBoard";
import Delivery from "./Components/Delivery/Delivery";

function App() {
  const name = "Mounika";
  const location = "universe";

  const heroName = "Rajesh";
  const studentName = "Chaitu";
  const userDetails = {
    name: "Mounika",
    heroName: "Rajesh",
    studentName: "Chaitu",
  };
  return (
    <>
      <Header userDetails={userDetails} />
      
      <DashBoard heroName={heroName} />
    
    </>
  );
}

export default App;

// psudeo  code

// Blinkit app lo product display cheyali

// left side Bread

// Milks             Here needs to dispaly milk products

// Food             Food

// Eggs           Eggs data

// Flakes        FLAKES Data Dispaly?

// 99.9% Bootstrap use cheyam

// 100% React js Librarys

// MUI LIBRARY

// ANT DESIGN

// coluns wisr turn into row wise layout

// 2 ways

// grid layout

// row col 4 col 4 col 4

// flex layout


// useContext 1%  login application ne useranme
// Redux