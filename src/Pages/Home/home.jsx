import HeroPart from "./HeroPart";
import AboutPart from "./AboutPart";
import TestimonialPart from "./TestimonialPart";
import "./testimonial.css"
import "./HeroPart.css";
import "./about.css";
const home = () => {
  return (
    <section className="home">
      <HeroPart />
      <AboutPart />
      <TestimonialPart />
      <about />
    </section>
  );
};
export default home;
