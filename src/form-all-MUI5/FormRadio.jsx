import {
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  styled,
} from "@mui/material";
import React from "react";

const MyFormLabel = styled(FormLabel)({
  fontWeight: "bold",
  fontSize: 14,
  color: "#000",
  float: "left",
  width: "30%",
  paddingTop: "10px",
});

function FormRadio() {
  return (
    <Box sx={{ display: "flex", width: 400, my: 1 }}>
      <MyFormLabel>Gender</MyFormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </Box>
  );
}

export default FormRadio;
