import { API_KEY } from './constants';

export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213`;
export const actions = `discover/movie?api_key=${API_KEY}&with_genres=28`;
export const romance = `discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const documentary = `discover/movie?api_key=${API_KEY}&with_genres=99`;
export const horror = `discover/movie?api_key=${API_KEY}&with_genres=27`;
export const comedy = `discover/movie?api_key=${API_KEY}&with_genres=35`;

// TV Shows
export const tvPopular = `tv/popular?api_key=${API_KEY}`;
export const tvTopRated = `tv/top_rated?api_key=${API_KEY}`;

// Movies
export const moviePopular = `movie/popular?api_key=${API_KEY}`;
export const movieTopRated = `movie/top_rated?api_key=${API_KEY}`;
export const movieUpcoming = `movie/upcoming?api_key=${API_KEY}`;
export const movieNowPlaying = `movie/now_playing?api_key=${API_KEY}`;

// Trending
export const trendingAllDay = `trending/all/day?api_key=${API_KEY}`;
export const trendingAllWeek = `trending/all/week?api_key=${API_KEY}`;
export const trendingTvWeek = `trending/tv/week?api_key=${API_KEY}`;
export const trendingMovieWeek = `trending/movie/week?api_key=${API_KEY}`;

// Search
export const searchMulti = (query) =>
  `search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;

// Details
export const movieDetails = (id) =>
  `movie/${id}?api_key=${API_KEY}&append_to_response=videos,similar,credits`;
export const tvDetails = (id) =>
  `tv/${id}?api_key=${API_KEY}&append_to_response=videos,similar,credits`;
