import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Rightbar from "./Rightbar";
import Navbar from "./Navbar";

function MyApp() {
  return (
    <Container>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Container>
  );
}

export default MyApp;
