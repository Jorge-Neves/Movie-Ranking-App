import { FC, useEffect, useState, useCallback } from 'react';
import { Box, useTheme, Typography, CircularProgress } from '@mui/material';

import MovieListItem from './MovieListItem';
import MovieButton from './MovieButton';
import { DetailedMovieDTO, MovieDTO } from '../../models';
import {
  getAllMockMovies,
  getMockMovieById,
  getMockMoviesByTopRevenue,
  getMockTopRevenueByYear,
} from '../../api/mockApi';
import refreshIcon from '../../assets/refresh.svg';
import MovieModal from './MovieModal';

const MovieDashboard: FC = () => {
  const theme = useTheme();

  const [isListFiltered, setIsListFiltered] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [movieDetails, setMovieDetails] = useState<DetailedMovieDTO>();
  const [movies, setMovies] = useState<MovieDTO[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const handlePickAMovie = (movieValue: MovieDTO) => {
    getMockMovieById()
      .then((data) => {
        console.log(data);
        setMovieDetails(data);
        setIsModalOpen(true);
      })
      .catch((error) => console.error(error));
  };

  const fetchMovies = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const { items, nextPage, hasMore: more } = await getAllMockMovies(page);

    setMovies((prev) => {
      const ids = new Set(prev.map((m) => m.id));
      const newUniqueItems = items.filter((item) => !ids.has(item.id));
      return [...prev, ...newUniqueItems];
    });

    setPage(nextPage);
    setHasMore(more);
    setLoading(false);
  }, [loading, hasMore, page]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleFilterTopTen = async () => {
    setIsListFiltered(true);
    const topMovies = await getMockMoviesByTopRevenue();
    setMovies(topMovies);
    setIsListFiltered(true);
    setHasMore(false);
  };

  const handleFilterPerYear = async () => {
    const year = 2010;
    const topByYear = await getMockTopRevenueByYear(year);
    setMovies(topByYear);
    setIsListFiltered(true);
    setHasMore(false); // disable infinite scroll
  };

  const handleResetList = () => {
    setIsListFiltered(false);
    setMovies([]);
    setPage(0);
    setHasMore(true);
    setLoading(true);
    setTimeout(() => {
      fetchMovies();
    }, 2000);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleScroll = useCallback(() => {
    const container = document.getElementById('scrollableDiv');
    if (!container) return;

    const nearBottom =
      container.scrollTop + container.clientHeight >=
      container.scrollHeight - 50;

    if (nearBottom && !loading && hasMore) {
      fetchMovies();
    }
  }, [loading, hasMore, fetchMovies]);

  useEffect(() => {
    const container = document.getElementById('scrollableDiv');
    if (!container) return;

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <Box sx={{ width: '938px', marginTop: '24px' }}>
        <Typography
          sx={{
            color: theme.palette.custom?.headingText || 'black',
            fontFamily: 'Roboto',
            fontWeight: 'Regular',
            fontSize: '24px',
            mb: 2,
          }}
        >
          Movie Ranking
        </Typography>
        <Box sx={{ marginTop: '24px', mb: '46px', display: 'flex', gap: 2 }}>
          <MovieButton label="Top 10 Revenue" onClick={handleFilterTopTen} />
          <MovieButton
            label="Top 10 Revenue per Year"
            onClick={handleFilterPerYear}
          />
          {isListFiltered && (
            <div style={{ cursor: 'pointer', width: '24px', height: '24px' }}>
              <img
                src={refreshIcon}
                onClick={handleResetList}
                alt="Refresh icon"
              />
            </div>
          )}
        </Box>
        <Box
          id="scrollableDiv"
          sx={{
            height: '938px',
            overflow: 'auto',
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: '8px',
            padding: 2,
          }}
        >
          <Box display="flex" flexDirection="column" gap={2}>
            {movies.map((movie, index) => (
              <MovieListItem
                key={`${movie.id}-${index}`}
                movie={movie}
                handlePickAMovie={handlePickAMovie}
              />
            ))}
          </Box>

          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <CircularProgress />
            </Box>
          )}

          {!hasMore && !loading && (
            <Typography align="center" sx={{ mt: 2 }}>
              No more movies to display.
            </Typography>
          )}
        </Box>
      </Box>
      {isModalOpen && (
        <MovieModal
          isModalOpen={isModalOpen}
          movieDetails={movieDetails}
          handleClose={handleModalClose}
        />
      )}
    </>
  );
};

export default MovieDashboard;
