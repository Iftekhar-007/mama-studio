"use client";

import { useState } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

export default function AddProductForm() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    images: [null, null], // 2 images
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const newImages = [...form.images];
      newImages[index] = reader.result;
      setForm({ ...form, images: newImages });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to add product");

      toast.success("Product added successfully!");
      setForm({ name: "", category: "", price: "", images: [null, null] });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-lg mx-auto p-4 border rounded shadow">
        <Toaster position="top-right" />
        <h2 className="text-2xl font-bold mb-4">Add Product</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Furniture Name"
            required
            className="p-2 border rounded"
          />
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category (chair/bed/table)"
            required
            className="p-2 border rounded"
          />
          <input
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            required
            className="p-2 border rounded"
          />

          {/* Image Fields */}
          {[0, 1].map((i) => (
            <div key={i} className="flex flex-col gap-1">
              <input
                type="file"
                accept="image/*"
                placeholder="image"
                onChange={(e) => handleImageChange(i, e)}
                required
              />
              {form.images[i] && (
                <Image
                  src={form.images[i]}
                  alt={`Preview ${i + 1}`}
                  width={200}
                  height={200}
                  className="border rounded"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="p-2 bg-black text-white rounded flex justify-center items-center"
          >
            {loading ? (
              <span className="animate-spin h-5 w-5 border-4 border-white border-t-transparent rounded-full"></span>
            ) : (
              "Add Product"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
