import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";
import SectionContainer from "./SectionContainer";

const Testimonial = () => {
  return (
    <SectionContainer name="testimonial" className="mb-[40px]">
      <div className="elisc_tm_testimonial_wrapper w-full float-left mb-[45px]">
        <div className="tm_content w-full max-w-[1250px] mx-auto px-[20px]">
          <div className="w-full bg-[#E8D1CE] rounded-[32px] py-[50px] px-[70px] small:px-[25px] overflow-hidden">
            <div className="text-center mb-[30px]">
              <span className="uppercase tracking-[2px] text-[13px] font-semibold text-white/80 inline-block mb-[10px]">
                - Testimonios
              </span>

              <h3 className="text-[38px] small:text-[30px] font-extrabold text-white leading-tight">
                Personas reales. <br />
                Resultados reales.
              </h3>
            </div>

            <div className="max-w-[850px] mx-auto">
              <Swiper
                {...sliderProps.testimonial}
                className="owl-carousel owl-theme"
              >
                <SwiperSlide>
                  <TestimonialCard
                    quote="He logrado hacer con mi cuerpo cosas que nunca creí posibles."
                    text="Llegué buscando mejorar mi condición física y encontré mucho más: fuerza, confianza y la seguridad de entrenar con una metodología adaptada a mí."
                    name="Christel Vogel"
                    program="Entrenamiento Personal"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialCard
                    quote="He ganado fuerza, masa muscular y confianza en mi cuerpo."
                    text="Con un entrenamiento personalizado logré transformar mi cuerpo, desarrollar constancia y disfrutar el proceso mientras seguía avanzando."
                    name="Priscila Chinchilla"
                    program="Entrenamiento Personal"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialCard
                    quote="Los médicos me habían hecho creer que no podía entrenar con pesas… hoy me demostré que sí puedo."
                    text="Recuperé la confianza en mi cuerpo, gané fuerza y dejé atrás el miedo. Hoy disfruto entrenar y sé que puedo lograr mucho más de lo que imaginaba."
                    name="Cinthya Núñez"
                    program="Entrenamiento Personal"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialCard
                    quote="Aprendí a moverme mejor, no solo a hacer ejercicio."
                    text="Strong Human me enseñó a construir una base sólida. Hoy entreno con mejor técnica, más movilidad y mucha más confianza."
                    name="Justin González"
                    program="Programa StrongHuman"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialCard
                    quote="Di el primer paso en el ejercicio y me demostré que sí puedo."
                    text="Empecé desde cero y descubrí que entrenar puede ser seguro, sencillo y sostenible cuando tienes la guía adecuada."
                    name="Silvia González"
                    program="Programa StrongHuman"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialCard
                    quote="Ahora cada ejercicio tiene más sentido, y me siento más fuerte y motivada."
                    text="Aprendí a entrenar con intención y seguridad. Hoy tengo más energía, más fuerza y disfruto cada entrenamiento."
                    name="Edlin Abarca"
                    program="Programa StrongHuman"
                  />
                </SwiperSlide>

                <div className="owl-dots mt-[25px]"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

const TestimonialCard = ({ quote, text, name, program }) => {
  return (
    <div className="bg-white rounded-[28px] shadow-lg px-[45px] py-[38px] small:px-[25px] small:py-[30px] text-center">
      <div className="w-[55px] h-[55px] rounded-full bg-[#F4E5E2] flex items-center justify-center mx-auto mb-[20px]">
        <span className="text-[26px] text-[#C2877E] font-bold">“</span>
      </div>

      <p className="text-[24px] small:text-[21px] leading-[1.4] font-bold text-[#222] mb-[20px]">
        {quote}
      </p>

      <p className="text-[16px] leading-[1.7] text-[#555] mb-[28px]">
        {text}
      </p>

      <div className="w-[55px] h-[3px] bg-[#C2877E] rounded-full mx-auto mb-[20px]"></div>

      <h4 className="text-[24px] small:text-[21px] font-bold text-[#C2877E]">
        {name}
      </h4>

      <p className="text-[#777] text-[15px] mt-[4px]">{program}</p>
    </div>
  );
};

export default Testimonial;