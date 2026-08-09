"use client";

import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export default function Reviews() {
  const reviews = [
    {
      name: "Ahmad",
      area: "Rawang",
      review: "Servis sangat cepat. Mesin basuh terus berfungsi seperti baru. Sangat berpuas hati.",
    },
    {
      name: "Nurul",
      area: "Sungai Buloh",
      review: "Technician sangat mesra dan harga berpatutan. Memang recommended.",
    },
    {
      name: "Hafiz",
      area: "Kundang",
      review: "Peti sejuk siap dibaiki pada hari yang sama. Sangat profesional.",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-slate-100 to-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-black text-slate-800">
            Apa Kata Pelanggan
          </h2>

          <p className="mt-5 text-xl text-gray-600">
            Kepuasan pelanggan adalah keutamaan kami.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {reviews.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >

              <FaQuoteLeft className="text-5xl text-blue-600 mb-6"/>

              <div className="flex text-yellow-400 mb-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-600 leading-8 italic">
                "{item.review}"
              </p>

              <hr className="my-6"/>

              <h3 className="font-bold text-xl">
                {item.name}
              </h3>

              <p className="text-gray-500">
                {item.area}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}