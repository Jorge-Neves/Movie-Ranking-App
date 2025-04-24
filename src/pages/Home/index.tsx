import { Box } from '@mui/material';
import { FC } from 'react';
import Header from '../../components/Header/Header';
import MovieDashboard from '../../components/MovieDashboard/MovieDashboard';
const HomePage: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100vw',
        height: 'auto',
        minHeight: '100vh',
      }}
    >
      <Header />
      <MovieDashboard />
    </Box>
  );
};

export default HomePage;
