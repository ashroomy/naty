import { useContext } from "react";
import { context } from "../context";
import SectionContainer from "./SectionContainer";
const services = [
  {
    id: 1,
    name: " StrongHuman",
    image: "assets/img/service/1.jpg",
    description:"Entrená con confianza. Aprendé a moverte sin dolor. Construí una base fuerte"
  },
  {
    id: 2,
    name: "Entrenamiento Personalizado 100% online",
    image: "assets/img/service/2.jpg",
    description:"Dirigido a personas con experiencia intermedia o avanzada con objetivos muy específicos, que entrenen desde casa o gimnasio."
  },
  {
    id: 3,
    name: "Modalidad Híbrida",
    image: "assets/img/service/3.jpg",
    description:"Dirigido a personas principiantes, con alguna lesión física, recuperación post quirúrgica que deseen el acompañamiento presencial para que el aprendizaje sea aún más fácil y  personalizado y tengan un mayor apoyo por parte mi persona."
  },
];
const Services = () => {
  const { setServiceModal, modalToggle } = useContext(context);

  return (
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
                        <span className="font-inter font-medium text-[20px] text-[rgba(19,15,73,.5)] inline-block mb-[15px]">
                          0{service.id}
                        </span>
                        <h3 className="text-[20px]">{service.name}</h3>
                      </div>
                      <div className="text w-full float-left mb-[25px]">
                        <p className="text-[#55527C] opacity-[0.7]">
                          {service.description}
                        </p>
                      </div>
                      <div className="elisc_tm_read_more">
                        <a href="#">
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
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        modalToggle(true);
                        setServiceModal(service);
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
  );
};
export default Services;
