import TopBar from "../../components/Topbar/Topbar.jsx";
import SideBar from "../../components/SideBar/SideBar.jsx";

function HomePage() {
  return (
    <div className="home">
      <TopBar />
      <SideBar />
      {/* <Timeline />
            <Rightbar /> */}
    </div>
  );
}

export default HomePage;
