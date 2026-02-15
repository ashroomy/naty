import { useContext } from "react";
import { context } from "../context";
import SectionContainer from "./SectionContainer";

const services = [
  {
    id: 1,
    name: "PLAN DE ENTRENAMIENTO ONLINE",
    image: "assets/img/service/2.jpg",
    link: "/#online",
    description: "Entrená desde donde estés, con acompañamiento real y estructura profesional.",
  },

  {
    id: 2,
    name: "PLAN DE ENTRENAMIENTO HÍBRIDO",
    image: "assets/img/service/3.jpg",
    link: "#hibrido",
    description:
      "Lo mejor de los dos mundos: guía presencial + libertad para aplicar lo aprendido.",
  },
  {
    id: 3,
    name: "PROGRAMA STRONG HUMAN",
    image: "assets/img/service/1.jpg",
    link: "/#stronghuman",
    description:
      "Entrená con confianza. Aprendé a moverte sin dolor. Construí una base fuerte",
  },
  {
    id: 4,
    name: "ENTRENAMIENTO PERSONAL PRESENCIAL –",
    image: "assets/img/service/4.jpg",
    link: "#personal",
    description:
      " Cada sesión está diseñada para vos, con un enfoque técnico que garantiza seguridad, progreso y resultados reales.",
  },
];
const Services = () => {
  const { modalToggle } = useContext(context);

  return (
    <>
      <SectionContainer name="service">
        <div className="elisc_tm_services w-full float-left pt-[110px]">
          <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
            <div className="elisc_tm_service_title w-full float-left flex justify-between items-end">
              <div className="elisc_tm_title w-auto float-left">
                <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                  - Servicios
                </span>
                <h3 className="text-[40px] font-extrabold">Mis servicios</h3>
              </div>
            </div>
            <div className="service_list w-full float-left mt-[40px] mb-[50px]">
              <ul className="ml-[-30px] flex flex-wrap">
                {services.map((service) => (
                  <li
                    className="mb-[30px] pl-[30px] w-1/2 float-left"
                    key={service.id}
                  >
                    <img
                      className="popup_image"
                      src={service.image}
                      alt="image"
                    />
                    <div className="list_inner w-full float-left clear-both h-full relative px-[40px] pt-[32px] pb-[55px] rounded-[4px]">
                      <div className="details w-full float-left relative z-[1]">
                        <div className="title w-full float-left mb-[13px]">
                          <span className="font-inter font-medium text-[20px] text-[rgba(19,15,73,.5)] inline-block mb-[15px]"></span>
                          <h3 className="text-[20px]">{service.name}</h3>
                        </div>
                        <div className="text w-full float-left mb-[25px]">
                          <p className="text-[#55527C] opacity-[0.7]">
                            {service.description}
                          </p>
                        </div>
                        <div className="elisc_tm_read_more">
                          <a href={`${service.link}`}>
                            Leer más
                            <span className="inline-block">
                              <img
                                className="svg"
                                src="assets/img/svg/rightArrow.svg"
                                alt="image"
                              />
                            </span>
                          </a>
                        </div>
                      </div>
                      <a
                        className="elisc_tm_full_link absolute inset-0 z-[5]"
                        href={`${service.link}`}
                        onClick={(e) => {
                          // e.preventDefault();
                          // modalToggle(true);
                          // setServiceModal(service);
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer name="online" id="online">
        <div className="elisc_tm_services w-full float-left  pb-[60px]">
          <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
            <div className="elisc_tm_service_title w-full float-left">
              <div className="elisc_tm_title w-full  pb-[40px] small:pb-[20px]">
                <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                  - Servicios
                </span>
                <h3 className="text-[40px] font-extrabold">
                  {" "}
                  PLAN DE ENTRENAMIENTO ONLINE
                </h3>
                <p className=" text-main-color  text-[18px] pt-4">
                  Entrená desde donde estés, con acompañamiento real y estructura
                  profesional.
                </p>
              </div>
              <div className="w-full flex gap-6 small:flex-none small:block">
                <div className="w-1/2  small:w-full">
                  <div className="small:w-full block ">
                    <img
                      className="rounded-md shadow-md"
                      src="assets/img/service/online.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="w-1/2  small:w-full">
                  <h6 className=" elisc_tm_title  text-main-color  w-fit text-[18px] font-bold pt-3 pb-4">
                    ¿Para quién es este servicio?
                  </h6>
                  <p className=" text-main-color  text-[18px] pb-3">
                    Para quienes quieren aprender a entrenar correctamente desde casa o el gimnasio, con un plan hecho a su medida y la guía de un profesional.
                    <br />Es ideal si ya tenés algo de experiencia o querés aprender a organizar tus entrenamientos  con propósito.

                  </p>
                </div>
              </div>
              <div className="w-full small:w-full">
                <p className=" text-main-color bold strong text-[18px] pt-4 pb-3">
                  Lo que vas a lograr:
                </p>
                <ul className="list-none  list-inside  pt-4  text-main-color  w-fit text-[18px] pb-9 ">
                  <li className="pb-2">
                    ✅ Mantener el hábito de entrenar con estructura y sin improvisar.
                  </li>
                  <li className="pb-2">
                    ✅ Seguir un plan adaptado a tu nivel, objetivos y ritmo de vida.

                  </li>
                  <li className="pb-2">
                    ✅ Entrenar con claridad, sabiendo exactamente qué hacer y cómo hacerlo.
                  </li>
                  <li className="pb-2">
                    ✅  Sentirte acompañado, con feedback y ajustes constantes para seguir avanzando.
                  </li>

                </ul>
              </div>
              <h6 className=" elisc_tm_title  text-main-color  w-fit text-[20px] font-bold pt-3 pb-4">
                ¿Cómo funciona?{" "}
              </h6>
              <p className=" text-main-color  text-[18px] pb-3">
                Diseñamos un plan personalizado según tus metas, espacio y equipo disponible. A través de mi app vas a recibir tus rutinas semanales con videos, explicaciones y seguimiento constante.
              </p>

              <h6 className=" elisc_tm_title  text-main-color  w-fit text-[22px] font-bold pt-3 pb-4">
                💰&nbsp;Inversión mensual: $120 USD
              </h6>

              <p className=" text-main-color  text-[18px] pb-3">
                🔍&nbsp;¿Querés saber si este plan es para vos? <br />
                Completá el formulario y te envío todos los detalles.

              </p>
              <div
                className="elisc_tm_button transition_link"
                data-style="border"
              >
                <a
                  href="https://forms.gle/rfkKz1Xn5azZZWky9"
                  target="_blank"
                  refer="noopener noreferrer"
                  className="no-underline
"
                >
                  Llenar Formulario
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer name="hibrido" id="hibrido">
        <div className="elisc_tm_services w-full float-left  pb-[60px]">
          <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
            <div className="elisc_tm_service_title w-full float-left">
              <div className="elisc_tm_title w-full  pb-[40px] small:pb-[20px]">
                <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                  - Servicios
                </span>
                <h3 className="text-[40px] font-extrabold">
                  PLAN DE ENTRENAMIENTO HÍBRIDO
                </h3>
              </div>
              <div className="w-full flex small:block small:flex-none gap-4">
                <div className="w-1/2   small:w-full pb-3">
                  <img
                    className="rounded-md shadow-md h-[auto]"
                    src="assets/img/service/hibrida.png"
                    alt="image"
                  />
                </div>
                <div className="w-1/2  small:w-full">
                  <p className=" text-main-color  text-[18px] pb-4">
                    Lo mejor de los dos mundos: guía presencial + libertad para aplicar lo aprendido.
                  </p>
                </div>
              </div>

              <div className="">

                <div className="pt-4 pb-4">
                  <h6 className=" elisc_tm_title  text-main-color  w-fit text-[20px] font-bold pt-3 pb-4">
                    ¿Para quién es el entrenamiento híbrido?
                  </h6>
                  <p className=" text-main-color  text-[18px] pb-3">
                    Para quienes quieren aprender la técnica correcta con acompañamiento presencial, pero también disfrutar de la libertad de entrenar a su ritmo desde tu casa o gimnasio con seguimiento online.
                    <br />     <br />
                    Es ideal si querés mejorar tu forma de entrenar, ganar confianza en tus movimientos y mantener la constancia con la guía de un profesional que te acompaña en todo el proceso.

                  </p>

                  <p className=" text-main-color text-bold  text-[18px] ">Lo que vas a lograr:</p>
                  <ul className="list-none list-inside  w-fit text-[18px] pb-4">

                    <li className="pb-2">
                      ✅  Sentirte más seguro al entrenar solo, sabiendo que estás haciendo las cosas bien.
                    </li>
                    <li className="pb-2">
                      ✅ Combinar la motivación del trabajo presencial con la flexibilidad del seguimiento online.
                    </li>
                    <li className="pb-2">
                      ✅   Mantener la constancia y el progreso a tu propio ritmo, sin perder la guía profesional.
                    </li>
                  </ul>
                </div>

                <div className="pb-4">
                  <h6 className=" elisc_tm_title  text-main-color  w-fit text-[20px] font-bold pt-3 pb-4">
                    ¿Cómo funciona?
                  </h6>
                  <p className=" text-main-color  text-[18px] pb-3">
                    Alternamos sesiones presenciales donde trabajamos técnica, control y ajustes, con semanas de entrenamiento online para que apliques lo aprendido.
                    <br />Durante todo el proceso tenés acceso a tu plan personalizado, videos explicativos y seguimiento constante, para que avances con seguridad y confianza.
                  </p>
                  <h6 className=" elisc_tm_title  text-main-color  w-fit text-[22px] font-bold pt-3 pb-4">
                    💰&nbsp;Inversión mensual: $200 USD
                  </h6>

                  <p className=" text-main-color  text-[18px] pb-3">
                    🔍&nbsp; <b>¿Querés probar el formato híbrido?</b> <br />
                    Completá el formulario y te envío todos los detalles.

                  </p>
                  <div
                    className="elisc_tm_button transition_link"
                    data-style="border"
                  >
                    <a
                      href="https://forms.gle/rfkKz1Xn5azZZWky9"
                      target="_blank"
                      refer="noopener noreferrer"
                      className="no-underline
"
                    >
                      Llenar Formulario
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer name="stronghuman" id="stronghuman">
        <div className="elisc_tm_services w-full float-left  pb-[60px]">
          <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
            <div className="elisc_tm_service_title w-full float-left">
              <div className="elisc_tm_title w-full  pb-[40px] small:pb-[20px]">
                <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                  - Servicios
                </span>
                <h3 className="text-[40px] font-extrabold pb-4"> PROGRAMA DE TEMPORADA STRONG HUMAN</h3>
              </div>
              <div className="flex small:block justify-between items-start gap-4">
                <div className="hidden small:block w-full h-auto overflow-hidden pb-3">
                  <img
                    className="rounded-md shadow-md"
                    src="assets/img/service/1.jpg"
                    alt="image"
                  />
                </div>
                <div className="w-1/2 small:w-full">
                  {/* <h3 className="text-[18px] text-main-color font-extrabold italic  pb-5 ">
                    Entrená con confianza. Aprendé a moverte sin dolor. Construí
                    una base fuerte
                  </h3> */}
                  <p className="text-[#55527C] font-medium w-fit text-[18px] pb-3">
                    Si querés empezar a entrenar, pero sentís miedo, inseguridad o simplemente no sabés por dónde comenzar, te cuesta saber cómo moverte, qué ejercicios son los mejores para condición actual.

                  </p>
                  <p className="text-[#55527C] font-extrabold w-fit text-[18px] ">
                    Y eso te frena antes de dar el paso.
                  </p>
                  <p className="text-[#55527C] font-medium w-fit text-[18px] pt-3 pb-4">
                    Este programa fue diseñado exclusivamente para principiantes que desean aprender desde cero, con guía clara y acompañamiento profesional, ya sea para entrenar en casa o en el gym.

                  </p>
                </div>
                <div className="w-1/2 small:hidden h-[auto] overflow-hidden pb-4">
                  <img
                    className="rounded-md shadow-md"
                    src="assets/img/service/1.jpg"
                    alt="image"
                  />
                </div>
              </div>

              <div>
                <div className="small:block flex ">
                  <div className="w-full">
                    <h6 className=" elisc_tm_title  text-main-color  w-fit text-[18px] font-bold pt-3 pb-4">
                      ¿Cómo funciona?

                    </h6>
                    <p className=" text-main-color  text-[18px] pb-3">
                      StrongHuman es un programa grupal por temporada, con cupo limitado y una duración de 8 semanas.
                      <br /><br />
                      Durante el proceso vas a contar con:

                    </p>
                    <ul className="list-disc   text-main-color  list-inside  w-fit mr-[28px] text-[18px] pb-9">
                      <li className="pb-2">
                        4 Talleres presenciales para aprender técnica y resolver dudas
                      </li>
                      <li className="pb-2">
                        Acompañamiento personalizado por el app y chat grupal.

                      </li>
                      <li className="pb-2">
                        Herramientas para medir tu progreso
                        Es tu punto de partida para entrenar con seguridad y construir fuerza para toda la vida.

                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h6 className=" elisc_tm_title  text-main-color  w-fit text-[18px] font-bold pt-3 pb-4">
                ¿Querés empezar tu proceso StrongHuman?
              </h6>
              <p className=" text-main-color  text-[18px] pb-3">
                Completá el formulario y te envío todos los detalles de la próxima temporada, sin compromiso.                </p>

              <h6 className=" elisc_tm_title  text-main-color  w-fit text-[22px] font-bold pt-3 pb-4">
                💰&nbsp;Inversión $300 USD
              </h6>

              <div
                className="elisc_tm_button transition_link"
                data-style="border"
              >
                <a
                  href="https://forms.gle/rfkKz1Xn5azZZWky9"
                  target="_blank"
                  refer="noopener noreferrer"
                >
                  Llenar Formulario
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer name="personal" id="personal">
        <div className="elisc_tm_services w-full float-left  pb-[60px]">
          <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
            <div className="elisc_tm_service_title w-full float-left">
              <div className="elisc_tm_title w-full  pb-[40px] small:pb-[20px]">
                <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                  - Servicios
                </span>
                <h3 className="text-[40px] font-extrabold">
                  Entrenamiento Personal Presencial – Paquetes Mensuales
                </h3>
              </div>
              <div className="flex small:flex-none small:block gap-4">
                <div className="w-1/2 small:w-full h-auto overflow-hidden pb-3">
                  <img
                    className="rounded-md shadow-md "
                    src="assets/img/service/personal.png"
                    alt="image"
                  />
                </div>
                <div className="w-1/2 small:w-full">

                  <p className=" text-main-color  text-[18px] pb-4">
                    Entrená con un plan 100% personalizado , diseñado según tu nivel, objetivos y condición física. Cada sesión está guiada para que entrenés con seguridad, buena técnica y resultados reales.<br /><br />

                  </p>
                </div>
              </div>

              <div className="w-full">
                <div className="pt-4 pb-4">

                  <p className=" text-main-color  text-[18px] pb-3">
                    Ideal si estás empezando, querés entrenar con confianza, venís de una lesión o simplemente querés avanzar más rápido y ver progreso sin adivinar qué hacer. <br /> <br />
                    Si querés dar el siguiente paso a tu mejor inversión para entrenar bien, con guía y a tu ritmo con gusto te acompaño.

                  </p>
                  <h6 className=" elisc_tm_title  text-main-color  w-fit text-[20px] font-bold pt-3 pb-4">
                    💰 Inversión Mensual: Desde $250 según paquete mensual.
                  </h6>

                </div>

                <div className="pb-4">
                  <h6 className=" elisc_tm_title  text-main-color  w-fit text-[20px] font-bold pt-3 pb-4">
                   ¿Querés entrenar con guía?
                  </h6>
                  <p className="text-main-color text-[18px] pb-3">
                 Completá el formulario y te envío todos los detalles.
                  </p>
                  <div
                    className="elisc_tm_button transition_link float-none"
                    data-style="border"
                  >
                    <a
                      href="https://forms.gle/rfkKz1Xn5azZZWky9"
                      target="_blank"
                      refer="noopener noreferrer"
                    >
                      Llenar Formulario
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
};
export default Services;
