import Tasks from "./components/Tasks/Tasks";
import Sidebar from "./components/Sidebar/sidebar";

import "./App.scss";
const App = () => {
  return (
    <>
      <div className="app-container">
        <Sidebar />
        <Tasks />
      </div>
    </>
  );
};

export default App;
