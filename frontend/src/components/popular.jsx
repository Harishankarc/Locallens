import PopularCard from "./popularcard";

export default function Popular() {
  return (
    <div
      className="md:min-h-screen text-white py-16  md:px-6"
      id="popular"
    >
      <h1 className="text-4xl md:text-6xl mb-12 text-center">
          Popular Services
        </h1>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-9xl mx-auto px-4">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <PopularCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
