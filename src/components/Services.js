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
                    className="mb-[30px] pl-[30px] w-1/3 float-left"
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

            {/* VIDEO COMPONENT */}
            {/* <div className="elisc_tm_video w-full float-left relative mb-[120px] overflow-hidden rounded-[4px]">
            <img
              className="placeholder min-w-full opacity-0 relative"
              src="assets/img/thumbs/4-2.jpg"
              alt="image"
            />
            <div
              className="image absolute inset-0 bg-no-repeat bg-cover bg-center"
              data-img-url="assets/img/service/1.jpg"
            />
            <div className="overlay absolute inset-0 bg-[rgba(0,0,0,.4)]" />
            <span className="play absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[2] w-[111px] h-[111px] bg-white rounded-full">
              <img
                className="svg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[18px] h-[18px] ml-[2px]"
                src="assets/img/svg/play.svg"
                alt="image"
              />
            </span>
            <div className="text absolute bottom-[16px] right-[16px] bg-white py-[20px] px-[30px]">
              <h3 className="text-[#51586A] text-[17px] font-bold uppercase">
                Intro Video
              </h3>
            </div>
            <a
              className="elisc_tm_full_link absolute inset-0 z-5 popup-youtube mb-[24px]"
              href="https://www.youtube.com/watch?v=7e90gBu4pas"
            />
          </div> */}
          </div>
        </div>
      </SectionContainer>
      <SectionContainer name="stronghuman" id="stronghuman">
        <div className="elisc_tm_services w-full float-left  pb-[60px]">
          <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
            <div className="elisc_tm_service_title w-full float-left">
              <div className="elisc_tm_title w-full  pb-[40px]">
                <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                  - Servicios
                </span>
                <h3 className="text-[40px] font-extrabold">StrongHuman</h3>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div className="w-1/2">
                  <h3 className="text-[18px] text-main-color font-extrabold italic  pb-5 ">
                    Entrená con confianza. Aprendé a moverte sin dolor. Construí
                    una base fuerte
                  </h3>
                  <p className="text-[#55527C] font-medium w-fit text-[16px] pb-3">
                    ¿Sos principiante y querés aprender a entrenar correctamente
                    desde cero? <br />
                    ¿Tenés molestias, una lesión previa o simplemente nunca
                    encontraste un programa que te enseñe paso a paso?
                  </p>
                  <p className="text-[#55527C] font-extrabold  text-sm w-fit text-[16px] ">
                    StrongHuman es para vos.
                  </p>
                  <p className="text-[#55527C] font-medium w-fit text-[16px] pt-3 pb-4">
                  Este programa fue creado para quienes quieren entrenar con
                  seguridad, buena técnica y sin miedo a lesionarse.
                </p>
                </div>
                <div className=" w-1/2 h-[400px] overflow-hidden">
                  <img
                    className="rounded-md shadow-md"
                    src="assets/img/service/1.jpg"
                    alt="image"
                  />
                </div>
              </div>

              <div>

                <div className="flex">
                  <div className="w-1/2">
                    <h6 className=" elisc_tm_title  w-fit text-[18px] font-bold pt-3 pb-4">
                      ¿Para quién es?
                    </h6>
                    <ul className="list-disc   text-main-color  list-inside  w-fit text-[16px] pb-9">
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
                  <div className="w-1/2">
                    <h6 className=" elisc_tm_title w-fit text-[18px] font-bold pt-3 pb-4">
                      ¿Qué vas a lograr?
                    </h6>
                    <ul className="list-disc list-inside    text-main-color  w-fit text-[16px] pb-9">
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
              <ul className="list-disc list-inside  w-fit text-[16px] pb-9">
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
              <p className=" text-main-color  font-bold text-[16px] pb-2">
                Fecha próxima generación: Inicio: 9 de Junio 2025
              </p>
              <p className=" text-main-color  text-[14px] pb-2">
                ¿Querés aprender a entrenar bien desde el inicio?
              </p>
              <p className=" text-main-color  text-[14px] pb-2">
                Si quieres más información y ser parte de STRONG HUMAN.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
};
export default Services;
