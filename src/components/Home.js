import { useContext } from "react";
import { context } from "../context";
import SectionContainer from "./SectionContainer";

const Home = () => {
  const { navChange } = useContext(context);

  return (
    <SectionContainer name="home">
      <div className="elisc_tm_home w-full min-h-[100vh] clear-both float-left bg-white relative overflow-hidden">

        <div className="absolute top-[80px] right-[8%] w-[220px] h-[220px] bg-[#E9F9FF] rounded-full blur-3xl opacity-80"></div>

        <div className="absolute bottom-[90px] left-[10%] w-[260px] h-[260px] bg-[#F4E5E2] rounded-full blur-3xl opacity-70"></div>

        <div className="tm_content w-full max-w-[1250px] min-h-[100vh] mx-auto px-[20px] relative z-[2]">

          <div className="details w-full min-h-[100vh] flex small:block items-center py-[70px] small:py-[55px]">

            <div className="left w-1/2 small:w-full pr-[40px] small:pr-0">

              <div className="title w-full mb-[24px]">
                <h3 className="font-extrabold text-[66px] small:text-[42px] leading-[1.05] text-[#222]">
                  Entrená seguro... <br />
                  Viví fuerte{" "}
                  <span className="text-[#2BA6B3]">
                    para toda la vida.
                  </span>
                </h3>
              </div>

              <div className="subtitle w-full max-w-[92%] small:max-w-full mb-[34px]">
                <p className="text-[19px] small:text-[17px] leading-[1.8] text-[#333]">
                  Te acompaño paso a paso para que dejés atrás el miedo y la inseguridad al entrenar,
                   aprendiendo a moverte y construir fuerza con confianza y propósito..
                </p>
              </div>

              <div className="flex small:block items-center gap-[15px] mb-[34px]">

                <a
                  href="#service"
                  onClick={() => navChange("service")}
                  className="inline-block small:w-full small:text-center bg-[#2BA6B3] text-white font-semibold px-[34px] py-[15px] rounded-full hover:bg-[#238B96] transition-all"
                >
                  Ver servicios
                </a>

                <a
                  href="#contact"
                  onClick={() => navChange("contact")}
                  className="inline-block small:w-full small:text-center small:mt-[14px] bg-[#2BA6B3] text-white font-semibold px-[34px] py-[15px] rounded-full hover:bg-[#238B96] transition-all"
                >
                  Agendar sesión
                </a>

              </div>

              <div className="grid grid-cols-3 small:grid-cols-1 gap-[14px] max-w-[560px] mb-[24px]">

                <MiniCard
                  number="+15"
                  text="años de experiencia"
                />

                <MiniCard
                  number="100%"
                  text="enfoque personalizado"
                />

                <MiniCard
                  number="1:1"
                  text="acompañamiento real"
                />

              </div>

              <div className="flex flex-col gap-[12px] max-w-[560px]">

                <a
                  href="http://wa.me/+50688820971"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-[12px] bg-[#F5F7F8] hover:bg-[#EEF4F6] transition-all rounded-full px-[22px] py-[16px]"
                >
                  <img
                    className="h-[26px]"
                    src="assets/img/WA.png"
                    alt="WhatsApp"
                  />

                  <span className="text-[#130F49] font-semibold text-[17px]">
                    Contactame por WhatsApp
                  </span>
                </a>

                <a
                  href="mailto:natyfh0228@hotmail.com"
                  className="flex items-center gap-[12px] bg-[#F5F7F8] hover:bg-[#EEF4F6] transition-all rounded-full px-[22px] py-[16px]"
                >
                  <span className="text-[22px]">✉️</span>

                  <span className="text-[#130F49] font-semibold text-[17px]">
                    Correo electronico
                  </span>
                </a>

              </div>

            </div>

            <div className="right w-1/2 small:w-full small:mt-[45px] pl-[40px] small:pl-0">

              <div className="relative">

                <div className="absolute -top-[24px] -left-[24px] w-[120px] h-[120px] bg-[#E9F9FF] rounded-full z-[-1]"></div>

                <div className="absolute -bottom-[24px] -right-[24px] w-[150px] h-[150px] bg-[#F4E5E2] rounded-full z-[-1]"></div>

                <div className="bg-[#F4E5E2] rounded-[34px] p-[16px]">
                  <img
                    className="w-full rounded-[26px] object-cover"
                    src="assets/img/about/NatyInicio.png"
                    alt="Naty Fonseca"
                  />
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </SectionContainer>
  );
};

const MiniCard = ({ number, text }) => {
  return (
    <div className="bg-[#E9F9FF] rounded-[24px] p-[20px] text-center">

      <h4 className="text-[#2BA6B3] font-extrabold text-[24px] mb-[4px]">
        {number}
      </h4>

      <p className="text-[#444] text-[14px] leading-[1.5]">
        {text}
      </p>

    </div>
  );
};

export default Home;