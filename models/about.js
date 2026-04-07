import mongoose from "mongoose"

const aboutSchema = new mongoose.Schema({
  content: String,
}, { timestamps: true });

export default mongoose.models.about || mongoose.model("about", aboutSchema)