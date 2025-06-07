import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Grid } from "@mui/material";
import axios from "axios";
import "../../Components/CustomCard/CustomCard.css";

import CustomTabs from "../CustomTabs/CustomTabs";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function CustomCard({ milkProducts }) {
  const [expanded, setExpanded] = React.useState(false);

  // state  useState()   track and update

  const [productListData, updateProductListData] = useState([]);
  // const productListData = []

  // noram js

  //   const productListData = []

  //   funtion updateProductListData(){
  // productListData.filter((ele)=>{
  //     return ele.name = ="sdfsdfsdffs"
  //   })
  //   }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const productList = [
    {
      productName: "Amul Taaza Homogenised Toned Milk",
      price: 71,
    },
    {
      productName: "Mother Dairy Promilk",
      price: 65,
    },
    {
      productName: "Amul A2 Gir Cow Fresh Milk ",
      price: 600,
    },
    {
      productName: "Yakult Probiotic Drink",
      price: 900,
    },
    {
      productName: "Yakult  Drink",
      price: 100,
    },
    {
      productName: "Yakult Probiotic Drink",
      price: 150,
    },
  ];

  // new Promse((resolve, reject) => {
  //   if (dataSuccess) {
  //     resolve("hey enjoy succefull data fetched");
  //   } else {
  //     reject("dta not fetched ");
  //   }
  // });

  async function getProductList() {
    const gowthamProductAPIurl = await axios.get(
      "https://fakestoreapi.com/products"
    );
    console.log(gowthamProductAPIurl.data, "gowthamProductAPIurl");
    updateProductListData(gowthamProductAPIurl.data); // store response data
    console.log("after api call productListData", productListData);
  }

  console.log("before api call productListData", productListData);
  // chicken biriyani 30 mins
  // 1 min chicekn roast
  // 30 sec water

  // js

  // state track cheyal count cheyali ilanti situaltion state
  // useState()
  return (
    <>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {productListData.length > 0 &&
          productListData.map((copyOfproductListData) => {
            return (
              <div className="blinkit-card">
                <img
                  src="https://picsum.photos/100/200"
                  className="blinkit-image"
                  alt="pic"
                />
                <p className="custom-price">500 ml</p>
                <div className="blinkit-product-name">
                  {copyOfproductListData.title}
                </div>
                <div className="blinkit-card-descption">
                  <p className="blinkit-price">{productList.price}</p>
                  <button className="add-blinkit" onClick={getProductList}>
                    ADD
                  </button>
                  <button className="add-blinkit">Delete</button>
                </div>
              </div>
            );
          })}
        <button className="add-blinkit" onClick={getProductList}>
          ADD
        </button>
      </div>
    </>
  );
}

// relational

// ||   shiva or rashmika   true

// &&     vijay && rashmika   true

// ?    okavela vijay true : false

// empty array []

// const productList = [inside any data then only you can pass othwise always false];

// if incase there is  no data immdiea error
// before code eexcute
// productList.length > 0 && productList.name

// && true  true    true

// || true or false  true

// ? true or false

// display:grid;
// grid-template-columns : repeat(4, 1fr)

// js synchrouns based language

// GlobalPhase

// Memory creat

// const name = "gowtham";
// console.log(name)

// const location  = "bagnalore"
// console.log(location)

// declaration
// re -initilisation
