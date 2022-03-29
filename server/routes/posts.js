// Libraries
import express from "express";

// Relative imports
import { getPosts } from "../controllers/posts";

const router = express.Router();

router.get("/", getPosts);

export default router;
