import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

import "./MainLayout.css";

function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Sidebar />

      <div className="main-content">
        <TopBar title="Explore Placement Jobs" />

        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;