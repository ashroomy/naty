import { context } from "@/src/context";
import { useContext } from "react";
import ModalContainer from "./ModalContainer";
const PortfolioPopup = () => {
  const { setexperienceModal } = useContext(context);
  return (
    <ModalContainer nullValue={setexperienceModal}>
      <div className="popup_details">
        <div className="top_image">
          <img src="assets/img/thumbs/4-2.jpg" alt="image" />
          <div
            className="main"
            data-img-url="assets/img/portfolio/4.jpg"
            style={{ backgroundImage: 'url("assets/img/portfolio/4.jpg")' }}
          />
        </div>
        <div className="portfolio_main_title">
          <span className="category">
            <a href="#">Modalbox</a>
          </span>
          <h3 className="title">Beautiful Boat</h3>
        </div>
        <div className="main_details">
          <div className="textbox">
            <p>
              We live in a world where we need to move quickly and iterate on
              our ideas as flexibly as possible. Building mockups strikes the
              ideal balance ease of modification. Building mockups strikes the
              ideal balance ease of modification.
            </p>
            <p>
              Mockups are useful both for the creative phase of the project -
              for instance when you're trying to figure out your user flows or
              the proper visual hierarchy - and the production phase when they
              phase when they will represent the target product. Building
              mockups strikes the ideal balance ease of modification.
            </p>
          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">Client</span>
                <span>Alvaro Morata</span>
              </li>
              <li>
                <span className="first">Category</span>
                <span>
                  <a href="#">Modalbox</a>
                </span>
              </li>
              <li>
                <span className="first">Date</span>
                <span>April 10, 2023</span>
              </li>
              <li>
                <span className="first">Share</span>
                <ul className="share">
                  <li>
                    <a href="#">
                      <img
                        className="svg"
                        src="assets/img/svg/social/facebook.svg"
                        alt="image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="svg"
                        src="assets/img/svg/social/twitter.svg"
                        alt="image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="svg"
                        src="assets/img/svg/social/instagram.svg"
                        alt="image"
                      />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="additional_images">
          <ul>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                  <div
                    className="main"
                    data-img-url="assets/img/portfolio/5.jpg"
                    style={{
                      backgroundImage: 'url("assets/img/portfolio/5.jpg")',
                    }}
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                  <div
                    className="main"
                    data-img-url="assets/img/portfolio/6.jpg"
                    style={{
                      backgroundImage: 'url("assets/img/portfolio/6.jpg")',
                    }}
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                  <div
                    className="main"
                    data-img-url="assets/img/portfolio/7.jpg"
                    style={{
                      backgroundImage: 'url("assets/img/portfolio/7.jpg")',
                    }}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </ModalContainer>
  );
};
export default PortfolioPopup;
