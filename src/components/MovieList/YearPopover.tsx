import { FC } from 'react';
import { Box, Popover, Typography, useTheme } from '@mui/material';

interface YearPopoverProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  onYearSelect: (year: number) => void;
}

const YearPopover: FC<YearPopoverProps> = ({
  anchorEl,
  onClose,
  onYearSelect,
}) => {
  const theme = useTheme();

  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '178px',
          minHeight: '478px',
        }}
      >
        <Typography
          sx={{
            color: theme.palette.custom.dropdownTitle,
            fontSize: '12px',
            margin: '18px',
          }}
        >
          Select a year
        </Typography>
        <Box sx={{ marginBottom: '13px' }}>
          {[...Array(17)].map((_, index) => {
            const year = 2016 - index;
            return (
              <Typography
                key={`${year}-select-popover`}
                onClick={() => onYearSelect(year)}
                sx={{
                  color: theme.palette.custom.dropdownItems,
                  cursor: 'pointer',
                  fontSize: '14px',
                  margin: '4px 0',
                }}
              >
                {year}
              </Typography>
            );
          })}
        </Box>
      </Box>
    </Popover>
  );
};

export default YearPopover;
