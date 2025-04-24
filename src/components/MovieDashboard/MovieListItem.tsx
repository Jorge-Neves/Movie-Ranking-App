import { FC } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { MovieDTO } from '../../models/index';
import EyeIcon from '../../assets/eye.svg';

interface MovieListItemProps {
  movie: MovieDTO;
  handlePickAMovie: (movieValue: MovieDTO) => void;
}

const MovieListItem: FC<MovieListItemProps> = ({ movie, handlePickAMovie }) => (
  <Card variant="outlined" sx={{ minWidth: 250 }}>
    <CardContent>
      <Typography variant="h6">{movie.title}</Typography>
      <Typography variant="body2" color="text.secondary">
        Year: {movie.year} | Rank: {movie.rank}
      </Typography>
      <Typography variant="body2">
        Revenue: ${movie.revenue?.toFixed(2) ?? 'N/A'}
      </Typography>
      <div style={{ width: '24px', height: '24px' }}>
        <img
          style={{ cursor: 'pointer' }}
          src={EyeIcon}
          onClick={() => {
            console.log('clicked');
            handlePickAMovie(movie);
          }}
          alt="Refresh icon"
        />
      </div>
    </CardContent>
  </Card>
);

export default MovieListItem;
