import { useContext } from "react";
import { context } from "../context";
import SectionContainer from "./SectionContainer";

const services = [
  {
    id: 1,
    name: " StrongHuman",
    image: "assets/img/service/1.jpg",
    link: "/#stronghuman",
    description:
      "Entrená con confianza. Aprendé a moverte sin dolor. Construí una base fuerte",
  },
  {
    id: 2,
    name: "Entrenamiento Personalizado 100% online",
    image: "assets/img/service/2.jpg",
    link: "/#online",
    description: "Dirigido a personas con experiencia intermedia o avanzada .",
  },
  {
    id: 3,
    name: "Modalidad Híbrida",
    image: "assets/img/service/3.jpg",
    link: "#hibrido",
    description:
      "Dirigido a personas principiantes, con alguna lesión física, recuperación post quirúrgica",
  },
  {
    id: 4,
    name: "Entrenamiento Personal Presencial –",
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
      <SectionContainer name="stronghuman" id="stronghuman">
        <div className="elisc_tm_services w-full float-left  pb-[60px]">
          <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
            <div className="elisc_tm_service_title w-full float-left">
              <div className="elisc_tm_title w-full  pb-[40px] small:pb-[20px]">
                <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                  - Servicios
                </span>
                <h3 className="text-[40px] font-extrabold pb-4">StrongHuman</h3>
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
                  <h3 className="text-[18px] text-main-color font-extrabold italic  pb-5 ">
                    Entrená con confianza. Aprendé a moverte sin dolor. Construí
                    una base fuerte
                  </h3>
                  <p className="text-[#55527C] font-medium w-fit text-[18px] pb-3">
                    ¿Sos principiante y querés aprender a entrenar correctamente
                    desde cero? <br />
                    ¿Tenés molestias, una lesión previa o simplemente nunca
                    encontraste un programa que te enseñe paso a paso?
                  </p>
                  <p className="text-[#55527C] font-extrabold  text-sm w-fit text-[18px] ">
                    StrongHuman es para vos.
                  </p>
                  <p className="text-[#55527C] font-medium w-fit text-[18px] pt-3 pb-4">
                    Este programa fue creado para quienes quieren entrenar con
                    seguridad, buena técnica y sin miedo a lesionarse.
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
                  <div className="w-1/2 small:w-full">
                    <h6 className=" elisc_tm_title  w-fit text-[18px] font-bold pt-3 pb-4">
                      ¿Para quién es?
                    </h6>
                    <ul className="list-disc   text-main-color  list-inside  w-fit mr-[28px] text-[18px] pb-9">
                      <li className="pb-2">
                        Principiantes que quieren aprender a entrenar
                        correctamente desde cero.
                      </li>
                      <li className="pb-2">
                        Personas con lesiones previas o molestias que quieren
                        volver a entrenar sin miedo a lesionarse.
                      </li>
                      <li className="pb-2">
                        Quienes sienten inseguridad o falta de conocimiento al
                        entrenar{" "}
                      </li>
                      <li className="pb-2">
                        Personas que nunca encontraron un programa que les
                        enseñe paso a paso.
                      </li>
                    </ul>
                  </div>
                  <div className="w-1/2 small:w-full">
                    <h6 className=" elisc_tm_title w-fit text-[18px] font-bold pt-3 pb-4">
                      ¿Qué vas a lograr?
                    </h6>
                    <ul className="list-disc list-inside    text-main-color  w-fit text-[18px] pb-9">
                      <li className="pb-2">
                        Entender los principios de un entrenamiento seguro y
                        efectivo
                      </li>

                      <li className="pb-2">
                        Mejorar tu movilidad, fuerza y control del cuerpo{" "}
                      </li>
                      <li className="pb-2">
                        Ganar confianza y autonomía al entrenar{" "}
                      </li>
                      <li className="pb-2">
                        Sentirte fuerte, libre de dolor y motivado a seguir{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h6 className=" elisc_tm_title  text-main-color  w-fit text-[18px] font-bold pt-3 pb-4">
                ¿Qué incluye StrongHuman?{" "}
              </h6>
              <p className=" text-main-color  text-[14px]">
                Duración: 10 semanas
              </p>
              <p className=" text-main-color  text-[14px]">
                Modalidad: Online + 3 Talleres Presenciales Grupales
              </p>
              <ul className="list-disc list-inside  w-fit text-[18px] pb-9">
                <li className="pb-2">✔️ Entrevista inicial online</li>
                <li className="pb-2">
                  ✔️ Programación personalizada con app y videos paso a paso
                </li>
                <li className="pb-2">✔️ 2 asesorías online individuales</li>
                <li className="pb-2">✔️ Acceso a comunidad StrongHuman</li>
                <li className="pb-2">✔️ 3 talleres presenciales grupales.</li>
              </ul>
              <h6 className=" elisc_tm_title  text-main-color  w-fit text-[20px] font-bold pt-3 pb-4">
                ¿Cuándo empieza?
              </h6>
              <p className=" text-main-color  font-bold text-[18px] pb-4">
                Fecha próxima generación: PRONTO
              </p>
              <p className=" text-main-color  text-[14px] pb-2">
                ¿Querés aprender a entrenar bien desde el inicio?
              </p>
              <p className=" text-main-color  text-[14px] pb-2">
                Si quieres más información y ser parte de STRONG HUMAN.
              </p>

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
                  Entrenamiento Personalizado 100% Online
                </h3>
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
                    Para personas con experiencia intermedia o avanzada que
                    buscan resultados reales, que tienen claros sus objetivos
                    como:
                  </p>
                </div>
              </div>
              <div className="w-full small:w-full">
                <ul className="list-none  list-inside  pt-4  text-main-color  w-fit text-[18px] pb-9 ">
                                    <li className="pb-2">
                    ✅ Entrenar con estrategia y propósito, guiado por una
                    profesional que entiende tu cuerpo y tus metas.{" "}
                  </li>
                  <li className="pb-2">
                    ✅ Mejorar movilidad y control corporal para entrenar con
                    mayor calidad y sin dolor.
                  </li>
                  <li className="pb-2">
                    ✅ Mejorar composición corporal: bajar grasa, aumento de
                    masa muscular.
                  </li>
                  <li className="pb-2">
                    ✅ Dominar técnicas complejas como el entrenamiento con
                    pesas libres, aprender técnica sobre ejercicios con peso libre: barras, ketlebells.
                  </li>

                </ul>
              </div>
              <h6 className=" elisc_tm_title  text-main-color  w-fit text-[20px] font-bold pt-3 pb-4">
                ¿Qué incluye tu plan mensual?{" "}
              </h6>
              <ul className="list-none list-inside  w-fit text-[18px] pb-9">
                <li className=" pb-2">
                  🧭&nbsp;Entrevista inicial virtual: Evaluamos tu punto de
                  partida, objetivos y estilo de vida.
                </li>
                <li className="pb-2">
                  📱&nbsp;Acceso exclusivo a una app de entrenamiento
                  personalizada con tus rutinas y videos guía.
                </li>
                <li className="pb-2">
                  🎥&nbsp;Feedback semanal en tus videos: Te ayudo a mejorar tu
                  técnica y asegurar progresos reales.
                </li>
                <li className="pb-2">
                  📊&nbsp;Ajustes continuos: Cada semana evaluamos y afinamos tu
                  programación.
                </li>
                <li className="pb-2">
                  🗓️&nbsp;2 sesiones virtuales al mes: Para seguimiento,
                  resolución de dudas y revisión de avances.
                </li>
                <li className="pb-2">
                  📩&nbsp;Soporte personalizado por el app: Podés escribirme en
                  cualquier momento durante el mes.
                </li>
              </ul>
              <h6 className=" elisc_tm_title  text-main-color  w-fit text-[22px] font-bold pt-3 pb-4">
                💰&nbsp;Inversión mensual: $80 USD
              </h6>

              <p className=" text-main-color  text-[14px] pb-3">
                🔍&nbsp;¿Querés saber si este plan es para vos? <br />
                Completá este breve formulario y en menos de 24 horas me pondré
                en contacto contigo para agendar una cita inicial virtual 100%
                gratuita.
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
              <p className=" text-main-color  text-[16px] pt-3"></p>
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
                  Entrenamiento Personalizado – Modalidad Híbrida (Online +
                  Presencial)
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
                <div class="w-1/2  small:w-full">
                  <p className=" text-main-color  text-[18px] pb-4">
                    Diseñado para personas que están comenzando, tienen alguna
                    lesión, están en recuperación postquirúrgica o simplemente
                    desean un acompañamiento más cercano y personalizado.
                  </p>
                  <p className=" text-main-color  text-[18px]">
                    Combinamos lo mejor del seguimiento digital con sesiones
                    presenciales para que aprendas a moverte con seguridad,
                    confianza y acompañamiento experto.{" "}
                  </p>
                </div>
              </div>

              <div className="">
                {/* <div className=" hidden small:block  w-full h-auto overflow-hidden pb-3">
                  <img
                    className="rounded-md shadow-md"
                    src="assets/img/service/hibrida.jpg"
                    alt="image"
                  />
                </div> */}
                <div className="pt-4 pb-4">
                  <h6 className=" elisc_tm_title  text-main-color  w-fit text-[20px] font-bold pt-3 pb-4">
                    ¿Qué incluye tu plan mensual?{" "}
                  </h6>
                  <ul className="list-none list-inside  w-fit text-[18px] pb-9">
                    <li className=" pb-2">
                      📍&nbsp; <strong>2 sesiones presenciales al mes</strong>{" "}
                      <br />
                      (sujeto a disponibilidad y ubicación en el GAM, Costa
                      Rica).
                    </li>
                    <li className="pb-2">
                      📲&nbsp;{" "}
                      <strong>
                        {" "}
                        Acceso a la app de entrenamiento personalizada
                      </strong>{" "}
                      con rutinas adaptadas a tu condición.
                    </li>
                    <li className="pb-2">
                      📹&nbsp; <strong> Seguimiento semanal:</strong> evaluación
                      de tu progreso, revisión de técnica y ajustes al
                      programa..
                    </li>
                    <li className="pb-2">
                      📞 &nbsp;{" "}
                      <strong>
                        {" "}
                        Resolución de dudas y soporte personalizado
                      </strong>{" "}
                      durante todo el proceso.
                    </li>
                    <li className="pb-2">
                      💻&nbsp;<strong> Ajustes continuos</strong> a tu
                      planificación conforme avanzás.
                    </li>
                  </ul>
                </div>

                <div className="pb-4">
                  <h6 className=" elisc_tm_title  text-main-color  w-fit text-[20px] font-bold pt-3 pb-4">
                    ¿Para quién es ideal esta modalidad?
                  </h6>
                  <ul className="list-disc list-inside  w-fit text-[18px] pb-9">
                    <li className=" pb-2">
                      Personas en etapa{" "}
                      <strong>inicial de entrenamiento</strong> que necesitan
                      guía cercana.
                    </li>
                    <li className="pb-2">
                      Quienes tienen{" "}
                      <strong> lesiones previas o dolores crónicos </strong> y
                      quieren entrenar con seguridad.
                    </li>
                    <li className="pb-2">
                      Personas en{" "}
                      <strong>
                        proceso de readaptación física post lesión o cirugía.
                      </strong>
                    </li>
                    <li className="pb-2">
                      Quienes se sienten más cómodos con{" "}
                      <strong>un acompañamiento presencial periódico.</strong>
                    </li>
                  </ul>

                  <h6 className=" elisc_tm_title  text-main-color  w-fit text-[22px] font-bold pt-3 pb-4">
                    💰&nbsp;Inversión mensual: $200 USD
                  </h6>
                </div>
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
                  <h6 className=" elisc_tm_title  text-main-color  w-fit text-[20px] font-bold pt-3 pb-4">
                    ¿Qué es el Entrenamiento Personal?
                  </h6>
                  <p className=" text-main-color  text-[18px] pb-4">
                    Es un servicio 100% personalizado, donde trabajamos de forma
                    individual tus objetivos, necesidades y condición física.
                    Cada sesión está diseñada para vos, con un enfoque técnico
                    que garantiza seguridad, progreso y resultados reales.
                  </p>
                </div>
              </div>

              <div className="w-full">
                <div className="pt-4 pb-4">
                  <h6 className=" elisc_tm_title  text-main-color  w-fit text-[20px] font-bold pt-3 pb-4">
                    ¿Por qué elegir entrenamiento personal?
                  </h6>
                  <p className=" text-main-color  text-[18px] pb-3">
                    El entrenamiento personal te ayuda a ser constante,
                    establecer hábitos sólidos y mantener la motivación. Es
                    ideal si estás iniciando, querés entrenar con seguridad y
                    confianza, aprender buena técnica y avanzar a tu ritmo.
                    También es clave si venís de una lesión o buscás evitar
                    molestias, ya que se adapta a tus necesidades. Y si querés
                    ir más allá, dar la milla extra y ver resultados reales,
                    entrenar con guía marca la diferencia.
                  </p>
                  <h6 className=" elisc_tm_title  text-main-color  w-fit text-[20px] font-bold pt-3 pb-4">
                    ¿Qué incluye tu paquete mensual?
                  </h6>

                  <ul className="list-none list-inside  w-fit text-[18px] pb-9">
                    <li className=" pb-2">
                      <strong>
                        {" "}
                        📝 Evaluación inicial funcional, postural y de
                        composición corporal.
                      </strong>{" "}
                      <br />
                      Analizamos tus patrones de movimiento, historial de
                      lesiones y capacidades actuales.
                    </li>
                    <li className=" pb-2">
                      <strong> 📊 Medición mensual de progreso</strong> <br />
                      Seguimiento de fuerza, movilidad, control motor y
                      composición corporal.
                    </li>
                    <li className=" pb-2">
                      <strong>
                        {" "}
                        💪 Entrenamientos presenciales 100% personalizados
                      </strong>{" "}
                      <br />
                      Cada sesión se ajusta a tus necesidades: técnica,
                      intensidad, volumen y progresiones seguras.
                    </li>
                    <li className=" pb-2">
                      <strong> 📲 Programación complementaria vía app</strong>{" "}
                      <br />
                      Accedé a rutinas personalizadas fuera de tus sesiones
                      presenciales para reforzar hábitos y continuidad.
                    </li>
                  </ul>
                  <h6 className=" elisc_tm_title  text-main-color  w-fit text-[22px] font-bold pt-3 pb-4">
                    🗓️&nbsp;Planes disponibles: Precios oscilan entre
                  </h6>
                  <p className=" text-main-color  text-[20px] pb-3">
                    {" "}
                    💰 $200.000 - $700.000{" "}
                  </p>
                </div>

                <div className="pb-4">
                  <h6 className=" elisc_tm_title  text-main-color  w-fit text-[20px] font-bold pt-3 pb-4">
                    🔍 ¿Querés más información y disponibilidad?
                  </h6>
                  <p className="text-main-color text-[18px] pb-3">
                    {" "}
                    Completá este breve formulario y en menos de 24 horas me
                    pondré en contacto contigo para agendar una cita inicial
                    virtual 100% gratuita.{" "}
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
                  <div className="w-full mt-[34px]">
                    <div>
                      <h3 className="text-[38px] font-extrabold py-4">
                        💥 Entrenamiento Personal en Pareja o Grupos Pequeños
                      </h3>
                      <p className="text-[#55527C] font-bold w-fit text-[18px] pt-3 pb-4">
                        Entrená acompañado, con el enfoque técnico y
                        personalizado de un entrenamiento individual.{" "}
                      </p>
                      <p className="text-main-color w-fit text-[18px] pt-3 pb-4">
                        Esta modalidad está diseñada para quienes quieren
                        compartir su proceso con alguien más (pareja, amigos o
                        familiares), manteniendo una guía profesional,
                        corrección técnica y progresión estructurada.
                      </p>
                    </div>

                    <div className="w-full gap-5 flex small:block small:flex-none">
                      <div className="w-1/2 small:w-full">
                        <h6 className=" elisc_tm_title  text-main-color  w-fit text-[20px] font-bold pt-3 pb-4">
                          ¿Qué incluye este plan?
                        </h6>
                        <ul className="list-none list-inside text-[18px] pb-9 w-full">
                          <li className=" pb-4">
                            <strong>
                              {" "}
                              📝&nbsp;Evaluación inicial grupal e individual
                            </strong>
                            <br />
                            Se identifican metas compartidas e individuales,
                            nivel físico y necesidades de cada participante.
                          </li>
                          <li className="pb-4">
                            🏋️‍♀️&nbsp;
                            <strong>
                              Sesiones presenciales de entrenamiento
                              personalizado en grupo
                            </strong>{" "}
                            <br />
                            Hasta 5 personas por grupo. Cada quien trabaja a su
                            ritmo, con ejercicios adaptados a su nivel.
                          </li>
                          <li className="pb-4">
                            📲&nbsp;
                            <strong>
                              {" "}
                              Acceso a programación complementaria vía app
                              (opcional){" "}
                            </strong>{" "}
                            <br />
                            Para reforzar hábitos, movilidad o rutinas entre
                            sesiones.
                          </li>
                          <li className="pb-4">
                            🔁&nbsp;
                            <strong>
                              Ajustes continuos en base al progreso
                            </strong>{" "}
                            <br />
                            entrena en grupo, el seguimiento es personalizado.
                          </li>
                        </ul>
                      </div>
                      <div className="w-1/2 small:w-full">
                        <h6 className=" elisc_tm_title  text-main-color  w-fit text-[20px] font-bold pt-3 pb-4">
                          🎯 Beneficios de entrenar en pareja o grupo:{" "}
                        </h6>
                        <ul className="list-none list-inside text-[18px] pb-9 w-full">
                          <li className=" pb-4">
                            ✅&nbsp;Más motivación y adherencia gracias al
                            compromiso grupal.
                          </li>
                          <li className=" pb-4">
                            ✅&nbsp; Corrección técnica y acompañamiento
                            profesional en cada sesión.
                          </li>
                          <li className=" pb-4">
                            ✅&nbsp;Costo más accesible comparado con el
                            entrenamiento individual.
                          </li>
                          <li className=" pb-4">
                            ✅&nbsp;Ideal para quienes disfrutan entrenar con
                            compañía sin perder calidad.
                          </li>
                          <li className=" pb-4">
                            ✅&nbsp;Progresiones seguras y personalizadas dentro
                            del mismo grupo.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h6 className=" elisc_tm_title  text-main-color  w-fit text-[20px] font-bold pt-3 pb-4">
                        👥 ¿Para quién es esta modalidad?{" "}
                      </h6>
                      <ul className="list-none list-inside text-[18px] pb-5 w-full">
                        <li className=" pb-4">
                          ✔️ Parejas o amigos que quieren entrenar juntos con
                          una guía profesional.
                        </li>
                        <li className=" pb-4">
                          ✔️ Grupos de 3 a 5 personas con objetivos similares
                          (salud, fuerza, movilidad, recomposición corporal).
                        </li>
                        <li className=" pb-4">
                          ✔️ Personas que buscan una opción más económica sin
                          sacrificar el acompañamiento técnico.
                        </li>
                        <li className=" pb-4">
                          {" "}
                          ✔️ Equipos que se motivan mutuamente a mantener la
                          constancia.
                        </li>
                      </ul>
                      <h6 className=" elisc_tm_title  text-main-color  w-fit text-[22px] font-bold pt-3 pb-4">
                        📍 Disponible en sedes de Multispa (consultar horarios y
                        ubicación).
                      </h6>
                      <p className="text-main-color w-fit text-[18px] pt-3 pb-4">
                        <i>
                          💰 La inversión mensual se calcula según la cantidad
                          de personas y frecuencia de entrenamiento.
                        </i>
                      </p>
                      <h6 className=" elisc_tm_title  text-main-color  w-fit text-[22px] font-bold pt-3 pb-4">
                        📲 ¿Quieren comenzar a entrenar juntos?
                      </h6>
                      <p className="text-main-color w-fit text-[18px] pt-3 pb-4">
                        Escribime para armar su grupo o agendar una sesión de
                        prueba.
                      </p>
                      <div className=" flex w-full gap-1">
                    <img
                      className=" h-[30px] "
                      src="assets/img/WA.png"
                      alt="image"
                    />
                    <a
                      className="text-[#130F49] font-semibold text-[18px]"
                      href="http://wa.me/+50688820971"
                    >
                      Contactame por WhatsApp
                    </a>
                  </div>
                    </div>
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
