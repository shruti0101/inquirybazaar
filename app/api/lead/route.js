import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Lead from "@/models/lead";

export async function POST(req) {
  try {
    const { phone } = await req.json();

    await connectDB();

    const lead = await Lead.create({ phone });

    return NextResponse.json({ success: true, lead });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}