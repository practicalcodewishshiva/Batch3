import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Header /> */}
      <Sidebar/>
    </>
  );
}

export default App;

// Header(Navbar)

// Sidebar

// Dashbaord

// ChartsSection

// RecentTransactions

// TablesWithLatestData

// MainContent

// SummaryCards
