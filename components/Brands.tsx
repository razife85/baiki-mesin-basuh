export default function Brands() {
  const brands = [
    "Panasonic",
    "Samsung",
    "Sharp",
    "Hisense",
    "TCL",
    "Toshiba",
    "Midea",
    "Haier",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Jenama Yang Kami Servis
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl shadow-md p-8 text-center hover:bg-blue-700 hover:text-white duration-300"
            >
              <h3 className="text-2xl font-bold">
                {brand}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}