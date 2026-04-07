import { connectDB } from "@/lib/db";
import footerlink from "@/models/footerlink";

export async function GET() {
  await connectDB();

  const data = await footerlink.findOne();

  if (!data) {
    return Response.json({
      categories: [],
      brands: [],
      searches: []
    });
  }

  return Response.json(data);
}

export async function POST(req) {
  await connectDB();

  const body = await req.json();

  const updated = await footerlink.findOneAndUpdate(
    {},
    {
      categories: body.categories,
      brands: body.brands,
      searches: body.searches
    },
    { upsert: true, new: true }
  );

  return Response.json(updated);
}