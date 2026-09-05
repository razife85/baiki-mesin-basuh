"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsapp() {
  const handleWhatsAppClick = () => {
    const dataLayer = (window as typeof window & {
      dataLayer?: Record<string, unknown>[];
    }).dataLayer;

    if (dataLayer) {
      dataLayer.push({
        event: "whatsapp_click",
      });
    }
  };

  return (
    <a
      href="https://wa.me/60136642601"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-4xl z-50"
    >
      <FaWhatsapp />
    </a>
  );
}