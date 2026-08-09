import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <Image
            src="/images/about.png"
            alt="Technician"
            width={600}
            height={600}
            className="rounded-2xl shadow-xl w-full"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-700 mb-6">
            Tentang Kami
          </h2>

          <p className="text-lg leading-8 text-gray-700 mb-6">
            Kami menyediakan servis membaiki mesin basuh dan peti sejuk sejak
            tahun 2016. Berpengalaman membaiki pelbagai jenama dengan servis
            pantas, harga berpatutan dan terus ke rumah pelanggan.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold text-blue-700">2016</h3>
              <p>Bermula</p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold text-blue-700">8+</h3>
              <p>Jenama</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}