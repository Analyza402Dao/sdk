import express from "express";
import Endpoint from "../models/Endpoint.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const endpoints = await Endpoint.find();
  res.json(endpoints);
});

router.post("/", async (req, res) => {
  const { name, url } = req.body;
  const endpoint = new Endpoint({ name, url });
  await endpoint.save();
  res.json(endpoint);
});

export default router;
