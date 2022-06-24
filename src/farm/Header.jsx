import { Box, Tab } from "@mui/material";
import React from "react";
import { PageData } from "./pages/PageData";
import { Link, NavLink } from "react-router-dom";

let activeStyle = {
  textDecoration: "none",
  backgroundColor: "#8effe3",
};
let noActiveStyle = {
  textDecoration: "none",
};

function Header() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box m={2} ml={5}>
        <img width="100px" src={require("./img/logo.png")} alt="Logo" />
      </Box>

      <Box sx={{ display: "flex" }}>
        {PageData.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
          >
            <Tab
              sx={{ p: 5, textTransform: "none", fontSize: 16 }}
              label={item.title}
            ></Tab>
          </NavLink>
        ))}
      </Box>
    </Box>
  );
}

export default Header;
