import emailjs from "emailjs-com";
import { useState } from "react";
import SectionContainer from "./SectionContainer";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = mailData;
  const [error, setError] = useState(null);

  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_seruhwu",
          "template_21aw58z",
          mailData,
          "Q3pccdLZhU-mZT7tQ"
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <SectionContainer name="contact">
      <div className="elisc_tm_contact w-full min-h-[75vh] float-left bg-[#E9F9FF] rounded-[32px] py-[90px] mt-[30px]">
        <div className="tm_content w-full max-w-[1250px] mx-auto px-[20px]">
          <div className="w-full bg-white rounded-[28px] shadow-lg p-[40px] small:p-[28px] flex small:block items-center justify-between gap-[50px]">
            
            <div className="w-1/2 small:w-full">
              <span className="font-medium uppercase inline-block mb-[12px] text-sm tracking-wide">
                - ¡Hablemos!
              </span>

              <h3 className="text-[44px] small:text-[32px] leading-tight font-extrabold text-[#2BA6B3] mb-[20px]">
                El primer paso es entender tus necesidades.
              </h3>

              <p className="text-[18px] leading-[1.7] mb-[30px] text-[#222]">
                Completá este breve formulario y agendamos tu sesión virtual
                totalmente gratis.
              </p>

              <div className="flex small:block gap-[15px] mb-[35px]">
                <a
                  href="https://forms.gle/rfkKz1Xn5azZZWky9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block small:w-full small:text-center bg-[#2BA6B3] text-white font-semibold px-[28px] py-[14px] rounded-full hover:bg-[#238B96] transition-all"
                >
                  Llenar formulario
                </a>

                <a
                  href="http://wa.me/+50688820971"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex small:w-full small:justify-center small:mt-[14px] items-center gap-[12px] bg-[#2BA6B3]/80 text-white font-semibold px-[28px] py-[14px] rounded-full hover:bg-[#2BA6B3] transition-all"
                >
                  <img
                    className="h-[24px]"
                    src="assets/img/WA.png"
                    alt="WhatsApp"
                  />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="w-1/2 small:w-full small:mt-[40px]">
              <div className="bg-[#E9F9FF] rounded-[24px] p-[35px] small:p-[25px]">
                <h4 className="text-[26px] font-bold mb-[18px] text-[#222]">
                  ¿Qué sucede después?
                </h4>

                <ul className="space-y-[18px] text-[#222]">
                  <li className="flex gap-[12px]">
                    <span className="text-[#2BA6B3] font-bold">01</span>
                    <p>Completás el formulario con tus necesidades.</p>
                  </li>

                  <li className="flex gap-[12px]">
                    <span className="text-[#2BA6B3] font-bold">02</span>
                    <p>
                      Revisamos tu caso y definimos la mejor opción para vos.
                    </p>
                  </li>

                  <li className="flex gap-[12px]">
                    <span className="text-[#2BA6B3] font-bold">03</span>
                    <p>
                      Agendamos una sesión virtual gratuita para conversar.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;