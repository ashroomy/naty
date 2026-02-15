import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";
import SectionContainer from "./SectionContainer";

const Testimonial = () => {
  return (
    <SectionContainer name="testimonial" className="mb-[40px]">
      <div className="elisc_tm_testimonial_wrapper w-full float-left mb-[120px]">
        <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
          <div className="elisc_tm_testimonials w-full float-left bg-[#FFF5F6] pt-[50px] pr-[100px] pb-[50px] pl-[100px] small:px-[40px] mb-[24px]">
            <div className="elisc_tm_title w-full float-left text-center">
              <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                - Testimonios
              </span>
              <h3 className="text-[40px] font-extrabold">

              </h3>
            </div>
            <div className="testimonials_list w-full float-left text-center mt-[43px]">
              <Swiper
                {...sliderProps.testimonial}
                className="owl-carousel owl-theme"
              >
                <SwiperSlide>
                  <div className="text mb-[33px]">
                    <p className="text-[24px] leading-[40px] font-inter">
                      "He logrado hacer con mi cuerpo cosas que nunca creí
                      posibles."
                      <br /> <br />

                      Mejoró su salud física y mental, desarrolló
                      fuerza y aprendió a entrenar con técnica y seguridad. Lo
                      recomiendo por su calidad profesional y entrenamiento
                      personalizado adaptado a sus habilidades y limitaciones.
                    </p>
                  </div>
                  <div className="short w-auto flex items-center justify-center mb-[5px]">

                    <div className="detail text-left pl-[18px]">
                      <h3 className="text-[30px] font-medium">
                        {" "}
                        Christel Vogel
                      </h3>
                    </div>
                  </div>
                  <p className="job text-center">Entrenamiento Personal </p>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text mb-[33px]">
                    <p className="text-[24px] leading-[40px] font-inter">
                      "He ganado fuerza, masa muscular y confianza en mi
                      cuerpo."
                      <br /> <br />
                      Transformación física, aumento de fuerza,
                      resiliencia y constancia a lo largo del tiempo. Lo
                      recomiendo por su atención al detalle, seguimiento cercano
                      y rutinas bien estructuradas.
                    </p>
                  </div>
                  <div className="short w-auto flex items-center justify-center mb-[5px]">
                    <div className="detail text-left pl-[18px]">
                      <h3 className="text-[30px] font-medium">
                        {" "}
                        Priscila Chinchilla{" "}
                      </h3>
                    </div>
                  </div>
                  <p className="job text-center">Entrenamiento Personal</p>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text mb-[33px]">
                    <p className="text-[24px] leading-[40px] font-inter">
                      "Los médicos me habían condicionado a pensar que no podía
                      entrenar con pesas… hoy me demostré que sí, he logrado
                      muchas cosas ya hasta corrí dos carreras y sigo
                      avanzando."
                      <br /> <br />
                      Superó miedos profundamente
                      arraigados por su condición de columna. Ganó fuerza,
                      movilidad y, sobre todo, confianza en su cuerpo. Su
                      transformación más significativa fue mental: dejó atrás
                      creencias limitantes impuestas y descubrió de lo que
                      realmente es capaz. Lo recomiendo por su enfoque profundo
                      e individualizado, se trabaja cuerpo y mente de forma
                      segura desde el respeto a cada etapa del proceso.
                    </p>
                  </div>
                  <div className="short w-auto flex items-center justify-center mb-[5px]">
                    <div className="detail text-left pl-[18px]">
                      <h3 className="text-[30px] font-medium">Cinthya Núñez</h3>
                    </div>
                  </div>
                  <p className="job text-center">Entrenamiento Personal</p>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text mb-[33px]">
                    <p className="text-[24px] leading-[40px] font-inter">
                      "Aprendí a moverme mejor, no solo a hacer ejercicio."
                      <br /> <br />
                      Mejor técnica, mayor movilidad, conciencia del
                      cuerpo y mejor condición física. Lo recomiendo porque hay
                      educación del movimiento para quienes buscan entrenar con
                      conciencia y construir una base sólida.
                    </p>
                  </div>
                  <div className="short w-auto flex items-center justify-center mb-[5px]">
                    <div className="detail text-left pl-[18px]">
                      <h3 className="text-[30px] font-medium">
                        Justin González
                      </h3>
                    </div>
                  </div>
                  <p className="job text-center">Programa StrongHuman</p>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text mb-[33px]">
                    <p className="text-[24px] leading-[40px] font-inter">
                      "Di el primer paso en el ejercicio y me demostré que sí
                      puedo, sin ponerme barreras mentales."
                      <br /> <br />
                      Más
                      confianza para moverse, nociones básicas de técnica y
                      consistencia en el ejercicio. Lo recomiendo por su
                      claridad, facilidad de aprender y acompañamiento cercano.
                    </p>
                  </div>
                  <div className="short w-auto flex items-center justify-center mb-[5px]">
                    <div className="detail text-left pl-[18px]">
                      <h3 className="text-[30px] font-medium">
                        Silvia González
                      </h3>
                    </div>
                  </div>
                  <p className="job text-center">Programa StrongHuman</p>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text mb-[33px]">
                    <p className="text-[24px] leading-[40px] font-inter">
                      "Ahora cada ejercicio tiene más sentido, y me siento más fuerte y motivada."
                      Lo recomiendo mucho para aprender desde cero, evitar lesiones y ver cambios reales con poco tiempo.
                    <br /> <br />
                      Más energía, mejor descanso, aumento de fuerza y consciencia postural.

                    </p>
                  </div>
                  <div className="short w-auto flex items-center justify-center mb-[5px]">
                    <div className="detail text-left pl-[18px]">
                      <h3 className="text-[30px] font-medium">
                        Edlin Abarca
                      </h3>
                    </div>
                  </div>
                  <p className="job text-center">Programa StrongHuman</p>
                </SwiperSlide>
                <div className="owl-dots"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Testimonial;
