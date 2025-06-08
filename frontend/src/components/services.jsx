export default function Services() {
  const services = [
    { title: "Cleaning", img: "/images/cleaning.png" },
    { title: "Washing", img: "/images/cleaning.png" },
    { title: "Mopping", img: "/images/cleaning.png" },
    { title: "Sanitizing", img: "/images/cleaning.png" },
    { title: "Polishing", img: "/images/cleaning.png" },
    { title: "Dusting", img: "/images/cleaning.png" },
  ];

  return (
    <section
      className="md:min-h-screen text-white py-16 px-6"
      id="explore"
    >
      <h1 className="text-4xl md:text-6xl text-center mb-12">
        Services Provided
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-2xl mx-auto cursor-pointer">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#0a0a0a] hover:scale-105 hover:shadow-2xl transition-transform duration-300 rounded-sm flex flex-col items-center pb-4"
          >
            <img
              src={service.img}
              alt={service.title}
              className="h-48 object-contain rounded-xl mb-2 p-4"
            />
            <h2 className="text-xl font-semibold">{service.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}
