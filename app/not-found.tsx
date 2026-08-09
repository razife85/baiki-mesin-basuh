export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-blue-700">
        404
      </h1>

      <p className="mt-4 text-xl">
        Halaman tidak dijumpai.
      </p>

      <a
        href="/"
        className="mt-8 bg-blue-700 text-white px-8 py-4 rounded-full"
      >
        Kembali ke Laman Utama
      </a>
    </div>
  );
}