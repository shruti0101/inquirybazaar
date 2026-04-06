import mongoose from "mongoose";

const BestsellerSchema = new mongoose.Schema({
  content: {
    products: [
      {
        name: String,
        image: String,
        price: String,
        reviews: String,
        badge: String,
        extra: String,
      },
    ],
  },
});

export default mongoose.models.bestseller ||
  mongoose.model("bestseller", BestsellerSchema);