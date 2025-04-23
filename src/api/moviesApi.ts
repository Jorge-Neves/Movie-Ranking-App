import { DetailedMovieDTO, PageMovieDTO } from '../models';
import { api } from './axios';

const apiUrlPath = 'movies';

export const getAllMovies = async (
  page: number,
  size: number
): Promise<PageMovieDTO> => {
  const response = await api.get<PageMovieDTO>(`/${apiUrlPath}`, {
    params: { page, size },
  });

  return response.data;
};

export const getMovieById = async (id: string): Promise<DetailedMovieDTO> => {
  const response = await api.get<DetailedMovieDTO>(`/${apiUrlPath}/${id}`);

  return response.data;
};

export const getMoviesByTopRevenue = async () => {};

export const getTopRevenueByYear = async () => {};
