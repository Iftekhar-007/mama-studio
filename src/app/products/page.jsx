import Link from "next/link";
import React from "react";

const ProductsAll = async () => {
  const res = await fetch("http://localhost:3001/api/products", {
    cache: "no-store",
  });
  const products = await res.json();

  return (
    <div className="max-w-7xl mx-auto p-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-[Inter] font-normal p-8 text-center">
        All Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <div key={product._id} className="card shadow-sm group">
            <figure className="relative overflow-hidden h-64 w-full">
              <img
                src={product.images?.[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              {product.images?.[1] && (
                <img
                  src={product.images[1]}
                  alt={product.name}
                  className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              )}
            </figure>

            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>Category: {product.category}</p>
              <p>Price: {product.price} BDT</p>
              <div className="card-actions justify-end">
                <Link
                  href={`/products/${product._id}`}
                  className="btn bg-black text-white"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsAll;
