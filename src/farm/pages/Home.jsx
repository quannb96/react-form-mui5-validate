import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function Home() {
  return (
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Box flex={1} p={2}>
        <img src={require("../img/house.png")} alt="" />
        <Typography variant="h6" color="#997300">
          Template 2
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur elit.{" "}
          <u>Facilis, assumenda</u>.
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing . Facilis,
          assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Facilis, assumenda.
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, adipisicing elit. Facilis, assumenda.
        </Typography>
      </Box>
      <Box flex={1} p={2}>
        <img src={require("../img/kayamura.png")} alt="" />
        <Typography variant="h6" color="#997300" sx={{ textAlign: "right" }}>
          Template 1
        </Typography>
        <Typography sx={{ textAlign: "right" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quos
          impedit delectus vel recusandae similique voluptates, quas ipsam in
          maiores libero sed rerum deserunt sequi eos exercitationem. Sit eum
          architecto libero asperiores cumque voluptates nam quisquam provident
          modi natus porro veritatis eos, perferendis, tempore labore recusandae
          vero cupiditate eligendi perspiciatis <u>Forums</u>.
        </Typography>

        <img src={require("../img/nature-place-photo.png")} alt="" />
      </Box>
    </Stack>
  );
}

export default Home;
