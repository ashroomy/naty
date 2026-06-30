const Gracias = () => {
  return (
    <main className="min-h-screen bg-[#F8FCFD] relative overflow-hidden flex items-center justify-center px-6 py-16">
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-[#F4E5E2] rounded-full blur-3xl opacity-80"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[360px] h-[360px] bg-[#DFF4F7] rounded-full blur-3xl opacity-90"></div>

      <section className="relative max-w-2xl w-full bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] px-8 py-12 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#F4E5E2] border-4 border-white shadow-lg">
          <span className="text-4xl text-black">✓</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-black mb-5 leading-tight">
          ¡Pago realizado <br className="hidden md:block" />
          con éxito!
        </h1>

        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-px w-20 bg-[#F4C9D4]"></span>
          <span className="text-[#F4AFC0] text-xl"></span>
          <span className="h-px w-20 bg-[#F4C9D4]"></span>
        </div>

        <p className="text-gray-600 text-lg md:text-xl max-w-lg mx-auto mb-9 leading-relaxed">
          Gracias por adquirir el programa. Ahora podés agendar tu llamada inicial con Naty.
        </p>

        <a
          href="https://calendar.app.google/iYPBhtw8nqcWPxyG7"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-4 rounded-full bg-[#F28EA6] px-8 py-4 text-white font-semibold text-lg shadow-[0_12px_30px_rgba(242,142,166,0.35)] hover:scale-[1.02] hover:bg-[#ef7f9b] transition-all duration-300"
        >
          <span>Agendar mi llamada</span>
          <span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </a>
      </section>
    </main>
  );
};

export default Gracias;