import { useParams } from "react-router";
import { sideMenuList } from "../../components/ComponentsMain/SideBar";
import Intro from "../../components/HomeComp/intro";
import Services from "../../components/HomeComp/services";
import AboutMe from "../../components/HomeComp/AboutMe";
import Tools from "../../components/HomeComp/tools";
import Portfolio from "../../components/HomeComp/myPort";

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
