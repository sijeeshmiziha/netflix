import axiosInstance from './axiosInstance';
import { API_KEY } from '../config/constants';
import {
  trendingAllDay,
  trendingAllWeek,
  movieDetails,
  tvDetails,
  searchMulti as buildSearchMultiUrl,
} from '../config/urls';

export const fetchTrending = (timeWindow = 'day') => {
  const path = timeWindow === 'week' ? trendingAllWeek : trendingAllDay;
  return axiosInstance.get(path);
};

export const fetchByPath = (path) => axiosInstance.get(path);

export const fetchDetails = (id, mediaType) => {
  const path = mediaType === 'movie' ? movieDetails(id) : tvDetails(id);
  return axiosInstance.get(path);
};

export const fetchVideos = (id, mediaType) => {
  const path =
    mediaType === 'movie'
      ? `movie/${id}/videos?api_key=${API_KEY}`
      : `tv/${id}/videos?api_key=${API_KEY}`;
  return axiosInstance.get(path);
};

export const searchMulti = (query) =>
  axiosInstance.get(buildSearchMultiUrl(query));
