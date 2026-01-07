import Experience from "./Experience";
import SectionContainer from "./SectionContainer";
import TypeingAnimation from "./TypeingAnimation";
const About = () => {
  return (
    <SectionContainer name="about">
      <div className="elisc_tm_about w-full float-left pt-[130px]">
        <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
          <div className="elisc_tm_biography w-full float-left flex mb-[40px]">
            <div className="left w-[40%]">
              <div className="title w-full float-left mb-[40px]">
                {/* <span className="mini block uppercase font-medium mb-[12px]">
                  -  Mucho Gusto!
                </span> */}
                <h3 className="font-extrabold text-[40px]">
                  ¡Bienvenidos soy <span className="text-blue-color">Naty!</span>
                </h3>

                <div className="pt-[50px] pb-[20px]">
              <img className="rounded-md shadow-md w-2/3 small:w-full" src="assets/img/about/naty.jpg" alt="image" />
            </div>

                <span className="job font-semibold text-[20px] text-white-color">
                  <span className="cd-headline rotate-1">
                    {" "}
                    {/* ANIMATE TEXT VALUES: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push,  */}
                    {/* <span className="blc">Web designer &amp; </span> */}
                    <TypeingAnimation />
                  </span>
                </span>
              </div>

            </div>
            <div className="right w-[60%]">
              <div className="text w-full float-left mb-[44px]">

                <p  className="mb-[30px]">
               Durante más de 15 años he ayudado a personas a volver a moverse con confianza, sin dolor y con propósito.

                </p>
                <p className="mb-[30px]">
Soy fisioterapeuta y entrenadora personal, apasionada por integrar la ciencia del movimiento con la fuerza consciente. Mi trabajo une lo mejor para acompañarte a recuperar, prevenir y mejorar tu rendimiento, desde un enfoque seguro y personalizado.
<br/>
                </p>
                <p className="mb-[30px]">
                  He visto cómo muchos dolores y lesiones nacen de una mecánica de movimiento alterada. Por eso, mi misión es guiarte a reconectar con tu cuerpo, aprender a moverte bien y construir fuerza para toda la vida.


                </p>
                <div className="elisc_tm_button transition_link">
                <a href="#contact">Hablemos</a>
              </div>
              </div>
            </div>
          </div>
          <div className="elisc_tm_counter w-full float-left mb-[10px]">
            <ul className="ml-[-30px]">
              <li className="mb-[30px] float-left w-[1/2] pl-[30px]">
                <div className="list_inner text-white  w-full float-left relative text-center py-[60px] px-[20px] rounded-[4px] overflow-hidden bg-[#EACBC6]">
                  <h3 className="text-[18px]  text-white mb-[7px]">Mi misión es enseñarte a entrenar con confianza, sin importar tu punto de partida, para que logres moverte con libertad, superar tus metas, y vivir fuerte.</h3>
                  <img
                    className=" m-auto w-auto h-[60px]  opacity-95"
                    src="assets/img/about/logo-white.png"
                    alt="image"/>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default About;
