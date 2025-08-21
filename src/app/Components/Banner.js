"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import chair1 from "../../../public/chaire1.jpg";
import chair3 from "../../../public/chair3.png";

const slides = [
  {
    id: 1,
    title: "Chairs & Seatings You'll Love",
    description: "Designer Chair for Every Space",
    img: chair1,
  },
  {
    id: 2,
    title: "Discover Living Room Tables",
    description: "Free Standard Shipping.",
    img: chair3,
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000); // ⬅️ ekhane change korte hobe
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#F2F2F2] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 max-w-6xl mx-auto items-center">
            {/* Text Section */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{
                x: index === current ? 0 : 100,
                opacity: index === current ? 1 : 0,
              }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h2 className="text-3xl md:text-5xl lg:text-7xl text-black font-normal mb-4">
                {slide.title}
              </h2>
              <p className="text-black text-2xl">{slide.description}</p>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: index === current ? 0 : -100,
                opacity: index === current ? 1 : 0,
              }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <Image
                src={slide.img}
                alt={slide.title}
                className="w-[400px] rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      ))}

      {/* Next Button */}
    </div>
  );
}
