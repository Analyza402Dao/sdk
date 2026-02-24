import mongoose from "mongoose";

const endpointSchema = new mongoose.Schema({
  name: String,
  url: String,
  status: {
    type: String,
    default: "active"
  },
  requests: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Endpoint", endpointSchema);
