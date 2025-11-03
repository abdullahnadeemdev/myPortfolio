import Home from "./navlist/home";
import About from "./navlist/about";
import Contact from "./navlist/contact";
import { Route, Routes } from "react-router";
import AboutMe from "./components/HomeComp/AboutMe";
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
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/:id" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Router;
