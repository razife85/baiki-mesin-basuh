"use client";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-black">
            Hubungi Kami
          </h2>

          <p className="mt-5 text-xl text-gray-300">
            Hubungi kami sekarang untuk pemeriksaan dan pembaikan.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          <div className="space-y-8">

            <div className="flex gap-5 items-start">

              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center">
                <FaPhoneAlt />
              </div>

              <div>
                <h3 className="font-bold text-2xl">
                  Telefon
                </h3>

                <p className="text-gray-300 mt-2">
                  013-6642601
                </p>

              </div>

            </div>

            <div className="flex gap-5 items-start">

              <div className="w-16 h-16 rounded-2xl bg-green-600 flex items-center justify-center">
                <FaWhatsapp />
              </div>

              <div>
                <h3 className="font-bold text-2xl">
                  WhatsApp
                </h3>

                <a
                  href="https://wa.me/60136642601"
                  className="text-green-400 mt-2 inline-block"
                >
                  Chat Sekarang
                </a>

              </div>

            </div>

            <div className="flex gap-5 items-start">

              <div className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="font-bold text-2xl">
                  Kawasan Servis
                </h3>

                <p className="text-gray-300 mt-2">
                  Rawang • Sungai Buloh • Kundang • Kuang •
                  Ijok • Selayang • Gombak
                </p>

              </div>

            </div>

            <div className="flex gap-5 items-start">

              <div className="w-16 h-16 rounded-2xl bg-yellow-500 flex items-center justify-center">
                <FaClock />
              </div>

              <div>
                <h3 className="font-bold text-2xl">
                  Waktu Operasi
                </h3>

                <p className="text-gray-300 mt-2">
                  Isnin - Ahad
                </p>

                <p className="text-gray-300">
                  8:00 AM - 8:00 PM
                </p>

              </div>

            </div>

          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">

            <iframe
              src="https://www.google.com/maps?q=Rawang,Selangor&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              allowFullScreen
            />

          </div>

        </div>

      </div>
    </section>
  );
}