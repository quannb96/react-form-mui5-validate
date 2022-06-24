import React from "react";
import { Box, Typography } from "@mui/material";
import FormRadio from "./FormRadio";
import InputsForm from "./FormInput";
import FormButton from "./FormButton";

function MyForm() {
  return (
    <Box>
      <Typography variant="h4" color="#997300">
        MyForm
      </Typography>
      <Box px={20} component="form" noValidate autoComplete="off">
        <InputsForm label="Name" placeholder="Enter your name" />
        <FormRadio />
        <InputsForm label="Name" placeholder="Enter your name" />
        <InputsForm label="Email" placeholder="Enter your email" />
        <InputsForm label="Address" placeholder="Enter your Address" />
        <Box sx={{ display: "flex", width: 400, my: 1 }}>
          <FormButton type="submit" title="Submit" />
          <FormButton title="Cancel" />
        </Box>
      </Box>
    </Box>
  );
}

export default MyForm;
