import mongoose from "mongoose";

const DirectorySchema = new mongoose.Schema({
  content: {
    title: String,
    image: String,
    sections: [
      {
        title: String,
        image: String,

        viewAllLink: String,
        links: [
          {
            text: String,
            url: String,
          },
        ],
      },
    ],
  },
});

export default mongoose.models.Directory ||
  mongoose.model("Directory", DirectorySchema);
