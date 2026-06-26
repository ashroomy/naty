import { useContext, useState } from "react";
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
        title="Plan de entrenamiento online"
        subtitle={[
          "Alcanzá tus objetivos con un plan diseñado exclusivamente para vos...",
          "Entrená desde cualquier lugar con una programación 100% personalizada según tu condición física, experiencia, historial de lesiones y objetivos.",
        ]}
        image="assets/img/service/Online.jpg"
        imageFirst
        introTitle="¿Para quién es este servicio?"
        intro="Si buscás una programación diseñada específicamente para vos y tus objetivos. Ya sea que querás mejorar tu composición corporal, ganar fuerza, rendir mejor en tu deporte, volver a entrenar después de una lesión o simplemente construir un estilo de vida más activo y saludable, te acompañaré para que alcancés tus metas de forma segura y sostenible."
        benefitsTitle="Lo que vas a lograr"
        benefits={[
          "Sentirte más fuerte, con más energía y confianza en tu cuerpo y así poder alcanzar tus objetivos progresivamente.",
          "Construir una rutina de ejercicio que realmente se adapte a tu estilo de vida.",
          "Dejar de improvisar y seguir un plan claro para alcanzar tus objetivos.",
          "Mantener la motivación y la constancia con acompañamiento profesional durante todo el proceso.",
        ]}
        howItWorksTitle="¿Cómo funciona el plan online?"
        howItWorks="Diseñamos un plan personalizado por 6 semanas según tus metas, nivel, espacio y equipo disponible. A través de mi app recibirás tus rutinas semanales con videos, explicaciones detalladas y seguimiento constante para que aprendás a entrenar correctamente y avancés con más seguridad y confianza."
        price="¿Cómo empezar?"
        ctaText="Podés iniciar tu proceso realizando el pago del plan y agendando tu primera cita virtual, donde conoceremos tus objetivos, historial y necesidades para diseñar un programa personalizado para vos."
      />

      <ServiceDetail
        id="hibrido"
        title="Plan de entrenamiento híbrido"
        subtitle={
          <>
            <p className="mb-[18px]">
              <strong>
                Disfrutá de la libertad de entrenar por tu cuenta, con el respaldo de un
                acompañamiento presencial cuando más lo necesitás.
              </strong>
            </p>
          </>
        }
        image="assets/img/service/Hibrido.jpg"
        introTitle="¿Para quién es el entrenamiento híbrido?"
        intro={[
          "Este programa combina una programación completamente personalizada con sesiones presenciales estratégicas para perfeccionar tu técnica, adaptar el entrenamiento a una lesión o condición específica y ayudarte a progresar con mayor seguridad.",
          "Es ideal si buscás mejorar tu composición corporal, aumentar tu fuerza, potenciar tu rendimiento deportivo o recuperarte para volver a entrenar con confianza, sin renunciar al seguimiento profesional durante todo el proceso.",
        ]}
        benefitsTitle="¿Qué vas a lograr?"
        benefits={[
          "Ganar la confianza necesaria para entrenar de forma independiente sin renunciar al apoyo profesional.",
          "Alcanzar tus objetivos con mayor claridad, constancia y confianza en el proceso.",
          "Desarrollar fuerza, hábitos y herramientas que te permitan mantener resultados a largo plazo.",
          "Disfrutar de la libertad de entrenar según tus horarios, sabiendo que contás con el respaldo de una profesional.",
        ]}
        howItWorksTitle="¿Qué incluye el Programa Híbrido?"
        howItWorks={
          <>
            <p className="mb-[14px]">
              El entrenamiento híbrido combina sesiones presenciales enfocadas en técnica,
              movimiento y ajustes personalizados, con seguimiento online para que aprendás
              a entrenar con más seguridad y autonomía, con una duración de <strong>6 semanas</strong>.
            </p>

            <p className="mb-[14px]">
              Dependiendo del plan que elijás, podrás contar con una sesión presencial
              inicial o <strong>2 sesiones de seguimiento adicionales</strong> para acompañar
              tu progreso y reforzar lo aprendido.
            </p>

            <p className="mb-[26px]">
              Durante todo el proceso tendrás acceso a una programación personalizada,
              videos explicativos y seguimiento constante.
            </p>

            <h5 className="text-[20px] font-bold text-[#222] mb-[18px]">
              INVERSIÓN
            </h5>

            <div className="grid md:grid-cols-2 gap-[18px]">
              <div className="bg-white rounded-[18px] p-[20px] border border-[#E9F9FF] shadow-sm">
                <h6 className="font-bold text-[18px] text-[#2BA6B3] mb-[8px]">
                  Plan Híbrido 1
                </h6>

                <p className="text-[26px] font-extrabold text-[#222] mb-[12px]">
                  $160 USD
                </p>

                <p className="text-[#555]">
                  ✓ 1 sesión presencial inicial
                </p>
              </div>

              <div className="bg-white rounded-[18px] p-[20px] border border-[#E9F9FF] shadow-sm">
                <h6 className="font-bold text-[18px] text-[#2BA6B3] mb-[8px]">
                  Plan Híbrido 2
                </h6>

                <p className="text-[26px] font-extrabold text-[#222] mb-[12px]">
                  $200 USD
                </p>

                <p className="text-[#555]">
                  ✓ 2 sesiones presenciales
                </p>
              </div>
            </div>
          </>
        }
        price="¿Cómo adquirirlo?"
        ctaText="¿Querés probar el formato híbrido? Completá el formulario y te envío todos los detalles."
      />

      <ServiceDetail
        id="stronghuman"
        title="Programa Strong Human"
        subtitle={
          <>
            <p className="mb-[18px]">
              <strong>
                En STRONG HUMAN aprendés a entrenar, no solo a seguir rutinas.
              </strong>
            </p>

            <p className="mb-[18px]">
              Durante años escuché la misma frase de mis pacientes y clientes:
              <br />
              <span className="italic text-[#2BA6B3]">
                "Nunca nadie me había explicado esto."
              </span>
            </p>

            <p>
              Así nació <strong>STRONG HUMAN</strong>: un programa 100% online de 8 semanas,
              diseñado para personas que quieren empezar a entrenar desde cero o que tienen
              muy poca experiencia.
            </p>
          </>
        }
        image="assets/img/service/StrongHuman1.png"
        imageFirst
        introTitle=""
        intro="Aprenderás los fundamentos que toda persona debería conocer antes de empezar a entrenar, para construir una base sólida y desarrollar la confianza necesaria para progresar de forma segura, alcanzar sus objetivos y adquirir buenos hábitos para toda la vida."
        benefitsTitle="Al terminar Strong Human podrás..."
        benefits={[
          "Entrenar con seguridad y confianza, sin sentirte perdido al momento de hacer ejercicio.",
          "Comprender el porqué de cada ejercicio y cómo adaptarlo a tus necesidades.",
          "Crear un hábito de entrenamiento progresivo y sostenible que puedas mantener a largo plazo.",
          "Dejar de depender de rutinas sin un criterio profesional y aprender a tomar mejores decisiones sobre tu entrenamiento.",
        ]}
        howItWorksTitle="¿Qué incluye el programa Strong Human?"
        howItWorks={
          <>
            <p className="mb-[14px]">
              <strong>STRONG HUMAN</strong> es un programa 100% online de 8 semanas diseñado para enseñarte a entrenar de forma progresiva, segura y con confianza.
            </p>

            <p className="mb-[14px]">
              Comenzaremos con una valoración inicial virtual para conocer tu experiencia, tus objetivos y tus necesidades. A partir de ahí recibirás una programación personalizada a través de la aplicación.
            </p>

            <p className="mb-[14px]">
              Cada semana combinarás tus entrenamientos con cápsulas educativas que te ayudarán a comprender el porqué de cada ejercicio, mejorar tu técnica y construir una base sólida para seguir progresando con seguridad y confianza.
            </p>

            <p>
              <strong>INVERSIÓN: $85 USD</strong>
            </p>
          </>
        }
        price="¿Cómo adquirirlo?"
        ctaText="¿Querés empezar tu proceso Strong Human? Completá el formulario y te envío todos los detalles de la próxima temporada, sin compromiso."
      />
    </>
  );
};

