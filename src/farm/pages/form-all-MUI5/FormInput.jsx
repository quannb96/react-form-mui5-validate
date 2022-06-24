import React from "react";
import { Box, FormLabel, styled } from "@mui/material";

const MyFormLabel = styled(FormLabel)({
  fontWeight: "bold",
  fontSize: 14,
  color: "#000",
  float: "left",
  width: "30%",
  paddingTop: "5px",
});

function InputsForm(props) {
  return (
    <Box sx={{ display: "flex", width: 400, my: 1 }}>
      <MyFormLabel>{props.label}</MyFormLabel>
      <Box sx={{ display: "flex", width: "69%", flexDirection: "column" }}>
        <input
          type={props.type}
          placeholder={props.placeholder}
          style={{ padding: "5px" }}
        />
      </Box>
    </Box>
  );
}

export default InputsForm;
