import { FC } from "react";
import { Box, Divider, Typography, useTheme } from "@mui/material";

const MovieListHeader: FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ marginBottom: "15px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginBottom: "4.5px",
          width: "100%",
          color: theme.palette.custom.listTitle,
        }}
      >
        <Typography
          sx={{
            width: "76px",
            paddingLeft: "16px",
            fontSize: "10px",
            fontWeight: "bold",
          }}
        >
          RANKING
        </Typography>
        <Typography
          sx={{
            width: "427px",
            paddingLeft: "32px",
            fontSize: "10px",
            fontWeight: "bold",
          }}
        >
          TITLE
        </Typography>
        <Typography
          sx={{ width: "143px", fontSize: "10px", fontWeight: "bold" }}
        >
          YEAR
        </Typography>
        <Typography
          sx={{ width: "44px", fontSize: "10px", fontWeight: "bold" }}
        >
          REVENUE
        </Typography>
      </Box>
      <Divider />
    </Box>
  );
};

export default MovieListHeader;
