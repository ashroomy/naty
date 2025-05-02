import About from "@/src/components/About";
import Contact from "@/src/components/Contact";
import Home from "@/src/components/Home";
import News from "@/src/components/News";
import Portfolio from "@/src/components/Portfolio";
import Services from "@/src/components/Services";
import { context } from "@/src/context";
import Layout from "@/src/layout/Layout";
import { useContext, useEffect } from "react";
const IndexOnePage = () => {
  const { animationChnage } = useContext(context);
  useEffect(() => {
    animationChnage(null);
  }, []);
  return (
    <Layout>
      
      <Home />
      <About />
      <Services />
      {/* <Portfolio /> */}

      <Contact />
    </Layout>
  );
};
export default IndexOnePage;
