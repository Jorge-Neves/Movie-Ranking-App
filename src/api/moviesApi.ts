import { DetailedMovieDTO, PageMovieDTO } from "../models";
import { api } from "./axios";

const apiUrlPath = "movies";

export const getAllMovies = async (): Promise<PageMovieDTO> => {
  const response = await api.get<PageMovieDTO>(`/${apiUrlPath}`);

  return response.data;
};

export const getAllMoviesPaginated = async (
  page: number,
  size: number,
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

export const getMoviesByTopRevenue = async () => {
  const response = await api.get<PageMovieDTO>(`/${apiUrlPath}`);
  const sortedByRevenue = response.data.content
    .sort((a, b) => (b.revenue ?? 0) - (a.revenue ?? 0))
    .slice(0, 10);

  return sortedByRevenue;
};

export const getTopRevenueByYear = async (year: number) => {
  const response = await api.get<PageMovieDTO>(`/${apiUrlPath}`, {
    params: { start: year, end: year },
  });

  const topByYear = response.data.content
    .filter((m) => typeof m.revenue === "number")
    .sort((a, b) => (b.revenue ?? 0) - (a.revenue ?? 0))
    .slice(0, 10);

  return topByYear;
};
