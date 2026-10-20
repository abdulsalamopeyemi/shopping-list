import "./shopping-list.scss";
import Header from "./Header";
import Aside from "./Aside";
import Main from "./Main";

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <div className="dashboard-layout">
        <Main />
        <Aside />
      </div>
    </div>
  );
}
