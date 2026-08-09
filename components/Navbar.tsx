"use client";

import { useState } from "react";
import { Menu, X, Wrench } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <a href="#home" className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white">
            <Wrench size={24} />
          </div>

          <div>
            <h1 className="font-bold text-xl text-blue-700">
              Baiki Mesin Basuh
            </h1>

            <p className="text-xs text-gray-500">
              & Peti Sejuk
            </p>
          </div>

        </a>

        <nav className="hidden lg:flex items-center gap-10">

          {menu.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-semibold hover:text-blue-700 duration-300"
            >
              {item.name}
            </a>
          ))}

        </nav>

        <div className="hidden lg:flex">

          <a
            href="https://wa.me/60136642601"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold shadow-lg"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {open && (
        <div className="lg:hidden bg-white border-t">

          {menu.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 border-b hover:bg-blue-50"
            >
              {item.name}
            </a>
          ))}

          <div className="p-6">

            <a
              href="https://wa.me/60136642601"
              className="w-full flex justify-center items-center gap-2 bg-green-500 text-white py-3 rounded-full"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

          </div>

        </div>
      )}
    </header>
  );
}