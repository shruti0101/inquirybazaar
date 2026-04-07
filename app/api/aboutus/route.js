import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import About from "@/models/about";

// GET About Us content
export async function GET() {
  await connectDB();
  const about = await About.findOne();
  return NextResponse.json({ content: about?.content || "" });
}

// UPDATE About Us content
export async function POST(req) {
  await connectDB();
  const { content } = await req.json();

  let about = await About.findOne();

  if (about) {
    about.content = content;
    await about.save();
  } else {
    about = await About.create({ content });
  }

  return NextResponse.json({ success: true });
}