import mongoose from "mongoose";

const footerlinkSchema = new mongoose.Schema({
  categories: [
    {
      title: String,
      link: String,
    }
  ],
  brands: [
    {
      title: String,
      link: String,
    }
  ],
  searches: [
    {
      title: String,
      link: String,
    }
  ]
});

export default mongoose.models.footerlink ||
  mongoose.model("footerlink", footerlinkSchema);