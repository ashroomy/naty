import About from "@/src/components/About";
import Contact from "@/src/components/Contact";
import Home from "@/src/components/Home";

import Testimonial from "@/src/components/Testimonial";

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
      <Testimonial />

      <Contact />
    </Layout>
  );
};
export default IndexOnePage;
