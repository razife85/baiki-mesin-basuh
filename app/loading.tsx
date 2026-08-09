export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">

      <div className="text-center">

        <div className="w-20 h-20 border-8 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <h2 className="mt-6 text-2xl font-bold text-blue-700">
          Baiki Mesin Basuh & Peti Sejuk
        </h2>

        <p className="mt-2 text-gray-600">
          Loading...
        </p>

      </div>

    </div>
  );
}