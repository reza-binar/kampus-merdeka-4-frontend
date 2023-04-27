require("dotenv").config();

const express = require("express");
const cors = require("cors");
const validator = require("validator");
const bcrypt = require("bcrypt");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY = "Rahasia", NODE_ENV, API_KEY } = process.env;
const { User } = require("./models");

// Check the env
if (!JWT_SECRET_KEY || !API_KEY) {
  throw new Error("Env is required");
}

const PORT = process.env.PORT || "4000";
const app = express();

app.use(cors());
app.use(express.json());

function createToken(user) {
  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
    type: user.token,
  };

  return jwt.sign(payload, JWT_SECRET_KEY);
}

const authorization = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ message: "You are not logged in" });
    }

    const token = req.headers.authorization.split("Bearer ")[1];

    if (!token) {
      return res.status(401).json({ message: "You are not logged in" });
    }

    const verify = jwt.verify(token, "Rahasia");

    const user = JSON.parse(
      JSON.stringify(await User.findOne({ where: { id: verify.id } }))
    );
    if (!user) {
      return res.status(401).json({ message: "User is not found" });
    }

    delete user.encryptedPassword;
    delete user.googleId;
    delete user.registeredVia;

    req.user = user;

    next();
  } catch (error) {
    if (NODE_ENV === "production") {
      error.message = "Your token is not valid";
    }

    return res.status(401).json({ message: error.message });
  }
};

app.post("/api/v1/auth/register", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Email is not valid" });
    }

    const isStrongPassword = validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 0,
      returnScore: false,
    });

    if (!isStrongPassword) {
      return res.status(400).json({ message: "Password must be stronger" });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      name,
      encryptedPassword,
      registeredVia: "web",
      type: "user",
    });

    const token = createToken(user);

    res.status(201).json({ data: { token } });
  } catch (error) {
    if (error.message === "Validation error") {
      return res.status(400).json({ message: "User has already registered" });
    }

    if (NODE_ENV === "production") {
      error.message = "Internal Server Error";
    }

    res.status(500).json({ message: error.message });
  }
});

app.post("/api/v1/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Email is not valid" });
    }

    let user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "User is not found" });
    }

    const comparison = await bcrypt.compare(password, user.encryptedPassword);
    if (!comparison) {
      return res.status(401).json({ message: "Wrong password" });
    }

    const token = createToken(user);

    res.status(200).json({ data: { token } });
  } catch (error) {
    if (NODE_ENV === "production") {
      error.message = "Internal Server Error";
    }

    res.status(500).json({ message: error.message });
  }
});

app.get("/api/v1/auth/me", authorization, async (req, res) => {
  try {
    return res.status(200).json({ data: req.user });
  } catch (error) {
    if (NODE_ENV === "production") {
      error.message = "Your token is not valid";
    }

    return res.status(401).json({ message: error.message });
  }
});

app.post("/api/v1/auth/google", async (req, res) => {
  try {
    const { access_token } = req.body;

    if (!access_token) {
      return res.status(400).json({ message: "Access Token is required" });
    }

    const response = await axios.get(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
    );
    const { sub, email, name } = response.data;

    let user = await User.findOne({ where: { googleId: sub } });
    if (!user)
      user = await User.create({
        email,
        name,
        googleId: sub,
        registeredVia: "google",
        type: "user",
      });

    const token = createToken(user);

    res.status(200).json({ data: { token } });
  } catch (error) {
    let status = 500;

    if (NODE_ENV === "production") {
      error.message = "Your token is not valid";
    }

    if (axios.isAxiosError(error)) {
      error.message = error.response.data.error_description;
      status = error.response.status;
    }

    res.status(status).json({ message: error.message });
  }
});

app.get("/api/docs", (req, res, next) => {
  try {
    res.redirect("https://documenter.getpostman.com/view/3884681/2s93Y6uKiP");
  } catch (error) {
    if (NODE_ENV === "production") {
      error.message = "internal server error";
    }

    res.status(500).json({ message: error.message });
  }
});

app.get("/api/v1/movie/popular", async (req, res, next) => {
  try {
    let { page } = req.query;
    const pageURL = page ? `&page=${page}` : ``;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}${pageURL}`
    );

    const data = response.data.results;
    page = response.data.page;
    const total_pages = response.data.total_pages;
    const total_results = response.data.total_results;

    return res.status(200).json({ data, page, total_pages, total_results });
  } catch (error) {
    if (NODE_ENV === "production") {
      error.message = "internal server error";
    }

    res.status(500).json({ message: error.message });
  }
});

app.get("/api/v1/movie/:movie_id", authorization, async (req, res, next) => {
  try {
    const movieID = req.params.movie_id;
    if (!movieID) {
      return res.status(400).json({ message: "Movie ID is required" });
    }

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`
    );

    return res.status(200).json({ data: response.data });
  } catch (error) {
    let status = 500;

    if (NODE_ENV === "production") {
      error.message = "internal server error";
    }

    if (axios.isAxiosError(error)) {
      error.message = error.response.data.status_message;
      status = error.response.status;
    }

    res.status(status).json({ message: error.message });
  }
});

app.get("/api/v1/search/movie", async (req, res, next) => {
  try {
    let { page, query } = req.query;
    const pageURL = page ? `&page=${page}` : ``;

    if (!query) {
      return res.status(400).json({ message: "Query is required" });
    }

    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}&api_key=${API_KEY}${pageURL}`
    );

    const data = response.data.results;
    page = response.data.page;
    const total_pages = response.data.total_pages;
    const total_results = response.data.total_results;

    return res.status(200).json({ data, page, total_pages, total_results });
  } catch (error) {
    if (NODE_ENV === "production") {
      error.message = "internal server error";
    }

    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
