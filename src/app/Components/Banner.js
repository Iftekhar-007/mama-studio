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
    title: "Discover Living Room Chairs",
    description: "Free Standard Shipping.",
    img: chair3,
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#F2F2F2] py-16 relative overflow-x-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-8 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0 absolute inset-0"
          }`}
        >
          {/* Text Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{
              x: index === current ? 0 : 100,
              opacity: index === current ? 1 : 0,
            }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left px-4 sm:px-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-4 font-[Inter] text-black ">
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
            className="flex-1 text-center md:text-left px-4 sm:px-6"
          >
            <Image
              src={slide.img}
              alt={slide.title}
              className="w-full max-w-full md:max-w-[400px] rounded-xl"
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
}
