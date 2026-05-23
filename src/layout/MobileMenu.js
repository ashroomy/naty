import { Fragment, useContext, useEffect, useState } from "react";
import { context } from "../context";
import { eliscUtilits } from "../utilits";

const MobileMenu = () => {
  const { navChange, nav, menus } = useContext(context);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    eliscUtilits.smoothScrolling();
  }, []);

  const handleMenuClick = (href) => {
    navChange(href);
    setToggle(false);
  };

  return (
    <Fragment>
      <div className="elisc_tm_topbar fixed top-0 left-0 right-0 h-[64px] bg-white/90 backdrop-blur-md z-[99] hidden shadow-sm">
        <div className="topbar_inner w-full h-full flex items-center justify-between px-[22px]">
          <a href="#" className="flex items-center">
            <img
              className="max-w-[155px] max-h-[42px]"
              src="assets/img/logo/logo-strong-human.png"
              alt="logo"
            />
          </a>

          <button
            onClick={() => setToggle(!toggle)}
            className="w-[44px] h-[44px] rounded-full bg-black text-white flex items-center justify-center"
          >
            <span className="text-[24px] leading-none">
              {toggle ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm transition-all duration-300 ${
          toggle ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setToggle(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[82%] max-w-[360px] z-[100] bg-white rounded-l-[28px] shadow-2xl transition-transform duration-300 ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col px-[28px] pt-[32px] pb-[24px]">
          <div className="flex items-center justify-between mb-[45px]">
            <img
              className="max-w-[145px]"
              src="assets/img/logo/logo-strong-human.png"
              alt="logo"
            />

            <button
              onClick={() => setToggle(false)}
              className="w-[38px] h-[38px] rounded-full bg-gray-100 text-black text-[24px] flex items-center justify-center"
            >
              ×
            </button>
          </div>

          <ul className="flex flex-col gap-[18px]">
            {menus.map((menu) => (
              <li key={menu.id}>
                <a
                  href={`#${menu.href}`}
                  onClick={() => handleMenuClick(menu.href)}
                  className={`block text-[24px] font-bold transition-all ${
                    nav === menu.href
                      ? "text-black translate-x-2"
                      : "text-gray-500"
                  }`}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <div className="h-[1px] bg-gray-200 mb-[20px]" />

            <p className="text-[13px] text-gray-400 mb-[14px]">
              Strong Human © {new Date().getFullYear()}
            </p>

            <a
              href="#contact"
              onClick={() => handleMenuClick("contact")}
              className="w-full h-[48px] rounded-full bg-black text-white flex items-center justify-center text-[15px] font-semibold"
            >
              Contactar ahora
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileMenu;