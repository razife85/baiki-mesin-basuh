"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-blue-600 text-white"
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-green-500 px-5 py-2 rounded-full font-semibold inline-block">
            ✔ Servis Profesional Sejak 2016
          </span>

          <h1 className="text-5xl lg:text-7xl font-black mt-8 leading-tight">
            Baiki
            <span className="text-cyan-300">
              {" "}Mesin Basuh
            </span>
            <br />
            & Peti Sejuk
          </h1>

          <p className="text-xl text-gray-200 mt-8 leading-9">
            Servis ke rumah sekitar Rawang, Sungai Buloh,
            Kundang, Kuang, Ijok, Selayang dan Gombak.
            Pemeriksaan pantas dengan harga berpatutan.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="https://wa.me/60136642601"
              className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full flex items-center gap-3 text-lg font-bold shadow-xl"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <a
              href="tel:0136642601"
              className="border-2 border-white px-8 py-4 rounded-full flex items-center gap-3 text-lg font-bold hover:bg-white hover:text-blue-700"
            >
              <FaPhoneAlt />
              Hubungi
            </a>

          </div>

          <div className="grid grid-cols-3 gap-6 mt-16">

            <div>
              <h2 className="text-4xl font-bold text-cyan-300">
                2016
              </h2>

              <p>Sejak</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-cyan-300">
                3000+
              </h2>

              <p>Pelanggan</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-cyan-300">
                5000+
              </h2>

              <p>Pembaikan</p>
            </div>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <Image
            src="/images/hero.png"
            alt="Technician"
            width={650}
            height={650}
            priority
            className="rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,.45)] hover:scale-105 duration-500"
          />
        </motion.div>

      </div>
    </section>
  );
}