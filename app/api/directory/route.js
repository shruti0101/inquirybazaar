import { connectDB } from "@/lib/db";
import Directory from "@/models/directory";

export async function GET() {
  try {
    await connectDB();

    const data = await Directory.find();

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

    const created = await Directory.create({
      content: {
        title: body.title || "",
        image: body.image || "",
        sections: body.sections || [],
      },
    });

    return Response.json(created);
  } catch (error) {
    console.log("POST ERROR:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    await connectDB();

    const body = await req.json();

    const updated = await Directory.findByIdAndUpdate(
      body._id,
      { content: body.content },
      { returnDocument: "after" }
    );

    return Response.json(updated);
  } catch (error) {
    console.log("PUT ERROR:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    await connectDB();

    const { id } = await req.json();

    await Directory.findByIdAndDelete(id);

    return Response.json({ message: "Deleted" });
  } catch (error) {
    console.log("DELETE ERROR:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}