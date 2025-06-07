import { useState } from "react";
import CustomTabs from "../CustomTabs/CustomTabs";
import Footer from "../Footer/Footer";

function DashBoard({ heroName, data }) {
  const [location, setLocation] = useState("hello this is dahaboard");
  console.log("heroName", heroName);
  console.log("data", data);
  const userName = "Tejasri";
  return (
    <>
      <CustomTabs userName={userName} location={location} heroName={heroName} />
    </>
  );
}

export default DashBoard;
