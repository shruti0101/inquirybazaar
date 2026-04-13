import mongoose from "mongoose";

const BannerSchema = new mongoose.Schema({
  image: String,
  link: String,
  title: String,
});

export default mongoose.models.dirbanner ||
  mongoose.model("dirbanner", BannerSchema);