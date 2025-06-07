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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Women from "./Components/Women/Women";
import LoginPage from "./Components/LoginPage/LoginPage";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  console.log("location", location);
  //path / /crud /home
  const name = "Mounika";

  const heroName = "Rajesh";
  const studentName = "Chaitu";
  const userDetails = {
    name: "Mounika",
    heroName: "Rajesh",
    studentName: "Chaitu",
  };

  const data = "hello this is dashbard data";


  
  return (
    <>
      {location.pathname !== "/" ? <Header userDetails={userDetails} /> : null}
      {/* true ? true : false */}
      {/* ?
      if else */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          exact
          element={<DashBoard heroName={heroName} data={data} />}
        />
        <Route path="/women" element={<Women />} />
      </Routes>
    </>
  );
}

export default App;
