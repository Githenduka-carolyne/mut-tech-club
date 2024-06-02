import "./Leaderships.css"
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import drNdia from "../../assets/drNdia.jpeg";
import victory from "../../assets/victory.jpg";
import allan from "../../assets/allan.jpg";
import bridget from "../../assets/bridget.jpeg";
import ruth from "../../assets/ruth.jpg";
import webster from "../../assets/webster.jpeg";
import manase from "../../assets/manase.jpeg";
import me from "../../assets/me.jpg";
import stanley from "../../assets/stanley.jpeg";
import paul from "../../assets/paul.jpeg";
import evyonn from "../../assets/evyonn.jpeg";

const Leaderships = () => {
  return (
    <div className="leader-container">
      <div className="card-wrapper">
        <div className="leader-card-info">
          <div className="leader-photo">
            <img src={drNdia} alt="Dr John Ndia photo" />
          </div>
          <div className="social-platforms">
            <FaLinkedin />
            <FaSquareXTwitter />
            <FaFacebookSquare />
          </div>
          <div className="leaders-detail">
            <h3 className="name">Dr. John Ndia</h3>
            <h3 className="role">Patron</h3>
          </div>
          <div>
            <p className="bio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              odio!. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Neque, odio!. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Neque, odio!.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Neque, odio!
            </p>
          </div>
        </div>

        <div className="leader-card-info-white">
          <div className="leader-photo">
            <img src={victory} alt="Dr John Ndia photo" />
          </div>
          <div className="social-platforms">
            <FaLinkedin />
            <FaInstagramSquare />
            <FaSquareXTwitter />
            <FaFacebookSquare />
          </div>
          <div className="leaders-detail">
            <h3 className="name">Victory Njeri</h3>
            <h3 className="role">Chairperson</h3>
            <p className="bio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              odio!. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Neque, odio!. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Neque, odio!.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Neque, odio!
            </p>
          </div>
        </div>

        <div className="leader-card-info">
          <div className="leader-photo">
            <img src={allan} alt="Dr John Ndia photo" />
          </div>
          <div className="social-platforms">
            <FaLinkedin />
            <FaSquareXTwitter />
          </div>
          <div className="leaders-detail">
            <h3 className="name">Allan Muhari </h3>
            <h3 className="role">Vice Chairperson</h3>
            <p className="bio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              odio!. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Neque, odio!. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Neque, odio!.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Neque, odio!
            </p>
          </div>
        </div>

        <div className="leader-card-info-white">
          <div className="leader-photo">
            <img src={bridget} alt="Dr John Ndia photo" />
          </div>
          <div className="social-platforms">
            <FaLinkedin />
            <FaSquareXTwitter />
          </div>
          <div className="leaders-detail">
            <h3 className="name">Bridget Gitonga</h3>
            <h3 className="role"> Secretary</h3>
            <p className="bio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              odio!. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Neque, odio!. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Neque, odio!.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Neque, odio!
            </p>
          </div>
        </div>

        <div className="leader-card-info">
          <div className="leader-photo">
            <img src={ruth} alt="Dr John Ndia photo" />
          </div>
          <div className="social-platforms">
            <FaLinkedin />
            <FaInstagramSquare />
          </div>
          <div className="leaders-detail">
            <h3 className="name">Ruth Mutisya</h3>
            <h3 className="role">Treasurer </h3>
            <p className="bio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              odio!. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Neque, odio!. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Neque, odio!.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Neque, odio!
            </p>
          </div>
        </div>

        <div className="leader-card-info-white">
          <div className="leader-photo">
            <img src={webster} alt="Dr John Ndia photo" />
          </div>
          <div className="social-platforms">
            <FaLinkedin />
            <FaInstagramSquare />
            <FaSquareXTwitter />
            <FaFacebookSquare />
          </div>
          <div className="leaders-detail">
            <h3 className="name">Webster Ifedha </h3>
            <h3 className="role">Cyber Security Lead</h3>
            <p className="bio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              odio!. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Neque, odio!. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Neque, odio!.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Neque, odio!
            </p>
          </div>
        </div>

        <div className="leader-card-info">
          <div className="leader-photo">
            <img src={manase} alt="Dr John Ndia photo" />
          </div>
          <div className="social-platforms">
            <FaLinkedin />
            <FaInstagramSquare />
            <FaSquareXTwitter />
            <FaFacebookSquare />
          </div>
          <div className="leaders-detail">
            <h3 className="name">Manase Gunga</h3>
            <h3 className="role">UI/UX Lead</h3>
            <p className="bio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              odio!. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Neque, odio!. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Neque, odio!.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Neque, odio!
            </p>
          </div>
        </div>

        <div className="leader-card-info-white">
          <div className="leader-photo">
            <img src={me} alt="Dr John Ndia photo" />
          </div>
          <div className="social-platforms">
            <FaLinkedin />
            <FaInstagramSquare />
            <FaSquareXTwitter />
            <FaFacebookSquare />
          </div>
          <div className="leaders-detail">
            <h3 className="name">Carolyne Githenduka </h3>
            <h3 className="role">Web Development Lead</h3>
            <p className="bio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              odio!. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Neque, odio!. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Neque, odio!.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Neque, odio!
            </p>
          </div>
        </div>

        <div className="leader-card-info">
          <div className="leader-photo">
            <img src={stanley} alt="Dr John Ndia photo" />
          </div>
          <div className="social-platforms">
            <FaLinkedin />
            <FaInstagramSquare />
            <FaSquareXTwitter />
            <FaFacebookSquare />
          </div>
          <div className="leaders-detail">
            <h3 className="name">Stanley Amunze</h3>
            <h3 className="role"> Mobile Apps Development Lead</h3>
            <p className="bio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              odio!. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Neque, odio!. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Neque, odio!.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Neque, odio!
            </p>
          </div>
        </div>

        <div className="leader-card-info">
          <div className="leader-photo">
            <img src={paul} alt="Dr John Ndia photo" />
          </div>
          <div className="social-platforms">
            <FaLinkedin />
            <FaInstagramSquare />
            <FaSquareXTwitter />
            <FaFacebookSquare />
          </div>
          <div className="leaders-detail">
            <h3 className="name">Paul Karanja</h3>
            <h3 className="role">Cloud Engineering Lead</h3>
            <p className="bio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              odio!. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Neque, odio!. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Neque, odio!.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Neque, odio!
            </p>
          </div>
        </div>

        <div className="leader-card-info">
          <div className="leader-photo">
            <img src={evyonn} alt="Dr John Ndia photo" />
          </div>
          <div className="social-platforms">
            <FaLinkedin />
            <FaInstagramSquare />
            <FaSquareXTwitter />
            <FaFacebookSquare />
          </div>
          <div className="leaders-detail">
            <h3 className="name">Evyonn Mbithe</h3>
            <h3 className="role">Power Platform Lead.</h3>
            <p className="bio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              odio!. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Neque, odio!. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Neque, odio!.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Neque, odio!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Leaderships;



