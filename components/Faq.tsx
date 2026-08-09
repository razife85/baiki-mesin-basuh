"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const faq = [
    {
      q: "Berapa lama proses membaiki mesin?",
      a: "Kebanyakan kerosakan dapat disiapkan pada hari yang sama bergantung kepada alat ganti.",
    },
    {
      q: "Adakah anda datang ke rumah pelanggan?",
      a: "Ya. Kami menyediakan servis ke rumah sekitar Rawang, Sungai Buloh, Kundang, Kuang, Ijok, Selayang dan Gombak.",
    },
    {
      q: "Jenama apa yang diterima?",
      a: "Samsung, LG, Panasonic, Sharp, Toshiba, Hitachi, Midea, Haier dan lain-lain.",
    },
    {
      q: "Bagaimana hendak membuat tempahan?",
      a: "Isi borang tempahan atau klik butang WhatsApp di website ini.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-black text-slate-800">
            Soalan Lazim
          </h2>

          <p className="mt-5 text-xl text-gray-600">
            Antara soalan yang sering ditanya pelanggan.
          </p>

        </div>

        <div className="space-y-5">

          {faq.map((item, index) => (

            <div
              key={index}
              className="border rounded-2xl overflow-hidden shadow-lg"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 bg-white text-left"
              >

                <span className="font-bold text-lg">
                  {item.q}
                </span>

                <ChevronDown
                  className={`duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (

                <div className="px-6 pb-6 text-gray-600 leading-8">

                  {item.a}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}