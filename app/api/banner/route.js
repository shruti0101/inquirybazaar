import { connectDB } from "@/lib/db";
import Banner3 from "@/models/banner3";

export async function GET() {
  await connectDB();

  let data = await Banner3.findOne();

  if (!data) {
    return Response.json({
      content: [],
    });
  }

  return Response.json(data);
}

export async function POST(req) {
  await connectDB();

  const body = await req.json();

  const updated = await Banner3.findOneAndUpdate(
    {},
    { content: body },
    { upsert: true, returnDocument: "after" }
  );

  return Response.json(updated);
}