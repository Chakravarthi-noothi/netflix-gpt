export const logoURL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const userAvatarURL =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";
export const BG_IMG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/JP-en-20241230-TRIFECTA-perspective_ddcdb629-d6e0-4cc2-be12-bb5fecd8502a_large.jpg";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzcwNjE0NWIwNzg0Yjk4ZDk5NTk4OWMyODUwZTU2OCIsIm5iZiI6MTczNDI4MzE3NS41MzMsInN1YiI6IjY3NWYwZmE3ZGU4ZjM0ZTBiMjU4OTIzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yv18CKgU1WhH2UxXf8xDhbo_pqRpHlE0YPVJuULL0kY",
  },
};
export const nowPlayingMoviesURL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const popularMoviesURL =
  "https://api.themoviedb.org/3/movie/popular?page=1";
export const topRatedMoviesURL =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";
export const upcomingMoviesURL =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";
export const getMovieVideoURL =
  "https://api.themoviedb.org/3/movie/{movieId}/videos";
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
  {
    identifier: "spanish",
    name: "Spanish",
  },
];
