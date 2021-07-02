const express = require("express");
const axios = require("axios").default;
const moviesRouter = express.Router();

const BASE_URI = "https://api.themoviedb.org/3";

moviesRouter.get("/genres", (req, res) => {
  axios
    .get(
      `${BASE_URI}/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`
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
      `${BASE_URI}/discover/movie?api_key=${process.env.API_KEY}&with_genres=${genreId}`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => res.json(err));
});

moviesRouter.get("/nowplaying/:page", (req, res) => {
  axios
    .get(
      `${BASE_URI}/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=${req.params.page}`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => res.json(err));
});

moviesRouter.get("/popular/:page", (req, res) => {
  axios
    .get(
      `${BASE_URI}/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=${req.params.page}`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => res.json(err));
});

moviesRouter.get("/toprated/:page", (req, res) => {
  axios
    .get(
      `${BASE_URI}/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=${req.params.page}`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => res.json(err));
});

moviesRouter.get("/upcoming/:page", (req, res) => {
  axios
    .get(
      `${BASE_URI}/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=${req.params.page}`
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
      `${BASE_URI}/movie/${movie_id}?api_key=${process.env.API_KEY}&language=en-US`
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
      `${BASE_URI}/movie/${movie_id}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1`
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
      `${BASE_URI}/movie/${movie_id}/credits?api_key=${process.env.API_KEY}&language=en-US&page=1`
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
      `${BASE_URI}/movie/${movie_id}/reviews?api_key=${process.env.API_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => res.json(err));
});

moviesRouter.post("/search/", (req, res) => {
  const query = req.body.query;
  if (query) {
    axios
      .get(
        `${BASE_URI}/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .then((response) => {
        res.json(response.data);
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    res.status(400).json({ error: "Query string should not be empty" });
  }
});

module.exports = moviesRouter;
