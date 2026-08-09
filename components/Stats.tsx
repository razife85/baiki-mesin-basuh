"use client";

import CountUp from "react-countup";
import {
  Users,
  Wrench,
  BadgeCheck,
  Clock3,
} from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <Users size={45} />,
      value: 3000,
      title: "Pelanggan",
      color: "from-blue-600 to-cyan-500",
    },
    {
      icon: <Wrench size={45} />,
      value: 5000,
      title: "Mesin Dibaiki",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Clock3 size={45} />,
      value: 10,
      title: "Tahun Pengalaman",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <BadgeCheck size={45} />,
      value: 99,
      title: "Kepuasan (%)",
      color: "from-purple-600 to-pink-500",
    },
  ];

  return (
    <section className="py-24 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl bg-white shadow-xl hover:shadow-2xl hover:-translate-y-3 duration-300 p-8"
            >

              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.color} text-white flex items-center justify-center mb-6`}
              >
                {item.icon}
              </div>

              <h2 className="text-5xl font-black text-slate-800">

                <CountUp
                  end={item.value}
                  duration={3}
                />

                +

              </h2>

              <p className="mt-4 text-gray-600 text-lg">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}