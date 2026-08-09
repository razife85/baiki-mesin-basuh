export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-700 to-cyan-500 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold mb-6">
          Mesin Basuh atau Peti Sejuk Rosak?
        </h2>

        <p className="text-xl mb-10">
          Hubungi kami sekarang untuk pemeriksaan dan pembaikan di rumah anda.
        </p>

        <div className="flex justify-center gap-5 flex-wrap">

          <a
            href="https://wa.me/60136642601"
            className="bg-green-500 hover:bg-green-600 px-10 py-5 rounded-full text-xl font-bold"
          >
            WhatsApp Sekarang
          </a>

          <a
            href="tel:0136642601"
            className="bg-white text-blue-700 px-10 py-5 rounded-full text-xl font-bold"
          >
            Hubungi Sekarang
          </a>

        </div>

      </div>
    </section>
  );
}