"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTopProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scroll =
        document.documentElement.scrollTop || document.body.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setProgress((scroll / height) * 100);
    };

    window.addEventListener("scroll", update);

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-28 right-24 w-16 h-16 rounded-full bg-white shadow-2xl border-4 border-blue-700 text-blue-700 z-50"
      style={{
        background: `conic-gradient(#2563eb ${progress}%, white ${progress}%)`,
      }}
    >
      <FaArrowUp className="mx-auto text-xl" />
    </button>
  );
}