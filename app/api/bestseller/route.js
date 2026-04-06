import { connectDB } from "@/lib/db";
import Bestseller from "@/models/bestseller";

export async function GET() {
  await connectDB();

  let data = await Bestseller.findOne();

  if (!data) {
    return Response.json({
      content: { products: [] },
    });
  }

  return Response.json(data);
}

export async function POST(req) {
  await connectDB();

  const body = await req.json();

  const updated = await Bestseller.findOneAndUpdate(
    {},
    { content: body },
    { upsert: true, new: true }
  );

  return Response.json(updated);
}