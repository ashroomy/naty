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
                <span className="mini block uppercase font-medium mb-[12px]">
                  -  Mucho Gusto!
                </span>
                <h3 className="name font-extrabold text-[40px]">
                  Natalia Fonseca
                </h3>
                <span className="job font-semibold text-[20px] text-white-color">
                  <span className="cd-headline rotate-1">
                    {" "}
                    {/* ANIMATE TEXT VALUES: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push,  */}
                    {/* <span className="blc">Web designer &amp; </span> */}
                    <TypeingAnimation />
                  </span>
                </span>
              </div>
              <div className="elisc_tm_button transition_link">
                <a href="#contact">Hablemos</a>
              </div>
            </div>
            <div className="right w-[60%]">
              <div className="text w-full float-left mb-[44px]">

                <p  className="mb-[30px]">
                Lic. en Fisioterapia con Postgrado en Entrenamiento Personal, Coach Strong First con más de 15 años de experiencia en el campo del entrenamiento y la readaptación física a través del movimiento.
A lo largo de mi carrera, he integrado la fisioterapia con el entrenamiento físico como herramientas clave para la prevención, recuperación y optimización del
movimiento.
                </p>
                <p className="mb-[30px]">
Acompaño a personas en su proceso de volver a entrenar con confianza, ya sea en etapa de readaptación física o en busca de mejorar su rendimiento, siempre desde un
enfoque seguro, personalizado y consciente.<br/>
Con el tiempo, he observado cómo muchas lesiones y dolores crónicos tienen su origen en deficiencias en la mecánica del movimiento. Esta comprensión me llevó a especializarme en el enfoque de readaptación física a través del ejercicio terapéutico, combinando el conocimiento clínico con el trabajo físico funcional.

                </p>
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
