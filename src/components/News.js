import { useContext } from "react";
import { context } from "../context";
import SectionContainer from "./SectionContainer";

const blogsData = [
  {
    id: 1,
    title: "12 unique examples of portfolio websites",
    date: "April 12, 2023",
    img: "assets/img/news/1.jpg",
  },
  {
    id: 2,
    title: "Dealing with spring allergy symptoms",
    date: "April 01, 2023",
    img: "assets/img/news/2.jpg",
  },
  {
    id: 3,
    title: "Why we should read fewer books",
    date: "March 30, 2023",
    img: "assets/img/news/3.jpg",
  },
  {
    id: 4,
    title: "How to use python for web scraping",
    date: "Feb 20, 2023",
    img: "assets/img/news/4.jpg",
  },
  {
    id: 5,
    title: "Skills and tools for efficient web design",
    date: "March 15, 2023",
    img: "assets/img/news/5.jpg",
  },
  {
    id: 6,
    title: "Best wireframe tools for web designers",
    date: "Feb 11, 2023",
    img: "assets/img/news/6.jpg",
  },
  {
    id: 7,
    title: "Why we’re crazy about animations",
    date: "Jan 31, 2023",
    img: "assets/img/news/7.jpg",
  },
];

const News = () => {
  const { modalToggle, setBlogModal, navChange } = useContext(context);
  return (
    <SectionContainer name="blogs">
      <div className="elisc_tm_news fn_w_sminiboxes w-full float-left py-[120px] px-0">
        <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
          <div className="wrapper w-full flex justify-between">
            <div className="left fn_w_sminibox w-1/3 pr-[50px]">
              <div className="elisc_tm_sticky_section">
                <div className="elisc_tm_title w-full float-left">
                  <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                    - Blog
                  </span>
                  <h3 className="text-[40px] font-extrabold">
                    My blog &amp; news
                  </h3>
                </div>
                <div className="elisc_tm_button transition_link mt-[45px]">
                  <a href="#contact" onClick={() => navChange("contact")}>
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
            <div className="right fn_w_sminibox w-[66.6666%] pl-[50px]">
              <div className="elisc_tm_sticky_section">
                <div className="list w-full float-left relative">
                  <ul>
                    {blogsData.map((blog) => (
                      <li
                        className="mb-[40px] w-full float-left"
                        data-img={blog.img}
                        key={blog.id}
                      >
                        <img
                          className="popup_image"
                          src={blog.img}
                          alt="Blog Image"
                        />
                        <div className="list_inner w-full float-left relative flex items-center justify-between">
                          <div className="info w-1/2">
                            <div className="meta w-full float-left flex items-center mb-[12px]">
                              <img
                                className="svg w-[18px] h-[18px]"
                                src="assets/img/svg/calendar.svg"
                                alt="image"
                              />{" "}
                              <span className="font-medium pl-[8px]">
                                April 12, 2023
                              </span>
                            </div>
                            <div className="title w-full float-left">
                              <h3 className="text-[#130F49] text-[28px] font-semibold leading-[36px]">
                                <a
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    modalToggle(true);
                                    setBlogModal(blog);
                                  }}
                                >
                                  {blog.title}
                                </a>
                              </h3>
                            </div>
                          </div>
                          <div className="elisc_tm_read_more w-auto">
                            <a
                              className="line_effect"
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                modalToggle(true);
                                setBlogModal(blog);
                              }}
                            >
                              Learn More
                              <span className="inline-block">
                                <img
                                  className="svg"
                                  src="assets/img/svg/rightArrow.svg"
                                  alt="image"
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default News;
