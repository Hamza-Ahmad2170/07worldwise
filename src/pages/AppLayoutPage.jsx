import Map from "../Components/Map";
import Sidebar from "../Components/Sidebar";
import User from "../Components/User";

import styles from "./assets/css/AppLayoutPage.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
