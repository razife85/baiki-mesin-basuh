"use client";

import {
  Wrench,
  Droplets,
  Refrigerator,
  Settings,
  ShieldCheck,
  Truck,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Wrench size={45} />,
      title: "Mesin Basuh Tak Spin",
      desc: "Pembaikan motor, belt, clutch dan PCB.",
    },
    {
      icon: <Droplets size={45} />,
      title: "Mesin Basuh Bocor",
      desc: "Baiki kebocoran hose, pam dan drum.",
    },
    {
      icon: <Refrigerator size={45} />,
      title: "Peti Sejuk Tak Sejuk",
      desc: "Compressor, gas, thermostat dan fan.",
    },
    {
      icon: <Settings size={45} />,
      title: "Tukar Spare Part",
      desc: "Menggunakan alat ganti berkualiti.",
    },
    {
      icon: <Truck size={45} />,
      title: "Servis Ke Rumah",
      desc: "Terus ke rumah pelanggan.",
    },
    {
      icon: <Clock size={45} />,
      title: "Respon Pantas",
      desc: "Temujanji secepat mungkin.",
    },
    {
      icon: <ShieldCheck size={45} />,
      title: "Kerja Berkualiti",
      desc: "Diagnosis yang teliti dan kemas.",
    },
    {
      icon: <CheckCircle size={45} />,
      title: "Pelbagai Jenama",
      desc: "LG, Samsung, Panasonic, Sharp, Hitachi dan lain-lain.",
    },
  ];

  return (
    <section
      id="services"
      className="py-28 bg-gradient-to-b from-white to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-black text-slate-800">
            Perkhidmatan Kami
          </h2>

          <p className="mt-5 text-gray-600 text-xl">
            Servis Profesional Mesin Basuh & Peti Sejuk
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {services.map((item, index) => (

            <div
              key={index}
            >

              <div className="w-20 h-20 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}