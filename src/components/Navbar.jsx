import { Pets } from "@mui/icons-material";
import React from "react";
import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Avatar,
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";

const navItems = ["item1", "item2", "item3", "item4", "item5"];

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")({
  backgroundColor: "#fff",
  padding: "0 10px",
  borderRadius: "5px",
  width: "100px",
});
const Icons = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

function Navbar() {
  return (
    <AppBar position="stick" sx={{ cursor: "pointer" }}>
      <StyleToolbar>
        <Typography variant="h6">
          <Pets /> LAMA DEV
        </Typography>

        <List sx={{ display: "flex" }}>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Icons>
          <Search>
            <InputBase placeholder="search..." />
          </Search>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://i.pinimg.com/236x/93/a0/0a/93a00a3684652031a0c398c5d54d3d10.jpg"
          />
        </Icons>
      </StyleToolbar>
    </AppBar>
  );
}

export default Navbar;
