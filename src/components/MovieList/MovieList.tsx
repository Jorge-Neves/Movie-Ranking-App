import { FC, useEffect, useState, useCallback, useRef } from "react";
import {
  Box,
  useTheme,
  Typography,
  CircularProgress,
  Popover,
} from "@mui/material";

import MovieListItem from "./MovieListItem";
import MovieButton from "./MovieButton";
import { DetailedMovieDTO, MovieDTO } from "../../models";
import refreshIcon from "../../assets/refresh.svg";
import MovieModal from "./MovieModal/MovieModal";
import {
  getAllMoviesPaginated,
  getMovieById,
  getMoviesByTopRevenue,
  getTopRevenueByYear,
} from "../../api/moviesApi";
import MovieListHeader from "./MovieListHeader";

const MovieList: FC = () => {
  const theme = useTheme();

  const [movies, setMovies] = useState<MovieDTO[]>([]);
  const [page, setPage] = useState(0);
  const [movieDetails, setMovieDetails] = useState<DetailedMovieDTO>();
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isInfiniteScroll, setIsInfiniteScroll] = useState<boolean>(true);
  const [isMovieDetails, setIsMovieDetails] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const didFetchRef = useRef(false);

  const handleMovieDetailClose = (): void => {
    setIsMovieDetails(false);
  };

  const handleOpenYearPopover = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseYearPopover = () => {
    setAnchorEl(null);
  };

  const handlePickAMovie = (movieId: string): void => {
    getMovieById(movieId)
      .then((data) => {
        setMovieDetails(data);
        setIsMovieDetails(true);
      })
      .catch((error) => console.error(error));
  };

  const fetchMovies = useCallback(
    async (pageToFetch?: number): Promise<void> => {
      if (loading || !hasMore) return;
      setLoading(true);
      try {
        const data = await getAllMoviesPaginated(
          pageToFetch !== undefined ? pageToFetch : page,
          20,
        );
        setMovies((prev) => [...prev, ...data.content]);
        setPage(data.number + 1);
        setHasMore(!data.last);
      } catch (error) {
        console.error("Failed to fetch movies", error);
      } finally {
        setLoading(false);
      }
    },
    [page, loading, hasMore],
  );

  useEffect(() => {
    if (didFetchRef.current) return;
    didFetchRef.current = true;
    fetchMovies();
  }, []);

  const handleScroll = useCallback(() => {
    if (loading || !hasMore || !isInfiniteScroll) return;

    const nearBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 250;

    if (nearBottom) {
      fetchMovies();
    }
  }, [loading, hasMore, fetchMovies]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleShowTopRevenue = async (): Promise<void> => {
    setLoading(true);
    setIsInfiniteScroll(false);
    try {
      const topMovies = await getMoviesByTopRevenue();

      const rankedMovies = topMovies.map((movie, index) => ({
        ...movie,
        rank: index + 1,
      }));

      setMovies(rankedMovies);
    } catch (error) {
      console.error("Failed to load top revenue movies", error);
    } finally {
      setLoading(false);
    }
  };

  const handleShowTopRevenueByYear = async (
    yearSelected: number,
  ): Promise<void> => {
    setLoading(true);
    setIsInfiniteScroll(false);
    try {
      const topByYear = await getTopRevenueByYear(yearSelected);

      const rankedMovies = topByYear.map((movie, index) => ({
        ...movie,
        rank: index + 1,
      }));

      setMovies(rankedMovies);
    } catch (error) {
      console.error("Failed to load top revenue by year", error);
    } finally {
      handleCloseYearPopover();
      setLoading(false);
    }
  };

  const handleResetList = () => {
    setMovies([]);
    setPage(0);
    setHasMore(true);
    setIsInfiniteScroll(true);
    fetchMovies(0);
  };

  return (
    <>
      <Box sx={{ width: "938px", marginTop: "24px" }}>
        <Typography
          sx={{
            color: theme.palette.custom?.headingText || "black",
            fontFamily: "Roboto",
            fontWeight: "Regular",
            fontSize: "24px",
            mb: 2,
          }}
        >
          Movie Ranking
        </Typography>
        <Box sx={{ marginTop: "24px", mb: "46px", display: "flex", gap: 2 }}>
          <MovieButton label="Top 10 Revenue" onClick={handleShowTopRevenue} />
          <MovieButton
            label="Top 10 Revenue per Year"
            isFocused={Boolean(anchorEl)}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              handleOpenYearPopover(event)
            }
          />
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleCloseYearPopover}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "178px",
                minHeight: "478px",
              }}
            >
              <Typography
                sx={{
                  color: theme.palette.custom.dropdownTitle,
                  fontSize: "12px",
                  margin: "18px",
                }}
              >
                Select a year
              </Typography>
              <Box sx={{ marginBottom: "13px" }}>
                {[...Array(17)].map((_, index) => {
                  const year = 2016 - index;
                  return (
                    <Typography
                      key={`${year}-select-popover`}
                      onClick={() => handleShowTopRevenueByYear(year)}
                      sx={{
                        color: theme.palette.custom.dropdownItems,
                        cursor: "pointer",
                        fontSize: "14px",
                        margin: "4px 0",
                      }}
                    >
                      {year}
                    </Typography>
                  );
                })}
              </Box>
            </Box>
          </Popover>
          {!isInfiniteScroll && (
            <div style={{ cursor: "pointer", width: "24px", height: "24px" }}>
              <img
                src={refreshIcon}
                onClick={handleResetList}
                alt="Refresh icon"
              />
            </div>
          )}
        </Box>
        <MovieListHeader />
        {isInfiniteScroll ? (
          <Box
            id="scrollableDiv"
            sx={{
              height: "fit-content",
            }}
          >
            <Box display="flex" flexDirection="column" gap={2}>
              {movies.map((movie, index) => (
                <MovieListItem
                  key={`${movie.id}-${index}`}
                  movie={movie}
                  handlePickAMovie={() => handlePickAMovie(movie.id)}
                />
              ))}
            </Box>

            {loading && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <CircularProgress />
              </Box>
            )}

            {!hasMore && !loading && (
              <Typography align="center" sx={{ mt: 2 }}>
                No more movies to display.
              </Typography>
            )}
          </Box>
        ) : (
          <Box display="flex" flexDirection="column" gap={2}>
            {movies.length === 0 && !loading ? (
              <Typography align="center" sx={{ mt: 2 }}>
                No movies to display.
              </Typography>
            ) : (
              movies.map((movie, index) => (
                <MovieListItem
                  key={`${movie.id}-${index}`}
                  movie={movie}
                  handlePickAMovie={() => handlePickAMovie(movie.id)}
                />
              ))
            )}
            {loading && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <CircularProgress />
              </Box>
            )}
          </Box>
        )}
      </Box>
      {isMovieDetails && movieDetails && (
        <MovieModal
          isModalOpen={isMovieDetails}
          movieDetails={movieDetails}
          handleClose={handleMovieDetailClose}
        />
      )}
    </>
  );
};

export default MovieList;
