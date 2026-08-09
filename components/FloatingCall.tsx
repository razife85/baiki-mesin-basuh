import { FaPhone } from "react-icons/fa";

export default function FloatingCall() {
  return (
    <a
      href="tel:0136642601"
      className="fixed bottom-6 left-6 bg-blue-600 hover:bg-blue-700 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-2xl z-50"
    >
      <FaPhone />
    </a>
  );
}