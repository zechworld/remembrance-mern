// Libraries
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Relative imports
import postsRoutes from "./routes/posts.js";

const PORT = process.env.PORT || 5000;
const MONGO_CONNECTION_STRING =
    "mongodb+srv://admin:aVidGNpiDQMXAR62@memoriesdb.46kco.mongodb.net/MemoriesDB?retryWrites=true&w=majority";

const app = express();

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postsRoutes);

await mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() =>
        app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
    )
    .catch((error) => console.log(error.message));
