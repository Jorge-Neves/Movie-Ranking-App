import { DetailedMovieDTO, MovieDTO, PageMovieDTO } from '../models';
import movieData from '../mock/mockMovieList.json';
import movieDetails from '../mock/mockMovieDetails.json';
import { api } from './axios';

const apiUrlPath = 'movies';

export const PAGE_SIZE = 10;

export interface MockMovieResponse {
  items: MovieDTO[];
  nextPage: number;
  hasMore: boolean;
}

export const getAllMockMovies = async (
  pageParam = 0
): Promise<MockMovieResponse> => {
  const start = pageParam * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const items = movieData.content.slice(start, end);
  const hasMore = end < movieData.content.length;

  return { items, nextPage: pageParam + 1, hasMore };
};

export const getMockMovieById = async (): Promise<DetailedMovieDTO> => {
  return movieDetails;
};

export const getMockMoviesByTopRevenue = async (): Promise<MovieDTO[]> => {
  return movieData.content
    .filter((movie: MovieDTO) => typeof movie.revenue === 'number')
    .sort((a, b) => (b.revenue ?? 0) - (a.revenue ?? 0))
    .slice(0, 10);
};

export const getMockTopRevenueByYear = async (
  year: number
): Promise<MovieDTO[]> => {
  return movieData.content
    .filter(
      (movie: MovieDTO) =>
        movie.year === year && typeof movie.revenue === 'number'
    )
    .sort((a, b) => (b.revenue ?? 0) - (a.revenue ?? 0))
    .slice(0, 10);
};
