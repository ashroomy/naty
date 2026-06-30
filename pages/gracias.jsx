const Gracias = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #F8FCFD 0%, #F4E5E2 50%, #DFF4F7 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        fontFamily: "inherit",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "620px",
          background: "rgba(255, 255, 255, 0.88)",
          borderRadius: "32px",
          padding: "48px 32px",
          textAlign: "center",
          boxShadow: "0 24px 70px rgba(0,0,0,0.12)",
          border: "1px solid rgba(255,255,255,0.9)",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "#F4E5E2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            fontSize: "40px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          ✓
        </div>

        <h1
          style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            lineHeight: "1.05",
            fontWeight: "800",
            color: "#111",
            marginBottom: "20px",
          }}
        >
          ¡Pago realizado con éxito!
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.6",
            color: "#555",
            maxWidth: "500px",
            margin: "0 auto 34px",
          }}
        >
          Gracias por adquirir el programa. Ahora podés agendar tu llamada inicial con Naty.
        </p>

        <a
          href="https://calendar.app.google/iYPBhtw8nqcWPxyG7"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            background: "#2BA6B3",
            color: "#fff",
            padding: "18px 34px",
            borderRadius: "999px",
            fontSize: "20px",
            fontWeight: "700",
            textDecoration: "none",
            boxShadow: "0 14px 35px rgba(242,142,166,0.45)",
          }}
        >
          Agendar mi llamada <span style={{ fontSize: "26px" }}>→</span>
        </a>
      </section>
    </main>
  );
};

export default Gracias;