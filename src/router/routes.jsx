import Home from "../pages/Home";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
import { Route, Routes } from "react-router-dom";
// import AboutMe from "../components/HomeComp/AboutMe";
// import { Card } from "./components/card";
// import CondRendder from "./components/condRendder";
// import Counter from "./components/counter";
// import EventHandling from "./components/eventHandle";
// import Form from "./components/form";
// import Gallery from "./components/gallery";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/aboutMe" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
};

export default Router;
