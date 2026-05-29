import SectionContainer from "./SectionContainer";
import TypeingAnimation from "./TypeingAnimation";

const About = () => {
  return (
    <SectionContainer name="about">
      <div className="elisc_tm_about w-full float-left pt-0 pb-[60px]">
        <div className="tm_content w-full max-w-[1250px] mx-auto px-[20px]">
          {/* COVER */}
          <div className="about-cover relative mb-0 left-1/2 w-screen -translate-x-1/2 overflow-hidden">
            <img
              src="/assets/img/service/CoverNaty.png"
              alt="Sobre mí"
              className="w-full h-[315px] small:h-[220px] object-cover"
            />

            <div className="absolute inset-0 bg-black/20"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-[58px] small:text-[34px] font-extrabold tracking-[6px] uppercase drop-shadow-lg">
                SOBRE MÍ
              </h2>
            </div>
          </div>

          <div className="w-full bg-white rounded-b-[32px] rounded-t-none px-[38px] pt-[32px] pb-[38px] small:p-[24px] overflow-hidden">
            <div className="grid grid-cols-[38%_62%] small:grid-cols-1 gap-[45px] items-center mb-[28px]">
              <h3 className="font-extrabold text-[40px] small:text-[32px] leading-tight text-[#222]">
                ¡Hola, soy <span className="text-[#2BA6B3]">Naty!</span>
              </h3>

              <div className="bg-[#F4E5E2] rounded-[22px] p-[20px]">
                <p className="text-[18px] small:text-[17px] leading-[1.6] font-bold text-[#C2877E]">
                  Durante más de 15 años he ayudado a personas a volver a
                  moverse con confianza, sin dolor y con propósito.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[38%_62%] small:grid-cols-1 gap-[45px] items-start">
              <div className="w-full">
                <div className="relative">
                  <div className="absolute -top-[20px] -left-[20px] w-[120px] h-[120px] bg-[#E9F9FF] rounded-full -z-[1]"></div>

                  <div className="absolute -bottom-[20px] -right-[15px] w-[90px] h-[90px] bg-[#F4E5E2] rounded-full -z-[1]"></div>

                  <img
                    className="w-full rounded-[32px] object-cover"
                    src="/assets/img/about/Naty1.png"
                    alt="Naty Fonseca"
                  />
                </div>

                <div className="mt-[18px]">
                  <span className="job font-semibold text-[18px] text-[#2BA6B3]">
                    <span className="cd-headline rotate-1">
                      <TypeingAnimation />
                    </span>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="text-[17px] leading-[1.8] text-[#333]">
                  <p className="mb-[18px]">
                    Soy fisioterapeuta y entrenadora personal, apasionada por
                    ayudar a las personas a aprender a entrenar de manera
                    segura, consciente y adaptada a sus necesidades... Mi
                    enfoque combina fisioterapia, fuerza y movimiento para
                    guiarte según tu condición física, historial de lesiones y
                    objetivos, ayudándote a recuperar confianza en tu cuerpo y
                    potenciar tus capacidades.
                  </p>

                  <p className="mb-[28px]">
                    Creo que tener dolor, una lesión o miedo al movimiento no
                    debería limitarte ni alejarte del ejercicio. Al contrario,
                    el entrenamiento bien guiado puede ayudarte a sentirte
                    mejor, disminuir molestias y volver a confiar en todo lo que
                    tu cuerpo es capaz de lograr.
                  </p>

                  <p className="mb-[28px]">
                    Por eso, mi misión es acompañarte paso a paso para que
                    aprendás a moverte mejor, entrenar con seguridad y construir
                    fuerza para toda la vida.
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-block bg-[#2BA6B3] text-white font-semibold px-[30px] py-[13px] rounded-full hover:bg-[#238B96] transition-all"
                >
                  Hablemos
                </a>
              </div>
            </div>

            <div className="mt-[35px] grid grid-cols-4 small:grid-cols-1 gap-[15px]">
              <InfoCard
                number="+15 años"
                text="de experiencia acompañando personas"
              />

              <InfoCard
                number="Integral"
                text="ciencia del movimiento + fuerza consciente"
              />

              <InfoCard
                number="Personalizado"
                text="planes adaptados a cada proceso"
              />

              <InfoCard
                number="Seguro"
                text="prevención, técnica y progreso sostenible"
              />
            </div>
          </div>

          <div className="mission-card w-full bg-[#E8D1CE] rounded-[32px] mt-[28px] py-[28px] px-[35px] small:px-[24px] text-center relative overflow-hidden">
            <div className="mirror mirror-one"></div>
            <div className="mirror mirror-two"></div>
            <div className="shine"></div>

            <h3 className="text-[22px] small:text-[18px] leading-[1.5] font-extrabold text-white max-w-[1000px] mx-auto mb-[14px] relative z-[2]">
              Mi misión es enseñarte a entrenar con confianza, sin importar tu
              punto de partida, para que logrés moverte con libertad, superar
              tus metas y vivir fuerte.
            </h3>

            <img
              className="m-auto w-auto h-[42px] opacity-90 relative z-[2]"
              src="/assets/img/about/logo-white.png"
              alt="Strong Human"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-cover img {
          display: block;
        }

        .mission-card {
          position: relative;
        }

        .mirror {
          position: absolute;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.22);
          filter: blur(35px);
          z-index: 1;
        }

        .mirror-one {
          width: 260px;
          height: 260px;
          top: -120px;
          left: 8%;
          animation: floatOne 7s ease-in-out infinite;
        }

        .mirror-two {
          width: 320px;
          height: 320px;
          bottom: -160px;
          right: 10%;
          animation: floatTwo 9s ease-in-out infinite;
        }

        .shine {
          position: absolute;
          top: 0;
          left: -80%;
          width: 45%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.24),
            transparent
          );
          transform: skewX(-20deg);
          animation: shineMove 6s ease-in-out infinite;
          z-index: 1;
        }

        .job {
          display: block;
          min-height: 28px;
        }

        .job :global(.cd-headline) {
          display: inline-block;
        }

        .job :global(.cd-words-wrapper) {
          position: relative;
          display: inline-block;
          min-width: 230px;
          height: 28px;
          overflow: hidden;
        }

        .job :global(.cd-words-wrapper b) {
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0;
          white-space: nowrap;
          transition: opacity 0.3s ease;
        }

        .job :global(.cd-words-wrapper b.is-visible) {
          position: relative;
          opacity: 1;
        }

        @keyframes floatOne {
          0% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(35px, 25px);
          }

          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes floatTwo {
          0% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-35px, -20px);
          }

          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes shineMove {
          0% {
            left: -80%;
          }

          45% {
            left: 130%;
          }

          100% {
            left: 130%;
          }
        }
      `}</style>
    </SectionContainer>
  );
};

const InfoCard = ({ number, text }) => {
  return (
    <div className="bg-[#E9F9FF] rounded-[22px] p-[18px] text-center">
      <h4 className="text-[18px] font-bold text-[#2BA6B3] mb-[6px]">
        {number}
      </h4>

      <p className="text-[14px] leading-[1.5] text-[#444]">{text}</p>
    </div>
  );
};

export default About;