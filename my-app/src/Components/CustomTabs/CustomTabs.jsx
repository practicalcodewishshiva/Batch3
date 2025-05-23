import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Milk from "../Milk/Milk";
import Bread from "../Bread/Bread";
import Eggs from "../Eggs/Eggs";
import Footer from "../Footer/Footer";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function CustomTabs({ userName,location, heroName }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <h1>{location}</h1>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: 224,
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider", minWidth: "100px", minHeight:"100vh" }}
        >
          <Tab label="Milk" {...a11yProps(0)} />
          <Tab label="Bread" {...a11yProps(1)} />
          <Tab label="Eggs" {...a11yProps(2)} />
          <Tab label="Flakes" {...a11yProps(3)} />
          <Tab label="Granola" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0}>
        <Milk/> 
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Bread/>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <Eggs/>
        </TabPanel>
        <TabPanel value={value} index={3}>
           <Footer/>
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </Box>
      
    </>
  );
}
