// Libraries
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("API Connection Succesful");
});

export default router;
