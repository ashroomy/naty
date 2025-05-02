import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";

const Testimonial = () => {
  return (
    <div className="elisc_tm_testimonial_wrapper w-full float-left mb-[120px]">
      <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
        <div className="elisc_tm_testimonials w-full float-left bg-[#FFF5F6] pt-[100px] pr-[150px] pb-[105px] pl-[100px] small:px-[40px]">
          <div className="elisc_tm_title w-full float-left text-center">
            <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
              - Testimonial
            </span>
            <h3 className="text-[40px] font-extrabold">What client's say?</h3>
          </div>
          <div className="testimonials_list w-full float-left text-center mt-[43px]">
            <Swiper
              {...sliderProps.testimonial}
              className="owl-carousel owl-theme"
            >
              <SwiperSlide>
                <div className="text mb-[33px]">
                  <p className="text-[24px] leading-[40px] font-inter">
                    I rarely like to write reviews, but the Marketify team truly
                    deserve a standing ovation for their customer support,
                    customisation and most importantly, friendliness and
                    professionalism.
                  </p>
                </div>
                <div className="short w-auto flex items-center justify-center mb-[5px]">
                  <div className="image relative w-[60px] h-[60px] rounded-full">
                    <div
                      className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                      data-img-url="assets/img/testimonials/1.jpg"
                    />
                  </div>
                  <div className="detail text-left pl-[18px]">
                    <h3 className="text-[30px] font-medium">John Doe</h3>
                  </div>
                </div>
                <p className="job text-center">
                  User Interface Design at PCL Lab
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text mb-[33px]">
                  <p className="text-[24px] leading-[40px] font-inter">
                    Really the Code Quality, Customer Support, and design are
                    awesome and its good support they are giving. They give an
                    instant solution to our needs. Really awesome. I will
                    strongly recommend to my friends.
                  </p>
                </div>
                <div className="short w-auto flex items-center justify-center mb-[5px]">
                  <div className="image relative w-[60px] h-[60px] rounded-full">
                    <div
                      className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                      data-img-url="assets/img/testimonials/2.jpg"
                    />
                  </div>
                  <div className="detail text-left pl-[18px]">
                    <h3 className="text-[30px] font-medium">Keita Smith</h3>
                  </div>
                </div>
                <p className="job text-center">Senior Designer at Behance</p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text mb-[33px]">
                  <p className="text-[24px] leading-[40px] font-inter">
                    Loved the template design, documentation, customizability
                    and the customer support from Marketify team! I am a noob in
                    programming but the Marketify team helped me successfully.
                  </p>
                </div>
                <div className="short w-auto flex items-center justify-center mb-[5px]">
                  <div className="image relative w-[60px] h-[60px] rounded-full">
                    <div
                      className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                      data-img-url="assets/img/testimonials/3.jpg"
                    />
                  </div>
                  <div className="detail text-left pl-[18px]">
                    <h3 className="text-[30px] font-medium">Alan Walker</h3>
                  </div>
                </div>
                <p className="job text-center">Sales Manager at Vivaco Shop</p>
              </SwiperSlide>{" "}
              <div className="owl-dots"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
