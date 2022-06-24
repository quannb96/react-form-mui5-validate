import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";

function FormCheckbox() {
  return (
    <Box pl={15}>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked size="small" />}
          label="Accept this form"
        />
      </FormGroup>
    </Box>
  );
}

export default FormCheckbox;
