import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  content: {
    products: [
      {
        name: String,
        image: String,
        imageFileId: String,

        price: String,
        reviews: String,
        badge: String,
        extra: String,
        URL: String,
      },
    ],
  },
});

export default mongoose.models.Category ||
  mongoose.model("Category", CategorySchema);
