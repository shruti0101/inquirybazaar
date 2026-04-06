import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({

  content:[
    {
        image: String,
        link: String
    }
  ]
});

export default mongoose.models.Banner3 ||
  mongoose.model("Banner3", bannerSchema);  