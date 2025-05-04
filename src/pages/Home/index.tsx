import { Box } from "@mui/material";
import { FC } from "react";
import Header from "../../components/Header/Header";
import MovieList from "../../components/MovieList/MovieList";
const HomePage: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "99.2vw",
        height: "auto",
        minHeight: "100vh",
      }}
    >
      <Header />
      <MovieList />
    </Box>
  );
};

export default HomePage;
