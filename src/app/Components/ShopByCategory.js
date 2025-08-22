import Image from "next/image";
import chairImg from "../../../public/chair.jpg";
import bedImg from "../../../public/bed.jpg";
import tableImg from "../../../public/table.jpg";
import lampImg from "../../../public/lamp.jpg";

const categories = [
  { name: "Chair", img: chairImg },
  { name: "Bed", img: bedImg },
  { name: "Table", img: tableImg },
  { name: "Lamp", img: lampImg },
];

export default function ShopByCategory() {
  return (
    <div className="w-9/12 mx-auto p-8">
      <h2 className="text-2xl font-normal md:text-3xl lg:text-4xl font-[Inter] pb-6">
        Shop By Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category.name} className="flex items-center p-4">
            {/* Image */}
            <div className="w-28 h-28 flex-shrink-0">
              <Image
                src={category.img}
                alt={category.name}
                className="rounded-full object-cover w-full h-full transform transition duration-300 hover:scale-110 hover:blur-[1px]"
              />
            </div>

            {/* Text */}
            <div className="ml-4">
              <p className="text-xl font-medium text-black font-[Inter]">
                {category.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
