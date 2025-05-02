import { Fragment, useContext, useEffect } from "react";
import BlogPopup from "../components/popup/BlogPopup";
import ExperiencePopup from "../components/popup/ExperiencePopup";
import PortfolioPopup from "../components/popup/PortfolioPopup";
import ServicePopup from "../components/popup/ServicePopup";
import VideoPopup from "../components/popup/VideoPopup";
import { context } from "../context";
import { eliscUtilits } from "../utilits";
import Cursor from "./Cursor";
import MobileMenu from "./MobileMenu";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  useEffect(() => {
    eliscUtilits.dataImage();
    eliscUtilits.customCursor();
    eliscUtilits.imgToSVG();
  }, []);

  const {
    modal,
    experienceModal,
    serviceModal,
    portfolioModal,
    blogModal,
    animation,
  } = useContext(context);

  return (
    <Fragment>
      <VideoPopup />
      {modal && experienceModal && <ExperiencePopup />}
      {modal && serviceModal && <ServicePopup />}
      {modal && portfolioModal && <PortfolioPopup />}
      {modal && blogModal && <BlogPopup />}
      <div
        className={animation ? "elisc_tm_all_wrap" : "dodo_tm_one_page_wrapper"}
        data-magic-cursor="show"
        data-enter={animation}
        data-exit
      >
        <MobileMenu />
        <Sidebar />
        <div className="elisc_tm_mainpart w-full min-h-[100vh] clear-both float-left pl-[370px]">
          <div className="mainpart_inner w-full min-h-[100vh] clear-both float-left relative">
            {children}
          </div>
        </div>
        <Cursor />
      </div>
    </Fragment>
  );
};
export default Layout;
