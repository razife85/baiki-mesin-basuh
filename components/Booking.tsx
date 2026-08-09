"use client";

import { useState } from "react";
import {
  User,
  Phone,
  MapPin,
  Wrench,
  MessageSquare,
  Send,
} from "lucide-react";

export default function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [brand, setBrand] = useState("");
  const [problem, setProblem] = useState("");

  const sendWhatsapp = () => {
    const message = `*TEMPAHAN SERVIS*

👤 Nama: ${name}

📞 Telefon: ${phone}

📍 Lokasi: ${location}

🏷️ Jenama: ${brand}

🔧 Masalah:
${problem}`;

    window.open(
      `https://wa.me/60136642601?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      id="booking"
      className="py-28 bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center text-white mb-14">

          <h2 className="text-5xl font-black">
            Tempah Servis
          </h2>

          <p className="mt-5 text-xl text-blue-100">
            Isi maklumat dan hantar terus ke WhatsApp.
          </p>

        </div>

        <div className="bg-white rounded-[35px] shadow-2xl p-10">

          <div className="grid md:grid-cols-2 gap-6">

            <div className="relative">

              <User className="absolute left-4 top-4 text-blue-700"/>

              <input
                type="text"
                placeholder="Nama"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="w-full border rounded-xl py-4 pl-14 pr-4"
              />

            </div>

            <div className="relative">

              <Phone className="absolute left-4 top-4 text-blue-700"/>

              <input
                type="text"
                placeholder="No Telefon"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                className="w-full border rounded-xl py-4 pl-14 pr-4"
              />

            </div>

            <div className="relative">

              <MapPin className="absolute left-4 top-4 text-blue-700"/>

              <input
                type="text"
                placeholder="Lokasi"
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
                className="w-full border rounded-xl py-4 pl-14 pr-4"
              />

            </div>

            <div className="relative">

              <Wrench className="absolute left-4 top-4 text-blue-700"/>

              <input
                type="text"
                placeholder="Jenama Mesin"
                value={brand}
                onChange={(e)=>setBrand(e.target.value)}
                className="w-full border rounded-xl py-4 pl-14 pr-4"
              />

            </div>

          </div>

          <div className="relative mt-6">

            <MessageSquare className="absolute left-4 top-5 text-blue-700"/>

            <textarea
              rows={6}
              placeholder="Terangkan masalah..."
              value={problem}
              onChange={(e)=>setProblem(e.target.value)}
              className="w-full border rounded-xl py-4 pl-14 pr-4"
            />

          </div>

          <button
            onClick={sendWhatsapp}
            className="mt-8 w-full bg-green-500 hover:bg-green-600 text-white py-5 rounded-xl font-bold text-xl flex justify-center items-center gap-3"
          >
            <Send size={22}/>
            Hantar Ke WhatsApp
          </button>

        </div>

      </div>
    </section>
  );
}