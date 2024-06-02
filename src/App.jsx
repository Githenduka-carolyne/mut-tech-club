import "./assets/global.css";
import "./component/Header/header.css";
import Header from "./component/Header/header.jsx";
import Home from "./Pages/Home/home.jsx"
import Leadership from "./Pages/Leadership/leadership.jsx"
import Tracks from "./Pages/Tracks/tracks.jsx";
import Events from "./Pages/Events/events.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./component/Header/footer/Footerpath.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
