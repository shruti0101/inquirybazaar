 

import mongoose from "mongoose";

const searchHistorySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    keyword: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.SearchHistory ||
  mongoose.model("SearchHistory", searchHistorySchema);