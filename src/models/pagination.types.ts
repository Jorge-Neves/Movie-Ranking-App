import { MovieDTO } from "./movie.types";

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

export interface PageMovieDTO {
  totalPages: number;
  totalElements: number;
  sort: Sort;
  number: number;
  size: number;
  content: MovieDTO[];
  first: boolean;
  last: boolean;
  pageable: Pageable;
  numberOfElements: number;
  empty: boolean;
}
