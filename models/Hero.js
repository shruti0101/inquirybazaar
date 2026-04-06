import mongoose from "mongoose";

const HeroSchema = new mongoose.Schema({
  content: Object,
});

export default mongoose.models.Hero ||
  mongoose.model("Hero", HeroSchema);