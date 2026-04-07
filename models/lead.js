import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
  {
    phone: String,
  },
  { timestamps: true }
);

export default mongoose.models.lead ||
  mongoose.model("lead", LeadSchema);