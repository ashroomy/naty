const Gracias = () => {
  return (
    <main className="min-h-screen bg-[#F4F6FB] flex items-center justify-center px-6 py-16">
      <section className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-8 text-center">
        <h1 className="text-4xl font-bold text-black mb-4">
          ¡Pago realizado con éxito!
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Gracias por adquirir el programa. Ahora podés agendar tu llamada inicial con Naty.
        </p>

        <a
          href="https://calendar.app.google/iYPBhtw8nqcWPxyG7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full rounded-full bg-black px-6 py-4 text-white font-semibold text-lg hover:bg-gray-800 transition"
        >
          Agendar mi llamada
        </a>
      </section>
    </main>
  );
};

export default Gracias;