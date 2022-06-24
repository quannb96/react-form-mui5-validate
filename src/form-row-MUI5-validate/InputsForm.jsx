import { Box, FormLabel, styled, Typography } from "@mui/material";
import { useState } from "react";
import "./inputs-form.css";
const MyFormLabel = styled(FormLabel)({
  fontWeight: "bold",
  fontSize: 14,
  color: "#000",
  float: "left",
  width: "35%",
  paddingTop: "16px",
});
const ErrorMessage = styled(Typography)({
  fontSize: 12,
  padding: "3px",
  color: "red",
  display: "none",
});

const InputsForm = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <Box sx={{ display: "flex", width: 400 }}>
      <MyFormLabel>{label}</MyFormLabel>

      <Box sx={{ display: "flex", width: "69%", flexDirection: "column" }}>
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}
        />
        <ErrorMessage component="span">{errorMessage}</ErrorMessage>
      </Box>
    </Box>
  );
};

export default InputsForm;
