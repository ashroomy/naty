import { context } from "@/src/context";
import { useContext } from "react";
import ModalContainer from "./ModalContainer";
const BlogPopup = () => {
  const { setBlogModal, blogModal } = useContext(context);
  return (
    <ModalContainer nullValue={setBlogModal}>
      <div className="news_popup_informations">
        <div className="image">
          <img src="assets/img/thumbs/4-2.jpg" alt="image" />
          <div
            className="main"
            data-img-url="assets/img/news/1.jpg"
            style={{ backgroundImage: `url(${blogModal.img})` }}
          />
        </div>
        <div className="details">
          <div className="meta">
            <img
              className="svg w-[18px] h-[18px]"
              src="assets/img/svg/calendar.svg"
              alt="image"
            />{" "}
            <span className="font-medium pl-[8px]">{blogModal.date}</span>
          </div>
          <div className="title">
            <h3>{blogModal.title}</h3>
          </div>
        </div>
        <div className="text">
          <p>
            Elisc is a leading web design agency with an award-winning design
            team that creates innovative, effective websites that capture your
            brand, improve your conversion rates, and maximize your revenue to
            help grow your business and achieve your goals.
          </p>
          <p>
            In today’s digital world, your website is the first interaction
            consumers have with your business. That's why almost 95 percent of a
            user’s first impression relates to web design. It’s also why web
            design services can have an immense impact on your company’s bottom
            line.
          </p>
          <p>
            That’s why more companies are not only reevaluating their website’s
            design but also partnering with Kura, the web design agency that’s
            driven more than $2.4 billion in revenue for its clients. With over
            50 web design awards under our belt, we're confident we can design a
            custom website that drives sales for your unique business.
          </p>
        </div>
      </div>
    </ModalContainer>
  );
};
export default BlogPopup;
