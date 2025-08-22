// import dbConnect from "@/lib/dbConnect";
// import { ObjectId } from "mongodb";
// import React from "react";

// const ProductDetails = async ({ params }) => {
//   const { id } = params;
//   const furnturesCollection = dbConnect("furnitures");
//   const data = await furnturesCollection.findOne({ _id: new ObjectId(id) });

//   return (
//     <div>
//       <h2>Details here{data.name}</h2>
//     </div>
//   );
// };

// export default ProductDetails;

import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import React from "react";

const ProductDetails = async ({ params }) => {
  const { id } = params;

  // await for dbConnect
  const furnturesCollection = await dbConnect("furnitures");

  // findOne
  const data = await furnturesCollection.findOne({ _id: new ObjectId(id) });

  if (!data) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">{data.name}</h2>
      <p className="mb-2">Category: {data.category}</p>
      <p className="mb-2">Price: {data.price} BDT</p>
      {data.images?.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${data.name}-${i}`}
          className="w-full max-w-md mb-4"
        />
      ))}
    </div>
  );
};

export default ProductDetails;