const AccordionItem = ({ title, children, bgColor, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`${bgColor} rounded-[26px] w-full overflow-hidden`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-[20px] p-[30px] text-left"
      >
        <h4 className="text-[24px] small:text-[21px] font-bold text-[#222]">
          {title}
        </h4>

        <span className="w-[42px] h-[42px] min-w-[42px] rounded-full bg-white text-[#2BA6B3] flex items-center justify-center text-[30px] font-semibold shadow-sm">
          {open ? "−" : "+"}
        </span>
      </button>

      <div
        className={`transition-all duration-500 ease-in-out ${
          open ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-[30px] pb-[30px]">{children}</div>
      </div>
    </div>
  );
};

const TextContent = ({ content }) => {
  if (Array.isArray(content)) {
    return (
      <>
        {content.map((item, index) => (
          <p
            key={index}
            className="text-[17px] leading-[1.8] text-[#555] mb-[14px] last:mb-0"
          >
            {item}
          </p>
        ))}
      </>
    );
  }

  if (typeof content === "string" || typeof content === "number") {
    return (
      <p className="text-[17px] leading-[1.8] text-[#555]">
        {content}
      </p>
    );
  }

  return (
    <div className="text-[17px] leading-[1.8] text-[#555]">
      {content}
    </div>
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
  benefitsTitle,
  benefits,
  howItWorksTitle,
  howItWorks,
  price,
  ctaText,
}) => {
  return (
    <SectionContainer name={id} id={id}>
      <div className="elisc_tm_services w-full float-left pb-[70px]">
        <div className="tm_content w-full max-w-[1250px] mx-auto px-[20px]">
          <div className="bg-white rounded-[32px] shadow-lg p-[45px] small:p-[25px]">
            <div
              className={`relative overflow-hidden bg-[#F8FCFD] rounded-[30px] p-[30px] small:p-[20px] flex small:block gap-[40px] items-center mb-[35px] ${
                imageFirst ? "" : "flex-row-reverse"
              }`}
            >
              <div className="absolute top-[-80px] right-[-80px] w-[230px] h-[230px] bg-[#E9F9FF] rounded-full blur-[20px] opacity-80"></div>
              <div className="absolute bottom-[-90px] left-[-90px] w-[240px] h-[240px] bg-[#F4E5E2] rounded-full blur-[25px] opacity-80"></div>

              <div className="relative z-[2] w-1/2 small:w-full">
                <div className="relative overflow-hidden rounded-[34px] shadow-xl">
                  <img
                    className="w-full h-[600px] small:h-[420px] object-cover object-center"
                    src={image}
                    alt={title}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent"></div>
                </div>
              </div>

              <div className="relative z-[2] w-1/2 small:w-full small:mt-[28px]">
                {label && (
                  <span className="font-medium uppercase inline-block mb-[12px] text-[#C2877E]">
                    {label}
                  </span>
                )}

                <h3 className="text-[42px] small:text-[30px] font-extrabold text-[#2BA6B3] leading-tight uppercase mb-[15px]">
                  {title}
                </h3>

                <div className="mb-[25px]">
                  <TextContent content={subtitle} />
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-[24px] p-[25px] shadow-sm border border-white">
                  {introTitle && (
                    <h4 className="text-[24px] small:text-[21px] font-bold text-[#222] mb-[14px]">
                      {introTitle}
                    </h4>
                  )}

                  <TextContent content={intro} />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[25px]">
              <AccordionItem
                title={benefitsTitle}
                bgColor="bg-[#E9F9FF]"
                defaultOpen={false}
              >
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
              </AccordionItem>

              <AccordionItem
                title={howItWorksTitle}
                bgColor="bg-[#F4E5E2]"
                defaultOpen={false}
              >
                <TextContent content={howItWorks} />
              </AccordionItem>

              <AccordionItem
                title={price}
                bgColor="bg-[#D4D4D4]"
                defaultOpen={false}
              >
                <div className="flex small:block items-center justify-between gap-[30px]">
                  <p className="text-[17px] leading-[1.7] text-[#555] max-w-[650px]">
                    {ctaText}
                  </p>

                  <a
                    href="https://forms.gle/rfkKz1Xn5azZZWky9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block small:w-full small:text-center small:mt-[22px] bg-[#2BA6B3] text-white font-semibold px-[28px] py-[14px] rounded-full hover:bg-[#238B96] transition-all"
                  >
                    Llenar formulario
                  </a>
                </div>
              </AccordionItem>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Services;