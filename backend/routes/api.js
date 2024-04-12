import express from "express";
const router = express.Router();

import {
  createUser,
  getUser,
  getAllUser,
  updateUser,
  removeUser,
} from "../controllers/user"; // import function from controller
