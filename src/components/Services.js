import { useContext } from "react"; 
import { context } from "../context"; 
import SectionContainer from "./SectionContainer";

const services = [
  {
    id: 1,
    name: "PLAN DE ENTRENAMIENTO ONLINE",
    image: "assets/img/service/Online1.png",
    link: "/#online",
    description:
      "Entrená desde donde estés, con acompañamiento real y estructura profesional.",
  },
  {
    id: 2,
    name: "PLAN DE ENTRENAMIENTO HÍBRIDO",
    image: "assets/img/service/hibrida.png",
    link: "#hibrido",
    description:
      "Lo mejor de los dos mundos: guía presencial + libertad para aplicar lo aprendido.",
  },
  {
    id: 3,
    name: "PROGRAMA STRONG HUMAN",
    image: "assets/img/service/SHPortada1.png",
    link: "/#stronghuman",
    description:
      "Entrená con confianza. Aprendé a moverte sin dolor. Construí una base fuerte.",
  },
];

const Services = () => {
  const { modalToggle } = useContext(context);

  return (
    <>
      <SectionContainer name="service">
        <div className="elisc_tm_services w-full float-left pt-[110px] pb-[60px]">
          <div className="tm_content w-full max-w-[1250px] mx-auto px-[20px]">
            <div className="mb-[45px]">
              <span className="font-medium uppercase inline-block mb-[12px]">
                - Servicios
              </span>

              <h3 className="text-[42px] small:text-[32px] font-extrabold text-[#2BA6B3]">
                Mis servicios
              </h3>

              <p className="text-[18px] text-[#555] mt-[12px] max-w-[650px]">
                Elegí el formato que mejor se adapte a tu proceso, tu nivel y tu
                estilo de vida.
              </p>
            </div>

            <div className="grid grid-cols-3 small:grid-cols-1 gap-[28px]">
              {services.map((service) => (
                <a
                  href={service.link}
                  key={service.id}
                  className="group bg-white rounded-[28px] shadow-md overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="h-[220px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      src={service.image}
                      alt={service.name}
                    />
                  </div>

                  <div className="p-[28px]">
                    <h3 className="text-[20px] font-bold text-[#222] mb-[12px]">
                      {service.name}
                    </h3>

                    <p className="text-[#555] leading-[1.7] mb-[24px]">
                      {service.description}
                    </p>

                    <span className="text-[#2BA6B3] font-semibold">
                      Leer más →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      <ServiceDetail
        id="online"
        label="- Servicios"
        title="Plan de entrenamiento online"
        subtitle="Entrená desde donde estés, con acompañamiento real y estructura profesional."
        image="assets/img/service/Online1.png"
        imageFirst
        introTitle="¿Para quién es este servicio?"
        intro="Para quienes quieren aprender a entrenar correctamente desde casa o el gimnasio, con un plan hecho a su medida y la guía de un profesional. Es ideal si ya tenés algo de experiencia o querés aprender a organizar tus entrenamientos con propósito."
        benefits={[
          "Mantener el hábito de entrenar con estructura y sin improvisar.",
          "Seguir un plan adaptado a tu nivel, objetivos y ritmo de vida.",
          "Entrenar con claridad, sabiendo exactamente qué hacer y cómo hacerlo.",
          "Sentirte acompañado, con feedback y ajustes constantes.",
        ]}
        howItWorks="Diseñamos un plan personalizado según tus metas, espacio y equipo disponible. A través de mi app vas a recibir tus rutinas semanales con videos, explicaciones y seguimiento constante."
        price="Inversión mensual: $120 USD"
        ctaText="¿Querés saber si este plan es para vos? Completá el formulario y te envío todos los detalles."
      />

      <ServiceDetail
        id="hibrido"
        label="- Servicios"
        title="Plan de entrenamiento híbrido"
        subtitle="Lo mejor de los dos mundos: guía presencial + libertad para aplicar lo aprendido."
        image="assets/img/service/hibrida.png"
        introTitle="¿Para quién es el entrenamiento híbrido?"
        intro="Para quienes quieren aprender la técnica correcta con acompañamiento presencial, pero también disfrutar de la libertad de entrenar a su ritmo desde casa o gimnasio con seguimiento online. Es ideal si querés mejorar tu forma de entrenar, ganar confianza en tus movimientos y mantener la constancia con la guía de un profesional."
        benefits={[
          "Sentirte más seguro al entrenar solo, sabiendo que estás haciendo las cosas bien.",
          "Combinar la motivación del trabajo presencial con la flexibilidad del seguimiento online.",
          "Mantener la constancia y el progreso a tu propio ritmo, sin perder la guía profesional.",
        ]}
        howItWorks="Alternamos sesiones presenciales donde trabajamos técnica, control y ajustes, con semanas de entrenamiento online para que apliques lo aprendido. Durante todo el proceso tenés acceso a tu plan personalizado, videos explicativos y seguimiento constante."
        price="Inversión mensual: $200 USD"
        ctaText="¿Querés probar el formato híbrido? Completá el formulario y te envío todos los detalles."
      />

      <ServiceDetail
        id="stronghuman"
        label="- Servicios"
        title="Programa Strong Human"
        subtitle="Entrená con confianza. Aprendé a moverte sin dolor. Construí una base fuerte."
        image="assets/img/service/StrongHuman1.png"
        imageFirst
        introTitle="¿Para quién es Strong Human?"
        intro="Si querés empezar a entrenar, pero sentís miedo, inseguridad o simplemente no sabés por dónde comenzar, este programa fue diseñado para vos. Es una experiencia pensada para principiantes que desean aprender desde cero, con guía clara y acompañamiento profesional."
        benefits={[
          "4 talleres para aprender técnica y resolver dudas.",
          "Acompañamiento personalizado por app y chat grupal.",
          "Herramientas para medir tu progreso.",
          "Una base sólida para entrenar con seguridad y confianza.",
        ]}
        howItWorks="StrongHuman es un programa grupal por temporada, con cupo limitado y una duración de 8 semanas. Es tu punto de partida para entrenar con seguridad y construir fuerza para toda la vida."
        price="Inversión: $120 USD"
        ctaText="¿Querés empezar tu proceso StrongHuman? Completá el formulario y te envío todos los detalles de la próxima temporada, sin compromiso."
      />
    </>
  );
};

const ServiceDetail = ({
  id,
  label,
  title,
  subtitle,
  image,
  imageFirst,
  introTitle,
  intro,
  benefits,
  howItWorks,
  price,
  ctaText,
}) => {
  return (
    <SectionContainer name={id} id={id}>
      <div className="elisc_tm_services w-full float-left pb-[70px]">
        <div className="tm_content w-full max-w-[1250px] mx-auto px-[20px]">
          <div className="bg-white rounded-[32px] shadow-lg p-[45px] small:p-[25px]">
            <div className="mb-[35px]">
              <span className="font-medium uppercase inline-block mb-[12px]">
                {label}
              </span>

              <h3 className="text-[42px] small:text-[30px] font-extrabold text-[#2BA6B3] leading-tight uppercase">
                {title}
              </h3>

              <p className="text-[19px] text-[#555] mt-[15px] max-w-[750px] leading-[1.7]">
                {subtitle}
              </p>
            </div>

            <div
              className={`flex small:block gap-[45px] items-center mb-[40px] ${
                imageFirst ? "" : "flex-row-reverse"
              }`}
            >
              <div className="w-1/2 small:w-full">
                <img
                  className="w-full rounded-[26px] shadow-md"
                  src={image}
                  alt={title}
                />
              </div>

              <div className="w-1/2 small:w-full small:mt-[28px]">
                <h4 className="text-[24px] font-bold text-[#222] mb-[16px]">
                  {introTitle}
                </h4>

                <p className="text-[18px] leading-[1.8] text-[#555]">
                  {intro}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 small:grid-cols-1 gap-[25px] mb-[35px]">
              <div className="bg-[#E9F9FF] rounded-[26px] p-[30px]">
                <h4 className="text-[24px] font-bold text-[#222] mb-[20px]">
                  Lo que vas a lograr
                </h4>

                <ul className="space-y-[14px]">
                  {benefits.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-[12px] text-[17px] leading-[1.6] text-[#444]"
                    >
                      <span className="text-[#2BA6B3] font-bold">✓</span>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F4E5E2] rounded-[26px] p-[30px]">
                <h4 className="text-[24px] font-bold text-[#222] mb-[20px]">
                  ¿Cómo funciona?
                </h4>

                <p className="text-[17px] leading-[1.8] text-[#444]">
                  {howItWorks}
                </p>
              </div>
            </div>

            <div className="bg-[#FAFAFA] rounded-[26px] p-[30px] flex small:block items-center justify-between gap-[30px]">
              <div>
                <h4 className="text-[24px] font-bold text-[#C2877E] mb-[10px]">
                  💰 {price}
                </h4>

                <p className="text-[17px] leading-[1.7] text-[#555] max-w-[650px]">
                  {ctaText}
                </p>
              </div>

              <a
                href="https://forms.gle/rfkKz1Xn5azZZWky9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block small:w-full small:text-center small:mt-[22px] bg-[#2BA6B3] text-white font-semibold px-[28px] py-[14px] rounded-full hover:bg-[#238B96] transition-all"
              >
                Llenar formulario
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Services;
