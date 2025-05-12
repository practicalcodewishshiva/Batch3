import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomCard from "../CustomCard/CustomCard";

function Milk() {
  const milkProducts = [
    {
      productName: "Heritage Daily",
      ml: "500ml",
      Price: 35,
    },
    {
      productName: "Gold Full Cream",
      ml: "500ml",
      Price: 55,
    },
    {
      productName: "Amul  Full Creasm",
      ml: "500ml",
      Price: 75,
    },
  ];
  return (
    <>
      {/* {milkProducts.map((copyOfMilkProducts) => { */}
      {/* console.log("copyOfMilkProducts", copyOfMilkProducts) */}
      {/* return ( */}
      <>
        <CustomCard milkProducts={milkProducts} />
      </>
      {/* ); */}
      {/* // })} */}
    </>
  );
}

export default Milk;

// function normalFunc(){
//     return (
//         <>
//         Normal Fn

//         </>
//     )
// }

// // es6

// const arrowFun = () =>{
//     return
// }
