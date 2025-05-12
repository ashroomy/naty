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
          "service_seruhwu", // service id
          "template_21aw58z", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
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
      <div className="elisc_tm_contact w-full min-h-[100vh] float-left bg-[#E9F9FF] pt-[120px]">
        <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
          <div className="wrapper w-full float-left flex">
            <div className="left w-full pr-[50px]">
              <div className="elisc_tm_title w-full float-left">
                <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                  - ¡Hablemos!
                </span>
                <h3 className="text-[40px] font-extrabold">El primer paso es entender tus necesidades.
                </h3>
              </div>
              <div className="text w-full float-left mt-[20px] mb-[40px]">
                <p>
                Completa este breve formulario y agendamos tu sesión virtual totalmente gratis.
                </p>
                <ul>
                  <li className="mb-[8px] w-full float-left">
                  <a
                      className="text-dark-color font-semibold font-inter inline-block relative"
                      href="https://forms.gle/rfkKz1Xn5azZZWky9"
                      target="_blank"
                      refer="noopener noreferrer"
                    >
                      Llenar formulario
                    </a>
                  </li>
                </ul>

              </div>
              <div className="info w-full float-left">
                <ul>
                  <li className="mb-[8px] w-full float-left">
                    <a
                      className="text-dark-color font-semibold font-inter inline-block relative"
                      href="http://wa.me/+50688820971"
                    >
                      +506 88820971
                    </a>
                  </li>
                  {/* <li className="mb-[8px] w-full float-left">
                    <a
                      className="text-dark-color font-semibold font-inter inline-block relative"
                      href="tel:+77 022 444 05 05"
                    >
                      support@elisc.com
                    </a>
                  </li> */}
                  <li className="w-full float-left">
                    <a
                      className="href_location text-dark-color font-semibold font-inter inline-block relative"
                      href="#"
                    >
                      Alajuela, Costa Rica
                    </a>
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
