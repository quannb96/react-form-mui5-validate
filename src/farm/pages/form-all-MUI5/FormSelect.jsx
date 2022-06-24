import {
  Box,
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
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
function FormSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box sx={{ display: "flex", width: 400, my: 1 }}>
      <MyFormLabel>Age</MyFormLabel>
      <FormControl fullWidth size="small" sx={{ width: "69%" }}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default FormSelect;
