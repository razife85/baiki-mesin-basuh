"use client";

export default function BrandSlider() {
  const brands = [
    "Samsung",
    "LG",
    "Panasonic",
    "Sharp",
    "Toshiba",
    "Midea",
    "Haier",
    "Hisense",
  ];

  return (
    <section className="py-20 bg-blue-700 overflow-hidden">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Jenama Yang Kami Servis
      </h2>

      <div className="overflow-hidden whitespace-nowrap">

        <div className="inline-block animate-marquee">

          {[...brands, ...brands].map((brand, index) => (

            <span
              key={index}
              className="inline-flex items-center justify-center bg-white rounded-xl shadow-lg mx-4 px-10 py-6 text-2xl font-bold text-blue-700"
            >
              {brand}
            </span>

          ))}

        </div>

      </div>

    </section>
  );
}