import { IoStarSharp } from "react-icons/io5";
import allan from "../../assets/allan.jpg";
import manase from "../../assets/manase.jpeg";
import miriam from "../../assets/miriam.jpeg";
const TestimonialPart = () => {
  return (
    <section className="testmonies-section">
      <div className="testimonial">
        <h2 className="testimonial-title">Testimonials</h2>
        <p className="testimonial-description">
          Our current members and alumni share their personal stories,
          reflecting on how the tech club has enriched their personal and
          professional journeys respectively.
        </p>
      </div>

      <div className="testimonial-container">
        <div className="testimonial-card">
          <div class="testimonial-details">
            <img src={allan}></img>
          </div>
          <div className="persona-info">
            <p class="title">John Doe</p>
            <p class="role">Web Developer</p>
          </div>
          <div className="testimonie">
            <p>
              <i>
                "Being a part of the web Development track,I gained practical
                skills through capture-the-flag competitions and workshops led
                by industry experts.The experience not only enhanced my resume
                but also gave me confidence in pursuing a career in Web
                Development."
              </i>
            </p>
            <div className="stars">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div class="testimonial-details">
            <img src={miriam}></img>
          </div>
          <div className="persona-info">
            <p class="title">Miriam Mugure</p>
            <p class="role">Cyber Security(alumni)</p>
          </div>
          <div className="testimonie">
            <p>
              <i>
                "Being a part of the MUT Tech club under track Cybersecurity
                Club, I gained practical skills through capture-the-flag
                competitions and workshops led by industry experts. The
                experience not only enhanced my resume but also gave me
                confidence in pursuing a career in cybersecurity."
              </i>
            </p>
            <div className="stars">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div class="testimonial-details">
            <img src={manase}></img>
          </div>
          <div className="persona-info">
            <p class="title">Francis Kimani</p>
            <p class="role">Mobile Developer</p>
          </div>
          <div className="testimonie">
            <p>
              <i>
                "Being a part of the Mobile Development track, I gained
                practical skills through capture-the-flag competitions and
                workshops led by industry experts. The experience not only
                enhanced my resume but also gave me confidence in pursuing a
                career in Mobile Development."
              </i>
            </p>
            <div className="stars">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TestimonialPart;
