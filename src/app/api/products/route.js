// import dbConnect from "@/lib/dbConnect";

// export async function GET() {
//   const collection = await dbConnect("furnitures");
//   const furnitures = await collection.find({}).toArray();

//   return Response.json(furnitures);
// }

// export async function POST(request) {
//   const body = await request.json();
//   const collection = await dbConnect("furnitures");
//   const result = await collection.insertOne(body);

//   return Response.json({ message: "Furniture added!", result });
// }

import dbConnect from "@/lib/dbConnect";

export async function GET(request) {
  const collection = await dbConnect("furnitures");

  // Get limit from query parameter
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get("limit")) || 0; // default 0 means no limit

  // Fetch data with limit
  let furnitures;
  if (limit > 0) {
    furnitures = await collection.find({}).limit(limit).toArray();
  } else {
    furnitures = await collection.find({}).toArray();
  }

  return Response.json(furnitures);
}

export async function POST(request) {
  const body = await request.json();
  const collection = await dbConnect("furnitures");
  const result = await collection.insertOne(body);

  return Response.json({ message: "Furniture added!", result });
}
