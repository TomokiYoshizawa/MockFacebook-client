import TopBar from "../../components/Topbar/Topbar.jsx";
import SideBar from "../../components/SideBar/SideBar.jsx";
import Timeline from "../../components/Timeline/Timeline.jsx";
import RightBar from "../../components/RightBar/RightBar.jsx";
import "./HomePage.scss";
function HomePage() {
  return (
    <div className="home">
      <TopBar />
      <div className="home__container">
        <SideBar />
        {/* <Timeline />
        <RightBar /> */}
      </div>
    </div>
  );
}

export default HomePage;
