import CustomCard from "../CustomCard/CustomCard";

function Eggs() {
  const milkProducts = [
    {
      productName: "Egg1",
      ml: "500ml",
      Price: 35,
    },
    {
      productName: "Egg2",
      ml: "500ml",
      Price: 55,
    },
    {
      productName: "Egg3",
      ml: "500ml",
      Price: 75,
    },
  ];
  return (
    <CustomCard  milkProducts={milkProducts}/>
  )
}

export default Eggs;
