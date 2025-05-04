import { FC } from "react";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import { MovieDTO } from "../../models/index";
import EyeIcon from "../../assets/eye.svg";

interface MovieListItemProps {
  movie: MovieDTO;
  handlePickAMovie: (movieValue: MovieDTO) => void;
}

const MovieListItem: FC<MovieListItemProps> = ({ movie, handlePickAMovie }) => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginBottom: "4.5px",
          height: "30px",
          width: "100%",
          color: theme.palette.custom.listText,
        }}
      >
        <Typography
          sx={{
            width: "76px",
            paddingLeft: "16px",
            fontSize: "16px",
            fontWeight: "normal",
            lineHeight: "30px",
          }}
        >
          {movie.rank}
        </Typography>
        <Typography
          sx={{
            width: "427px",
            paddingLeft: "32px",
            fontSize: "16px",
            fontWeight: "normal",
            lineHeight: "30px",
          }}
        >
          {movie.title}
        </Typography>
        <Typography
          sx={{
            width: "143px",
            fontSize: "16px",
            fontWeight: "normal",
            lineHeight: "30px",
          }}
        >
          {movie.year}
        </Typography>
        <Typography
          sx={{
            width: "200px",
            fontSize: "16px",
            fontWeight: "normal",
            lineHeight: "30px",
          }}
        >
          ${movie?.revenue}
        </Typography>
        <IconButton onClick={() => handlePickAMovie(movie)} size="small">
          <img src={EyeIcon} alt="Eye icon" />
        </IconButton>
      </Box>
      <Divider />
    </>
  );
};

export default MovieListItem;
