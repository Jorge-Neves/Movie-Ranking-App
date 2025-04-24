import { FC } from 'react';
import { Button, useTheme } from '@mui/material';

interface MovieButtonProps {
  label: string;
  onClick: () => void;
}

const MovieButton: FC<MovieButtonProps> = ({ label, onClick }) => {
  const theme = useTheme();

  return (
    <Button
      onClick={onClick}
      sx={{
        borderRadius: '20px',
        color: theme.palette.custom.buttonText,
        padding: '6px 12px',
        font: 'normal normal 300 12px/14px Roboto',
        border: `1px solid ${theme.palette.custom.buttonBorder}`,
      }}
    >
      {label}
    </Button>
  );
};

export default MovieButton;
