import { context } from "@/src/context";
import useClickOutside from "@/src/useClickOutside";
import { useContext } from "react";
const ModalContainer = ({ children, nullValue }) => {
  const { modalToggle } = useContext(context);
  let domNode = useClickOutside(() => {
    modalToggle(false);
    nullValue(null);
  });
  return (
    <div className="elisc_tm_modalbox opened">
      <div className="box_inner" ref={domNode}>
        <div className="close">
          <a
            href="#"
            onClick={() => {
              modalToggle(false);
              nullValue(null);
            }}
          >
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">{children}</div>
      </div>
    </div>
  );
};
export default ModalContainer;
