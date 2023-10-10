import Button from "../button/button";

import logo from "../../assets/images/logo.png";
import "./sidebar.scss";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container">
        <div className="logo">
          <img src={logo} alt="Full Stack" />
        </div>
        <Button>Sair</Button>
      </div>
    </>
  );
};

export default Sidebar;
