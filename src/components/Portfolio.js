import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { context } from "../context";
import { sliderProps } from "../sliderProps";
import Clients from "./Clients";
import SectionContainer from "./SectionContainer";
import Testimonial from "./Testimonial";
const Portfolio = () => {
  const { setPortfolioModal, modalToggle } = useContext(context);
  return (
    <SectionContainer name="portfolio">
      <div className="elisc_tm_portfolio w-full float-left pt-[120px]">
        <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
          <div className="elisc_tm_portfolio_title w-full float-left flex items-end justify-between">
            <div className="elisc_tm_title w-auto float-left">
              <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                - Projects
              </span>
              <h3 className="text-[40px] font-extrabold">
                Recent completed works
              </h3>
            </div>
            <div className="buttons">
              <a className="prev_button" href="#">
                <img
                  className="svg"
                  src="assets/img/svg/prev.svg"
                  alt="image"
                />
              </a>
              <a className="next_button" href="#">
                <img
                  className="svg"
                  src="assets/img/svg/next.svg"
                  alt="image"
                />
              </a>
            </div>
          </div>
          <div className="portfolio_list w-full float-left mt-[40px] mb-[120px]">
            <Swiper
              {...sliderProps.portfolio}
              className="gallery_zoom mb-[65px]"
            >
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image relative rounded-[4px] overflow-hidden mb-[25px]">
                    <img
                      className="min-w-full relative opacity-0"
                      src="assets/img/thumbs/31-36.jpg"
                      alt="image"
                    />
                    <div
                      className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                      data-img-url="assets/img/portfolio/1.jpg"
                    />
                    <a
                      className="elisc_tm_full_link popup-youtube absolute inset-0 z-[5]"
                      href="https://www.youtube.com/watch?v=7e90gBu4pas"
                    />
                  </div>
                  <div className="details w-full float-left">
                    <span className="category inline-block mb-[7px]">
                      <a
                        className="inline-block uppercase text-[#55527C] font-medium"
                        href="#"
                      >
                        Youtube
                      </a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect popup-youtube font-semibold text-[24px] text-[#130F49]"
                        href="https://www.youtube.com/watch?v=7e90gBu4pas"
                      >
                        New Technology
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image relative rounded-[4px] overflow-hidden mb-[25px]">
                    <img
                      className="min-w-full relative opacity-0"
                      src="assets/img/thumbs/31-36.jpg"
                      alt="image"
                    />
                    <div
                      className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                      data-img-url="assets/img/portfolio/2.jpg"
                    />
                    <a
                      className="elisc_tm_full_link popup-vimeo absolute inset-0 z-[5]"
                      href="https://vimeo.com/337293658"
                    />
                  </div>
                  <div className="details w-full float-left">
                    <span className="category inline-block mb-[7px]">
                      <a href="#">Vimeo</a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect popup-vimeo"
                        href="https://vimeo.com/337293658"
                      >
                        Firogo Majestic Ltd.
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image relative rounded-[4px] overflow-hidden mb-[25px]">
                    <img
                      className="min-w-full relative opacity-0"
                      src="assets/img/thumbs/31-36.jpg"
                      alt="image"
                    />
                    <div
                      className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                      data-img-url="assets/img/portfolio/3.jpg"
                    />
                    <a
                      className="elisc_tm_full_link soundcloude_link mfp-iframe audio absolute inset-0 z-[5]"
                      href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                  </div>
                  <div className="details w-full float-left">
                    <span className="category inline-block mb-[7px]">
                      <a href="#">Soundcloud</a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect soundcloude_link mfp-iframe audio"
                        href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                      >
                        Creative Building
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image relative rounded-[4px] overflow-hidden mb-[25px]">
                    <img
                      className="min-w-full relative opacity-0"
                      src="assets/img/thumbs/31-36.jpg"
                      alt="image"
                    />
                    <div
                      className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                      data-img-url="assets/img/portfolio/4.jpg"
                    />
                    <a
                      className="elisc_tm_full_link portfolio_popup absolute inset-0 z-[5]"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        modalToggle(true);
                        setPortfolioModal(true);
                      }}
                    />
                  </div>
                  <div className="details w-full float-left">
                    <span className="category inline-block mb-[7px]">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          modalToggle(true);
                          setPortfolioModal(true);
                        }}
                      >
                        Modalbox
                      </a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect portfolio_popup"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          modalToggle(true);
                          setPortfolioModal(true);
                        }}
                      >
                        Beautiful Boat
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="elisc_tm_button" data-position="center">
              <a href="#">View all projects</a>
            </div>
          </div>
        </div>
      </div>
      {/* PARTNERS */}
      <Clients />
      {/* /PARTNERS */}
      {/* TESTIMONIALS */}
      <Testimonial />
      {/* /TESTIMONIALS */}
    </SectionContainer>
  );
};
export default Portfolio;
