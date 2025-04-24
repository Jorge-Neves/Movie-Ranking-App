import { FC } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { MovieDTO } from '../../models/index';

const MovieListHeader: FC = () => (
  <Card variant="outlined" sx={{ minWidth: 250 }}>
    <CardContent>
      <Typography variant="body2">Ranking</Typography>
      <Typography variant="body2">Title</Typography>
      <Typography variant="body2">Year</Typography>
      <Typography variant="body2">Revenue</Typography>
    </CardContent>
  </Card>
);

export default MovieListHeader;
