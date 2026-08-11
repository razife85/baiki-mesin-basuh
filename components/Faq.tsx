"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const faq = [
    {
      q: "Berapa lama proses membaiki mesin basuh?",
      a: "Kebanyakan kerosakan dapat diperiksa dan dibaiki pada hari yang sama, bergantung kepada jenis kerosakan dan ketersediaan alat ganti.",
    },
    {
      q: "Adakah anda datang ke rumah pelanggan?",
      a: "Ya. Kami menyediakan servis ke rumah sekitar Rawang, Sungai Buloh, Kundang, Kuang, Ijok, Selayang dan Gombak.",
    },
    {
      q: "Jenama mesin basuh dan peti sejuk apa yang diterima?",
      a: "Kami menerima pelbagai jenama seperti Samsung, LG, Panasonic, Sharp, Toshiba, Hitachi, Midea, Haier dan jenama lain.",
    },
    {
      q: "Mesin basuh saya tidak boleh hidup. Boleh dibaiki?",
      a: "Ya. Kami boleh membuat pemeriksaan untuk mengenal pasti punca mesin basuh tidak boleh hidup, termasuk masalah bekalan kuasa, papan kawalan dan komponen berkaitan.",
    },
    {
      q: "Peti sejuk saya tidak sejuk. Boleh datang periksa?",
      a: "Ya. Kami menyediakan servis pemeriksaan dan pembaikan peti sejuk yang tidak sejuk atau mengalami masalah lain.",
    },
    {
      q: "Bagaimana hendak membuat tempahan servis?",
      a: "Anda boleh mengisi borang Tempah Servis di website atau terus klik butang WhatsApp untuk menghubungi kami.",
    },
    {
      q: "Kawasan mana yang anda cover?",
      a: "Kami menyediakan servis sekitar Rawang, Sungai Buloh, Kundang, Kuang, Ijok, Selayang dan Gombak.",
    },
    {
      q: "Adakah pemeriksaan boleh dibuat dahulu sebelum pembaikan?",
      a: "Ya. Pemeriksaan boleh dibuat terlebih dahulu untuk mengenal pasti masalah sebelum pelanggan membuat keputusan untuk meneruskan pembaikan.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
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
              className="border rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-bold text-lg text-slate-800">
                  {item.q}
                </span>

                <ChevronDown
                  className={`duration-300 flex-shrink-0 ${
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