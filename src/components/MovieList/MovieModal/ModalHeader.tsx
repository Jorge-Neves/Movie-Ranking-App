import { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";

interface MovieSpecsProps {
  title: string;
  handleClose: () => void;
}

const ModalHeader: FC<MovieSpecsProps> = ({ title, handleClose }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "16px",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: "300",
            color: theme.palette.custom.modalTitle,
          }}
        >
          {title}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "24px",
            height: "24px",
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
          <Typography
            sx={{
              fontSize: "8px",
              color: theme.palette.custom.modalCloseButton,
            }}
          >
            Close
          </Typography>
        </IconButton>
      </Box>

      <Divider
        sx={{
          width: "52px",
          height: "0px",
          border: `1px solid ${theme.palette.custom.modalDivider}`,
          marginBottom: "16px",
        }}
      />
    </>
  );
};

export default ModalHeader;
