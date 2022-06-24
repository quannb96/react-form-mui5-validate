import { Box, Typography } from "@mui/material";

export const PageData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Subdivisions",
    path: "/subdivisions",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Register",
    path: "/register",
  },
];
export function Subdivisions() {
  return (
    <Box>
      <Typography variant="h4" color="#997300">
        Subdivisions
      </Typography>
    </Box>
  );
}
export function Blog() {
  return (
    <Box>
      <Typography variant="h4" color="#997300">
        Blog
      </Typography>
    </Box>
  );
}
export function About() {
  return (
    <Box>
      <Typography variant="h4" color="#997300">
        About
      </Typography>
    </Box>
  );
}
