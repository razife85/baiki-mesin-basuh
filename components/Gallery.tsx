"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

export default function Gallery() {
  const images = [
    "/images/gallery1.png",
    "/images/gallery2.png",
    "/images/gallery3.png",
    "/images/1.png",
    "/images/gallery5.png",
    "/images/gallery6.png",
    "/images/gallery7.png",
    "/images/gallery8.png",
  ];

  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <section
        id="gallery"
        className="py-28 bg-slate-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-black">
              Galeri Kami
            </h2>

            <p className="text-gray-300 mt-5 text-xl">
              Antara kerja pembaikan yang telah disiapkan.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {images.map((image, index) => (

              <motion.div
                whileHover={{ scale: 1.05 }}
                key={index}
                onClick={() => setSelected(image)}
                className="cursor-pointer overflow-hidden rounded-3xl"
              >

                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  width={500}
                  height={500}
                  className="h-80 w-full object-cover duration-500 hover:scale-110"
                />

              </motion.div>

            ))}

          </div>

        </div>
      </section>

      {selected && (

        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-6"
        >

          <button
            className="absolute top-8 right-8 text-white"
          >
            <X size={40} />
          </button>

          <Image
            src={selected}
            alt=""
            width={900}
            height={900}
            className="rounded-3xl max-h-[90vh] object-contain"
          />

        </div>

      )}

    </>
  );
}