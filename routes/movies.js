const express = require("express");
const axios = require("axios").default;
const moviesRouter = express.Router();

moviesRouter.get("/genres", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => res.json(err));
});

moviesRouter.get("/genres/:genreId", (req, res) => {
  const genreId = req.params.genreId;
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=${genreId}`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => res.json(err));
});

https: moviesRouter.get("/latest", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.API_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => res.json(err));
});

moviesRouter.get("/nowplaying", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => res.json(err));
});

moviesRouter.get("/popular", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => res.json(err));
});

moviesRouter.get("/toprated", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => res.json(err));
});

moviesRouter.get("/upcoming", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => res.json(err));
});

moviesRouter.get("/find/:movieId", (req, res) => {
  const movie_id = req.params.movieId;

  axios
    .get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.API_KEY}&language=en-US`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => res.json(err));
});

moviesRouter.get("/find/similar/:movieId", (req, res) => {
  const movie_id = req.params.movieId;

  axios
    .get(
      `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => res.json(err));
});

moviesRouter.get("/find/cast/:movieId", (req, res) => {
  const movie_id = req.params.movieId;

  axios
    .get(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${process.env.API_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => res.json(err));
});

moviesRouter.get("/find/reviews/:movieId", (req, res) => {
  const movie_id = req.params.movieId;

  axios
    .get(
      `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${process.env.API_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => res.json(err));
});

moviesRouter.post("/search/", (req, res) => {
  const query = req.body.query;
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = moviesRouter;
