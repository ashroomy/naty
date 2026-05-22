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
                    text="Mejoró su salud física y mental, desarrolló fuerza y aprendió a entrenar con técnica y seguridad. Lo recomiendo por su calidad profesional y entrenamiento personalizado."
                    name="Christel Vogel"
                    program="Entrenamiento Personal"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialCard
                    quote="He ganado fuerza, masa muscular y confianza en mi cuerpo."
                    text="Transformación física, aumento de fuerza, resiliencia y constancia. Lo recomiendo por su atención al detalle, seguimiento cercano y rutinas bien estructuradas."
                    name="Priscila Chinchilla"
                    program="Entrenamiento Personal"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialCard
                    quote="Los médicos me habían condicionado a pensar que no podía entrenar con pesas."
                    text="Ganó fuerza, movilidad y confianza en su cuerpo. Su transformación más significativa fue mental: dejó atrás creencias limitantes."
                    name="Cinthya Núñez"
                    program="Entrenamiento Personal"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialCard
                    quote="Aprendí a moverme mejor, no solo a hacer ejercicio."
                    text="Mejor técnica, mayor movilidad, conciencia del cuerpo y mejor condición física. Educación del movimiento para entrenar con conciencia."
                    name="Justin González"
                    program="Programa StrongHuman"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialCard
                    quote="Di el primer paso en el ejercicio y me demostré que sí puedo."
                    text="Más confianza para moverse, nociones básicas de técnica y consistencia. Lo recomiendo por su claridad y acompañamiento cercano."
                    name="Silvia González"
                    program="Programa StrongHuman"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialCard
                    quote="Ahora cada ejercicio tiene más sentido, y me siento más fuerte y motivada."
                    text="Más energía, mejor descanso, aumento de fuerza y consciencia postural. Ideal para aprender desde cero y ver cambios reales."
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