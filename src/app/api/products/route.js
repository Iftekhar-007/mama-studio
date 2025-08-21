import dbConnect from "@/lib/dbConnect";

export async function GET() {
  const collection = await dbConnect("furnitures");
  const furnitures = await collection.find({}).toArray();

  return Response.json(furnitures);
}

export async function POST(request) {
  const body = await request.json();
  const collection = await dbConnect("furnitures");
  const result = await collection.insertOne(body);

  return Response.json({ message: "Furniture added!", result });
}
