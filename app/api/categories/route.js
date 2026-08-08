import { connectDB } from "@/lib/db";
import Category from "@/models/categories";
import { uploadToR2 } from "@/utils/uploadToR2";
import { deleteFromR2 } from "@/utils/deleteFromR2";

// ✅ GET
export async function GET() {
  await connectDB();

  const data = await Category.findOne();

  if (!data) {
    return Response.json({
      content: { products: [] },
    });
  }

  return Response.json(data);
}

// ✅ POST (FormData + R2 utils)
export async function POST(req) {
  await connectDB();

  try {
    const formData = await req.formData();

    const products = [];
    let i = 0;

    while (formData.has(`products[${i}][name]`)) {
      const name = formData.get(`products[${i}][name]`);
      const price = formData.get(`products[${i}][price]`);
      const reviews = formData.get(`products[${i}][reviews]`);
      const badge = formData.get(`products[${i}][badge]`);
      const extra = formData.get(`products[${i}][extra]`);
      const URL = formData.get(`products[${i}][URL]`);

      let image = formData.get(`products[${i}][image]`);
      let imageFileId = formData.get(`products[${i}][imageFileId]`);
      const file = formData.get(`products[${i}][file]`);

      // ✅ If new file → upload using util
      if (file && file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer());

        const { url, key } = await uploadToR2({
          file: buffer,
          fileName: file.name,
          contentType: file.type,
          folder: "categories",
        });

        // ❗ delete old image (important)
        if (imageFileId) {
          await deleteFromR2(imageFileId);
        }

        image = url;
        imageFileId = key;
      }

      products.push({
        name,
        price,
        reviews,
        badge,
        extra,
        URL,
        image,
        imageFileId,
      });

      i++;
    }

    const updated = await Category.findOneAndUpdate(
      {},
      { content: { products } },
      { upsert: true, new: true }
    );

    return Response.json(updated);
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}