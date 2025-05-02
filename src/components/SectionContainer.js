import { useContext } from "react";
import { context } from "../context";

const SectionContainer = ({ name, children }) => {
  const { nav, animation } = useContext(context);
  return (
    <div
      id={name}
      className={`elisc_tm_section ${
        name == nav ? `animated active ${animation}` : ""
      }`}
    >
      {children}
    </div>
  );
};
export default SectionContainer;
