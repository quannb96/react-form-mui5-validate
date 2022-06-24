import {
  Box,
  Button,
  FormLabel,
  styled,
  TextField,
  Typography,
} from "@mui/material";

export const Container = styled(Box)({
  width: "700px",
  border: "3px solid #007e39",
  padding: "0 2em 1em",
  margin: "50px auto",
});
export const LegendForm = styled(Typography)({
  fontWeight: "bold",
  color: "#007e39",
  textAlign: "center",
  fontSize: "45px",
});
export const MyFormLabel = styled(FormLabel)({
  fontSize: 18,
  color: "#000",
  float: "left",
  width: "35%",
  paddingTop: "10px",
});
export const MyFormInput = styled(TextField)({
  width: "65%",
  marginBottom: "10px",
});
export const MyFormInputDisable = styled(TextField)({
  width: "65%",
  marginBottom: "10px",
  backgroundColor: "#ccc",
  color: "#000",
});
export const MyFormButton = styled(Button)({
  width: "300px",
  margin: "20px",
  fontWeight: "bold",
  fontSize: 18,
  border: "2px solid #007e39",
  color: "#000",
});
