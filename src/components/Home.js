import { useContext } from "react";
import { context } from "../context";
import SectionContainer from "./SectionContainer";
import TypeingAnimation from "./TypeingAnimation";
const Home = () => {
  const { navChange } = useContext(context);
  return (
    <SectionContainer name="home">
      <div className="elisc_tm_home w-full min-h-[100vh] clear-both float-left bg-[#]">
        <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
          <div className="details w-full min-h-[100vh] flex items-center">
            <div className="left w-1/2">
              <div className="title w-full float-left mb-[21px]">


                <h3 className="font-extrabold italic text-[60px] leading-[70px] pb-4">
                Vive seguro, entrena fuerte
                </h3>
                <h3 className="font-extrabold text-[60px]">
                  Hola, soy <span className="text-blue-color">Naty!</span>
                </h3>
              </div>
              <div className="subtitle wfll max-w-[80%] float-left mb-[40px]">
                <p>
                Creo en la fuerza que transforma, en el poder de moverse sin dolor, y en la seguridad de un entrenamiento bien guiado y con resultados que perduran.                </p>
              </div>
              <div className="buttons w-full float-left flex items-center mb-[150px]">
                <div className="elisc_tm_button transition_link">
                  <a href="#service" onClick={() => navChange("service")}>
                   Mis servicios
                  </a>
                </div>
                <div
                  className="elisc_tm_button transition_link"
                  data-style="border"
                >
                  <a href="#contact" onClick={() => navChange("contact")}>
                   Hablemos
                  </a>
                </div>
              </div>
              <div className="info w-full float-left">
                <ul className="relative">
                  <li className="pl-[15px]">
                    <a
                      className="text-[#130F49] font-semibold text-[18px]"
                      href="http://wa.me/+50688820971"
                    >
                     +506 8882 0971
                    </a>
                  </li>
                  <li className="pl-[15px]">
                    <a
                      className="text-[#130F49] font-semibold text-[18px]"
                      href="mailto:natyfh0228@hotmail.com"
                    >
                      natyfh0228@hotmail.com
                    </a>
                  </li>
                  <li className="pl-[15px]">
                    <a
                      className="href_location text-[#130F49] font-semibold text-[18px]"
                      href="#"
                    >
                      Costa Rica
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right w-1/2 pl-[50px]">
              <img className="rounded-md shadow-md" src="assets/img/about/profile-1.jpg" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Home;
