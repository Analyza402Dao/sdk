import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import endpointRoutes from "./routes/endpoints.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

app.use("/api/endpoints", endpointRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
