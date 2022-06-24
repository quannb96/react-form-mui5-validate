import { Button } from "@mui/material";
import React from "react";

function FormButton(props) {
  return (
    <div>
      <Button
        variant="contained"
        size="small"
        sx={{ margin: "10px 50px 0 30px" }}
      >
        {props.title}
      </Button>
    </div>
  );
}

export default FormButton;
