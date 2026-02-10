import { useParams } from "react-router";
import { sideMenuList } from "../components/componentsMain/sideBar";
import Intro from "../HomeComp/intro";
import Services from "../HomeComp/services";
import AboutMe from "../HomeComp/AboutMe";
import Tools from "../HomeComp/tools";
import Portfolio from "../HomeComp/myPort";

const Home = () => {
  const { id: params } = useParams();
  const isRouteMatch = () => sideMenuList?.filter((ele) => ele.url === params);

  const comp = isRouteMatch()[0];
  if (comp) {
    return comp.component;
  } else {
    <Home />;
  }
  return (
    <div className="h-main w-full font-serif">
      <Intro />
      <Services />
      <AboutMe />
      <Tools />
      <Portfolio />
    </div>
  );
};
export default Home;
