import mongoose from "mongoose";

const featurecategoriesSchema = new mongoose.Schema({
  content: Object,
});

export default mongoose.models.featurecategories ||
  mongoose.model("featurecategories", featurecategoriesSchema);