import { DetailedMovieDTO, PageMovieDTO } from '../models';
import movieData from '../mock/mockMovieList.json';
import movieDetails from '../mock/mockMovieDetails.json';
import { api } from './axios';

const apiUrlPath = 'movies';

export const PAGE_SIZE = 20;

export const getAllMockMovies = async (pageParam = 0) => {
  const start = pageParam * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const items = movieData.content.slice(start, end);
  const hasMore = end < movieData.content.length;

  return { items, nextPage: pageParam + 1, hasMore };
};

export const getMockMovieById = async () => {
  return movieDetails;
};

export const getMoviesByTopRevenue = async () => {};

export const getTopRevenueByYear = async () => {};
