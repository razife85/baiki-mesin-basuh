import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        <div>

          <h2 className="text-3xl font-black mb-6">
            Baiki Mesin Basuh
            <br />
            & Peti Sejuk
          </h2>

          <p className="text-gray-400 leading-8">
            Servis membaiki mesin basuh dan peti sejuk
            sekitar Rawang, Sungai Buloh, Kundang,
            Kuang, Ijok, Selayang dan Gombak sejak 2016.
          </p>

        </div>

        <div>

          <h3 className="text-2xl font-bold mb-6">
            Quick Links
          </h3>

          <div className="space-y-4">

            <a href="#home" className="block hover:text-cyan-300">
              Home
            </a>

            <a href="#about" className="block hover:text-cyan-300">
              About
            </a>

            <a href="#services" className="block hover:text-cyan-300">
              Services
            </a>

            <a href="#gallery" className="block hover:text-cyan-300">
              Gallery
            </a>

            <a href="#contact" className="block hover:text-cyan-300">
              Contact
            </a>

          </div>

        </div>

        <div>

          <h3 className="text-2xl font-bold mb-6">
            Hubungi Kami
          </h3>

          <div className="space-y-5">

            <p className="flex items-center gap-3">
              <FaPhoneAlt />
              013-6642601
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope />
              mrazif07@gmail.com
            </p>

            <p className="flex items-center gap-3">
              <FaMapMarkerAlt />
              Rawang, Selangor
            </p>

            <a
              href="https://wa.me/60136642601"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-bold mt-4"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

          </div>

        </div>

        <div>

          <h3 className="text-2xl font-bold mb-6">
            Follow Kami
          </h3>

          <div className="flex gap-4">

            <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:scale-110 duration-300">
              <FaFacebookF />
            </div>

            <div className="w-14 h-14 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer hover:scale-110 duration-300">
              <FaInstagram />
            </div>

            <div className="w-14 h-14 rounded-full bg-black border flex items-center justify-center cursor-pointer hover:scale-110 duration-300">
              <FaTiktok />
            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-800 py-8 text-center text-gray-400">

        © 2026 Baiki Mesin Basuh & Peti Sejuk.
        All Rights Reserved.

      </div>

    </footer>
  );
}