import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./pages/Home";
import { About, Blog, Subdivisions } from "./pages/PageData";
// import Register from "./pages/register-MUI5/Register";
import MyForm from "./pages/form-all-MUI5/Register";

function MyApp() {
  return (
    <Box bgcolor="#ccc" sx={{ width: "70%", margin: "0 auto" }}>
      <BrowserRouter>
        <Header />
        <Box bgcolor="#fff" p={5} height={550}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subdivisions" element={<Subdivisions />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path="/register" element={<MyForm />} />
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </Box>
  );
}

export default MyApp;
