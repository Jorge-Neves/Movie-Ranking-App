import { FC } from "react";
import { Typography, useTheme } from "@mui/material";

interface MovieSpecsProps {
  label: string;
  value?: number | string | undefined;
  isMovieCredits?: boolean;
}

const MovieSpecs: FC<MovieSpecsProps> = ({ label, value, isMovieCredits }) => {
  const theme = useTheme();
  return (
    <>
      <Typography
        sx={{ fontSize: "14px", color: theme.palette.custom.modalLabels }}
      >
        {label}
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "medium",
          color: isMovieCredits
            ? theme.palette.custom.modalTextCredits
            : theme.palette.custom.modalText,
          marginBottom: "17px",
        }}
      >
        {value}
      </Typography>
    </>
  );
};

export default MovieSpecs;
