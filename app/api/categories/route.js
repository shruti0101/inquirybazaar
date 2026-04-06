import { connectDB } from "@/lib/db";
import Category from "@/models/categories";

export async function GET() {
  await connectDB();

  let data = await Category.findOne();

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

  const updated = await Category.findOneAndUpdate(
    {},
    { content: body },
    { upsert: true, new: true }
  );

  return Response.json(updated);
}