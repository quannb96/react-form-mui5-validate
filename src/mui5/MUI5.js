import { Button, styled, Typography } from "@mui/material";
const MyButton = styled(Button)({
  backgroundColor: "grey",
});

function MUI5() {
  return (
    <div>
      <Typography
        variant="h1"
        component="p"
        sx={{
          color: "blue",
          "&:hover": { color: "green" },
        }}
      >
        This is h1 style but this is a p tag
      </Typography>
      <Button variant="contained">MUI Button</Button>
      <Button variant="contained">MUI Button</Button>
      <MyButton variant="contained">MUI MyButton</MyButton>
    </div>
  );
}

export default MUI5;
