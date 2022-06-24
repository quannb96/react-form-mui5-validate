import { Button } from "@mui/material";
import React from "react";

function FormButton(props) {
  return (
    <div>
      <Button
        variant="contained"
        size="small"
        sx={{ margin: "10px 66px 0 0px" }}
      >
        {props.title}
      </Button>
    </div>
  );
}

export default FormButton;
