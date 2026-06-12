

import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import SearchHistory from "@/models/SearchHistory";

export async function POST(req) {
  try {
    await connectDB();

    const { userId, keyword } =
      await req.json();

    await SearchHistory.create({
      userId,
      keyword,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}