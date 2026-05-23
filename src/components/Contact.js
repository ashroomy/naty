import { useState } from "react";
import SectionContainer from "./SectionContainer";

const Contact = () => {
  const [selectedService, setSelectedService] = useState("");

  return (
    <SectionContainer name="contact">
      <div className="w-full float-left py-[35px] relative">
        
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[360px] bg-[#BEEFF5] blur-[120px] opacity-50 rounded-full -z-10" />

        <div className="tm_content w-full max-w-[1250px] mx-auto px-[20px]">
          
          <div className="w-full bg-white rounded-[32px] shadow-xl px-[70px] py-[35px] small:px-[25px] small:py-[28px]">
            
            <div className="text-center mb-[25px]">
              <h3 className="text-[36px] small:text-[28px] font-extrabold text-black uppercase mb-[8px]">
                ¡EMPECEMOS YA!
              </h3>

              <p className="text-[16px] text-[#222]">
                Llena el siguiente formulario para coordinar conmigo y empezamos a trabajar.
              </p>
            </div>

            <form
              action="https://formsubmit.co/natyfh0228@hotmail.com"
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="Nuevo formulario desde la página web"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <div className="grid grid-cols-2 small:grid-cols-1 gap-[16px] mb-[16px]">
                <input
                  type="text"
                  name="Nombre"
                  placeholder="Nombre"
                  required
                  className="w-full bg-[#F8F8F8] px-[20px] py-[13px] text-[15px] rounded-[14px] border-none"
                />

                <input
                  type="email"
                  name="Correo"
                  placeholder="Correo electrónico"
                  required
                  className="w-full bg-[#F8F8F8] px-[20px] py-[13px] text-[15px] rounded-[14px] border-none"
                />
              </div>

              <input
                type="tel"
                name="Teléfono"
                placeholder="Teléfono"
                required
                className="w-full bg-[#F8F8F8] px-[20px] py-[13px] text-[15px] rounded-[14px] border-none mb-[22px]"
              />

              <div className="mb-[22px]">
                <p className="font-bold text-[#222] text-[22px] mb-[18px]">
                  ¿Cuál servicio querés?
                </p>

                <div className="grid grid-cols-3 small:grid-cols-1 gap-[18px]">
                  
                  <label
                    className={`rounded-[24px] px-[24px] py-[22px] cursor-pointer text-center transition-all border-2 ${
                      selectedService === "online"
                        ? "bg-[#DDF8FC] border-[#2BA6B3]"
                        : "bg-[#E9F9FF] border-transparent"
                    }`}
                  >
                    <input
                      type="radio"
                      name="Servicio"
                      value="Plan de entrenamiento online"
                      checked={selectedService === "online"}
                      onChange={() => setSelectedService("online")}
                      className="hidden"
                    />

                    <h4 className="text-[28px] font-extrabold text-[#2BA6B3] mb-[8px]">
                      Online
                    </h4>

                    <p className="text-[#444] text-[15px] leading-[1.5]">
                      acompañamiento remoto personalizado
                    </p>
                  </label>

                  <label
                    className={`rounded-[24px] px-[24px] py-[22px] cursor-pointer transition-all text-center border-2 ${
                      selectedService === "hibrido"
                        ? "bg-[#DDF8FC] border-[#2BA6B3]"
                        : "bg-[#E9F9FF] border-transparent"
                    }`}
                  >
                    <input
                      type="radio"
                      name="Servicio"
                      value="Plan de entrenamiento híbrido"
                      checked={selectedService === "hibrido"}
                      onChange={() => setSelectedService("hibrido")}
                      className="hidden"
                    />

                    <h4 className="text-[28px] font-extrabold text-[#2BA6B3] mb-[8px]">
                      Híbrido
                    </h4>

                    <p className="text-[#444] text-[15px] leading-[1.5]">
                      sesiones presenciales + online
                    </p>
                  </label>

                  <label
                    className={`rounded-[24px] px-[24px] py-[22px] cursor-pointer transition-all text-center border-2 ${
                      selectedService === "stronghuman"
                        ? "bg-[#DDF8FC] border-[#2BA6B3]"
                        : "bg-[#E9F9FF] border-transparent"
                    }`}
                  >
                    <input
                      type="radio"
                      name="Servicio"
                      value="Programa Strong Human"
                      checked={selectedService === "stronghuman"}
                      onChange={() => setSelectedService("stronghuman")}
                      className="hidden"
                    />

                    <h4 className="text-[28px] font-extrabold text-[#2BA6B3] mb-[8px]">
                      Strong Human
                    </h4>

                    <p className="text-[#444] text-[15px] leading-[1.5]">
                      movimiento + fuerza consciente
                    </p>
                  </label>

                </div>
              </div>

              <textarea
                name="Mensaje"
                placeholder="Mensaje"
                required
                rows="3"
                className="w-full bg-[#F8F8F8] px-[20px] py-[13px] text-[15px] rounded-[14px] border-none mb-[18px]"
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#2BA6B3] text-white font-bold text-[15px] px-[38px] py-[13px] rounded-full hover:bg-[#238B96] transition-all"
                >
                  ENVIAR
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;