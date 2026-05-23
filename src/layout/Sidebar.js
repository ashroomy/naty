import { useContext } from "react";
import { context } from "../context";

const Sidebar = () => {
  const { navChange, nav } = useContext(context);

  const orderedMenus = [
    { id: 1, name: "Inicio", href: "home" },
    { id: 2, name: "Sobre mí", href: "about" },
    { id: 3, name: "Servicios", href: "service" },
    { id: 4, name: "Testimonios", href: "testimonial" },
    { id: 5, name: "Contacto", href: "contact" },
  ];

  return (
    <div className="elisc_tm_sidebar w-[370px] h-[100vh] fixed left-0 top-0 border-r border-[#F4E5E2] bg-[#F8FCFD] overflow-hidden">
      
      {/* FONDOS DIFUMINADOS */}
      <div className="absolute top-[-80px] left-[-80px] w-[220px] h-[220px] bg-[#E9F9FF] rounded-full blur-3xl opacity-90"></div>

      <div className="absolute bottom-[80px] right-[-100px] w-[240px] h-[240px] bg-[#F4E5E2] rounded-full blur-3xl opacity-80"></div>

      <div className="sidebar_inner relative z-[2] w-full h-full text-center flex flex-col justify-between px-[34px] py-[45px]">

        <div>

          {/* CARD SUPERIOR */}
          <div className="author w-full">
            <div className="bg-white rounded-[28px] px-[24px] py-[28px] shadow-sm">

              <img
                className="w-full max-w-[190px] mx-auto block"
                src="/assets/img/logo/logo-strong-human.png"
                alt="Naty Fonseca"
              />

              <div className="mt-[14px]">
                <span className="inline-block bg-[#E9F9FF] text-[#2BA6B3] font-bold px-[20px] py-[8px] rounded-full">
                  Coach
                </span>
              </div>

            </div>
          </div>

          {/* MENÚ */}
          <div className="menu w-full mt-[34px]">
            <ul className="transition_link flex flex-col gap-[14px] items-center">

              {orderedMenus.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={`#${menu.href}`}
                    onClick={() => navChange(menu.href)}
                    className={`inline-block rounded-[18px] px-[18px] py-[9px] font-semibold transition-all duration-300 ${
                      nav === menu.href
                        ? "bg-[#F4E5E2] text-black shadow-sm"
                        : "text-[#555] hover:bg-white hover:text-black"
                    }`}
                  >
                    {menu.name}
                  </a>
                </li>
              ))}

            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="copyright">
          <div className="bg-white/80 rounded-[22px] px-[20px] py-[16px] shadow-sm">
            <p className="text-[14px] leading-[1.6] text-[#555]">
              Copyright © {new Date().getFullYear()}
              <br />
              The BrokenRule
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;