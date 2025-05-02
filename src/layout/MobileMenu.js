import { Fragment, useContext, useEffect, useState } from "react";
import { context } from "../context";
import { eliscUtilits } from "../utilits";
const MobileMenu = () => {
  const { navChange, nav, menus } = useContext(context);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    eliscUtilits.smoothScrolling();
  }, []);
  return (
    <Fragment>
      <div className="elisc_tm_topbar fixed top-0 left-0 right-0 h-[50px] bg-white z-[15] hidden">
        <div className="topbar_inner w-full h-full clear-both flex items-center justify-between py-0 px-[20px]">
          <div className="logo" data-type="image">
            {" "}
            {/* You can use text or image as logo. data-type values are: "image" and "text"  */}
            <a className="image" href="#">
              <img
                className="max-w-[150px] max-h-[40px]"
                src="assets/img/logo/logo-strong-human.png"
                alt="logo"
              />
            </a>
            <a className="text" href="#">
              <span>R.Elisc</span>
            </a>
          </div>
          <div className="trigger">
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
            >
              <div className="hamburger-box" onClick={() => setToggle(!toggle)}>
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`elisc_tm_mobile_menu ${toggle ? "opened" : ""}`}>
        <div className="inner relative w-full h-full text-right px-[20px] pt-[70px] pb-[20px]">
          <div className="wrapper">
            <div className="avatar w-[70px] h-[70px] relative float-right mb-[50px]">
              <div
                className="image absolute inset-0 bg-no-repeat bg-cover bg-center"
                data-img-url="assets/img/about/1.jpg"
              />
            </div>
            <div className="menu_list w-full h-auto clear-both float-left mb-[50px]">
              <ul className="transition_link m-0">
                {menus.map((menu, i) => (
                  <li
                    className={`mb-[7px] ${nav === menu.href ? "active" : ""}`}
                    key={menu.id}
                  >
                    <a
                      href={`#${menu.href}`}
                      onClick={() => navChange(menu.href)}
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="social w-full float-left mb-[5px]">
              <ul>
                <li className="mr-[8px] inline-block">
                  <a className="text-[#333]" href="#">
                    <img
                      className="svg"
                      src="assets/img/svg/social/facebook.svg"
                      alt="image"
                    />
                  </a>
                </li>
                <li className="mr-[8px] inline-block">
                  <a className="text-[#333]" href="#">
                    <img
                      className="svg"
                      src="assets/img/svg/social/twitter.svg"
                      alt="image"
                    />
                  </a>
                </li>
                <li className="mr-[8px] inline-block">
                  <a className="text-[#333]" href="#">
                    <img
                      className="svg"
                      src="assets/img/svg/social/instagram.svg"
                      alt="image"
                    />
                  </a>
                </li>
                <li className="mr-[8px] inline-block">
                  <a className="text-[#333]" href="#">
                    <img
                      className="svg"
                      src="assets/img/svg/social/dribbble.svg"
                      alt="image"
                    />
                  </a>
                </li>
                <li className="inline-block">
                  <a className="text-[#333]" href="#">
                    <img
                      className="svg"
                      src="assets/img/svg/social/tik-tok.svg"
                      alt="image"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="copyright w-full float-left">
              <p className="text-dark-color">
                Copyright © {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default MobileMenu;
