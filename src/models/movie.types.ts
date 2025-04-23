export interface MovieDTO {
  id: string;
  title: string;
  year: number;
  rank: number;
  revenue: number;
}

export interface DetailedMovieDTO {
  id: string;
  title: string;
  year: number;
  rank: number;
  revenue: number;
  genre: string;
  description: string;
  director: string;
  actors: string;
  runtime: number;
  rating: number;
  votes: number;
  metascore: number;
}
