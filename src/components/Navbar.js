import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: 50,
        }}
      >
        <Tabs
          aria-label="basic tabs example"
          // orientation="vertical"
          sx={{ borderRight: 1, borderColor: "divider" }}
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          centered
        >
          <Tab label="Home" to="/" component={Link} value="1" key="1" />
          <Tab
            label="Create Item"
            to="/createitem"
            component={Link}
            value="2"
            key="2"
          />
          <Tab
            label="View All Items"
            to="/items"
            component={Link}
            value="3"
            key="3"
          />
        </Tabs>
      </Box>
    </Box>
  );
};

export default Navbar;
