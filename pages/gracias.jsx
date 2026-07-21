const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdXViiG7TIRQaDPTmqcUN85SN0z83PqS_2gT4PwTv8WDBqt_A/viewform";

const CALENDAR_URL =
  "https://calendar.app.google/iYPBhtw8nqcWPxyG7";

const Gracias = () => {
  return (
    <>
      <main className="gracias">
        <section className="contenido">
          <div className="check-wrapper" aria-hidden="true">
            <div className="check">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12.5L9.3 16.5L19 7"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <p className="confirmado">Pago confirmado</p>

          <h1>¡Todo salió perfecto!</h1>

          <p className="descripcion">
            Gracias por adquirir tu programa con Naty. Agendá tu llamada inicial
            y luego completá el formulario para preparar tu proceso.
          </p>

          <div className="pasos">
            <article className="tarjeta llamada">
              <div className="tarjeta-superior">
                <span className="etiqueta etiqueta-azul">
                  Primer paso
                </span>

                <span className="numero">01</span>
              </div>

              <div className="texto-tarjeta">
                <h2>Agendá tu llamada</h2>

                <p>
                  Elegí el día y la hora que mejor te funcionen para tener tu
                  llamada inicial con Naty.
                </p>
              </div>

              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="boton boton-azul"
              >
                <span>Agendar mi llamada</span>

                <svg
                  className="flecha"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12H19M13 6L19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </article>

            <article className="tarjeta formulario">
              <div className="tarjeta-superior">
                <span className="etiqueta etiqueta-rosa">
                  Segundo paso
                </span>

                <span className="numero">02</span>
              </div>

              <div className="texto-tarjeta">
                <h2>Completá tu formulario</h2>

                <p>
                  Contanos un poco sobre vos, tus objetivos y la información
                  necesaria para preparar tu proceso.
                </p>
              </div>

              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="boton boton-rosa"
              >
                <span>Llenar formulario</span>

                <svg
                  className="flecha"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12H19M13 6L19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </article>
          </div>

          <p className="nota">
            <span className="punto" />

            Primero reservá tu horario y después completá el formulario antes
            de tu llamada con Naty.
          </p>
        </section>
      </main>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .gracias {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 22px;
          background:
            radial-gradient(
              circle at 10% 20%,
              #e4f8fa,
              transparent 28%
            ),
            radial-gradient(
              circle at 90% 80%,
              #fbeae6,
              transparent 30%
            ),
            #fbfefe;
          font-family: inherit;
        }

        .contenido {
          width: 100%;
          max-width: 980px;
          text-align: center;
        }

        .check-wrapper {
          width: 74px;
          height: 74px;
          display: grid;
          place-items: center;
          margin: 0 auto 18px;
          border: 1px solid rgba(43, 166, 179, 0.15);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.75);
          box-shadow:
            0 16px 38px rgba(43, 166, 179, 0.14),
            inset 0 0 0 6px rgba(255, 255, 255, 0.7);
        }

        .check {
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: linear-gradient(145deg, #43bdc8, #248f9a);
          color: #ffffff;
          box-shadow:
            0 12px 26px rgba(43, 166, 179, 0.3),
            inset 0 1px 1px rgba(255, 255, 255, 0.35);
        }

        .confirmado {
          margin: 0 0 10px;
          color: #2999a4;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
        }

        h1 {
          margin: 0;
          color: #171b1d;
          font-size: clamp(40px, 6vw, 66px);
          line-height: 1.05;
          letter-spacing: -3px;
        }

        .descripcion {
          max-width: 650px;
          margin: 18px auto 34px;
          color: #697376;
          font-size: 18px;
          line-height: 1.65;
        }

        .pasos {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          align-items: stretch;
          gap: 22px;
        }

        .tarjeta {
          display: flex;
          flex-direction: column;
          padding: 26px;
          border-radius: 26px;
          text-align: left;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .tarjeta:hover {
          transform: translateY(-5px);
        }

        .llamada {
          border: 1px solid #cceef1;
          background: linear-gradient(145deg, #ffffff, #f0fbfc);
          box-shadow: 0 18px 45px rgba(43, 166, 179, 0.12);
        }

        .formulario {
          border: 1px solid #f3d9d3;
          background: linear-gradient(145deg, #ffffff, #fff5f2);
          box-shadow: 0 18px 45px rgba(185, 119, 104, 0.1);
        }

        .tarjeta-superior {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          margin-bottom: 22px;
        }

        .etiqueta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 9px 18px;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.7px;
          text-align: center;
          text-transform: uppercase;
        }

        .etiqueta-azul {
          background: #dff5f7;
          color: #258e98;
        }

        .etiqueta-rosa {
          background: #fae7e2;
          color: #b06f61;
        }

        .numero {
          position: absolute;
          top: 50%;
          right: 0;
          color: #a4adaf;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          transform: translateY(-50%);
        }

        .texto-tarjeta {
          margin-bottom: 22px;
        }

        h2 {
          margin: 0 0 10px;
          color: #202527;
          font-size: 25px;
          line-height: 1.2;
          letter-spacing: -1px;
        }

        .texto-tarjeta p {
          margin: 0;
          color: #6c7679;
          font-size: 15.5px;
          line-height: 1.65;
        }

        .boton {
          min-height: 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-top: auto;
          padding: 15px 20px;
          border-radius: 15px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            background-color 0.2s ease;
        }

        .flecha {
          flex-shrink: 0;
          display: block;
          transition: transform 0.2s ease;
        }

        .boton:hover {
          transform: translateY(-2px);
        }

        .boton:hover .flecha {
          transform: translateX(3px);
        }

        .boton-azul {
          background: #2ba6b3;
          color: white;
          box-shadow: 0 12px 25px rgba(43, 166, 179, 0.22);
        }

        .boton-azul:hover {
          background: #258f99;
          box-shadow: 0 15px 30px rgba(43, 166, 179, 0.28);
        }

        .boton-rosa {
          background: #c98273;
          color: white;
          box-shadow: 0 12px 25px rgba(201, 130, 115, 0.2);
        }

        .boton-rosa:hover {
          background: #b87466;
          box-shadow: 0 15px 30px rgba(201, 130, 115, 0.25);
        }

        .boton:focus-visible {
          outline: 3px solid rgba(43, 166, 179, 0.2);
          outline-offset: 4px;
        }

        .nota {
          max-width: 720px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin: 24px auto 0;
          color: #778184;
          font-size: 13px;
          line-height: 1.6;
        }

        .punto {
          flex: 0 0 auto;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2ba6b3;
        }

        @media (max-width: 750px) {
          .gracias {
            align-items: flex-start;
            padding: 40px 16px;
          }

          h1 {
            font-size: 43px;
            letter-spacing: -2px;
          }

          .descripcion {
            margin-bottom: 28px;
            font-size: 16px;
          }

          .pasos {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .tarjeta {
            padding: 24px;
          }

          .texto-tarjeta {
            margin-bottom: 20px;
          }

          .nota {
            align-items: flex-start;
            padding: 0 8px;
            text-align: left;
          }

          .punto {
            margin-top: 7px;
          }
        }

        @media (max-width: 420px) {
          .gracias {
            padding: 34px 14px;
          }

          .check-wrapper {
            width: 68px;
            height: 68px;
          }

          .check {
            width: 52px;
            height: 52px;
          }

          h1 {
            font-size: 37px;
          }

          .descripcion {
            font-size: 15.5px;
          }

          .tarjeta {
            padding: 21px;
            border-radius: 22px;
          }

          .tarjeta-superior {
            margin-bottom: 19px;
          }

          .etiqueta {
            min-height: 39px;
            padding: 8px 15px;
            font-size: 9px;
          }

          .numero {
            right: 2px;
            font-size: 10px;
          }

          h2 {
            font-size: 23px;
          }

          .boton {
            min-height: 54px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tarjeta,
          .boton,
          .flecha {
            transition: none;
          }

          .tarjeta:hover,
          .boton:hover,
          .boton:hover .flecha {
            transform: none;
          }
        }
      `}</style>
    </>
  );
};

export default Gracias;