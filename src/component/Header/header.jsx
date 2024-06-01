import { Link } from "react-router-dom";

const header = () =>{
    return (
      <header className="header">
        <div className="logo">
          <img src="./src/assets/mut-logo-.png"></img>
        </div>
        <nav className="navigation">
          <div className="navigation-side">
            <ol className="navigation-list">
              <li className="navigation-list-item">
                <Link to="">Home</Link>
              </li>
              <li className="navigation-list-item">
                <Link to="/Leadership">Leadership</Link>
              </li>
              <li className="navigation-list-item">
                <Link to="/Tracks">Tracks</Link>
              </li>
              <li className="navigation-list-item">
                <Link to="/Events">Events</Link>
              </li>
            </ol>
          </div>
          <button className="header-button">Get Started</button>
        </nav>
      </header>
    );
}
export default header