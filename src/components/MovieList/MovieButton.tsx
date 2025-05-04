import { FC } from "react";
import { Button, useTheme } from "@mui/material";

interface MovieButtonProps {
  label: string;
  isFocused?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const MovieButton: FC<MovieButtonProps> = ({ label, isFocused, onClick }) => {
  const theme = useTheme();

  return (
    <Button
      onClick={onClick}
      sx={{
        borderRadius: "20px",
        color: isFocused
          ? theme.palette.custom.buttonTextFocused
          : theme.palette.custom.buttonText,
        backgroundColor: isFocused
          ? theme.palette.custom.buttonBgFocused
          : "transparent",
        padding: "6px 12px",
        fontWeight: isFocused ? "bold" : "normal",
        border: `1px solid ${theme.palette.custom.buttonBorder}`,
      }}
    >
      {label}
    </Button>
  );
};

export default MovieButton;
