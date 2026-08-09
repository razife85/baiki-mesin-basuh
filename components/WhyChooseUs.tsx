export default function WhyChooseUs() {
  const items = [
    {
      title: "Berpengalaman",
      desc: "Membaiki mesin basuh & peti sejuk sejak 2016.",
      icon: "🛠️",
    },
    {
      title: "Servis Ke Rumah",
      desc: "Kami datang terus ke lokasi anda.",
      icon: "🚐",
    },
    {
      title: "Harga Berpatutan",
      desc: "Harga telus dan berbaloi.",
      icon: "💰",
    },
    {
      title: "Pelbagai Jenama",
      desc: "LG, Samsung, Panasonic, Toshiba, Sharp, Hitachi dan lain-lain.",
      icon: "⭐",
    },
  ];

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Kenapa Pilih Kami?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 duration-300"
            >
              <div className="text-6xl mb-5">{item.icon}</div>

              <h3 className="text-2xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}