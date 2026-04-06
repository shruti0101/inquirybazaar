import { connectDB } from "@/lib/db";
import Hero from "@/models/Hero";

export async function GET() {
  try {
    await connectDB();

    let data = await Hero.findOne();

    
    if (!data) {
      return Response.json({
        content: {
          categories: [],
          banners: [],
        },
      });
    }

    return Response.json(data);
  } catch (error) {
    console.log("GET ERROR:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const updated = await Hero.findOneAndUpdate(
      {},
      { content: body },
      { upsert: true, new: true }
    );

    return Response.json(updated);
  } catch (error) {
    console.log("POST ERROR:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}