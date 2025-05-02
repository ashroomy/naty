import { useEffect } from "react";
import { eliscUtilits } from "../utilits";

const PreLoader = () => {
  useEffect(() => {
    eliscUtilits.preloader();
  }, []);
  return (
    <div id="preloader">
      <div className="loader_line" />
    </div>
  );
};
export default PreLoader;
